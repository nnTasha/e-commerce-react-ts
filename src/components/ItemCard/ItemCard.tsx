import { Card } from 'antd';
const { Meta } = Card;

export default function ItemCard() {
  return (
    <Card
      hoverable
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://origin.md/images/product/thumbs/2023/03/26172084_W_1.jpg"
        />
      }
    >
      <Meta title="TEST" />
    </Card>
  );
}
