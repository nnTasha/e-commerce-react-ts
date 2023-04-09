import styles from './MainContainer.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: ContainerProps) => {
  return <div className={styles.containerSection}>{children}</div>;
};

export default MainContainer;
