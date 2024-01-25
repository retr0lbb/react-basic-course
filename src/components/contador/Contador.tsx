import React from "react";

interface ContadorProps{
    numeroInicial: number
    passo: number
}

export default class Contador extends React.Component<ContadorProps>{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 0
    }


    render(): React.ReactNode {
        return(
            <div>
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
                <button onClick={() => {
                    this.setState({
                        numero: this.state.numero + this.state.passo
                    })
                }}>+{this.state.passo}</button>
                <button onClick={() =>{
                    this.setState({
                        numero: this.state.numero - this.state.passo
                    })
                }}>-{this.state.passo}</button>
                <input type="number" onChange={(e)=>{
                    this.setState({
                        passo: +e.target.value
                    })
                }}
                value={this.state.passo} placeholder="Numero de iterações"/>
            </div>
        )
    }
}