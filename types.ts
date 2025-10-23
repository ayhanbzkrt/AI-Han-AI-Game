export enum GameModule {
  Hands = 'hands',
  FaceMesh = 'facemesh',
  Pose = 'pose',
  Voice = 'voice',
  Robotics = 'robotics',
}

export type GameMode = 
  'space' | 'fruit' | 'shooter' | // facemesh
  'jump' | 'dance' | 'fitness' |   // pose
  'robot' | 'story' |               // voice
  'maze' | 'blockly' |              // robotics
  null;                             // hands has no sub-mode

export interface ModuleCardProps {
  module: GameModule;
  icon: string;
  title: string;
  description: string;
  onSelect: (module: GameModule) => void;
}

export interface ModuleInfo {
  title: string;
  description: string;
  modes?: { key: GameMode, label: string }[];
}

export type Landmark = {
  x: number;
  y: number;
  z: number;
  visibility?: number;
};
