import React from 'react';

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 duration-300">
      <h3 className="text-2xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
