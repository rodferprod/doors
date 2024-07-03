import Link from "next/link";
import Cartao from "../../components/Cartao";
import styles from '../styles/Formulario.module.css'
import EntradaNumerica from "../../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  const [qtdPortas, setQtdPortas] = useState(3)
  const [portaPresente, setPortaPresente] = useState(2)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao cor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Quantas portas?"
            value={qtdPortas}
            onChange={novaQtd => setQtdPortas(novaQtd)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica
            text="Porta com presente?"
            value={portaPresente}
            onChange={novaPortaPresente => setPortaPresente(novaPortaPresente)}
          />
        </Cartao>
        <Cartao cor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${portaPresente}`}>
            <h1>Iniciar</h1>
          </Link>
        </Cartao>

      </div>
    </div>
  );
}
