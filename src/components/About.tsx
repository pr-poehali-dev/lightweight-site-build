
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="О нашей команде"
              className="rounded-lg shadow-lg" 
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">О нас</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Мы команда талантливых дизайнеров и разработчиков, 
              которые стремятся создавать простые и понятные веб-решения. 
              Наша философия — делать технологии доступными для всех.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              С 2018 года мы помогли более 200 клиентам реализовать их проекты. 
              Мы верим, что хороший сайт не должен быть сложным — он должен быть 
              эффективным и удобным.
            </p>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                </div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-primary">5</div>
                </div>
                <p className="text-gray-600">Лет опыта</p>
              </div>
              <div className="w-1/2 px-2">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                </div>
                <p className="text-gray-600">Положительных отзывов</p>
              </div>
              <div className="w-1/2 px-2">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-primary">350+</div>
                </div>
                <p className="text-gray-600">Завершенных проектов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
