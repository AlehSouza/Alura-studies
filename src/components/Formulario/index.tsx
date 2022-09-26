import React from 'react';
import Botao from '../Botao'

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <h1>Este é o meu formulario</h1>
                <div>
                    <label htmlFor="tarefa">Adicionar um novo estudo</label>
                    <input 
                        type="text"
                        name="Tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        step="1" 
                        name="tempo" 
                        id="tempo" 
                        min="00:00:00" 
                        max="01:30:00" 
                        required
                    />
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;