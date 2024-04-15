import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.pxToRem(theme.sectionWidth)};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    padding: ${theme.pxToRem(10)} ${theme.pxToRem(8)} ${theme.pxToRem(10)} ${theme.pxToRem(8)};
    
    display: flex;
    flex-wrap: wrap;

    gap: ${theme.pxToRem(8)};

    h6{
      text-transform: uppercase;
      font-weight: 500;
    }

    h6, p{
      color: ${theme.colors.ocean400};
      font-size: ${theme.pxToRem(12)};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    justify-content: center;
    align-items: normal;

    gap: ${theme.pxToRem(8)};

    li { color: ${theme.colors.yellow800}; } 
  
    a { 
      color: ${theme.colors.ocean400};
      font-size: ${theme.pxToRem(12)};
    };

    li:hover {
      color: ${theme.colors.yellow800};
      background-color: ${theme.colors.yellow800};
      cursor: pointer;
    }
  `}
`;