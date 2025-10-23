import React from 'react';
import { GameMode, ModuleInfo } from '../types';

interface ModuleInfoPopupProps {
  info: ModuleInfo;
  onModeSelect: (mode: GameMode) => void;
  onClose: () => void;
}

const ModuleInfoPopup: React.FC<ModuleInfoPopupProps> = ({ info, onModeSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#0f1724]/95 border-2 border-[#7cf] rounded-xl p-6 md:p-8 w-11/12 max-w-md text-center shadow-2xl shadow-[#7cf]/20">
        <h2 className="text-3xl md:text-4xl font-bangers text-[#7cf] mb-3">{info.title}</h2>
        <p className="text-base text-gray-200 mb-6">{info.description}</p>
        
        {info.modes && (
          <div className="flex flex-col items-center gap-3 mb-6">
            <p className="font-press-start text-sm text-gray-300 mb-2">Oyun Modu Seç:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {info.modes.map((mode) => (
                <button
                  key={mode.key}
                  onClick={() => onModeSelect(mode.key)}
                  className="bg-gradient-to-r from-[#7cf] to-[#f38] text-black font-press-start text-xs px-4 py-2 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-[#7cf]/50"
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {!info.modes && (
          <button
            onClick={() => onModeSelect(null)}
            className="bg-gradient-to-r from-[#7cf] to-[#f38] text-black font-press-start text-sm px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-[#7cf]/50 mb-4"
          >
            Oyuna Başla
          </button>
        )}

        <div>
          <button
            onClick={onClose}
            className="bg-gray-700/50 text-gray-300 text-xs px-4 py-2 rounded-md hover:bg-gray-600/50 transition-colors"
          >
            Geri Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleInfoPopup;
