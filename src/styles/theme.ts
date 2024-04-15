const theme = {
  colors: {
    ocean900: '#171c25',
    ocean800: '#1f2430',
    ocean700: '#242936',
    ocean400: '#4e5867',
    ocean300: '#669bb0',
    ocean200: '#75d4f9',
    
    ocean800Opacity: '#669bb014',
    ocean300Opacity: '#669bb063',
    
    gray600: '#a3a3a361',
    gray400: '#707070',
    gray100: '#a3a3a3',

    grayOpacity: '#4e586747',

    red: '#ed6a5e',

    yellow900: '#f4bf4f',
    yellow800: '#fbcc67',

    golden: '#8f6f2a',
    
    orange: '#ffa5009c',

    green500: '#acffac91',
    green: '#61c554',

    black: '#000000',
    blackOpacity: '#00000069',
    white: '#FFFFFF',
  },

  sectionWidth: '250',
  border: '0.5px solid',

  pxToRem(value: number){
    const transformPxToRem = value / 16;
    return `${transformPxToRem}rem`;
  }
}

export default theme