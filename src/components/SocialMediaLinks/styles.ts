import { styled, css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    gap: ${theme.pxToRem(8)};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: inherit;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: ${theme.pxToRem(8)};

    color: ${theme.colors.ocean300};

    &:hover {
      color: ${theme.colors.ocean200};
    }
  `}
`