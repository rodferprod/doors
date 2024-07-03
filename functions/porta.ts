import PortaModel from "../model/porta"

// Para criar um array de portas vamos usar a função Array.from()
// onde podemos definir no primeiro parâmetro a quantidade de elementos a serem gerados
// através da propriedade "length" e, como segundo parâmetro, informamos uma função "map"
// que irá retornar nossas instâncias de portas numeradas e marcando a que terá o presente.
export function criarPortas(qtdPortas: number, portaComPresente: number): PortaModel[] {
    const retornaPortaConfigurada = (el: any, i: number) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    }
    return Array.from({ length: qtdPortas }, retornaPortaConfigurada)
}

// Para alterar a porta clicada dentro do array de portas devemos percorrer todas elas
// e verificar, através do índice, qual foi a porta clicada e retorná-la para o "array map"
// substituindo a instância clicada/alterada pela de igual índice dentro do array com o estado anterior.
// As demais portas precisam voltar para o estado inicial (desselecionada). Entretanto, se a porta alterada
// estiver aberta, não precisamos desselecionar as outras.
export function atualizarPortas(portas: PortaModel[], portaAlterada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        
        const portaAtualIgualPortaAlterada = portaAtual.numero === portaAlterada.numero
        
        if(portaAtualIgualPortaAlterada){
            return portaAlterada
        } else {
            return portaAlterada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}