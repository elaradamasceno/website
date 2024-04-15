// type ExtensionIcon = React.FC<any>;

export enum ValueExtensions {
  ColorHighlight,
  CssIntellisense,
  DotEnv,
  ES7,
  GitLens,
  ImportCost,
  Jest,
  LiveShare,
  MaterialIcon,
  Prettier,
  Prisma,
  Quokka,
  RestClint,
  SVGPreview,
  styledComponent
}

export interface ExtensionInfo {
  text: string;
  link: string;
}

export const extensionInfos: Record<ValueExtensions, ExtensionInfo> = {
  [ValueExtensions.ColorHighlight]: { 
    text: 'Color Highlight',
    link: 'https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight'
  },
  [ValueExtensions.CssIntellisense]: { 
    text: 'CSS Intellisense',
    link: 'https://marketplace.visualstudio.com/items?itemName=zenghongtu.vscode-css-intellisense'
  },
  [ValueExtensions.DotEnv]: { 
    text: 'DotENV',
    link: 'https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv'
  },
  [ValueExtensions.ES7]: { 
    text: 'ES7 React/Redux/GraphQL/React-Native snippets',
    link: 'https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets'
  },
  [ValueExtensions.GitLens]: { 
    text: 'GitLens',
    link: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'
  },
  [ValueExtensions.ImportCost]: { 
    text: 'Import Cost',
    link: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost'
  },
  [ValueExtensions.Jest]: { 
    text: 'Jest',
    link: 'https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest'
  },
  [ValueExtensions.LiveShare]: { 
    text: 'Live Share',
    link: 'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare'
  },
  [ValueExtensions.MaterialIcon]: { 
    text: 'Material Icon Theme',
    link: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme'
  },
  [ValueExtensions.Prettier]: { 
    text: 'Prettier',
    link: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode'
  },
  [ValueExtensions.Prisma]: { 
    text: 'Prisma',
    link: 'https://marketplace.visualstudio.com/items?itemName=Prisma.prisma' 
  },
  [ValueExtensions.Quokka]: { 
    text: 'Quokka.js',
    link: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode'
  },
  [ValueExtensions.RestClint]: { 
    text: 'REST Clint',
    link: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client'
  },
  [ValueExtensions.SVGPreview]: { 
    text: 'SVG Preview',
    link: 'https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview'
  },
  [ValueExtensions.styledComponent]: { 
    text: 'vscode-styled-components',
    link: 'https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components'
  },
}
