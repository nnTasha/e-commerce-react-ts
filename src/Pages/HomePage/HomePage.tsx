import { Space } from 'antd';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchInput from '../../components/SearchInput/SearchInput';

import styles from './HomePage.module.scss';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <section className={styles.sectionContainer}>
        <div className={styles.searchInput}>
          <SearchInput placeholder="find our item" style={{ width: '60%' }} />
        </div>
        <div className={styles.searchButton}>
          <Space size={30}>
            <SearchButton title={`Men's clothes`} />
            <SearchButton title={`Women's clothes`} />
            <SearchButton title={'Beauty'} />
            <SearchButton title={'Accessories'} />
          </Space>
        </div>
      </section>
      <section>
        <Carousel />
      </section>
    </>
  );
};
export default Home;
