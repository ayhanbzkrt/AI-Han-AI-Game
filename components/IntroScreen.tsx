import React from 'react';
import { GameModule } from '../types';
import ModuleCard from './ModuleCard';

interface IntroScreenProps {
  onModuleSelect: (module: GameModule) => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onModuleSelect }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 text-center">
      <div>
        <h1 className="text-6xl md:text-8xl font-bangers text-[#7cf] animate-glow">AI'Han</h1>
        <p className="text-xl md:text-2xl text-gray-300 opacity-80 mt-2">Gelişmiş Yapay Zeka Oyunu: Bir Modül Seç</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-5">
        <ModuleCard 
          module={GameModule.Hands} 
          icon="fa-hand-paper" 
          title="El Kontrolü" 
          description="Ellerinizle tankları kontrol edin, düşmanları yok edin." 
          onSelect={onModuleSelect} 
        />
        <ModuleCard 
          module={GameModule.FaceMesh} 
          icon="fa-head-side-mask" 
          title="Yüz Kontrolü" 
          description="Yüzünüzü kullanarak uzayda gezinin veya meyve yiyin." 
          onSelect={onModuleSelect} 
        />
        <ModuleCard 
          module={GameModule.Pose} 
          icon="fa-running" 
          title="Hareket Kontrolü" 
          description="Vücut hareketlerinizle oyunlar oynayın." 
          onSelect={onModuleSelect} 
        />
        <ModuleCard 
          module={GameModule.Voice} 
          icon="fa-microphone-alt" 
          title="Ses Tanıma" 
          description="Sözcüklerle robotunuzu kontrol edin." 
          onSelect={onModuleSelect} 
        />
        <ModuleCard 
          module={GameModule.Robotics} 
          icon="fa-robot" 
          title="Robotik Kodlama" 
          description="Bloklarla robotunuzu programlayın." 
          onSelect={onModuleSelect} 
        />
      </div>
       <div className="absolute bottom-4 text-xs text-gray-400 opacity-70">
            <p>Geleceğin Mucitleri: Yapay Zeka Atölyesi | Eğitmen: AI'Han Academy ._. Ayhan Bozkurt</p>
        </div>
    </div>
  );
};

export default IntroScreen;
