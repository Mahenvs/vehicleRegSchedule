import { useEffect, useState } from "react";
import Heading from "./Heading";
import Table1 from "./TableView";
import axios from "axios";
import { appointmentProps } from "../common/interfaces";

const AppointmentLogs = () => {
  const [logs, setAppointmentLogs] = useState<appointmentProps>();
  const appointments = [
    {
      id: 1,
      userId: 1,
      vehicleType: "Bike",
      scheduledDate: "2024-05-10T12:00:00",
      status: "BOOKED",
    },
    {
      id: 2,
      userId: 1,
      vehicleType: "Car",
      scheduledDate: "2024-04-10T12:00:00",
      status: "BOOKED",
    },
  ];
  useEffect(() => {
    const LogsAppointment = async (username: string) => {
      try {
        const url =
          "http://localhost:8081/appointment/getAppointmentsByUser/" + username;
        const response = await axios.get(url);
        setAppointmentLogs(logs);
        return response.data;
      } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
      }
    };
    LogsAppointment("username");
  }, []);

  return (
    <div>
      <Heading>Appointment Logs</Heading>
      <Table1 appointments={appointments} title={"Current Appointments"} />
    </div>
  );
};

export default AppointmentLogs;
