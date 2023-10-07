import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events_data.json")
      .then((data) => data.json())
      .then((res) => setEvents(res));
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold">Our Events</h2>
      <div className="grid grid-cols-2 gap-6 mt-16">
        {events?.slice(0, 6).map((e) => (
          <EventCard key={e.EventID} event={e} />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        <Link to="/all-events" className="btn btn-secondary capitalize">
          See All Events
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEvents;
