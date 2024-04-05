import { styled, css } from "styled-components";

type ColorsTyps = 'red' | 'yellow' | 'green'

interface ContentProps {
  $typeColor: ColorsTyps
}

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;

    gap: ${theme.pxToRem(8)};
  `}
`

export const Content = styled.button<ContentProps>`
  ${({ theme, $typeColor }) => css`
    width: ${theme.pxToRem(14)};
    height: ${theme.pxToRem(14)};

    padding: ${theme.pxToRem(2)};
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 50%;

    ${$typeColor === 'red' && `
      background-color: ${theme.colors.red};
    `}

    ${$typeColor === 'yellow' && `
      background-color: ${theme.colors.yellow900};
    `}

    ${$typeColor === 'green' && `
      background-color: ${theme.colors.green};
    `}

    svg{
      width: ${theme.pxToRem(12)};
      height: ${theme.pxToRem(12)};
    }
  `}
`