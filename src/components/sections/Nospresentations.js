import React from 'react';
import { FaSearch } from "react-icons/fa";
import { PiLightbulbFilament } from "react-icons/pi";
import { FaBalanceScale } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
 
const IconRow = () => {
  return (
    <div className="mt-12 text-center">
      <h1 className="text-4xl uppercase font-extrabold mb-12 text-black-800 mt-8">Nos prestations en droit de l'énergie</h1>
      <div className="flex flex-wrap justify-center items-center space-x-16">
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaSearch className="w-16 h-16 cursor-pointer mx-auto text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Droit de l'énergie</p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <PiLightbulbFilament className="w-16 cursor-pointer h-16 mx-auto text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Conseil</p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaBalanceScale className="w-16 h-16 cursor-pointer mx-auto text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Droit administratif</p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaPenFancy className="w-16 h-16 mx-auto cursor-pointer text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Droit des affaires</p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaRegHandshake className="w-16 h-16 mx-auto cursor-pointer text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Droit civil</p>
        </div>
      </div>
    </div>
  );
}
 
export default IconRow;