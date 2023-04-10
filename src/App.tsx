import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MenPage from './pages/MenPage/MenPage';
import WomenPage from './pages/WomenPage/WomenPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';

import MainContainer from './components/SectionContainer/MainContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import './App.css';

function App() {
  return (
    <>
      <MainContainer>
        <Header>
          <Nav />
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
