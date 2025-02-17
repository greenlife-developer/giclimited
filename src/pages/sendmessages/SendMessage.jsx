import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Button, TextField, Input, CircularProgress } from "@mui/material";
import "./sendmessage.css";

export default function SendMessage() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(false)
  const [previewMessage, setPreviewMessage] = useState("");
  const [messageTemplate, setMessageTemplate] = useState(
    "Dear {Name}, your Access Bank Acct no {Account Number} has loan outstanding balance of ₦{Outstanding Balance} Please settle immediately to avoid further actions. For more information, contact recovery agent {DCA} on {Mobile Number}."
  );
  const [startRow, setStartRow] = useState(1);
  const [endRow, setEndRow] = useState(100);

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
    }
  };
  
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => {
        if (data[index]) {
          setPreviewMessage(formatMessage(data[0]));
        }
        return index
      }));
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

      if (cleanKey.toLowerCase() === "outstanding balance") {
        return value ? `${Number(value).toLocaleString()}` : "₦0.00";
      }
      return value !== undefined ? String(value) : "";
    });
  };

  const handleSendSMS = () => {
    selectedRows.forEach((index) => {
      const row = data[index];
      console.log(
        `Sending SMS to ${row["Mobile Number"]}: ${formatMessage(row)}`
      );
    });
  };

  return (
    <div className="container">
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
          </div>
        )}

        <div className="send-button-container">
          <Button onClick={handleSendSMS} className="send-button">
            Send SMS
          </Button>
        </div>
      </div>

      <div className="table-container">
        <table
          className="custom-table"
        >
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
