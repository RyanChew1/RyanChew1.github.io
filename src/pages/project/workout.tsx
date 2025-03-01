import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft } from "lucide-react";
import Head from 'next/head'

const ProjectPage = () => {
  const router = useRouter();

  const title: string = "Workout Rep Counter and Workout Plan Generator";
  const description: string = "I built an AI-powered fitness app with two main features: a rep tracker and a workout generator. The rep tracker uses movement and pose detection to count reps while ensuring proper form. The workout generator creates personalized seven-day workout plans based on user-inputted goals and preferences. The app is built entirely with Streamlit and Python. The rep tracker leverages a YOLOv8Pose model, using keypoint angles to detect proper form and filter out incorrect reps. The workout generator is powered by a fine-tuned GEMMA 2B model, trained on scraped workout data to generate customized plans.";
  const images: string[] = [
    "Generated Workout.png",
    "Rep Counter.png",
    "Workout Generator.png",
  ];
  const github: string = "https://github.com/RyanChew1/FIT.LY";
  const technologies: string[] = ["Python", "PyTorch", "Open-CV", "UNET", "Gemma", "Keypoint Detection", "NLP Fine Tuning", "Prompting Methods", "YOLO", "Streamlit", "LORA"];

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
