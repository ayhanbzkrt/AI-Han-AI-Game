import React from 'react';
import { ModuleCardProps } from '../types';

const ModuleCard: React.FC<ModuleCardProps> = ({ module, icon, title, description, onSelect }) => {
  return (
    <div
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-4 w-40 h-52 md:w-52 md:h-60 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#7cf]/20 hover:to-[#f38]/10 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#7cf]/40 hover:border-[#7cf] flex flex-col justify-center items-center"
      onClick={() => onSelect(module)}
    >
      <i className={`fas ${icon} text-4xl md:text-5xl mb-3 text-[#7cf] text-shadow`}></i>
      <h3 className="font-press-start text-sm md:text-base text-white text-shadow-lg shadow-black/80">{title}</h3>
      <p className="text-xs md:text-sm text-gray-300 mt-2 font-light">{description}</p>
    </div>
  );
};

export default ModuleCard;
