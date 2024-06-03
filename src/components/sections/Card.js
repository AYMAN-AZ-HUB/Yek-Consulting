import React from 'react';
import { motion } from 'framer-motion';
 
const data = [
  {
    userimage: "/assets/profil1.png",
    heading: "Lorem Ipsum ",
  },
  {
    userimage: "/assets/profil2.png",
    heading: "Lorem Ipsum",
  },
  {
    userimage: "/assets/profil3.png",
    heading: "Lorem Ipsum ",
  },
 
];
 
export default function Latest() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-9">
      <div className="text-center mt-8 font-bold text-xl md:text-2xl">
        ARTICLES RÉCENTS
      </div>
      <p className="text-center text-white mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvinar.
      </p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mt-8 justify-center">
        {data.map((d, index) => (
          <motion.div
            key={`listoliver${index}`}
            className="image-grid-item max-w-xs rounded-lg overflow-hidden mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={d.userimage} alt={`User ${index}`} className="w-full" />
            <h2 className="text-lg font-semibold px-2 mt-2">{d.heading}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}