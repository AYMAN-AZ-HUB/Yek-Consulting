import React from "react";

const Card = ({ children }) => {
  return (
    <div className='shadow rounded-lg overflow-hidden dark:bg-neutral-100'>
      {children}
    </div>
  );
};  

const CardContent = ({ children}) => {
  return (
    <div className='p-4 dark:bg-neutral-700 '>
      {children}
    </div>
  );
};

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="mb-4">
          <h1 className="text-5xl font-bold text-center mt-8 pt-14">Trouez un avocat en ligne n’est plus impossible</h1>
        </div>
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <Card className="w-full md:w-1/2">
            <CardContent className="space-y-2 p-4">
              <p className="text-2xl font-semibold dark:text-gray-100 p-4 text-center">
                Yek conseil est une entreprise spécialisée en consultation juridique. Que vous ayez besoin d’une consultation juridique pour vos projets professionnels ou personnels, nous mettons à votre disposition des avocats experts avec plusieurs années d’expérience, qui vont vous accompagner tout au long de vos projets.
              </p>
            </CardContent>
          </Card>
         
        </div>
      </div>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="/assets/image2.png"
            alt=""
          />
          <div>
            <h3 className="text-2xl font-bold dark:text-gray-100">Une accessibilité illimitée avec nos services en ligne de consultation juridique </h3>
          </div>
          <p className="text-sm dark:text-gray-400">
            Yek conseil est une entreprise spécialisée en consultation juridique. Que vous avez besoin d’une consultation juridique pour vos projets professionnels ou personnels, nous mettons à votre disposition des avocats experts avec plusieurs années d’expérience, qui vont vous accompagner tout au long vos projets.  

            Aujourd’hui vous pouvez bénéficier d’une consultation juridique en toute rapidité et en toute confidentialité. Nous nous engageons à vous un service disponible et accessible 24h/7j, ou nos experts sont à votre écoute pour répondre à toutes vos questions en détail.  
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h3 className="font-bold text-2xl dark:text-gray-100">Une accessibilité illimitée avec nos services en ligne de consultation juridique </h3>
          <p className="text-sm dark:text-gray-400">
            Chez Yek conseil, nos clients sont au cœur de nos préoccupations, nous veillons toujours à les satisfaire, et nous sommes conscients de l’importance des consultations juridiques dans la prise des décisions, c’est pourquoi notre cabinet de consultation juridique, s’engage à vous offrir des services personnalisés, adaptés parfaitement à vos besoins. De plus vous pouvez même choisir l’avocat qui vous correspond à vos attentes et à vos exigences. Alors, qu’attendez-vous pour nous contacter et bénéficier de conseils juridiques sur mesure et d’un accompagnement professionnel de qualité !! 
          </p>
          <img
            className="drop-shadow-2xl cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="/assets/Image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
