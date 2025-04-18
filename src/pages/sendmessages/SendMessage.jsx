import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  Button,
  TextField,
  Input,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sendmessage.css";
import axios from "axios";

const MULTITEXT_EMAIL = "yemijoshua81@gmail.com";
const MULTITEXT_PASSWORD = "KaXEJg5bgSue$bJ";
const MULTITEXT_API_BASE = "https://app.multitexter.com/v2/app/sms";

export default function SendMessage() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [balance, setBalance] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewMessage, setPreviewMessage] = useState("");
  const [messageTemplate, setMessageTemplate] = useState(
    // "Dear {Name}, your Access Bank Acct no {Account Number} has loan outstanding balance of ₦{OUTSTANDING BALANCE}. Please settle on or before Tuesday 22/04/2025 to avoid further recovery actions which might include the application of GSI on all your other banks accounts. For more information, contact recovery agent Bukola on 09122388447",
    // "Testing message sending",
    // "Dear {Name}, Your Access Bank Acct: {Account Number} has ₦{OUTSTANDING BALANCE} outstanding. Kindly pay on or before 22/04/2025 to avoid recovery actions. Contact Bukola 09122388447.",
    "{Name}, your Access Bank acct {Account Number} owes ₦{OUTSTANDING BALANCE}. Pay by 24/04/25 to avoid auto debit. Call Bukola 09122388447 now."
  );
  const [startRow, setStartRow] = useState(1);
  const [endRow, setEndRow] = useState(100);

  useEffect(() => {
    fetchBalance();
  }, []);

  const calculatePages = (message) => {
    const messageLength = message.length;
    const pages = Math.ceil(messageLength / 160); // Divide by 160 and round up
    console.log(`Message Length: ${messageLength}, Pages: ${pages}`);
    return pages;
  };

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `https://app.multitexter.com/v2/app/getbalance`,
        {
          params: { email: MULTITEXT_EMAIL, password: MULTITEXT_PASSWORD },
        }
      );
      // console.log("Balance Response:", response.data);
      if (response.data.status === 1) {
        toast.success("Balance fetched successfully");
        setBalance(response.data.amount);
      } else {
        toast.error(`Error fetching balance - ${response.data.msg}`);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      toast.error("Error fetching balance");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setLoading(true);

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      let headers = parsedData[0] || [];
      headers = headers.map((header) => header.trim()); // Trim all headers

      const slicedData = parsedData.slice(startRow, endRow + 1).map((row) => {
        let obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index] || "";
        });
        return obj;
      });

      setData(slicedData);
      setLoading(false);
      toast.success("File uploaded successfully");
    };

    reader.readAsBinaryString(file);
  };

  const handleRowSelection = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    // Update the preview message with the first selected row
    if (data[index]) {
      setPreviewMessage(formatMessage(data[index]));

      const pages = calculatePages(formatMessage);
      console.log(`This message will take ${pages} page(s).`);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(
        data.map((_, index) => {
          if (data[index]) {
            setPreviewMessage(formatMessage(data[0]));
          }
          return index;
        })
      );
    }
    setSelectAll(!selectAll);
  };

  const formatMessage = (row) => {
    return messageTemplate.replace(/\{(.*?)\}/g, (_, key) => {
      let cleanKey = key.trim();
      let matchingKey = Object.keys(row).find(
        (k) => k.trim().toLowerCase() === cleanKey.toLowerCase()
      );
      let value = cleanKey ? row[cleanKey] : "";

      if (cleanKey.toLowerCase() === "name") {
        return value ? value.toString().split(" ")[0] : "";
      }

      if (cleanKey.toLowerCase() === "outstanding balance") {
        return value ? `${Number(value).toLocaleString()}` : "₦0.00";
      }
      console.log(String(value).length);
      return value !== undefined ? String(value) : "";
    });
  };

  const handleSendSMS = async () => {
    if (selectedRows.length === 0) {
      toast.warn("No recipients selected");
      return;
    }

    setLoading(true);
    selectedRows.forEach(async (index) => {
      const row = data[index];
      // console.log(
      //   `Sending SMS to ${row["Mobile Number"]}: ${formatMessage(row)}`
      // );
      setLoading(true);
      try {
        const response = await axios.post(`${MULTITEXT_API_BASE}`, {
          email: MULTITEXT_EMAIL,
          password: MULTITEXT_PASSWORD,
          message: formatMessage(row),
          recipients: row["Mobile Number"],
          sender_name: "ReMiNDERz",
        });
        console.log("SMS Response:", response.data);
        if (response.data.status === 1) {
          toast.success(`SMS sent to ${row["Mobile Number"]}`);
        } else {
          toast.error(
            `Failed to send SMS to ${row["Mobile Number"]} - ${response.data.msg}`
          );
        }
      } catch (error) {
        console.error("Error sending SMS:", error);
        toast.error(`Failed to send SMS to ${row["Mobile Number"]}`);
      }
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <Paper className="balance-card">
        <Typography variant="h6">
          Balance: {balance || "Loading..."} units
        </Typography>
        <Button onClick={fetchBalance} className="refresh-button">
          Refresh Balance
        </Button>
      </Paper>
      <br />
      <br />

      <h1 className="title">Upload Excel & Send SMS</h1>

      <div className="row-inputs">
        <div className="input-group">
          <label className="input-label">Start Row</label>
          <input
            type="number"
            min="1"
            value={startRow}
            onChange={(e) => setStartRow(Number(e.target.value))}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label className="input-label">End Row</label>
          <input
            type="number"
            min={startRow}
            value={endRow}
            onChange={(e) => setEndRow(Number(e.target.value))}
            className="input-field"
          />
        </div>
      </div>

      <div className="file-upload">
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        {loading && <CircularProgress size={24} className="loading-spinner" />}
      </div>

      {/* <div className="message-container">
        <h2 className="message-title">Message Template</h2>
        <TextField
          value={messageTemplate}
          onChange={(e) => setMessageTemplate(e.target.value)}
          className="message-input"
        />
        <div className="send-button-container">
          <Button onClick={handleSendSMS} className="send-button">
            Send SMS
          </Button>
        </div>
      </div> */}

      <div className="message-container">
        <h2 className="message-title">Message Template</h2>
        <TextField
          value={messageTemplate}
          multiline
          rows={3}
          fullWidth
          onChange={(e) => setMessageTemplate(e.target.value)}
          className="message-input"
        />

        <br />
        <br />

        {/* Message Preview Section */}
        {previewMessage && (
          <div className="preview-container">
            <h3>Preview Message</h3>
            <p className="preview-message">{previewMessage}</p>
            <p className="message-length">
              This message will take {calculatePages(previewMessage)} page(s).
            </p>
          </div>
        )}

        <div className="send-button-container">
          <Button onClick={handleSendSMS} className="send-button">
            Send SMS
          </Button>
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="checkbox-cell">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleRowSelection(index)}
                  />
                </td>
                {Object.values(row).map((val, i) => (
                  <td key={i}>
                    <Input value={val} readOnly />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
