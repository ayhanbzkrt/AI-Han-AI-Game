import { GameModule, ModuleInfo } from './types';

export const gameModules: Record<GameModule, ModuleInfo> = {
  [GameModule.Hands]: {
    title: "El Kontrolü",
    description: "Ellerinizle tankları kontrol edin, düşmanları yok edin."
  },
  [GameModule.FaceMesh]: {
    title: "Yüz Kontrolü",
    description: "Yüzünüzü kullanarak uzayda gezinin veya meyve yiyin.",
    modes: [
      { key: 'space', label: 'Uzay Macerası' },
      { key: 'fruit', label: 'Gelişmiş Meyve Avcısı' },
      { key: 'shooter', label: 'Yüz Nişancısı' }
    ]
  },
  [GameModule.Pose]: {
    title: "Hareket Kontrolü",
    description: "Vücut hareketlerinizle koşu, dans ve fitness oyunları oynayın.",
    modes: [
      { key: 'jump', label: 'Süper Parkur' },
      { key: 'dance', label: 'Dans Yarışması' },
      { key: 'fitness', label: 'Fitness Challenge' }
    ]
  },
  [GameModule.Voice]: {
    title: "Ses Tanıma",
    description: "Sözcüklerle robotunuzu kontrol edin, hikayeler anlatın.",
    modes: [
      { key: 'robot', label: 'Arkadaş Robot' },
      { key: 'story', label: 'Hikaye Anlatıcısı' }
    ]
  },
  [GameModule.Robotics]: {
    title: "Robotik Kodlama",
    description: "Basit bloklarla robotunuzu programlayın, görevleri tamamlayın.",
    modes: [
      { key: 'maze', label: 'Mantık Bulmacaları' },
      { key: 'blockly', label: 'Bloklarla Kodla' }
    ]
  }
};
