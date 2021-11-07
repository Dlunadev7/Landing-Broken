import React from 'react';
import { FabWhatsapp } from './components/fabs/whatsapp/FabWhatsapp';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Navbar } from './components/navbar/Navbar';
import { FirstSection } from './components/sections/FirstSection';
import { FiveSection } from './components/sections/FiveSection';
import { FourSection } from './components/sections/FourSection';
import { SecondSection } from './components/sections/SecondSection';
import { SixSection } from './components/sections/SixSection';
import { ThirdSection } from './components/sections/ThirdSection';
import { SocialNetwork } from './components/social-network/SocialNetwork';

import './icomoon/style.css';
import './css/style.css';

export const App = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourSection />
        <FiveSection />
        <SixSection />
        <SocialNetwork />
        <FabWhatsapp />
      </Main>
      <Footer />
    </>
  )
}
