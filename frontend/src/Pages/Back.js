import React from 'react';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();
  
  const buttonClick = () => {
    navigate('/login');
  };

  return (
    <>
     
      <div className="text-black justify-center mt-10 sm:mt-16 md:mt-28 flex flex-col items-center font-bold text-2xl sm:text-4xl md:text-6xl">
        <h1>Welcome!</h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl mt-4">Please login here...</h2>
      </div>

     
      <div className="justify-center flex mt-8">
        <button
          onClick={buttonClick}
          className="bg-yellow-400 font-bold text-lg sm:text-xl md:text-2xl py-2 px-6 sm:px-8 md:px-10 rounded-lg text-blue-600 hover:bg-yellow-500 transition duration-150"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Back;
