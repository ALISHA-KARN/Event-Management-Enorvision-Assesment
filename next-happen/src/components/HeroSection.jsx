import heroImage from "../assets/heroImage.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center px-6 py-16 lg:py-24">
      {/* Left Side: Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
         We Don’t Just Plan Events.{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
            We Create Experiences.
          </span>
        </h1>
        <p className="text-lg text-neutral-600 mb-6 max-w-xl">
          Whether it's a conference or a celebration, NextHappen handles everything from concept to execution.


        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-5 rounded-md text-sm font-semibold"
          >
            Plan Your Event
          </a>
          <a
            href="#"
            className="border border-orange-600 text-orange-700 py-3 px-5 rounded-md text-sm font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div
  className="relative lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center"
  data-aos="fade-left"
>
  {/* Blurred Blob #1 */}
  <div className="absolute w-56 h-56 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse-slow -top-10 -left-10 z-0"></div>

  {/* Blurred Blob #2 */}
  <div className="absolute w-40 h-40 bg-pink-600 rounded-full filter blur-2xl opacity-20 animate-ping top-10 right-0 z-0"></div>

  {/* Main Image */}
  <img
    src={heroImage}
    alt="Event Setup Illustration"
    className="relative z-10 w-full max-w-md rounded-lg border border-orange-300 grayscale-0 scale-105 rotate-1 shadow-[0_8px_30px_rgba(255,115,0,0.3)] transition-all duration-700 ease-in-out animate-float"
  />
</div>

    </section>
  );
};

export default HeroSection;
