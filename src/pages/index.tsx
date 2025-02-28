import "../styles/globals.css";
import SkillCard from "@/components/SkillCard";
import ExperienceCard from "@/components/ExeprienceCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";

const { library } = require("@fortawesome/fontawesome-svg-core");
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas)

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
      color: "rgb(218, 16, 16)",
      description: "Deep learning model for early cancer detection",
      link: "breast_cancer",
      github: "https://github.com/RyanChew1/Breast-Cancer-Detection",
    },
    {
      title: "Soccer Detection",
      image: "/soccer.jpg",
      color: "rgb(17, 44, 164)",
      description: "Real-time player and ball tracking system",
      link: "soccer",
      github: "https://github.com/RyanChew1/player-detection-soccer",
    },
    {
      title: "Road Recognition",
      image: "/driving.png",
      color: "rgb(101, 15, 124)",
      description: "Autonomous driving vision system",
      link: "road_recognition",
      github: "https://github.com/RyanChew1/Road-Vehicle-Recognition",
    },
    {
      title: "Coronary Calcium Segmentation",
      image: "/CAC.png",
      color: "rgb(101, 15, 124)",
      description: "Medical imaging segmentation model",
      link: "cac",
      github: "https://github.com/RyanChew1/Chest-CT-CAC-Scores",
    },
  ];

  const skills = [
    {
      icon: "fa fa-code",
      title: "Programming",
      items: ["Python", "R", "Java", "C++", "JavaScript", "Kotlin"],
    },
    {
      icon: "fa-chart-line",
      title: "Data Analytics",
      items: ["Excel", "SQL", "Pandas", "Statistics & Probability"],
    },
    {
      icon: "fa-chart-bar",
      title: "Data Visualization",
      items: ["Statistical Visualization", "Matplotlib", "Seaborn"],
    },
    {
      icon: "fa-solid fa-network-wired",
      title: "Deep Learning",
      items: ["PyTorch", "TensorFlow", "Keras", "CUDA"],
    },
    {
      icon: "fa-images",
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
      icon: "fa fa-language",
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
      icon: "fa fa-globe",
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
      icon: "fa fa-book",
      title: "Research",
      items: ["Medical Imaging", "Model Architectures", "NLP Pipelines"],
    },
  ];

  return (
    <div className="min-h-screen">
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

      {/* Experience */}
      <section
        id="experience"
        className="min-h-screen bg-gray-200 pt-[8.5vh] relative pb-5"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-green-500 transform -translate-x-1/2" />
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
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
