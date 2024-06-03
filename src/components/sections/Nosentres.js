// import React from 'react';
// import PropTypes from 'prop-types';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const SliderItem = ({ imageSrc, name, position }) => (
//   <div className="flex flex-col items-center justify-center">
//     <img
//       className="w-[180px] h-[180px] rounded-full object-cover"
//       loading="lazy"
//       alt={`${name}`}
//       src={imageSrc}
//     />
//     <h3 className="text-2xl font-bold mt-4">{name}</h3>
//     <p className="text-lg text-gray-500">{position}</p>
//   </div>
// );

// SliderItem.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   position: PropTypes.string.isRequired,
// };

// const NosEntres = ({ className }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };

//   const sliderItems = [
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//     {
//       imageSrc: '/assets/ico4.png',
//       name: 'AZ mobility',
//       position: 'COO',
//     },
//   ];

//   return (
//     <div className={`flex flex-col items-center justify-center h-screen bg-gray-100 ${className}`}>
//       <h1 className="text-4xl font-bold mb-4">NOS ENTITÉS</h1>
//       <p className="text-lg uppercase text-center mb-8">
//         AZ Holding, à la croisée de la tradition et de l'innovation, érige sa
//         réussite sur des bases solides de gouvernance et de communication. L'équipe
//         repousse chaque jour les limites de la créativité grâce à une culture d'écoute
//         active, d'innovation et de transparence. 
//       </p>
//       <Slider {...settings} className="w-[800px]">
//         {sliderItems.map((item, index) => (
//           <SliderItem
//             key={index}
//             imageSrc={item.imageSrc}
//             name={item.name}
//             position={item.position}
//           />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// NosEntres.propTypes = {
//   className: PropTypes.string,
// };

// NosEntres.defaultProps = {
//   className: '',
// };

// export default NosEntres;
