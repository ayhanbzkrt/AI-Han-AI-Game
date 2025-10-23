import React, { useEffect } from 'react';
import { GameModule, GameMode } from '../types';

interface GameContainerProps {
  module: GameModule;
  mode: GameMode;
  onBackToHome: () => void;
}

const GameContainer: React.FC<GameContainerProps> = ({ module, mode, onBackToHome }) => {
  useEffect(() => {
    // This is where MediaPipe, game logic, etc., would be initialized.
    console.log(`Starting game module: ${module}, mode: ${mode}`);

    // Cleanup function
    return () => {
      console.log(`Stopping game module: ${module}`);
    };
  }, [module, mode]);
  
  const getGameInstructions = () => {
    switch(module) {
        case GameModule.Hands: return "Ellerini kullanarak tankları hareket ettir ve ateş et.";
        case GameModule.FaceMesh: return "Başını hareket ettirerek oyna, ateş etmek için ağzını aç.";
        case GameModule.Pose: return "Vücut hareketlerini kullanarak zıpla, eğil ve engelleri aş.";
        case GameModule.Voice: return "Mikrofona konuşarak komutlar ver.";
        case GameModule.Robotics: return "Kod bloklarını birleştirerek robotu programla.";
        default: return "Oyun Yükleniyor...";
    }
  }

  return (
    <div className="w-full h-full max-w-7xl bg-gradient-to-b from-white/5 to-transparent border-2 border-white/10 rounded-2xl shadow-2xl shadow-black/80 p-2 md:p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 transition-opacity duration-500 animate-fadeIn">
      {/* Left Panel: Video and Info */}
      <div className="flex flex-col gap-4 lg:col-span-1">
        <div className="relative w-full aspect-video border-2 border-[#7cf] rounded-xl shadow-lg shadow-[#7cf]/30 animate-pulse-border">
          {/* Placeholder for video and overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Kamera Yükleniyor...</p>
          </div>
          <video id="input_video" autoPlay playsInline className="absolute inset-0 w-full h-full object-cover rounded-lg transform scale-x-[-1] hidden"></video>
          <canvas id="overlay" className="absolute inset-0 w-full h-full object-cover rounded-lg transform scale-x-[-1]"></canvas>
        </div>
        <div className="bg-black/30 p-4 rounded-lg">
          <h3 className="font-bold text-white mb-2">Nasıl Oynanır?</h3>
          <p className="text-sm text-gray-300">{getGameInstructions()}</p>
        </div>
        <div className="text-xs text-center text-gray-400">
            Not: İyi ışık şartları daha stabil takip sağlar.
        </div>
      </div>

      {/* Right Panel: Game Canvas and HUD */}
      <div className="relative flex flex-col gap-4 lg:col-span-2 bg-gradient-to-b from-[#021022] to-[#061233] p-4 rounded-xl border-2 border-white/10">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="font-bangers text-2xl text-[#7cf]">Puan: 0</div>
          <div className="text-sm text-gray-300">Durum: Hazır</div>
          <div className="flex gap-2">
            <button className="bg-gradient-to-r from-[#7cf] to-[#f38] text-black font-press-start text-xs px-4 py-2 rounded-md shadow-lg transition-transform transform hover:scale-105">Başlat</button>
            <button className="bg-gray-700 text-white font-press-start text-xs px-4 py-2 rounded-md hover:bg-gray-600">Sıfırla</button>
          </div>
        </div>
        <div className="flex-grow bg-black rounded-lg border-2 border-gray-700 flex items-center justify-center">
          {/* Placeholder for game canvas */}
          <p className="text-gray-500 font-press-start text-sm">Oyun Alanı</p>
          <canvas id="gameCanvas" className="absolute top-0 left-0 w-full h-full hidden"></canvas>
        </div>
        <button onClick={onBackToHome} title="Ana Sayfaya Dön" className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white/80 hover:bg-[#7cf]/30 hover:text-white transition-all">
          <i className="fas fa-home"></i>
        </button>
      </div>
    </div>
  );
};

export default GameContainer;
