export enum ValueThemes {
  Ayu,
  TokyoNight
}

export interface ThemeInfo {
  text: string;
  link: string;
}

export const themesInfo: Record<ValueThemes, ThemeInfo> = {
  [ValueThemes.Ayu]: { 
    text: 'Ayu',
    link: 'https://marketplace.visualstudio.com/items?itemName=teabyii.ayu'
  },
  [ValueThemes.TokyoNight]: { 
    text: 'Tokyo Night',
    link: 'https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night'
  },
}