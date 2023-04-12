import { Space } from 'antd';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchInput from '../../components/SearchInput/SearchInput';

import styles from './HomePage.module.scss';

const Home = () => {
  return (
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
  );
};
export default Home;
