import React, { useEffect, useState } from "react";
import "./makecalls.css";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUsers";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { markContactAsCalled } from "../../services/contactService";

const Calls = () => {
  const location = useLocation();
  useRedirectLoggedOutUser(`/login?redirect_url=${location.pathname}`);

  const { agent } = useSelector((state) => state.auth);

  const [contacts, setContacts] = useState([]);

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
  const pageSize = 20; // 20 contacts per page

  // Pagination state
  const itemsPerPage = 5;

  // Sorting: called first
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.STATUS === "Called" && b.STATUS !== "Called") return 1;
    if (a.STATUS !== "Called" && b.STATUS === "Called") return -1;
    return 0;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  // Pagination logic
  const totalPages = Math.ceil(sortedContacts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentContacts = sortedContacts.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleCall = (contact) => {
    setSelectedContact(contact);
    const updated = contacts.map((c) =>
      c.CUST_ID === contact.CUST_ID
        ? { ...c, STATUS: "Called", LAST_CALLED: new Date().toLocaleString() }
        : c
    );
    setContacts(updated);
    window.location.href = `tel:${contact.PHONE_NUMBER}`;
  };

  const handleSaveNote = async () => {
    const updated = contacts.map((c) =>
      c.CUST_ID === selectedContact.CUST_ID
        ? { ...c, NOTE: note, RECORDING: recording?.name || "N/A" }
        : c
    );
    setContacts(updated);

    await markContactAsCalled(selectedContact._id);

    setNote("");
    setRecording(null);
    setSelectedContact(null);
  };

  const headers = [
    "CUST_ID",
    "CUSTOMER_NAME",
    "REF_NO",
    "SETTLEMENT_ACCOUNT",
    "PRODUCT_NAME",
    "PRODUCT_CODE",
    "PRODUCT",
    "LOAN_AMOUNT_LCY",
    "TOTAL_EXPOSURE_LCY",
    "UNPAID",
    "DCAs",
    "DPD",
    "RANGE",
    "TENOR",
    "RATE",
    "BOOKING_DATE",
    "MATURITY_DATE",
    "PHONE_NUMBER",
    "ADDRESS",
    "EMAIL_ADDRESS",
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

  // Pagination Controls
  const renderPagination = () => {
    const pages = [];
    const windowSize = 4;

    let start = Math.max(2, currentPage - windowSize);
    let end = Math.min(totalPages - 1, currentPage + windowSize);

    // Always include first page
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

    // Left ellipsis
    if (start > 2) {
      pages.push(
        <span key="left-ellipsis" className="px-2">
          &laquo;
        </span>
      );
    }

    // Page range
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

    // Right ellipsis
    if (end < totalPages - 1) {
      pages.push(
        <span key="right-ellipsis" className="px-2">
          &raquo;
        </span>
      );
    }

    // Always include last page
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
            {/* <tbody>
              {currentContacts.map((contact) => (
                <tr key={contact.CUST_ID} className="hover:bg-gray-50">
                  {headers.map((head) => (
                    <td
                      key={head}
                      className="gic-td px-4 py-2 border border-gray-200 align-top"
                    >
                      {contact[head.replace(" ", "_")] || ""}
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
            </tbody> */}
            <tbody>
              {currentContacts.map((contact) => (
                <tr key={contact.CUST_ID} className="hover:bg-gray-50">
                  {headers.map((head) => (
                    <td
                      key={head}
                      className="gic-td px-4 py-2 border border-gray-200 align-top"
                    >
                      {head === "RECORDING" && contact.RECORDING ? (
                        <a
                          href={contact.RECORDING}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Listen
                        </a>
                      ) : (
                        contact[head.replace(" ", "_")] || ""
                      )}
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
              <strong>Remaining Balance:</strong> {selectedContact.UNPAID}
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
