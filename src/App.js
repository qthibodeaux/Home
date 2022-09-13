import { useState } from 'react';
import { Grommet } from 'grommet'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeaderLayer from './components/HeaderLayer';
import Hero from './components/items/Hero';
import Skills from './components/items/Skills';
import Main from './components/Main';

function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const opener = () => setShowSideBar(true)
  const closer = () => setShowSideBar(false)

  return (
    <Grommet>
      <Navbar opener={opener}/>
      <Hero />
      <Skills />
      <Main />
      <Footer />
      {showSideBar && <HeaderLayer closer={closer}/>}
    </Grommet>
  );
}

export default App;
