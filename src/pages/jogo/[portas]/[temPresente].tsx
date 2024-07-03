import { useEffect, useState } from 'react';
import Porta from '../../../../components/Porta'
import { criarPortas, atualizarPortas } from '../../../../functions/porta'
import styles from '../../../../src/styles/Jogo.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAppData from "@/hook/useAppData"

export default function Jogo() {
  const router = useRouter()

  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)

  const { acertou, perdeu } = useAppData()
  
  useEffect(()=>{
    const paramPortas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(paramPortas, temPresente))
  },[router.query])

  useEffect(()=>{
    const paramPortas = +router.query.portas
    const temPresente = +router.query.temPresente
    
    const qtdPortas = paramPortas >= 3 && paramPortas <=10
    const comPresente = temPresente >= 1 && temPresente <= paramPortas

    setValido(qtdPortas && comPresente)
  },[router.query.portas, router.query.temPresente])


  function renderPortas(){
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={portaAlterada => setPortas(atualizarPortas(portas, portaAlterada))} />
    })
  } 

  return (
    <div id={styles.jogo}>
        {acertou && !perdeu && (
            <h1 style={{
                position: 'absolute',
                top: '10%'
            }}>Parabéns! Você acabou de ganhar um presente!</h1>
        )}

        {perdeu && (
            <h1 style={{
                position: 'absolute',
                top: '10%'
            }}>Desculpe, você não ganhou presente.</h1>
        )}
        
        <div className={styles.portas}>
        {valido ? renderPortas() : <h1>Valores inválidos</h1>}
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar jogo</button>
            </Link>
        </div>
    </div>
  );
}
