import React, { useState, useCallback } from 'react';
import { GameModule, GameMode, ModuleInfo } from './types';
import IntroScreen from './components/IntroScreen';
import ModuleInfoPopup from './components/ModuleInfoPopup';
import GameContainer from './components/GameContainer';
import { gameModules } from './constants';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<GameModule | null>(null);
  const [activeGameMode, setActiveGameMode] = useState<GameMode>(null);
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const handleModuleSelect = useCallback((module: GameModule) => {
    setActiveModule(module);
    const moduleInfo = gameModules[module];
    if (moduleInfo.modes) {
      setPopupVisible(true);
    } else {
      setActiveGameMode(null); // Hands module has no sub-modes
    }
  }, []);

  const handleGameModeSelect = useCallback((mode: GameMode) => {
    setActiveGameMode(mode);
    setPopupVisible(false);
  }, []);

  const handleClosePopup = useCallback(() => {
    setPopupVisible(false);
    setActiveModule(null);
  }, []);

  const handleBackToHome = useCallback(() => {
    setActiveModule(null);
    setActiveGameMode(null);
    setPopupVisible(false);
  }, []);

  const isGameActive = activeModule !== null && !isPopupVisible;
  const popupInfo: ModuleInfo | undefined = activeModule ? gameModules[activeModule] : undefined;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-2 md:p-4">
      {!isGameActive && <IntroScreen onModuleSelect={handleModuleSelect} />}
      
      {isPopupVisible && popupInfo && (
        <ModuleInfoPopup
          info={popupInfo}
          onModeSelect={handleGameModeSelect}
          onClose={handleClosePopup}
        />
      )}
      
      {isGameActive && activeModule && (
        <GameContainer 
          module={activeModule}
          mode={activeGameMode}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default App;
