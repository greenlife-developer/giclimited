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
// import { toast, ToastContainer } from "react-toastify";
import { toast } from "sonner";
import "react-toastify/dist/ReactToastify.css";
import "./sendmessage.css";
import axios from "axios";
import { getSmsBalance, sendBulkSMS } from "../../services/smsService";



export default function SendMessage() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [balance, setBalance] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewMessage, setPreviewMessage] = useState("");
  const [messageTemplate, setMessageTemplate] = useState(
    "{CUSTOMER_NAME}, your Access Bank Acct {SETTLEMENT_ACCOUNT} owes ₦{UNPAID}. Pay by 15/10/2025 to avoid BVN SWIPE,GSI and other strict recovery actions. Call Bukola:09122448685"
  );
  // "Dear {CUSTOMER_NAME}, your Access Bank Acct {SETTLEMENT_ACCOUNT} owes ₦{UNPAID}. Pay latest by 15/10/2025 to avoid BVN SWIPE,GSI and other strict recovery actions. Contact Bukola:09122448685"
  const [startRow, setStartRow] = useState(1);
  const [endRow, setEndRow] = useState(100);

  const REQUIRED_FIELDS = [
    "CUSTOMER_NAME",
    "SETTLEMENT_ACCOUNT",
    "UNPAID",
    "PHONE_NUMBER",
  ];

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
      const data = await getSmsBalance();

      if (data.status === 1) {
        toast.success("Balance fetched successfully");
        setBalance(data.amount);
      } else {
        toast.error(`Error fetching balance - ${data.msg}`);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      toast.error("Error fetching balance");
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[1]];

      const rawJson = XLSX.utils.sheet_to_json(sheet);

      console.log("Raw JSON Data:", rawJson);

      const cleanedData = rawJson.map((row) => {
        let obj = {};
        REQUIRED_FIELDS.forEach((field) => {
          const matchingKey = Object.keys(row).find(
            (k) => k.trim().toLowerCase() === field.toLowerCase()
          );
          obj[field] = matchingKey ? row[matchingKey] : "";
        });
        return obj;
      });

      setData(cleanedData.slice(startRow - 1, endRow)); // Apply row slicing
      toast.success("File uploaded successfully");
    } catch (err) {
      console.error("File parsing error:", err);
      toast.error("Error reading file");
    } finally {
      setLoading(false);
    }
  };

  // const handleRowSelection = (index) => {
  //   setSelectedRows((prev) =>
  //     prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  //   );

  //   // Update the preview message with the first selected row
  //   if (data[index]) {
  //     const msg = formatMessage(data[index]);
  //     setPreviewMessage(msg);

  //     const pages = calculatePages(msg); // Pass the actual string, not function
  //     console.log(`This message will take ${pages} page(s).`);
  //   }
  // };

  const handleRowSelection = (index) => {
    const row = data[index];

    setSelectedRows((prev) => {
      const exists = prev.find((r) => r === row);
      return exists ? prev.filter((r) => r !== row) : [...prev, row];
    });

    // Update preview message with the first selected row
    if (row) {
      const msg = formatMessage(row);
      setPreviewMessage(msg);

      const pages = calculatePages(msg);
      console.log(`This message will take ${pages} page(s).`);
    }
  };

  // const handleSelectAll = () => {
  //   if (selectAll) {
  //     setSelectedRows([]);
  //   } else {
  //     setSelectedRows(
  //       data.map((_, index) => {
  //         if (data[index]) {
  //           setPreviewMessage(formatMessage(data[0]));
  //         }
  //         return index;
  //       })
  //     );
  //   }
  //   setSelectAll(!selectAll);
  // };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data); // directly store all row objects
      if (data[0]) {
        setPreviewMessage(formatMessage(data[0]));
      }
    }
    console.log("Selected Rows after Select All: ", selectedRows);
    setSelectAll(!selectAll);
  };

  const formatMessage = (row) => {
    return messageTemplate.replace(/\{(.*?)\}/g, (_, key) => {
      let cleanKey = key.trim();
      let matchingKey = Object.keys(row).find(
        (k) => k.trim().toLowerCase() === cleanKey.toLowerCase()
      );
      let value = cleanKey ? row[cleanKey] : "";

      if (cleanKey.toLowerCase() === "customer_name") {
        return value ? value.toString().split(" ")[0] : "";
      }

      if (cleanKey.toLowerCase() === "outstanding balance") {
        return value ? `${Number(value).toLocaleString()}` : "₦0.00";
      }

      if (cleanKey.toLowerCase() === "unpaid") {
        return value ? `${Number(value).toFixed(2)}` : "₦0.00";
      }
      console.log(String(value).length);
      return value !== undefined ? String(value) : "";
    });
  };

  const handleSendSMS = async () => {
    if (selectedRows.length === 0) {
      toast("No recipients selected");
      return;
    }

    console.log("Selected Rows: ", selectedRows);

    if (loading === true) {
      toast.error("Application in a loading state");
      return;
    }

    setLoading(true);

    // Build payload for backend
    // const rowsToSend = selectedRows.map((index) => ({
    //   message: formatMessage(data[index]),
    //   recipient: data[index]["PHONE_NUMBER"],
    // }));

    // const rowsToSend = selectedRows.map((index) => data[index]);

    try {
      const data = await sendBulkSMS({
        rows: selectedRows,
        template: messageTemplate,
      });

      if (data.success) {
        data.results.forEach((r) => {
          if (r.status === 1) {
            toast.success(`SMS sent to ${r.recipient}`);
          } else {
            toast.error(`Failed to send SMS to ${r.recipient} - ${r.msg}`);
          }
        });
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
      toast.error("Bulk SMS send failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* <ToastContainer /> */}
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
