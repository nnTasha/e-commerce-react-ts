import { Card } from 'antd';
import styles from './ItemCard.module.scss';

const { Meta } = Card;

type ItemCardProps = {
  title?: string;
  price: string;
  imgSrc: string;
  style?: React.CSSProperties;
  imageSize?: { width: number; height: number };
};

export default function ItemCard(props: ItemCardProps) {
  const {
    title,
    imgSrc,
    style,
    imageSize = { width: 100, height: 100 },
    price,
  } = props;

  return (
    <Card
      hoverable
      style={{ width: 200, ...style }}
      cover={
        <div className={styles.cardBottom}>
          <img
            alt="example"
            src={imgSrc}
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>
      }
    >
      <Meta title={title} description={price} />
    </Card>
  );
}
