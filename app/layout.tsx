import Link from 'next/link';
import '../app/globals.css';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1"/> 
         </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href='/blog'>Blog</Link></li>
            </ul>
          </nav>
        
        </header>
        <main className="container">{children}</main>
        
        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;



