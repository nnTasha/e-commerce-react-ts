import { Link } from 'react-router-dom';

import { Panel } from 'rsuite';

import styles from './ItemCard.module.scss';

type ItemCardProps = {
  id: number;
  title?: string;
  price: number;
  imgSrc: string;
  style?: React.CSSProperties;
  imageSize?: { width: number; height: number };
};

export default function ItemCard(props: ItemCardProps) {
  const {
    id,
    title,
    imgSrc,
    style,
    imageSize = { width: 100, height: 100 },
    price,
  } = props;

  return (
    <Link to={`/product/${id}`}>
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: 'inline-block', width: 240 }}
      >
        <img
          alt="example"
          src={imgSrc}
          style={{ width: imageSize.width, height: imageSize.height }}
        />
      </Panel>
      <Panel header={title}>
        <p>
          <small>
            Description
            {price}
          </small>
        </p>
      </Panel>
    </Link>
  );
}
