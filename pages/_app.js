import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';
import '../styles/globals.css';
import { NFTContextProvider } from '../context/NFTMarketContext';

const MyApp = ({ Component, pageProps }) => (
  <NFTContextProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
    </ThemeProvider>
  </NFTContextProvider>
);
export default MyApp;
