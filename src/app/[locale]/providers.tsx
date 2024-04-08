'use client'
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';
import { PagesMenuProvider } from '@/context/PagesMenu';
import { FilesProvider } from '@/context/Files';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <PagesMenuProvider>
        <FilesProvider>
          {children}
        </FilesProvider>
      </PagesMenuProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}