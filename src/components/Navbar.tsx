
import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-montserrat font-bold text-xl">ЛегкоСайт</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#services" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="font-medium text-gray-700 hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Контакты
            </a>
          </div>

          <Button className="hidden md:block btn-hover" size="sm">
            Связаться
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="font-medium px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </a>
              <a
                href="#services"
                className="font-medium px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#about"
                className="font-medium px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="#contact"
                className="font-medium px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <Button className="self-start" size="sm">
                Связаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
