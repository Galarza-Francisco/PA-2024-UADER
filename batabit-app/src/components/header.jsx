
import React from 'react';
import logo from '../assets/imgs/logo.svg'; 

const Header = () => {
  return (
<>
    <header className="relative flex flex-col items-center justify-center w-full h-[444px] bg-gradient-to-r from-[#282623] to-[#F7931A] text-center">
    <img src={logo} alt="Logo de Batabit" className="w-[151px] h-[24px] mt-16" />
    <div className="w-[90%] max-w-[900px] mt-12 text-center">
      <h1 className="text-[32px] font-bold text-white leading-tight">
        La próxima revolución en el intercambio de criptomonedas.
      </h1>
      <p className="mt-6 text-[18px] font-medium text-[#ffe9d4] leading-relaxed">
        Batabit te ayuda a navegar entre los diferentes precios y tendencias.
      </p>
    </div>
    <a
      href="/"
      className="absolute bottom-[-10px] px-8 w-[229px] h-[56px] bg-[#faf8f7] shadow-lg rounded-full text-xl font-bold text-[#F7931A]"
      style={{ transform: 'translateY(50%)' }}
    >
      Conoce Nuestros Planes
      <span
        className="inline-block w-[13px] h-[8px] ml-2 bg-cover"
        style={{ backgroundImage: `url('./assets/icons/down-arrow.svg')` }}
      ></span>
    </a>
  </header>
  </>
  );
};

export default Header;
