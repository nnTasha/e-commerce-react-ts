import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Menpage from './Pages/Menpage/Menpage';
import Womenpage from './Pages/Womenpage/Womenpage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import MainContainer from './components/SectionContainer/MainContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Collections from './Pages/Collections/Collections';

function App() {
  return (
    <>
      <MainContainer>
        <Header>
          <Nav />
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/menpage" element={<Menpage />} />
          <Route path="/womenpage" element={<Womenpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
