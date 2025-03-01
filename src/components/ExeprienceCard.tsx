import { motion } from "framer-motion";

interface Experience {
  company: string;
  title: string;
  date: string;
  description: string;
  details: string;
}

const ExperienceCard: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  return (
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className={`flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center mb-8`}
      >
      <div className="group w-full md:w-5/12 h-[16rem] md:h-[20rem] lg:h-[16rem] perspective">
        <div className="relative h-full w-full transition-all duration-500 ease-in-out transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute inset-0 bg-blue-300 p-6 rounded-lg shadow-lg flex flex-col backface-hidden [transform:rotateY(0deg)]">
            <h1 className="text-2xl font-extrabold mb-2">{exp.company}</h1>
            <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-600 mb-4">{exp.date}</p>
            <p className="text-gray-800 flex-1">{exp.description}</p>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-blue-400 text-white p-6 rounded-lg shadow-lg flex flex-col backface-hidden [transform:rotateY(180deg)]">
            <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
            <p className="flex-1 overflow-y-auto">{exp.details}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
