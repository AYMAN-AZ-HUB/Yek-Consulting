import { useState } from "react"
import profile1 from '../assests/profil1.png'
import profile2 from '../assests/profil2.png'
import profile3 from '../assests/profil3.png'

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default function Component() {
  const [activeSection, setActiveSection] = useState("take-interview")
  const handleSectionClick = (section) => {
    setActiveSection(section)
  };

  const handleSelectClick = () => {
    setActiveSection("dayandhour");
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
        <div className="flex-1 p-8">
          {activeSection === "take-interview" && (
            <div>
            <h2 className="text-2xl font-bold mb-4">Take Interview</h2>
            <div className="flex items-center space-x-4">
              <img src={profile1} alt="Profile" className="w-24 h-24 mb-3 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <button
                  onClick={handleSelectClick}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={profile2} alt="Profile" className="w-24 h-24 mb-3 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">Jack Doe</h3>
                <button
                  onClick={handleSelectClick}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={profile3} alt="Profile" className="w-24 h-24 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">Sven Doe</h3>
                <button
                  onClick={handleSelectClick}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        )}
          {activeSection === "dayandhour" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Day And Hour </h2>
              <p>This is the content for the Day section. You can customize it as needed.</p>
            </div>
          )}
          {activeSection === "Your informations" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Informations</h2>
              <p>This is the content for the Hour section. You can customize it as needed.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}