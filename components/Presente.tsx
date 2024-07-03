import styles from '../src/styles/Presente.module.css'

export default function Presente(){
    return (
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.caixa}></div>
            <div className={styles.fitaV}></div>
            <div className={styles.fitaH}></div>
        </div>
    )
}