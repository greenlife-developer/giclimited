import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import "./makecalls.css";
import { uploadContacts } from "../../services/contactService";
import { useLocation, useNavigate } from "react-router-dom";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUsers";
import { getLoginStatus } from "../../services/authService";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const CallsAdmin = () => {
  const location = useLocation();
  useRedirectLoggedOutUser(`/login?redirect_url=${location.pathname}`);

  const { agent } = useSelector((state) => state.auth);

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // 20 contacts per page
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    const redirectNonAdmin = async () => {
      const isLoggedIn = await getLoginStatus();
      dispatch(SET_LOGIN(isLoggedIn));

      if (!isLoggedIn || agent.agent.role !== "admin") {
        toast.info("Only admins can access this page. Please login.");
        navigate("/calls");
        return;
      }
    };
    redirectNonAdmin();
  }, [navigate, dispatch, agent]);

  // Sorting: called first
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.STATUS === "Called" && b.STATUS !== "Called") return -1;
    if (a.STATUS !== "Called" && b.STATUS === "Called") return 1;
    return 0;
  });

  // Counts
  const stats = contacts.reduce(
    (acc, c) => {
      c.STATUS === "Called" ? acc.called++ : acc.notCalled++;
      return acc;
    },
    { called: 0, notCalled: 0 }
  );

  // Pagination logic
  const totalPages = Math.ceil(sortedContacts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentContacts = sortedContacts.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Upload Excel
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(worksheet);

    try {
      await uploadContacts(json); // from contactService.js
      alert("Upload successful");
      setContacts(json); // refresh locally (or refetch)
      setCurrentPage(1); // reset pagination
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  // Download Excel
  const handleDownload = () => {
    let filtered = contacts;
    if (filter === "called")
      filtered = contacts.filter((c) => c.STATUS === "Called");
    if (filter === "notCalled")
      filtered = contacts.filter((c) => c.STATUS !== "Called");

    const ws = XLSX.utils.json_to_sheet(filtered);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contacts");
    XLSX.writeFile(wb, `contacts_${filter}.xlsx`);
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
    "RECORDING",
    "NOTES",
    "LAST_CALLED",
  ];

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
      {/* Header */}
      <div className="gic-admin-container bg-white shadow p-4 rounded-lg mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">
            Logged in as Admin:{" "}
            <span className="font-semibold">{agent.agent.displayName}</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <input type="file" accept=".xlsx,.xls" onChange={handleUpload} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="called">Called</option>
            <option value="notCalled">Not Called</option>
          </select>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Download Report
          </button>
        </div>
      </div>
      <br />

      {/* Stats */}
      <div className="mb-6 flex gap-6">
        <div className="gic-admin-stat bg-green-100 p-4 rounded-lg shadow">
          <h2 className="font-bold">Called</h2>
          <p className="text-lg">{stats.called}</p>
        </div>
        <div className="gic-admin-stat bg-red-100 p-4 rounded-lg shadow">
          <h2 className="font-bold">Not Called</h2>
          <p className="text-lg">{stats.notCalled}</p>
        </div>
      </div>
      <br />

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse min-w-full text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                {headers.map((head) => (
                  <th key={head} className="gic-th px-4 py-3 border">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact) => (
                <tr key={contact.CUST_ID} className="hover:bg-gray-50">
                  {headers.map((head) => (
                    <td key={head} className="gic-td px-4 py-2 border">
                      {contact[head.replace(" ", "_")] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />

      {/* Pagination Controls */}
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
    </div>
  );
};

export default CallsAdmin;
