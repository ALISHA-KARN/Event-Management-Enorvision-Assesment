import { testimonials } from "../constants";
import { motion } from "framer-motion";


const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
    key={index}
    className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.15, // stagger effect
    }}
    viewport={{ once: false, amount: 0.4 }}
  >
    <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
      <p>{testimonial.text}</p>
      <div className="flex mt-8 items-start">
        <img
          className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
          src={testimonial.image}
          alt={testimonial.user}
        />
        <div>
          <h6>{testimonial.user}</h6>
          <span className="text-sm font-normal italic text-neutral-600">
            {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
