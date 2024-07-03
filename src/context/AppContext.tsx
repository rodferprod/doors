import { createContext, useState } from "react";

interface AppContextProps {
    acertou?: boolean
    perdeu?: boolean
    marcaQueAcertou?: (value: boolean) => void
    marcaQuePerdeu?: () => void
    resetVars?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {

    const [acertou, setAcertou] = useState(false)
    const [perdeu, setPerdeu] = useState(false)

    function marcaQueAcertou(value = false){
        setAcertou(value)
    }

    function marcaQuePerdeu(){
        setPerdeu(true)
    }

    function resetVars() {
        setAcertou(false)
        setPerdeu(false)
    }

    return (
        <AppContext.Provider
            value={{
                acertou,
                perdeu,
                marcaQueAcertou,
                marcaQuePerdeu,
                resetVars
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
