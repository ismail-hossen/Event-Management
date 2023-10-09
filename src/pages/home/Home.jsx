import FeaturedEvents from "../../components/events/FeaturedEvents";
import Banner from "../../components/header/Banner";
import OurSpeakers from "../../components/our_speakers/OurSpeakers";
import WhyChoose from "../../components/why_choose_us/WhyChoose";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="bg-base-200">
        <div className="max-w-[70vw] mx-auto">
          <WhyChoose />
        </div>
      </div>
      <div className="max-w-[70vw] mx-auto">
        <FeaturedEvents />
        <OurSpeakers />
      </div>
    </>
  );
};

export default Home;
