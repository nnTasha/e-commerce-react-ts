import type { PropsWithChildren } from 'react';
import styles from './MainContainer.module.scss';

type ContainerProps = PropsWithChildren<{}>;

const MainContainer = ({ children }: ContainerProps) => {
  return <div className={styles.containerSection}>{children}</div>;
};

export default MainContainer;
