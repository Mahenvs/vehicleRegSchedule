import React from "react";
import Heading from "./Heading";
import Table1 from "./TableView";

const AppointmentLogs = () => {
  return (
    <div className="fl ex  f lex-col">
      <Heading>Appointment Logs</Heading>
      {/* <h3 className="text-xl font-medium">Current Appointments</h3> */}
      <Table1 title={"Current Appointments"}/>
    </div>
  );
};

export default AppointmentLogs;
