import styles from './MainContainer.module.scss'

type ContainerProps = {
    children : React.ReactNode
}

const MainContainer = ({children} :ContainerProps) => {
    
    return (
        <section className={styles.containerSection}>{children }</section>
    )
}

export default MainContainer
