import { useState } from "react"

export const CheckNumber = () => {
    const [number, setNumber] = useState("0")
    const [erro, setErro] = useState('')

    const isEven = parseInt(number) % 2 == 0

    return (
        <div>
            <h1>Componente Par ou Impar</h1>
            <input type="text" name="number" placeholder="Digite o número"
                onChange={(e) => {
                    const rawValue = e.target.value
                    const numberValue = parseInt(rawValue)
                    setNumber(rawValue)
                    if (isNaN(numberValue)) {
                        setErro('Por favor, digite um número.')
                        return
                    }
                    setErro('')
                }}
            />
            <p role="presentation">{isEven ? 'Par' : 'Impar'}</p>
            <p role="alert">{erro}</p>
        </div>
    )
}