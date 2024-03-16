import { styled, css } from "styled-components";

interface ContainerProps {
  $isActive: boolean
  $hasFlipped?: boolean
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, $isActive, $hasFlipped }) => css`
    background: transparent;
    border: none;
    padding: ${theme.pxToRem(10)};

    ${$isActive && `
      background-color: ${theme.colors.ocean300Opacity};
      border-left: 2px solid ${theme.colors.ocean200};
      cursor: pointer;

      svg{
        color: ${theme.colors.ocean200} !important;
      }
    `}

    ${$hasFlipped && `
      transform: scaleX(-1);
    `}

    &:hover{ 
      svg{
        color: ${theme.colors.ocean200};
      }
    }
  `}
`