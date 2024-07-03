
import Presente from './Presente'
import styles from '../src/styles/Porta.module.css'
import PortaModel from '../model/porta'
import useAppData from "@/hook/useAppData"


interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){

    const { marcaQueAcertou, marcaQuePerdeu } = useAppData()

    const porta = props.value
    
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = () => props.onChange(porta.alternarSelecao())
    
    const abrir = async (e: any) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
        if(porta.temPresente) {
            marcaQueAcertou(porta.temPresente)
        } else {
            marcaQuePerdeu()
        }
    }

    function mostrarPorta(){
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>
                    {porta.numero}
                </div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.aberta ? (
                    porta.temPresente ? <Presente /> : false
                ) : mostrarPorta()}
            </div>
            <div className={styles.piso}></div>
        </div>
    )
}