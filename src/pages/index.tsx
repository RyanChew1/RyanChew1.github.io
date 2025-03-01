import { useEffect } from "react";
import SkillCard from "@/components/SkillCard";
import ExperienceCard from "@/components/ExeprienceCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import Head from 'next/head'


export default function Home() {

  const experiences = [
    {
      title: "Lead Web Developer",
      company: "The Ame Project",
      date: "Aug 2024 - Present",
      description:
        "Designed, developed, and deployed a website for a nonprofit organization.",
      details:
        "Built the website using ReactJS and Vercel.\n" +
        "Collaborated across departments to meet deadlines and optimize technology choices.",
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Project Empower",
      date: "July 2024 - Present",
      description:
        "Collected and preprocessed data for artificial intelligence models.",
      details:
        "Web scraped over 600 rows of data using Selenium.\n" +
        "Cleaned and formatted data using Pandas for analysis and model training.",
    },
    {
      title: "Software Engineer Intern",
      company: "NextStep Education",
      date: "Aug 2024 - Sep 2024",
      description: "Enhanced the performance of a recommendation system.",
      details:
        "Increased recommendation accuracy by 30% by implementing hybrid search and collaborative filtering.\n" +
        "Optimized system performance using CUDA, reducing processing time by 25%.",
    },
    {
      title: "Policy Hackathon Data Scientist",
      company: "MIT Policy Hackathon",
      date: "Nov 2023",
      description:
        "Developed predictive models to address healthcare policy challenges.",
      details:
        "Processed over 30 GB of data on immigrant healthcare access.\n" +
        "Led a team to complete a policy memo within 72 hours, presenting a solution for healthcare accessibility.",
    },
    {
      title: "Data Science Hackathon Top 10",
      company: "MIT Data Science Hackathon",
      date: "Feb 2023",
      description:
        "Created a machine learning model to predict customer satisfaction.",
      details:
        "Cleaned and prepared large datasets using PCA and one-hot encoding techniques.\n" +
        "Developed an ensemble model and ranked 6th in the competition.",
    },
    {
      title: "Datathon WiDS Top 50",
      company: "Stanford WiDS Datathon",
      date: "Mar 2023",
      description:
        "Built an ensemble machine learning model for weather forecasting.",
      details:
        "Placed 49th out of 700 competitors.\n" +
        "Combined CatBoost, XGBoost, and AdaBoost to improve accuracy by 74%, achieving a 0.746 RMSE score.",
    },
  ];

  const projects = [
    {
      title: "Breast Cancer Detection",
      image: "/breast-cancer.png",
      description: "Deep learning model for early cancer detection",
      link: "breast_cancer",
      github: "https://github.com/RyanChew1/Breast-Cancer-Detection",
    },
    {
      title: "Soccer Detection",
      image: "/soccer.jpg",
      description: "Real-time player and ball tracking system",
      link: "soccer",
      github: "https://github.com/RyanChew1/player-detection-soccer",
    },
    {
      title: "Road Recognition",
      image: "/driving.png",
      description: "Autonomous driving vision system",
      link: "road_recognition",
      github: "https://github.com/RyanChew1/Road-Vehicle-Recognition",
    },
    {
      title: "Coronary Calcium Segmentation",
      image: "/CAC.png",
      description: "Medical imaging segmentation model",
      link: "cac",
      github: "https://github.com/RyanChew1/Chest-CT-CAC-Scores",
    },
    {
      title: "Fitness Tracker and Workout Planner",
      image: "/Rep Counter.png",
      description: "Rep tracker and workout generator",
      link: "workout",
      github: "https://github.com/RyanChew1/FIT.LY",
    },
    {
      title: "Regex Molar Mass Calculator",
      image: "/molar_mass.png",
      description: "Easily obtain molar mass calculations from chemical formulas",
      link: "molar_mass",
      github: "https://github.com/RyanChew1/Molar-Mass-Calculator",
    },
    {
      title: "Hotel Booking Cancellation Predictor",
      image: "/hotel_5.png",
      description: "Traditional ML techniques to predict whether a customer will cancel their hotel booking",
      link: "hotel",
      github: "https://github.com/RyanChew1/Hotel-Booking-Cancellation-Case-Study",
    },
  ];

  const skills = [
    {
        viewBox: "0 0 640 512",
      icon: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
      title: "Programming",
      items: ["Python", "R", "Java", "C++", "JavaScript", "Kotlin"],
    },
    {
        viewBox: "0 0 448 512",
      icon: "M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z",
      title: "Data Analytics",
      items: ["Excel", "SQL", "Pandas", "Statistics & Probability"],
    },
    {
        viewBox: "0 0 512 512",
      icon: "M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
      title: "Data Visualization",
      items: ["Statistical Visualization", "Matplotlib", "Seaborn"],
    },
    {
        viewBox: "0 0 640 512",
      icon: "M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z",
      title: "Deep Learning",
      items: ["PyTorch", "TensorFlow", "Keras", "CUDA"],
    },
    {
        viewBox: "0 0 576 512",
      icon: "M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z",
      title: "Computer Vision",
      items: [
        "Image Recognition",
        "Segmentation",
        "Object Tracking",
        "Object Detection",
        "Generative AI",
      ],
    },
    {
        viewBox: "0 0 640 512",
      icon: "M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z",
      title: "NLP",
      items: [
        "Transformers",
        "Tokenizers",
        "Chatbots",
        "RAG",
        "Multimodal Models",
      ],
    },
    {
        viewBox: "0 0 512 512",
      icon: "M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z",
      title: "Full Stack",
      items: [
        "NEXT JS",
        "React",
        "Typescript",
        "Tailwind",
        "Supabase",
        "SQL",
        "OAuth",
        "Vercel",
      ],
    },
    {
        viewBox: "0 0 448 512",
      icon: "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
      title: "Research",
      items: ["Medical Imaging", "Model Architectures", "NLP Pipelines"],
    },
  ];

  return (
    <div className="min-h-screen">
        <Head>
        <title>Ryan Chew Portfolio</title>
      </Head>
      <Navbar />

      {/* Hero */}
      <section
        id="about"
        className="min-h-screen pt-[8.5vh] bg-gray-100 flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Ryan Chew</h1>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Artificial Intelligence
            <br />
            Data Science
          </h2>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Hey! I'm Ryan!</h2>
          <p className="text-lg">
            I am a curious and ambitious high school junior based in the Bay
            Area. I aim to pursue a degree in computer science after high school
            and specialize in computer vision. I'm currently exploring a wide
            range of fields and applications, widening my skillset and
            perspective along the way. So far, I have obtained certificates from
            top data science and ML courses from IBM and MIT and a computer
            vision course from Great Learning. With that knowledge, I have
            completed numerous projects and even competed in multiple
            hackathons! I am eager to learn even more and better the world
            through new research and the development of practical and impactful
            AI solutions. My projects typically revolve around the field of
            medical imaging, competing regularly on Kaggle. When I'm not
            hacking, you can find me practicing kung fu or playing piano.
            <br />
            <br />
            Read about my journey below and feel free to reach out to me if you
            would like to be part of it or support me!
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen bg-gray-300 pt-[8.5vh] px-4 py-10"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

       {/* Experience */}
       <section
        id="experience"
        className="min-h-screen bg-gray-200 pt-[8.5vh] relative pb-5"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-blue-500 transform -translate-x-1/2" />
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen flex items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-4xl text-center font-bold mb-4 md:mb-4">
            Skills
          </h1>
          <div className="mt-20 justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} className="w-[80%]" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
