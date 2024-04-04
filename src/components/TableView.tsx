import { useState } from "react";
import Dialog from "./Dialog";
import { tableProps } from "../common/interfaces";

const Table = (props: tableProps ) => {
//   const appointments = [
//     {
//         "id": 1,
//         "userId": 1,
//         "vehicleType": "Bike",
//         "scheduledDate": "2024-05-10T12:00:00",
//         "status": "BOOKED"
//     },
//     {
//         "id": 2,
//         "userId": 1,
//         "vehicleType": "Car",
//         "scheduledDate": "2024-04-10T12:00:00",
//         "status": "BOOKED"
// }
// ]

  const [dialog, setDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleEdit = (appointment) => {
    
    setSelectedAppointment(appointment);

    setDialog(true);
  };

  const handleCancel = (appointment) => {
    
    setSelectedAppointment(appointment);

    setDialog(true); 
  };

  const handleCloseDialog = () => {
    setDialog(false);
  };

  const handleConfirmCancel = () => {
    setDialog(false);
  };


  return (
    <div className="mt-5 p-5">
      <h3 className="text-lg underline left-0 flex ">{props.title}</h3>
      {dialog && <Dialog 
      appointment={selectedAppointment}
      onClose={handleCloseDialog}
      onConfirm={handleConfirmCancel}/>}
      <table className={` divide-y divide-gray-200 ${dialog ? 'opacity-10' : ''}`}>
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              SNo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date of Appointment
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vehicle Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{appointment.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {appointment.scheduledDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {appointment.vehicleType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {appointment.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEdit(appointment)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleCancel(appointment)}
                  className="ml-2 text-[#AF3C3D] hover:text-red-900"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
