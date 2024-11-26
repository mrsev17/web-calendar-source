import styles from './AppContainer.module.css'

interface AppContainer {
  children: React.ReactNode
}

export const AppContainer = ({ children }: AppContainer) => {
  return <div className={styles.appContainer}>{children}</div>
}
