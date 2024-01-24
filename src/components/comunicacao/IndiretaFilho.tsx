import React from "react";

interface IndiretaFilhoProps{
    onClick: (nome: string, idade: number, nerd: boolean) => void;
}

const IndiretaFilho: React.FC<IndiretaFilhoProps> = ({onClick}) =>{
    return(
        <div>
           <div>Oi eu sou o filho</div> 
           <button onClick={()=>{
            onClick("João", 53, true)
           }}> Enviar as informações para o pai</button>
        </div>
    )
}

export default IndiretaFilho;