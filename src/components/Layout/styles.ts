import { styled, css } from "styled-components";

interface MainContentProps {
  $showMenu: boolean
}

export const Container = styled.div`
  ${({theme}) => css`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`  
    width: 80%;

    background-color: ${theme.colors.ocean800};
    border-radius: ${theme.pxToRem(8)};

    @media only screen and (max-width: 600px){
      width: 100%;
      // height: 100%
    }
  `}
`

export const Header = styled.header`
  ${({theme}) => css`
    display: flex;
    gap: ${theme.pxToRem(16)};
    padding: ${theme.pxToRem(10)};
    border-bottom: ${theme.border} ${theme.colors.black};
  `}
`

export const WrapperHeader = styled.div`
  ${({ theme }) => css`  
    width: 100%;
    display: flex;
    justify-content: center;

    gap: ${theme.pxToRem(10)};
  `}
`

export const WrapperIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: ${theme.pxToRem(4)};

    svg{
      color: ${theme.colors.ocean400};
      height: ${theme.pxToRem(16)};
      width: ${theme.pxToRem(16)};

      &:hover{
        color: ${theme.colors.gray100};
        cursor: pointer;
      }
    }
  `}
`

export const HeaderTextCircle = styled.div`
  ${({ theme }) => css`
    border: ${theme.border} ${theme.colors.ocean400};
    border-radius: ${theme.pxToRem(6)};
    background-color: ${theme.colors.ocean700};

    width: 50%;
    padding: ${theme.pxToRem(2)};

    display: flex;
    justify-content: center;
    align-item: center;

    color: ${theme.colors.gray100};

    h6{
      font-size: ${theme.pxToRem(14)};
    }
  `}
`

export const Content = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: ${theme.pxToRem(16)};
  `}
`

export const Aside = styled.aside`
  ${({ theme }) => css`
    border-right: ${theme.border};
    background-color: ${theme.colors.ocean700};

    svg {
      color: ${theme.colors.ocean400};
    }
  `}
`

export const Main = styled.main`
  flex: 1;
  counter-increment: meucontador;
`

export const MainHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`

export const MainContent = styled.div<MainContentProps>`
  ${({ theme, $showMenu }) => css`
    height: ${theme.pxToRem(600)};
    border-left: ${theme.border};
    overflow: auto;

    padding: ${theme.pxToRem(4)} ${theme.pxToRem(14)};

    &::-webkit-scrollbar-track{
      background-color: transparent;
      width: ${theme.pxToRem(16)};
    }

    &::-webkit-scrollbar-thumb{
      background: #444b5a9c;
    }

    &::-webkit-scrollbar{
      width: ${theme.pxToRem(16)};
    }

    counter-reset: section;

    .counter::before{
      counter-increment: section;
      content: counter(section) ' ';

      font-size: ${theme.pxToRem(13)};
      font-weight: 400;

      color: ${theme.colors.gray400};
      margin-bottom: ${theme.pxToRem(4)};
      margin-right: ${theme.pxToRem(28)};
    }

    ${$showMenu ? `
      background-color: ${theme.colors.ocean700};
    ` : `
      background-color: transparent;
    `}
  `}
`