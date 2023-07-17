// import { LuShirt } from 'react-icons/lu';

// import type { MenuProps } from 'antd';
// import { Menu } from 'antd';

// import ItemCard from '@/components/ItemCard/ItemCard';

// import styles from './CollectionsPage.module.scss';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuProps['items'] = [
//   getItem('Collection One', 'sub1', <LuShirt />, [
//     getItem('Option 1', '1'),
//     getItem('Option 2', '2'),
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//   ]),

//   getItem('Collection Two', 'sub2', <LuShirt />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//   ]),

//   getItem('Collection Three', 'sub4', <LuShirt />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
// ];

// const selectedCollection = [
//   <ItemCard />,
//   <ItemCard />,
//   <ItemCard />,
//   <ItemCard />,
//   <ItemCard />,
//   <ItemCard />,
//   <ItemCard />,
// ];

const Collections = () => {
  //   const onClick: MenuProps['onClick'] = (e) => {
  //     console.log('click ', e);
  //   };
  //   return (
  //     <>
  //       <p className={styles.collectionParagraph}>Check out our new collection</p>
  //       <div className={styles.collectionContainer}>
  //         <Menu
  //           onClick={onClick}
  //           style={{ width: 256 }}
  //           mode="inline"
  //           items={items}
  //         />
  //         <div className={styles.items}>
  //           {selectedCollection.map((item, index) => (
  //             <div key={index} className={styles.item}>
  //               {item}
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </>
  //   );
};
export default Collections;
