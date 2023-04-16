import { useEffect, useState } from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import ItemCard from '../ItemCard/ItemCard';

import styles from './Carousel.module.scss';

const slides = [
  <ItemCard />,
  <ItemCard />,
  <ItemCard />,
  <ItemCard />,
  <ItemCard />,
  <ItemCard />,
  <ItemCard />,
];

type CarouselProps = {
  slides: any[];
};

export default function Carousel(/*{ slides }: CarouselProps*/) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(slides.length);

  useEffect(() => {
    setLength(slides.length);
  }, [slides]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    console.log('go to previous');
  };

  const goToNext = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    console.log('go to next');
  };

  console.log('length', length);
  console.log('currentIndex', currentIndex);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.sliderUpperPart}>
        TEST-TITLE{' '}
        <div>
          <LeftOutlined onClick={goToPrevious} />{' '}
          <RightOutlined onClick={goToNext} />
        </div>
      </div>
      <div
        className={styles.carouselContent}
        style={{
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, currentIndex) => (
          <div key={currentIndex} className={styles.slideItem}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
