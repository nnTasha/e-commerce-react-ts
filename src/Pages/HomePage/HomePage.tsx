import { Space } from 'antd';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchInput from '../../components/SearchInput/SearchInput';

import styles from './HomePage.module.scss';
import Carousel from '../../components/Carousel/Carousel';
import useProducts from '../../hooks/useProducts';

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
        <Carousel products={products} category="Recently viewed " />
      </section>
    </>
  );
};
export default Home;
