import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";


const Workflow = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        How it{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Works!
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-16 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
         <motion.img
  src={codeImg}
  alt="Event Planning Illustration"
  className="max-w-full h-auto object-contain"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.5 }}
/>

        </div>

        {/* Checklist Section */}
        <div className="w-full lg:w-1/2 pt-6 lg:pt-0">
          {checklistItems.map((item, index) => (
           <motion.div
    key={index}
    className="flex items-start mb-10"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.5 }}
  >
    <div className="text-green-400 mr-4 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
      <CheckCircle2 />
    </div>
    <div>
      <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
      <p className="text-md text-neutral-500">{item.description}</p>
    </div>
  </motion.div>
))}
          
        </div>
      </div>
    </div>
  );
};

export default Workflow;
