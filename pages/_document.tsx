import Footer from 'components/common/footer/Footer';
import NavBar from 'components/common/nav/NavBar';
import { contactInfo, footerNavAltLinks, footerNavLinks, logo, navBarLinks, socialIcons } from 'lib/constants';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-white text-black'>
        <NavBar links={navBarLinks} logo={logo} />
        <Main />
        <Footer contactInfo={contactInfo} footerNavLinks={footerNavLinks} logo={logo} footerNavAltLinks={footerNavAltLinks} socialIcons={socialIcons} />
        <NextScript />
      </body>
    </Html>
  );
}
