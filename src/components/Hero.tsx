
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-28 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-slideUp">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Простые решения для ваших идей
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы создаем легкие и понятные сайты без лишних сложностей. 
              Ваш проект будет работать быстро и эффективно.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="btn-hover text-base py-6 px-8">
                Начать проект
              </Button>
              <Button 
                variant="outline" 
                className="btn-hover text-base py-6 px-8"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Веб-дизайн"
              className="rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
