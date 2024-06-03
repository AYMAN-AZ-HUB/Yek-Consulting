import React from "react";

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center mt-8">Synergies stratégiques pour une croissance durable</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="/assets/image2.png"
            alt=""
          />
          <div>
            <h2 className="font-bold dark:text-gray-300">Lorem, ipsum dolor.</h2>
            <h1 className="text-2xl font-bold dark:text-gray-100">Lorem ipsum dolor sit amet.</h1>
          </div>
          <p className="text-sm dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in
            consectetur eius tempora qui aperiam error natus iste architecto
            distinctio ea inventore iusto quos ullam fuga doloremque quod dicta
            libero non maiores, deleniti atque cumque? Et rerum animi quibusdam
            laboriosam!
          </p>
          <p className="text-sm dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in
            consectetur eius tempora qui aperiam error natus iste architecto
            distinctio ea inventore iusto quos ullam fuga doloremque quod dicta
            libero non maiores, deleniti atque cumque? Et rerum animi quibusdam
            laboriosam!
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold dark:text-gray-300">Lorem ipsum dolor sit.</h2>
          <h1 className="font-bold text-2xl dark:text-gray-100">Lorem ipsum dolor sitamet.</h1>
          <p className="text-sm dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            assumenda rem, autem accusamus magni nam culpa aut perspiciatis,
            totam beatae reiciendis repellendus eligendi? Qui. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Delectus assumenda rem, autem
            accusamus magni nam culpa aut perspiciatis, totam beatae reiciendis
            repellendus eligendi? Qui.
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="/assets/Image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
