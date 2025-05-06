import React from 'react';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 transform hover:scale-[1.03] group">
      <h4 className="text-xl font-bold text-blue-800 mb-4 tracking-wide border-b pb-2 group-hover:text-blue-900 transition">
        {category}
      </h4>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="hover:text-blue-600 hover:translate-x-1 transition-all duration-200 ease-in-out"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
