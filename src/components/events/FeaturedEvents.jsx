import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events_data.json")
      .then((data) => data.json())
      .then((res) => setEvents(res));
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-center text-5xl font-semibold">Our Events</h2>
      <div className="grid grid-cols-2 gap-8 mt-16">
        {events?.slice(0, 6).map((e) => (
          <EventCard key={e.EventID} event={e} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
