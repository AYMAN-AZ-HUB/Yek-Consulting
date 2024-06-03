import { useState } from "react";
import profile1 from '../assests/profil1.png';
import profile2 from '../assests/profil2.png';
import profile3 from '../assests/profil3.png';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default function Component() {
  const [activeSection, setActiveSection] = useState("take-interview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleSelectClick = (nextSection) => {
    setActiveSection(nextSection);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Card className="w-[800px] h-[500px] rounded-lg shadow-lg flex">
        <div className="bg-gray-500 text-white p-6 rounded-l-lg">
          <div
            className={`py-4 px-6 cursor-pointer ${
              activeSection === "take-interview" ? "bg-black rounded-lg" : "hover:bg-gray-400 rounded-lg"
            }`}
            onClick={() => handleSectionClick("take-interview")}
          >
            Take Interview
          </div>
          <div
            className={`py-4 px-6 cursor-pointer ${
              activeSection === "dayandhour" ? "bg-black rounded-lg" : "hover:bg-gray-400 rounded-lg"
            }`}
            onClick={() => handleSectionClick("dayandhour")}
          >
            Day And Hour
          </div>
          <div
            className={`py-4 px-6 cursor-pointer ${
              activeSection === "Your informations" ? "bg-black rounded-lg" : "hover:bg-gray-400 rounded-lg"
            }`}
            onClick={() => handleSectionClick("Your informations")}
          >
            Your Informations
          </div>
        </div>
        <div className="flex-1 p-6">
          {activeSection === "take-interview" && (
            <div >
              <h2 className="text-2xl font-bold mb-4">Take Interview</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex items-center space-x-4">
                <img src={profile1} alt="Profile" className="w-24 h-24 mb-3 rounded-full" />
                <div>
                  <h3 className="text-sm font-bold">John Doe</h3>
                  <button
                    onClick={() => handleSelectClick("dayandhour")}
                    className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src={profile2} alt="Profile" className="w-24 h-24 mb-3 rounded-full" />
                <div>
                  <h3 className="text-sm font-bold">Melanie Doe</h3>
                  <button
                    onClick={() => handleSelectClick("dayandhour")}
                    className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src={profile2} alt="Profile" className="w-24 h-24 mb-3 rounded-full" />
                <div>
                  <h3 className="text-sm font-bold">Joe Doe</h3>
                  <button
                    onClick={() => handleSelectClick("dayandhour")}
                    className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src={profile3} alt="Profile" className="w-24 h-24 rounded-full" />
                <div>
                  <h3 className="text-sm font-bold">Sven Doe</h3>
                  <button
                    onClick={() => handleSelectClick("dayandhour")}
                    className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
          {activeSection === "dayandhour" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Day And Hour</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">
                    Day
                  </label>
                  <input
                    type="date"
                    id="day"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hour">
                    Hour
                  </label>
                  <input
                    type="time"
                    id="hour"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectClick("Your informations")}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Select
                </button>
              </form>
            </div>
          )}
          {activeSection === "Your informations" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Informations</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="secondName">
                    Second Name
                  </label>
                  <input
                    type="text"
                    id="secondName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}