import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MenPage from './pages/MenPage/MenPage';
import WomenPage from './pages/WomenPage/WomenPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

import MainContainer from './Layout/SectionContainer/MainContainer';
import Header from './Layout/Header/Header';
import { Footer } from './Layout/Footer/Footer';

import { ProductsContextProvider } from './context/ProductsContext';

function App() {
  return (
    <>
      <MainContainer>
        <ProductsContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </ProductsContextProvider>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
