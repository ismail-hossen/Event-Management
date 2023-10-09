const Banner = () => {
  return (
    <>
      <div className="relative py-20 bg-gradient-to-r from-red-700 via-red-500 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-hero-pattern"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-semibold mb-4">
            Experience Unforgettable Corporate Events
          </h1>
          <p className="text-lg mb-8">
            Join us for expert-led conferences, workshops, and networking
            opportunities.
          </p>
          <a
            href="#"
            className="btn bg-red-500 text-white outline-white hover:outline-red-400 hover:bg-red-400"
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
