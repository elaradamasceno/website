import { styled, css } from "styled-components";
import { FilesType } from "@/types/files.type";

interface ContentProps {
  $type: FilesType
}

export const Content = styled.p<ContentProps>`
  ${({ theme, $type }) => css`
    ${$type === 'md' && `
      color: ${theme.colors.golden};
    `}
  `}
`