import { useFormik } from "formik";
import Heading from "./Heading";

const BookAppointment = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  console.log(date);
  const today = new Date().toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      picked: "",
      name: "",
      date: today,
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Heading>Book Appointment</Heading>

      <form
        onSubmit={formik.handleSubmit}
        className=" mx-auto flex flex-col rounded justify-center  border-zinc-400 border mt-5 p-3 "
      >
        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div className="w-1/2">
            <label htmlFor="name">Name</label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="border border-gray-300 rounded px-2 py-1 hover:outline-none focus:outline-none focus:border-blue-300"
              />
            </div>
            {formik.errors.name ? (
              <div className="flex justify-end text-red-600">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div id="my-radio-group" className="w-1/2">
            Vehicle Type
          </div>

          <div
            role="group"
            aria-labelledby="my-radio-group"
            onChange={formik.handleChange}
            className="flex flex-col"
          >
            <label>
              <input type="radio" name="picked" value="Two" />
              Two Wheeler
            </label>
            <label>
              <input type="radio" name="picked" value="Four" />
              Four Wheeler
            </label>
          </div>
        </div>

        <div className="flex flex-row px-12 py-2 gap-2 justify-center">
          <div className="w-1/2">
            <label htmlFor="date">Date</label>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                id="date"
                name="date"
                type="date"
                // defaultValue={today}
                // onChange={(e) => console.log(e.target.value)}
                onChange={formik.handleChange}
                value={formik.values.date}
                className="border border-gray-300 rounded px-2 py-1 hover:outline-none focus:outline-none focus:border-blue-300"
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="fle x justify-en d mt-2 justify-end flex mr-12">
          <button
            type="submit"
            className="px-2 py-1 right-0 text-center bg-blue-500  rounded text-white focus:outline-none"
          >
            Book
          </button>
        </div>
      </form>
    </>
  );
};

export default BookAppointment;
