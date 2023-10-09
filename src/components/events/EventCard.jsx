import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const {
    BrandImage,
    EventName,
    Description,
    price,
    StartDate,
    Location,
    EventID,
  } = event || {};
  return (
    <div className="card card-side bg-base-100 flex-col lg:flex-row">
      <figure className="w-full lg:w-3/12">
        <img
          className="w-full h-full rounded-lg"
          src={BrandImage}
          alt="Movie"
        />
      </figure>
      <div className="card-body p-0 lg:ps-5 w-full lg:w-9/12 gap-y-2 lg:gap-y-4">
        <h3 className="text-2xl lg:text-3xl font-semibold lg:font-bold">
          {EventName}
        </h3>
        <p className="font-medium lg:font-semibold lg:text-xl">
          {StartDate} on {Location}
        </p>
        <p className="text-red-400 text-xl lg:text-2xl font-semibold lg:font-bold">
          Tickets from ${price}
        </p>
        <p>{Description}</p>
        <p>
          <Link
            to={`/details/${EventID}`}
            className="btn btn-outline hover:border-none hover:bg-red-400 hover:text-white hover:font-bold border-black border-opacity-60 text-black text-opacity-60 font-semibold"
          >
            Tickets &amp; Details
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object,
};
