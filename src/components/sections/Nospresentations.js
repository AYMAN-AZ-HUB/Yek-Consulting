import { FaSearch, FaBalanceScale, FaPenFancy, FaRegHandshake } from 'react-icons/fa';
import { PiLightbulbFilament } from 'react-icons/pi';

const ResponsiveComponent = () => {
  return (
    <div className="mt-12 text-center">
      <h1 className="text-4xl uppercase font-extrabold mb-12 text-black-800 mt-8">Nos prestations en droit de l'énergie</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaSearch className="w-16 h-16 cursor-pointer mx-auto text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Consultation téléphonique</p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <PiLightbulbFilament className="w-16 h-16 cursor-pointer mx-auto text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Consultation par email </p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaBalanceScale className="w-16 h-16 cursor-pointer mx-auto text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Rendez-vous avec un avocat </p>
        </div>
        <div className="text-center transform transition-transform duration-300 hover:scale-110">
          <FaPenFancy className="w-16 h-16 mx-auto cursor-pointer text-[#c8b291]" />
          <p className="mt-4 text-base font-semibold text-gray-700">Assistance </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
