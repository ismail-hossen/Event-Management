import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="py-6 sm:py-12 lg:py-24">
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-center font-semibold text-2xl sm:text-3xl lg:text-4xl">
          WHY CHOOSE US
        </h2>
        <hr className="bg-red-400 w-10 h-1 mt-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
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
