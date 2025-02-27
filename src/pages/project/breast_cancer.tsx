import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft } from "lucide-react";

const ProjectPage = () => {
  const router = useRouter();

  const title: string = "Breast Cancer CT Scan Segmentation";
  const description: string = "The purpose of this project is to detect breast cancer from CT scans using image segmentation. I built two models in both PyTorch and Tensorflow using UNETs of different architectures. One UNET was built in Tensorflow and Keras, the architecture contains 2 - 3x3 convolutional layers per block and uses 5 blocks on both the contracting and expanding path to get the image into a latent space with dimension 256. The model also used a batch size of 32 and trained for 10 epochs. Using BCE Dice loss the model achieved 0.9 validation accuracy. The other UNET was built in PyTorch, I experimented with many loss functions including dice, BCE dice, BCE, focal loss, and Tversky loss. I also tuned the model with hyperparameter grids to achieve higher accuracy. The optimized model ended up bringing the image to 1024 dimensions in latent space before the expanding path. The best loss function was binary cross entropy which resulted in roughly 0.4 dice loss during testing.";
  const images: string[] = [
    "breast-cancer-tf.png",
    "breast-cancer-torch.png",
    "breast-cancer.png",
  ];
  const github: string = "https://github.com/RyanChew1/Breast-Cancer-Detection";
  const technologies: string[] = ["Python", "Tensorflow", "PyTorch", "Keras", "UNET", "Medical Image Segmentation"];

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
