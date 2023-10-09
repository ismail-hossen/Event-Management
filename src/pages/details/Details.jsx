import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [event, setEvents] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/events_data.json")
      .then((res) => res.json())
      .then((data) => {
        const exist = data.find((e) => e.EventID == id);
        setEvents(exist);
      });
  }, [id]);
  const {
    StartDate,
    EventName,
    BrandImage,
    Location,
    Description,
    price,
    Attendees,
  } = event || {};

  return (
    <div className="min-h-screen bg-cover bg-center bg-gradient-to-b from-base-100 to-base-300 flex items-center">
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img
                src={BrandImage}
                alt="Event Image"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <p className="text-center mt-2">
                <span className="bg-base-200 text-gray-900 py-1 px-2 rounded-full">
                  Seats: {Attendees}
                </span>
              </p>
            </div>

            <div className="md:order-1">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                {EventName}
              </h2>
              <p className="text-gray-600 mb-4">Date: {StartDate}</p>
              <p className="text-gray-600 mb-4">Time: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600 mb-4">Location: {Location}</p>
              <div className="border-t border-gray-300 my-4"></div>
              <p className="text-gray-600 mb-4">Description: {Description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl text-red-400 font-semibold mb-2">
                    ${price}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 mt-2">
                    Includes: Access to all sessions, lunch, and networking
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline hover:border-none hover:bg-red-400 hover:text-white hover:font-bold border-black border-opacity-60 text-black text-opacity-60 font-semibold"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
