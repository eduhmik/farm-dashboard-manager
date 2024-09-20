import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import Provider from './provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </Provider>

  );
}
