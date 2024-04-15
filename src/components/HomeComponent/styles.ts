import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: end;

    gap: ${theme.pxToRem(10 )};
  `}
`;

export const WrapperCommands = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.pxToRem(6)};
    color: ${theme.colors.gray600};

  `}
`;

export const Typography = styled.span`
  ${({theme}) => css`
    font-size: ${theme.pxToRem(14)};
    font-weight: 600;
  `}
`;

export const LetterAsIcon = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.pxToRem(10)};
  `}
`

export const CustomIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.pxToRem(6)};

    p, svg {
      height: ${theme.pxToRem(20)};  
      width: ${theme.pxToRem(20)};  

      display: flex;
      align-items: center;
      justify-content: center;

      padding: ${theme.pxToRem(4)};

      border: ${theme.border} ${theme.colors.gray600};
      border-radius: ${theme.pxToRem(4)};
    };
  `}
`;

export const Mobile = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.ocean400};
    font-size: ${theme.pxToRem(12)};
    text-align: center;
  `}
`;