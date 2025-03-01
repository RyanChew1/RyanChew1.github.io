import React from "react";
import Router from "next/router";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  description,
  link,
  github,
}) => {
  const router = Router;

  const onSubmit = () => {
    router.push({
        pathname: `/project/${link}`,
      });
  };

  const openGithub = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event bubbling
    window.open(github);
  };

  return (
    <div
      className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden hover:cursor-pointer"
      onClick={onSubmit}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-24 md:h-48 object-cover"
          />
        </div>

        {/* Text & Button Container */}
        <div className="md:w-2/3 p-6 flex flex-row md:flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{description}</p>
          </div>

          {/* Button aligned to right on small screens */}
          <button
            className="w-fit mt-0 md:mt-8 bg-blue-300 px-5 py-2 rounded-xl font-semibold self-end md:self-start"
            onClick={openGithub}
          >
            OPEN IN GITHUB
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
