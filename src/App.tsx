import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MenPage from './pages/MenPage/MenPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Womenpage from './pages/WomenPage/WomenPage';

import MainContainer from './layout/SectionContainer/MainContainer';
import Header from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';

import { ShoppingCartContextProvider } from './context/ShoppingCartContext';
import { ProductsContextProvider } from './context/ProductsContext';

function App() {
  return (
    <>
      <MainContainer>
        <ProductsContextProvider>
          <ShoppingCartContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/men" element={<MenPage />} />
              <Route path="/women" element={<Womenpage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </ShoppingCartContextProvider>
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
