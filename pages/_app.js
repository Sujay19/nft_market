import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import { Navbar, Footer } from '../component';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  // Theme will change with attribute class
  <ThemeProvider attribute="class">
    <div className="bg-white min-h-screen dark:bg-nft-dark">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/e1adcde454.js" crossorigin="anonymous" />
  </ThemeProvider>

);
export default MyApp;
