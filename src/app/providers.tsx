'use client'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import { PagesMenuProvider } from '@/context/PagesMenu';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <PagesMenuProvider>
        {children}
      </PagesMenuProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}