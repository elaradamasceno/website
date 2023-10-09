const theme = {
  colors: {
    ocean800: '#13181f',
    ocean700: '#171d27',

    ocean300: '#669bb0',
    ocean200: '#75d4f9',
    
    ocean800Opacity: '#669bb014',
    ocean300Opacity: '#669bb063',
    
    gray500: '#4e5867',
    gray400: '#707070',
    gray100: '#a3a3a3',

    grayOpacity: '#4e586747',

    red: '#ed6a5e',

    yellow800: '#818100',
    yellow500: '#b3b304',
    yellow: '#f4bf4f',

    golden: '#8f6f2a',
    
    orange: '#ffa5009c',

    green500: '#acffac91',
    green: '#61c554',

    black: '#000000',
    white: '#FFFFFF',
  },

  pxToRem(value: number){
    const transformPxToRem = value / 16;
    return `${transformPxToRem}rem`;
  }
}

export default theme