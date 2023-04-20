import Carousel from 'react-multi-carousel';

import ItemCard from '../ItemCard/ItemCard';
import { Product } from '../../types/types';

import styles from './Carousel.module.scss';
import 'react-multi-carousel/lib/styles.css';

type CarouselProps = {
  products?: Product[];
  category: string;
};

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1920 },
    items: 5,
  },
  mediumDesktop: {
    breakpoint: { max: 1920, min: 1366 },
    items: 4,
  },
  smallDesktop: {
    breakpoint: { max: 1366, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function CarouselSlide({
  products = [],
  category,
}: CarouselProps) {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.sliderUpperPart}>{category.toUpperCase()}</div>
      <Carousel responsive={responsive} className={styles.carouselContent}>
        {products.map((item) => (
          <div key={item.id} className={styles.slideItem}>
            <ItemCard
              title={item.title}
              price={item.price}
              imgSrc={item.image}
              id={item.id}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
