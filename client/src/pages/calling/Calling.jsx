import React, { useState, useEffect } from "react";
import { Phone, PhoneOff, User, Clock, Edit2, Save, MessageSquare } from "lucide-react";
import "./call.css"; 

const Calling = ({
  customer = {
    name: "John Doe",
    phone: "+234 801 234 5678",
    email: "john@example.com",
    address: "Lagos, Nigeria",
  },
}) => {
  const [callStatus, setCallStatus] = useState("Connecting...");
  const [seconds, setSeconds] = useState(0);
  const [contact, setContact] = useState(customer);
  const [editing, setEditing] = useState(false);
  const [notes, setNotes] = useState("");

  const [history] = useState([
    { date: "2025-08-10", outcome: "Answered", note: "Customer requested pricing." },
    { date: "2025-08-05", outcome: "No Answer", note: "" },
    { date: "2025-08-01", outcome: "Answered", note: "Asked for a callback." },
  ]);

  useEffect(() => {
    const connectTimeout = setTimeout(() => {
      setCallStatus("In Call");
    }, 1500);
    return () => clearTimeout(connectTimeout);
  }, []);

  useEffect(() => {
    let timer;
    if (callStatus === "In Call") {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [callStatus]);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-10 gap-8">
      {/* LEFT PANEL */}
      <div className="w-1/4 left-panel bg-white rounded-2xl shadow-lg p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <User className="text-blue-500" /> Contact Info
          </h2>
          <button
            onClick={() => setEditing(!editing)}
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            {editing ? <Save size={14} /> : <Edit2 size={14} />}
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Contact Form */}
        <div className="space-y-4 flex-1">
          <input
            disabled={!editing}
            className="w-full border p-4 rounded-lg"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <input
            disabled={!editing}
            className="w-full border p-4 rounded-lg"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
          <input
            disabled={!editing}
            className="w-full border p-4 rounded-lg"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <textarea
            disabled={!editing}
            className="w-full border p-4 rounded-lg"
            value={contact.address}
            onChange={(e) => setContact({ ...contact, address: e.target.value })}
            rows={3}
          />
        </div>

        {/* Call Controls */}
        <div className="mt-6 border-t pt-6 flex flex-col items-center gap-4">
          <div className="text-gray-600 flex items-center gap-2 text-lg">
            <Clock size={18} />
            {callStatus === "In Call" ? formatTime(seconds) : callStatus}
          </div>
          {callStatus !== "Call Ended" ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              onClick={() => setCallStatus("Call Ended")}
            >
              <PhoneOff size={18} /> End Call
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              onClick={() => {
                setCallStatus("Connecting...");
                setSeconds(0);
              }}
            >
              <Phone size={18} /> Call Again
            </button>
          )}
        </div>
      </div>

      {/* MIDDLE PANEL */}
      <div className="flex-1 middle-panel bg-white rounded-2xl shadow-lg p-8 flex flex-col">
        <h2 className="text-xl font-bold border-b pb-4 mb-6">Call Script / Notes</h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-6 text-sm leading-relaxed">
          <strong>Script:</strong> Hello {contact.name}, I’m calling from ABC Solutions regarding your account...
        </div>

        <textarea
          className="flex-1 border p-4 rounded-lg focus:ring-2 focus:ring-blue-400 text-base"
          placeholder="Type your notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold"
            onClick={() => {
              console.log("Saving notes:", notes);
              alert("Notes saved!");
            }}
          >
            Save Notes
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/4 right-panel bg-white rounded-2xl shadow-lg p-8 flex flex-col">
        <h2 className="text-xl font-bold border-b pb-4 mb-6 flex items-center gap-2">
          <MessageSquare className="text-purple-500" /> History
        </h2>

        <div className="flex-1 overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{item.date}</span>
                <span
                  className={`font-semibold ${
                    item.outcome === "Answered"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.outcome}
                </span>
              </div>
              {item.note && (
                <p className="text-gray-800 text-sm">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calling;
