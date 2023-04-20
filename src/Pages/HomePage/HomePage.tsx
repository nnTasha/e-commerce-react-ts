import { Space } from 'antd';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchInput from '../../components/SearchInput/SearchInput';

import styles from './HomePage.module.scss';
import useProducts from '../../hooks/useProducts';
import CarouselSlide from '../../components/Carousel/CarouselSlide';

const Home = () => {
  const products = useProducts();

  return (
    <>
      <section className={styles.sectionContainer}>
        <div className={styles.searchInput}>
          <SearchInput placeholder="find your item" style={{ width: '60%' }} />
        </div>
        <div className={styles.searchButton}>
          <Space size={30}>
            <SearchButton title="Men's clothes" />
            <SearchButton title="Women's clothes" />
            <SearchButton title="Beauty" />
            <SearchButton title="Accessories" />
          </Space>
        </div>
      </section>
      <section>
        <CarouselSlide products={products} category="Recently viewed " />
      </section>
    </>
  );
};
export default Home;
