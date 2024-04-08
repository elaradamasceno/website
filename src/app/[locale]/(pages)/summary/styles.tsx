import { styled, css } from "styled-components";

type TextType = 'default' | 'refLink' | 'ocean';

interface TextProps {
  $typeText?: TextType
}

export const Container = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.pxToRem(14)};

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    gap: ${theme.pxToRem(6)};
  `}
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    gap: ${theme.pxToRem(2)};
  `}
`;

export const Text = styled.p<TextProps>`
  ${({ theme, $typeText }) => css`
    font-weight: 300;
    font-size: ${theme.pxToRem(13)};
    color: ${theme.colors.white};

    ${$typeText === 'ocean' && `
      color: ${theme.colors.ocean300};
      font-size: ${theme.pxToRem(14)};
      font-weight: 400;
    `}
  `}
`;

export const Link = styled.a<TextProps>`
  ${({ theme, $typeText }) => css`
    ${$typeText === 'refLink' && `
      color: ${theme.colors.green500};
    `}

    b{
      font-weight: 400;
      color: ${theme.colors.ocean200};
    }
  `}
`;

export const Separator = styled.abbr`
  ${({ theme }) => css`
    margin: 0 ${theme.pxToRem(4)};
    color: ${theme.colors.gray100};
  `}
`