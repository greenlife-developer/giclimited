import { useState } from "react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "+234 801 234 5678",
      email: "john@example.com",
      location: "Lagos, Nigeria",
      history: [
        { date: "2025-08-10", response: "Customer requested pricing" },
        { date: "2025-08-05", response: "No Answer" },
        { date: "2025-08-01", response: "Asked for a callback" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+234 802 987 6543",
      email: "jane@example.com",
      location: "Abuja, Nigeria",
      history: [{ date: "2025-08-12", response: "Interested in demo" }],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("all");

  // --- Placeholder functions (to implement later) ---
  const handleUploadContacts = () => {};
  const handleAddContact = () => {};
  const handleDeleteContact = (id) => {};
  const handleViewHistory = (id) => {};

  // --- Filtered contacts ---
  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterLocation === "all" || c.location === filterLocation;

    return matchesSearch && matchesFilter;
  });

  const uniqueLocations = ["all", ...new Set(contacts.map((c) => c.location))];

  return (
    <div className="p-6 grid grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      {/* Upload / Add Contact Section */}
      <div className="col-span-1 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-3">Manage Contacts</h2>
        <input
          type="file"
          accept=".csv"
          onChange={handleUploadContacts}
          className="w-full mb-3 border p-2 rounded"
        />
        <input
          placeholder="Name"
          className="w-full mb-2 border p-2 rounded"
        />
        <input
          placeholder="Phone"
          className="w-full mb-2 border p-2 rounded"
        />
        <input
          placeholder="Email"
          className="w-full mb-2 border p-2 rounded"
        />
        <input
          placeholder="Location"
          className="w-full mb-3 border p-2 rounded"
        />
        <button
          onClick={handleAddContact}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Contact
        </button>
      </div>

      {/* Contacts List */}
      <div className="col-span-2 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Contacts</h2>

        {/* Search + Filter */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name, phone, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border p-2 rounded"
          />
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="border p-2 rounded"
          >
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === "all" ? "All Locations" : loc}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((c) => (
              <tr key={c.id} className="text-center border">
                <td className="p-2">{c.name}</td>
                <td className="p-2">{c.phone}</td>
                <td className="p-2">{c.email}</td>
                <td className="p-2">{c.location}</td>
                <td className="p-2 space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => handleViewHistory(c.id)}
                  >
                    History
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteContact(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredContacts.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-gray-500 text-center">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* History Panel */}
      <div className="col-span-3 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">Customer History</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {contacts[0].history.map((h, i) => (
            <div key={i} className="p-3 border rounded bg-gray-50">
              <p className="font-semibold">{h.date}</p>
              <p>{h.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
