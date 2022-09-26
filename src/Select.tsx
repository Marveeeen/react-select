import styles from './select.module.css'

export function Select () {
    return (
        <div className={styles.container}>
            <span className={styles.value}>First</span>
            <button className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
        </div>
    )
}