import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="py-24">
      <div className="mb-16 flex items-center flex-col">
        <h2 className="text-center font-semibold text-3xl ">WHY CHOOSE US</h2>
        <hr className="bg-red-400 w-14 h-1 mt-2" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
        <WhyChooseCard />
      </div>
    </div>
  );
};

export default WhyChoose;
