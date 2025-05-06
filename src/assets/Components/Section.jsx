import React from 'react';

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="py-16 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 scroll-mt-20 animate-fade-in"
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
        {title}
      </h2>
      <div className="text-gray-700 text-lg leading-relaxed">{children}</div>
    </div>
  </section>
);

export default Section;
