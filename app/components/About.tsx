import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-800 w-full flex flex-col items-center py-14">
      <h2 className="text-white font-bold text-4xl mb-4">
        Try it for yourself
      </h2>
      <p className="text-white text-xl mb-6">
        Create and send crypto with DCEX
      </p>
      <button className="bg-white px-6 py-3 text-blue-800 rounded-lg font-bold hover:bg-gray-200 transition">
        Create a DCEX Account
      </button>
    </div>
  );
};

export default About;
