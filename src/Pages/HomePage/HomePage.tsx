import { Button, ButtonToolbar } from 'rsuite';

import SearchInput from '@/components/SearchInput/SearchInput';
import SearchButton from '@/components/SearchButton/SearchButton';
import CarouselSlide from '@/components/Carousel/CarouselSlide';
import useProducts from '@/hooks/useProducts';

import styles from './HomePage.module.scss';

const Home = () => {
  const products = useProducts();

  return (
    <>
      <section className={styles.sectionContainer}>
        <div className={styles.searchInput}>
          <SearchInput placeholder="find your item" style={{ width: '60%' }} />
        </div>
        <div className={styles.searchButton}>
          <ButtonToolbar>
            <Button appearance="default">Men's clothes</Button>
            <Button appearance="default">Women's clothes</Button>
            <Button appearance="default">Beauty</Button>
            <Button appearance="default">Accessories</Button>
          </ButtonToolbar>
        </div>
      </section>
      <section>
        <CarouselSlide products={products} category="Recently viewed " />
      </section>
    </>
  );
};
export default Home;
