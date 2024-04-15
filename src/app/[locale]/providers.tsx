'use client'
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';
import { PagesMenuProvider } from '@/context/PagesMenu';
import { FilesProvider } from '@/context/Files';
import { SectionsProvider } from '@/context/Sections';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <PagesMenuProvider>
        <SectionsProvider>
          <FilesProvider>
              {children}
          </FilesProvider>
        </SectionsProvider>
      </PagesMenuProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}