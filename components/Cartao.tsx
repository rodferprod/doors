import styles from '../src/styles/Cartao.module.css'
export default function Cartao(props){
    return (
        <div className={styles.cartao} style={{
            backgroundColor: props?.cor ? props?.cor : '#fff'
        }}>
            {props.children}
        </div>
    )
}