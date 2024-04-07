import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.blackOpacity};

    h1{
      font-size: ${theme.pxToRem(260)};
      letter-spacing: -${theme.pxToRem(14)};
    }
  `}
`;
