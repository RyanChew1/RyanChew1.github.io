import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft } from "lucide-react";
import Head from "next/head";

const ProjectPage = () => {
  const router = useRouter();

  const title: string = "Hotel Booking Cancellation Case Study";
  const description: string =
    "A significant number of hotel bookings are called off due to cancellations or no-shows. Using SK-learn, performed exploratory data analysis, analyzed trends and patterns in the data. Trained logistic regression, SVM, decision tree and random forest models. ";
  const images: string[] = [
    "hotel_1.png",
    "hotel_2.png",
    "hotel_3.png",
    "hotel_4.png",
    "hotel_5.png",
  ];
  const github: string = "https://github.com/RyanChew1/Hotel-Booking-Cancellation-Case-Study";
  const technologies: string[] = [
    "Python",
    "SK-learn",
    "EDA",
    "Binary Classification",
    "Logistic Regression",
    "Matplotlib",
    "Seaborn",
    "Logistic Regression",
    "SVM",
    "Decision Tree",
    "Random Forest",
  ];

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
