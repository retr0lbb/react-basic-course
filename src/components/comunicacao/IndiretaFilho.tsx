import React from "react";

interface IndiretaFilhoProps{
    onClick: (nome: string, idade: number, nerd: boolean) => void;
}

function gerarIdade( min: number, max:number): number{
   const idadeAleatoria = Math.floor(Math.random() * (max - min)) + min;
   return idadeAleatoria
}
const IndiretaFilho: React.FC<IndiretaFilhoProps> = ({onClick}) =>{
    return(
        <div>
           <div>Oi eu sou o filho</div> 
           <button onClick={()=>{
            onClick("João", gerarIdade(10, 70), true)
           }}> Enviar as informações para o pai</button>
        </div>
    )
}

export default IndiretaFilho;