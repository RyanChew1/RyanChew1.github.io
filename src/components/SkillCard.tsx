import React from "react";
import "font-awesome/css/font-awesome.min.css";

interface Skill {
  viewBox: string;
  className?: string;
  icon: string;
  title: string;
  items: string[];
}

const SkillCard: React.FC<Skill> = ({ className, viewBox, icon, title, items }) => {
  return (
    <div className={`flex mb-8 ${className || ""}`}>
      <div className="group w-full h-[10rem] md:h-[15rem] lg:h-[20rem] perspective-1000 text-center">
        <div className="relative h-full w-full transition-all duration-500 ease-in-out transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="w-full absolute inset-0 bg-blue-300 opacity-[0.8] p-6 rounded-lg shadow-lg flex flex-col backface-hidden [transform:rotateY(0deg)]">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <div
              className="flex flex-col h-full w-fit self-center text-center items-center justify-center"
              ref={(el) => {
                if (el) el.style.height = `${el.clientHeight * 0.7}px`;
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={viewBox}
                className="w-2/3"
              >
                <path d={`${icon}`}/>
              </svg>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-blue-400 opacity-[0.8] text-white p-6 rounded-lg shadow-lg flex flex-col backface-hidden [transform:rotateY(180deg)]">
            <h4 className="text-lg font-bold mb-5">{title}</h4>

            <div className="text-sm">
              <span className="sm:hidden">{items?.join(" | ")}</span>{" "}
              <div className="hidden sm:block">
                {items?.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;