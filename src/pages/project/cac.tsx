import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft } from "lucide-react";

const ProjectPage = () => {
  const router = useRouter();

  const title: string = "Calcium Artery Coronary Segmentation Imaging Research";
  const description: string =
    "Coronary artery calcium (CAC) tests are a CT scan of the heart that takes detailed images of arteries to locate deposits of calcium. Excessive calcium in the arteries can lead to reduced blood flow to the heart and cause heart diseases. These are important indicators for heart attacks and diseases and getting CAC scans are useful in identifying high-risk individuals. Agatson scores are the calculations of total calcium in the heart, state of the art programs are currently about 95 percent accurate. The work done in this paper highlights the use of Tversky loss in small segmentations and using an ensemble model to achieve higher accuracy.";
  const images: string[] = ["cac_output.png", "CAC.png"];
  const github: string = "https://github.com/RyanChew1/Chest-CT-CAC-Scores";
  const technologies: string[] = [
    "Python",
    "PyTorch",
    "UNET",
    "Medical Image Segmentation",
  ];

  const handleBack = () => {
    router.push("/#projects");
  };

  const handleOpenGithub = () => {
    if (github) {
      window.open(github);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={handleBack}
          className="mb-4 text-green-500 hover:underline"
        >
          <ArrowLeft strokeWidth={4} size={30} />
        </button>

        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="mb-4">
          <button
            onClick={handleOpenGithub}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            View on GitHub
          </button>
        </div>

        <div className="mb-4 bg-gray-300 rounded-xl p-10">
        <h1 className="font-bold text-lg mb-5">Project Images</h1>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {images.map((img, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[50vh]"
              >
                <img
                  src={`/${img}`}
                  className="max-w-full max-h-full object-contain"
                  alt={`${title} Image: ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <h1 className="font-bold text-lg">Description</h1>
        <p className="mb-4">{description}</p>

        

        <h1 className="font-bold text-lg">Technologies & Skills</h1>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
