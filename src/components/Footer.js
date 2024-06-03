import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

const socialMediaIcons = [
  { icon: <FaFacebook size={28} />, link: "#" },
  { icon: <FaInstagram size={28} />, link: "#" },
  { icon: <FaTwitter size={28} />, link: "#" },
];

const footerSections = [
  {
    title: "YEK conseil",
    content: "We are the best consulting firm in the world ?",
    footerText: "@yekconseil 2024 All rights Reserved",
    links: [
      { label: "Resources", url: "#" },
      { label: "Contact us", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Contact Info",
    links: [
      { label: "43 Rue d'Aulnay, 95500 GONESSE", url: "#" },
      { label: "Email: contact@yekconseil.fr", url: "mailto:contact@yekconseil.fr" },
      { label: "Numéro : +33 1 39 85 91 68", url: "tel:+33139859168" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Confidentiality and Security", url: "#" },
      { label: "Terms and Conditions", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {/* Section 1: Logo and Description */}
          <div className="w-full md:w-1/4 mb-4 text-center pr-20">
            <img src="https://www.azholding.fr/wp-content/uploads/2024/04/azholding2.png" alt="Yek Conseil Logo" className="w-20 mx-auto mb-4 justify-center items-center" />
            <p>{footerSections[0].content}</p>
            <p className="text-sm mt-4">{footerSections[0].footerText}</p>
          </div>

          {/* Section 2: Contact Info */}
          <div className="w-full md:w-1/4 mb-4 pl-16">
            <h2 className="font-bold mb-3">{footerSections[1].title}</h2>
            <ul>
              {footerSections[1].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.url} className="hover:underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Page Links */}
          <div className="w-full md:w-1/4 mb-4 pl-40">
            <h2 className="font-bold mb-3">Page</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">ACCUEIL</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">À PROPOS</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">NOS SERVICES</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">BLOG</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">CONTACT</a></li>
            </ul>
          </div>

          {/* Section 4: Newsletter Signup */}
          <div className="w-full md:w-1/4">
            <h2 className="font-bold mb-3">Newsletter</h2>
            <p>Inscrivez-vous à notre newsletter.</p>
            <form className="mt-4">
              <input type="email" placeholder="E-mail" className="w-full p-2 mb-4 rounded bg-gray-600 text-white" />
              <button type="submit" className="bg-blue-500 text-white py-3 w-full rounded hover:bg-blue-600 transition">S'ABONNER</button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>Copyright © YEK Conseil 2024, Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
