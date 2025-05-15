
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                  Ваше имя
                </label>
                <Input 
                  id="name" 
                  placeholder="Введите ваше имя" 
                  className="w-full"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Введите ваш email" 
                  className="w-full"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о вашем проекте..." 
                  className="w-full" 
                  rows={4}
                />
              </div>
              <Button className="w-full py-6" type="submit">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-5">Контактная информация</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-primary">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark">Адрес</h4>
                    <p className="text-gray-600">ул. Примерная, 123, Москва, 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-primary">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark">Телефон</h4>
                    <p className="text-gray-600">+7 (123) 456-78-90</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-primary">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark">Email</h4>
                    <p className="text-gray-600">info@легкосайт.рф</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-primary">
                    <Icon name="Clock" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-dark">Время работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-dark mb-3">Мы в социальных сетях</h4>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Facebook" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Instagram" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Twitter" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Linkedin" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
