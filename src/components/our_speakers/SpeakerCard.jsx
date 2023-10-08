import PropTypes from "prop-types";

const SpeakerCard = ({ speaker }) => {
  const { Avatar, SpeakerName, Title } = speaker || {};
  return (
    <div className="card card-compact h-96 bg-base-100 rounded-b-none rounded-t-md relative overflow-hidden">
      <figure className="w-full h-full">
        <img src={Avatar} alt="" className="w-full h-full rounded-t-md" />
      </figure>
      <div className="border-t-2 border-black border-opacity-20 absolute h-[8rem] -bottom-3 w-full bg-white bg-opacity-90 transform skew-x-0 -skew-y-3"></div>
      <div className="absolute bottom-5 ps-8">
        <h2 className="text-2xl font-semibold">{SpeakerName}</h2>
        <h2 className="text-sm text-red-400">{Title}</h2>
      </div>
    </div>
  );
};

export default SpeakerCard;

SpeakerCard.propTypes = {
  speaker: PropTypes.object,
};
