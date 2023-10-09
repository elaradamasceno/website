import React from 'react';
import { Numbers, Wrapper } from './styles';

interface FileNumbersProps {
  children?: React.ReactNode
}

export const FileNumbers = ({ children }: FileNumbersProps) => {
  return(
    <Wrapper>
      <Numbers />
      { children }
    </Wrapper>
  )
}