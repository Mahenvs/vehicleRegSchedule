import Heading from "./Heading";
import Table1 from "./TableView";

const AppointmentLogs = () => {
  return (
    <div className="fl ex  f lex-col">
      <Heading>Appointment Logs</Heading>
      <Table1 title={"Current Appointments"}/>
    </div>
  );
};

export default AppointmentLogs;
