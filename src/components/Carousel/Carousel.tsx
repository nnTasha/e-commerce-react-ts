import { useEffect, useState } from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import ItemCard from '../ItemCard/ItemCard';
import { Product } from '../../types/types';

import styles from './Carousel.module.scss';

type CarouselProps = {
  products?: Product[];
  category: string;
};

export default function Carousel({ products = [], category }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(products.length);

  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  if (!products.length) {
    return <p>No products available</p>;
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.sliderUpperPart}>
        {category.toUpperCase()}
        <div>
          <LeftOutlined onClick={goToPrevious} />{' '}
          <RightOutlined onClick={goToNext} />
        </div>
      </div>
      <div className={styles.carouselContent}>
        {products.map((item, index) => (
          <div
            key={item.id}
            className={styles.slideItem}
            style={{
              transform: `translateX(-${(currentIndex - index) * 100}%)`,
            }}
          >
            <ItemCard
              title={item.title}
              price={item.price}
              imgSrc={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
