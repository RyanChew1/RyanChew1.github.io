import React from "react";
import "font-awesome/css/font-awesome.min.css";
const { library } = require("@fortawesome/fontawesome-svg-core");
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Skill {
  className?: string;
  icon: string;
  title: string;
  items: string[];
}

library.add(fas);

const SkillCard: React.FC<Skill> = ({ className, icon, title, items }) => {
  return (
    <div className={`flex mb-8 ${className || ""}`}>
      <div className="group w-full h-[10rem] md:h-[15rem] lg:h-[20rem] perspective-1000 text-center">
        <div className="relative h-full w-full transition-all duration-500 ease-in-out transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="w-full absolute inset-0 bg-green-300 opacity-[0.8] p-6 rounded-lg shadow-lg flex flex-col backface-hidden [transform:rotateY(0deg)]">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div
              className="h-full w-full flex items-center justify-center"
              ref={(el) => {
                if (el) el.style.fontSize = `${el.clientHeight * 0.6}px`;
              }}
            >
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 bg-green-500 opacity-[0.8] text-white p-6 rounded-lg shadow-lg flex flex-col backface-hidden [transform:rotateY(180deg)]">
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
