import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {NextIntlClientProvider, useMessages} from 'next-intl';

import StyledComponentsRegistry from '@/libs/registry';

import { Providers } from './providers';
import { LayoutComponent } from '@/components/core';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elara Damasceno Leme',
  description: 'Front-End Developer',
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = useMessages();
  
  return (
    <html lang={locale}>
      <Providers>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <StyledComponentsRegistry>
              <LayoutComponent>
                {children}
              </LayoutComponent>
            </StyledComponentsRegistry>
          </NextIntlClientProvider>
        </body>
      </Providers>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode,
//   params: {locale}
// }) {
//   return (
//     <html lang={locale}>
//       <Providers>
//         <body className={inter.className}>
//           <StyledComponentsRegistry>
//             <LayoutComponent>
//               {children}
//             </LayoutComponent>
//           </StyledComponentsRegistry>
//         </body>
//       </Providers>
//     </html>
//   )
// }
