import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '@/libs/registry';

import { Providers } from './providers';
import { ComponentLayout } from '@/components/Layout';

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
            <ComponentLayout>
              {children}
            </ComponentLayout>
          </StyledComponentsRegistry>
        </body>
      </Providers>
    </html>
  )
}
