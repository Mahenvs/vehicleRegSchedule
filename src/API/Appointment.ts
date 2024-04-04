import axios from "axios";
import { scheduleType } from "../common/interfaces";

export const scheduleAppointment = async (body: scheduleType) => {
  try {
    const url = "http://localhost:8081/appointment/create";
    const response = await axios.post(url, {
        "userId": body.username,
        "vehicleType" : body.vehicleType,
        "scheduledDate": body.scheduledDate,
        "status": body.status 
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
}
