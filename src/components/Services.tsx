
import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Веб-дизайн',
      description: 'Создаем красивый и удобный дизайн для вашего сайта, соответствующий последним тенденциям.',
      icon: 'Palette',
    },
    {
      title: 'Разработка',
      description: 'Воплощаем дизайн в функциональный сайт с чистым кодом и быстрой загрузкой.',
      icon: 'Code',
    },
    {
      title: 'Оптимизация',
      description: 'Улучшаем производительность сайта и его видимость в поисковых системах.',
      icon: 'BarChart2',
    },
    {
      title: 'Поддержка',
      description: 'Обеспечиваем техническую поддержку и обновление вашего сайта.',
      icon: 'LifeBuoy',
    },
  ];

  return (
    <section id="services" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Мы предлагаем комплексные решения для создания и развития вашего онлайн-присутствия
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
