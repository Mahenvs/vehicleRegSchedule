import { useFormik } from "formik";
import Heading from "./Heading";

const BookAppointment = () => {
  const formik = useFormik({
    initialValues: {
      picked: "",
      name: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Heading>Book Appointment</Heading>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row py-2 gap-2 justify-center">
          <label htmlFor="name" className="flex justify-end">
            Name
          </label>
          <div className="flex flex-col">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row py-2 gap-2 justify-center">
          <div id="my-radio-group" className="flex justify-end">
            Vehicle Type
          </div>

          <div
            role="group"
            aria-labelledby="my-radio-group"
            onChange={formik.handleChange}
            className="flex flex-col"
          >
            <label>
              <input type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <input type="radio" name="picked" value="Two" />
              Two
            </label>
            {/* <div>Picked: {values.picked}</div> */}
          </div>
        </div>

        <div>
          Date Picker
          <div className=""></div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookAppointment;
