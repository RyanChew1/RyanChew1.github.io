import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft } from "lucide-react";
import Head from 'next/head'

const ProjectPage = () => {
  const router = useRouter();

  const title: string = "Soccer Field Player Detection Model";
  const description: string = "In many soccer games, statistics are hard to track manually. With the introduction of the VAR system, officiating in soccer games have improved drastically in accuracy. Player location detection will provide more accurate and advanced metrics.Data was collected off public datasets from SoccerNet. The data came in json format with individual images that form videos when stitched together. The labels provided the class and the pixel location of each object. The object consists of players, referees and goalkeepers. In this project, I manipulated the data into a yolo format using \"class x y w h\". Then, I imported the yolov8m model and ran the model using multiple different hyperparameters. In the end, the model achieved 0.07 mAP loss.";
  const images: string[] = ["soccer.jpg","soccer_inference.png", "val_batch2_pred.jpg"];
  const github: string = "https://github.com/RyanChew1/player-detection-soccer";
  const technologies: string[] = ["Python", "PyTorch", "YOLO", "Object Detection"];

  const handleBack = () => {
    router.push("/#projects");
  };

  const handleOpenGithub = () => {
    if (github) {
      window.open(github, "_blank");
    }
  };

  return (
    <>
    <Head>
        <title>Ryan Chew Portfolio</title>
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={handleBack}
          className="mb-4 text-blue-500 hover:underline"
        >
          <ArrowLeft strokeWidth={4} size={30} />
        </button>

        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="mb-4">
          <button
            onClick={handleOpenGithub}
            className="bg-blue-500 text-white px-4 py-2 rounded"
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
