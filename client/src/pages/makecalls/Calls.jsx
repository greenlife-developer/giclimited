import React, { useEffect, useState } from "react";
import "./makecalls.css";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUsers";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  callInitiated,
  markContactAsCalled,
} from "../../services/contactService";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logOutUser } from "../../services/authService";

const Calls = () => {
  const location = useLocation();
  useRedirectLoggedOutUser(`/login?redirect_url=${location.pathname}`);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const { agent } = useSelector((state) => state.auth);

  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // "all" | "my"

  // Fetch contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/contacts");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    fetchContacts();
  }, []);

  const [selectedContact, setSelectedContact] = useState(null);
  const [note, setNote] = useState("");
  const [recording, setRecording] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const statusOrder = {
    "Not Called": 0,
    "Call Initiated": 1,
    Called: 2,
  };

  // Sort contacts
  const sortedContacts = [...contacts].sort((a, b) => {
    const aRank = statusOrder[a.STATUS] ?? 99;
    const bRank = statusOrder[b.STATUS] ?? 99;
    return aRank - bRank;
  });

  // Filter by tab
  const filteredContacts =
    activeTab === "my"
      ? sortedContacts.filter((c) => c.AGENT === agent.agent.id)
      : activeTab === "others"
      ? sortedContacts.filter((c) => c.STATUS === "Call Initiated")
      : sortedContacts;

  // Pagination
  const totalPages = Math.ceil(filteredContacts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentContacts = filteredContacts.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleCall = async (contact) => {
    setSelectedContact(contact);
    const updated = contacts.map((c) =>
      c.CUST_ID === contact.CUST_ID
        ? {
            ...c,
            STATUS: "Call Initiated",
            LAST_CALLED: new Date().toLocaleString(),
            AGENT: agent.id,
          }
        : c
    );
    setContacts(updated);
    window.location.href = `tel:${contact.PHONE_NUMBER}`;

    await callInitiated(contact._id);
  };

  const handleSaveNote = async () => {
    const updated = contacts.map((c) =>
      c.CUST_ID === selectedContact.CUST_ID
        ? { ...c, NOTE: note, STATUS: "Called", RECORDING: recording?.name || "N/A" }
        : c
    );
    setContacts(updated);

    await markContactAsCalled(selectedContact._id, note, agent);

    setNote("");
    setRecording(null);
    setSelectedContact(null);
  };

  const headers = [
    "CUSTOMER_NAME",
    "SETTLEMENT_ACCOUNT",
    "PRODUCT",
    "UNPAID",
    "PHONE_NUMBER",
    "ADDRESS",
    "STATUS",
    "NOTE",
    "RECORDING",
    "LAST CALLED",
  ];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const windowSize = 4;
    let start = Math.max(2, currentPage - windowSize);
    let end = Math.min(totalPages - 1, currentPage + windowSize);

    if (currentPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          1
        </button>
      );
    }

    if (start > 2) {
      pages.push(
        <span key="left-ellipsis" className="px-2">
          &laquo;
        </span>
      );
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages - 1) {
      pages.push(
        <span key="right-ellipsis" className="px-2">
          &raquo;
        </span>
      );
    }

    if (totalPages > 1 && currentPage < totalPages) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="gic-container p-6 bg-gray-100 min-h-screen">
      {/* Agent Info */}
      <div className="gic-agent-info mb-6 bg-white shadow p-4 rounded-lg">
        <h1 className="text-xl font-bold">Agent Dashboard</h1>
        <p className="text-gray-600">
          Logged in as:{" "}
          <span className="font-semibold">{agent.agent.displayName}</span>
        </p>
      </div>
      <br />

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Make Calls</h1>
        <button
          onClick={() => {
            dispatch(SET_LOGIN(false));
            logOutUser();
            navigate("/login");
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <br />

      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setActiveTab("all");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All Contacts
        </button>
        <button
          onClick={() => {
            setActiveTab("my");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "my"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          My Calls
        </button>
        <button
          onClick={() => {
            setActiveTab("others");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "others"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Others
        </button>
      </div>
      <br />

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse min-w-full text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                {headers.map((head) => (
                  <th
                    key={head}
                    className="gic-th px-4 py-3 font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
                <th className="gic-th px-4 py-3 font-semibold text-gray-700 border border-gray-300 sticky right-0 bg-gray-100 shadow-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact) => (
                <tr key={contact.CUST_ID} className="hover:bg-gray-50">
                  {headers.map((head) => (
                    <td
                      key={head}
                      className="gic-td px-4 py-2 border border-gray-200 align-top"
                    >
                      {(() => {
                        const key = head.replace(" ", "_");

                        if (head === "RECORDING" && contact.RECORDING) {
                          return (
                            <a
                              href={contact.RECORDING}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline"
                            >
                              Listen
                            </a>
                          );
                        }

                        if (head === "UNPAID") {
                          const value = contact[key];
                          return value ? formatCurrency(value) : "";
                        }

                        return contact[key] ?? "";
                      })()}
                    </td>
                  ))}
                  <td className="gic-td px-4 py-2 border border-gray-200 sticky right-0 bg-white shadow-lg flex gap-2">
                    <button
                      onClick={() => handleCall(contact)}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg"
                    >
                      Call
                    </button>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-lg">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {renderPagination()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <br />
      </div>
      <br />

      {/* Call Popup */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="gic-call-container bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-lg font-bold mb-4">
              Call Details - {selectedContact.CUSTOMER_NAME}
            </h2>

            <p className="mb-1">
              <strong>Account No:</strong> {selectedContact.SETTLEMENT_ACCOUNT}
            </p>
            <p className="mb-1">
              <strong>Remaining Balance:</strong>{" "}
              {formatCurrency(selectedContact.UNPAID)}
            </p>
            <p className="mb-1">
              <strong>Full Name:</strong> {selectedContact.CUSTOMER_NAME}
            </p>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3"
              placeholder="Enter your note here..."
            />

            {/* Recording Upload */}
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setRecording(e.target.files[0])}
              className="mb-3 w-full"
            />

            {recording && (
              <p className="text-sm text-gray-600 mb-2">
                Selected file:{" "}
                <a
                  href={URL.createObjectURL(recording)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {recording.name}
                </a>
              </p>
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calls;
