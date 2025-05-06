// Entry: src/App.jsx
import React from 'react';
import NavBar from './assets/Components/NavBar.jsx';
import Section from './assets/Components/Section.jsx';
import SkillCard from './assets/Components/SkillCard.jsx';
import ExperienceCard from './assets/Components/ExperienceCard.jsx';
import ProjectCard from './assets/Components/ProjectCard.jsx';
import { User, Code, Briefcase, FolderOpen, Mail, Linkedin, Github, Laptop } from 'lucide-react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 font-sans scroll-smooth">

  {/* Landing Hero Section */}
  <div
    id="landing"
    className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-blue-100 to-white text-center px-6"
  >
    <h1 className="text-6xl font-extrabold text-blue-800 animate-fade-in-down">
      Hi, I'm Ananth Surampudi
    </h1>
    <p className="mt-4 text-xl text-gray-600 max-w-xl animate-fade-in-up">
      A results-driven Software Developer with expertise in full-stack development, cloud computing, and AI. I design scalable solutions, optimize database performance, and craft intelligent, user-friendly applications.
    </p>
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-300"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-300"
      >
        Let’s Connect
      </a>
    </div>
  </div>

      <NavBar />

      <Section id="about" title={<><User className="inline w-5 h-5 mr-2" />About Me</>} >
        <div className="max-w-3xl mx-auto text-center px-4 py-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300">
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up">
            I am a results-driven Software Developer with a Master’s in Computer Science from Auburn University at Montgomery. With a strong foundation in full-stack development, I specialize in architecting scalable solutions, integrating robust RESTful APIs, and optimizing database performance for high-efficiency systems. My passion lies in building intelligent, data-driven applications that not only solve real-world problems but also deliver seamless user experiences. I bring a blend of technical expertise, creativity, and a deep commitment to clean, maintainable code.
          </p>
        </div>
      </Section>

      <Section id="skills" title={<><Code className="inline w-5 h-5 mr-2" />Technical Skills</>} >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <SkillCard category="Programming Languages" skills={["JavaScript", "Python", "Java", "C++", "C", "HTML", "CSS", "SQL", "MySQL"]} />
          <SkillCard category="Front-End Development" skills={["Bootstrap", "Tailwind CSS", "Node.js", "React.js", "HTML5", "CSS3"]} />
          <SkillCard category="Back-End Development" skills={["Spring Boot", "RESTful APIs", "Microservices", "GraphQL", "JWT", "OAuth", "WebSocket", "Nginx"]} />
          <SkillCard category="Cloud & AI" skills={["Amazon AWS", "S3", "Lambda", "Machine Learning", "TensorFlow", "Keras", "OpenCV", "Scikit-Learn"]} />
          <SkillCard category="Tools & Technologies" skills={["Git", "GitHub", "Linux", "Agile", "Scrum Methodologies"]} />
          <SkillCard category="Data Analysis & Visualization" skills={["SQL", "MySQL", "Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau"]} />
        </div>
      </Section>

      <Section id="experience" title={<><Briefcase className="inline w-5 h-5 mr-2" />Experience</>} >
        <div className="space-y-6 animate-fade-in">
          <ExperienceCard 
            title="Cloud Computing Trainee"
            company="AWS re/Start Program, Conduira"
            duration="3 Months, 2022"
            description={[
              "Completed a 12-week training program focused on IT fundamentals, cloud computing, and AWS services.",
              "Gained hands-on experience with AWS tools including EC2, S3, IAM, RDS, and VPC.",
              "Earned AWS Certified Cloud Practitioner certification."
            ]}
          />
          <ExperienceCard 
            title="Software Development Intern"
            company="Coding Hub Innovations Pvt. Ltd."
            duration="2 Months"
            description={[
              "Completed training in Core Java, MySQL, HTML/CSS, and Git, focusing on backend development.",
              "Built mini-projects combining Java-based logic with MySQL databases.",
              "Applied clean code principles and collaborated using Git."
            ]}
          />
        </div>
      </Section>

      <Section id="projects" title={<><FolderOpen className="inline w-5 h-5 mr-2" />Projects</>} >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <ProjectCard 
            title="Real-Time Weather App"
            description="A responsive web application to display real-time weather data using OpenWeatherMap API, deployed on GitHub Pages."
            technologies={["HTML", "CSS", "JavaScript", "AJAX", "OpenWeatherMap API"]}
          />
          <ProjectCard 
            title="Instance Segmentation using Mask R-CNN"
            description="Developed a deep learning model for object detection on the Indian Driving Dataset, with a detailed blog published on Medium."
            technologies={["Python", "Mask R-CNN", "TensorFlow", "EDA"]}
          />
          <ProjectCard 
            title="Scalable Static Website Deployment Using AWS"
            description="Hosted a responsive static website on Amazon S3 with CloudFront CDN, HTTPS, and automated deployment workflows."
            technologies={["AWS S3", "Route 53", "CloudFront", "ACM", "AWS CLI"]}
          />
        </div>
      </Section>

      <Section id="contact" title={<><Mail className="inline w-5 h-5 mr-2" />Contact</>} >
        <div className="text-center space-y-3 animate-fade-in">
          <p className="text-gray-600 flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <a href="mailto:ananth.surampudi123@gmail.com" className="text-blue-600 hover:underline">ananth.surampudi123@gmail.com</a>
          </p>
          <p className="text-gray-600 flex justify-center items-center gap-2">
            <Laptop className="w-5 h-5 text-blue-600" />
            +1 (346) 634-6158
          </p>
          <div className="space-x-4 flex justify-center">
            <a href="https://www.linkedin.com/in/ananth-surampudi-4b27552b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkYf8nDQSQPCByY7oku1%2FQg%3D%3D" className="flex items-center gap-1 text-blue-600 hover:underline">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="https://github.com/S-Ananth7" className="flex items-center gap-1 text-blue-600 hover:underline">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="bg-gray-800 text-white py-4 mt-12 animate-fade-in">
        <div className="container mx-auto text-center">
          <p>© 2025 Ananth Surampudi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
