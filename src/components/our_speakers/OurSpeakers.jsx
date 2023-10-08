import { useEffect, useState } from "react";
import SpeakerCard from "./SpeakerCard";

const OurSpeakers = () => {
  const [speaker, setSpeakers] = useState([]);
  useEffect(() => {
    fetch("speakers.json")
      .then((res) => res.json())
      .then((data) => setSpeakers(data));
  }, []);
  return (
    <div className="py-20">
      <div className="flex flex-col items-center gap-y-2 mb-16">
        <h2 className="text-black font-bold text-4xl">Our Speakers</h2>
        <p className="border-b-2">
          You can use multi style for speaker section
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {speaker?.map((s) => (
          <SpeakerCard key={s.SpeakerID} speaker={s} />
        ))}
      </div>
    </div>
  );
};

export default OurSpeakers;
