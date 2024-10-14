import React from 'react';
import logo from '../assets/imgs/logo-footer.svg'; 

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-8">
    <div className="container mx-auto flex justify-between items-center">
      <div className="space-y-2">
        <a href="#" className="block hover:underline">Linkedin</a>
        <a href="#" className="block hover:underline">Crunchbase</a>
        <a href="#" className="block hover:underline">Hackernews</a>
      </div>
      <div className="text-right">
        <div className="mb-2">
        <img src={logo} alt="Logo de Batabit" className="self-center" />
        </div>
        <p className="text-sm">© Batabit 2020</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
