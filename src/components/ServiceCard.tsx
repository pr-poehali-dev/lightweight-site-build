
import React from 'react';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  className
}) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md card-hover", 
      className
    )}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
