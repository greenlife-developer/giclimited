import axios from "axios";
import { toast } from "sonner";

const BACKEND_URL = `http://localhost:4000`;

export const getSmsBalance = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/sms/get-balance`);

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const sendBulkSMS = async ({rows, template}) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/sms/send-sms`,
      { rows, template },
      { withCredentials: true }
    );
    console.log("Response sending sms to bulk: ", response);
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
