import { Metadata } from 'next';
import './globals.css';
import PrimaryLayout from '@/components/layouts/primaryLayout';



export const metadata: Metadata = {
  title: 'شرکت آرشید متخصص در انجام مطالعات فنی و اقتصادی طرح های نفت، گاز و پتروشیمی',
  description: 'انجام مطالعات فنی و اقتصادی طرح های صنعتی نفت، گاز و پتروشیمی',
  // icons: '/asset/image/logo.png',
};

const RootLayout = ({ children, }: { children: React.ReactNode; }) => {
  return (
    <html lang='fa'>
      <body>
        <PrimaryLayout>
          {children}
        </PrimaryLayout>
      </body>
    </html>
  );
};

export default RootLayout;
