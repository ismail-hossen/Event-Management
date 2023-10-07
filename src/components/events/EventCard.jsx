import PropTypes from "prop-types";

const EventCard = ({ event }) => {
  const { BrandImage, EventName, Description, price, StartDate, Location } =
    event || {};
  return (
    <div className="card card-side bg-base-100">
      <figure className="w-3/12">
        <img
          className="w-full h-full rounded-lg"
          src={BrandImage}
          alt="Movie"
        />
      </figure>
      <div className="card-body pt-0 w-9/12 gap-y-4">
        <h3 className="text-3xl font-bold">{EventName}</h3>
        <p className="font-semibold text-xl">
          {StartDate} on {Location}
        </p>
        <p className="text-red-400 text-2xl font-bold">Tickets from ${price}</p>
        <p>{Description}</p>
        <p>
          <a
            href="#"
            className="btn btn-outline hover:border-none hover:bg-red-400 hover:text-white hover:font-bold border-black border-opacity-60 text-black text-opacity-60 font-semibold"
          >
            Tickets &amp; Details
          </a>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object,
};
