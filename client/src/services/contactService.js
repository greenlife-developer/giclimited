import axios from "axios";
import { toast } from "sonner";

const BACKEND_URL = `http://localhost:4000`;

export const uploadContacts = async (contacts) => {
  // console.log("CONTACTS SERVICE: ", contacts);
  const batchSize = 200;

  try {
    for (let i = 0; i < contacts.length; i += batchSize) {
      const batch = contacts.slice(i, i + batchSize);

      console.log(
        `Uploading batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(
          contacts.length / batchSize
        )}, size: ${batch.length}`
      );

      const response = await axios.post(
        `${BACKEND_URL}/api/contacts/upload`,
        batch,
        { withCredentials: true }
      );

      if (response.status === 201 || response.statusText === "OK") {
        toast.success(
          `Batch ${Math.floor(i / batchSize) + 1} uploaded successfully`
        );
      }
    }

    toast.success("All contacts uploaded successfully!");
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const markContactAsCalled = async (contactId, note, agent) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/contacts/${contactId}/call`,
      { note, agent: agent ? agent.agent : null },
      { withCredentials: true }
    );
    console.log("Response from marking called: ", response);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    throw new Error(message);
  }
};
