import React from "react";
import { DisplayCounter } from "./DisplayContador";
import { ButtonCounter } from "./BotoesContador";
import { PassoCounter } from "./PassoContador";

interface ContadorProps{
    numeroInicial: number
    passo: number
}

export default class Contador extends React.Component<ContadorProps>{

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo
    }

    inc = () => {
        this.setState({
                numero: this.state.numero + this.state.passo
            }
        )
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        }
    )
    }

    setPasso = (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            passo: +e.target.value
        })
    }

    render(): React.ReactNode {
        return(
            <div>
                <h2>Contador</h2>
                <DisplayCounter numero={this.state.numero} />
                <ButtonCounter label={`+${this.state.passo}`} onClick={this.inc} />
                <ButtonCounter label={`-${this.state.passo}`} onClick={this.dec} />
                <PassoCounter onChange={this.setPasso} value={this.state.passo}/>
            </div>
        )
    }
}