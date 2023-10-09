import { useEffect, useState } from "react";
import EventCard from "../../components/events/EventCard";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/events_data.json")
      .then((data) => data.json())
      .then((res) => setEvents(res));
  }, []);

  return (
    <div className="my-10 lg:my-20 max-w-[70vw] mx-auto">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold">
        All Events
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-8 mt-8 lg:mt-16">
        {events?.map((e) => (
          <EventCard key={e.EventID} event={e} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
