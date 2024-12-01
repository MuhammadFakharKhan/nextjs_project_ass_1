import Image from 'next/image';
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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href='/blog'>Blog</a></li>
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



