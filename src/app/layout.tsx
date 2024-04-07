import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '@/libs/registry';

import { Providers } from './providers';
import { LayoutComponent } from '@/components/core';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elara Damasceno Leme',
  description: 'Front-End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <LayoutComponent>
              {children}
            </LayoutComponent>
          </StyledComponentsRegistry>
        </body>
      </Providers>
    </html>
  )
}
