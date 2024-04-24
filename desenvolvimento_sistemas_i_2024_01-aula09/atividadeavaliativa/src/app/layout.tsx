import type { ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

// Componente de cabeçalho
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <Link href="/">
              <a className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">Página Inicial</a>
            </Link>
            <Link href="/newUser">
              <a className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">Cadastrar Usuário</a>
            </Link>
          </div>
          <div>
            <Link href="/logout">
              <a>Logout</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Componente de rodapé
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">@The Best Sistemas</div>
    </footer>
  );
};

interface RootLayoutProps {
  children: ReactNode;
}

// Componente de layout raiz
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={roboto.className}>
      <Header />
      <div className="flex flex-col min-h-screen">
        {children}
        <Footer />
      </div>
    </div>
  );
}
