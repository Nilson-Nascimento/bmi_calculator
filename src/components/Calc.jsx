import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calc.css'

function Calc() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setImc] = useState(null)
    const [classification, setClassification] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!altura || !peso) {
            alert('Por favor, preencha todos os campos')
            
        }

        const alturaEmMetros = altura / 100
        const imcValue = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2)
        setImc(imcValue)

        // Classificação do IMC
        if (imcValue < 18.5) {
            setClassification(<h1 class="alert alert-light" role="alert"> Abaixo do Peso Normal</h1>)
        } else if (imcValue >= 18.5 && imcValue < 24.9) {
            setClassification(<h1 class="alert alert-success" role="alert">Peso Normal</h1>)
        } else if (imcValue >= 25 && imcValue < 29.9) {
            setClassification(<h1 class="alert alert-warning" role="alert">Sobrepeso</h1>)
        } else if (imcValue >= 30 && imcValue < 34.9) {
            setClassification(<h1 class="alert alert-danger" role="alert">Obesidade Grau 1</h1>)
        } else if (imcValue >= 35 && imcValue < 39.9) {
            setClassification(<h1 class="alert alert-secondary" role="alert">Obesidade Grau 2</h1>)
        } else {
            setClassification(<h1 class="alert alert-secondary" role="alert">Obesidade Grau 3</h1>)
        }
    }

    return (
        <div className="calc-container">
            <h1>Calculadora de IMC</h1>
            <form onSubmit={handleSubmit}> {/*o que isso faz?*/}
                <div className="form-group" >
                    <label class="form-label" htmlFor="altura">Altura (cm):</label>
                    <input class="form-control"
                        type="number"
                        id="altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Ex: 170"
                        // required
                    />
                </div>
                <div className="form-group">
                    <label class="form-label" htmlFor="peso">Peso (kg):</label>
                    <input class="form-control"
                        type="number"
                        id="peso"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Ex: 70"
                        // required
                    />
                </div>
                <button class="btn btn-primary" type="submit">Calcular IMC</button>
            </form>

            
            {imc && altura && peso && (
                <div class="alert alert-primary" role="alert" className="result">
                    <h3>Resultado:</h3>
                    <p>Seu IMC é: <strong>{imc}</strong></p>
                    <p>Classificação: <strong>{classification}</strong></p>
                </div>
            )}
        </div>
    )
}

export default Calc