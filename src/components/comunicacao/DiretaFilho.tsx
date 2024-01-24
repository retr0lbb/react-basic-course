import React from "react";

interface DiretaFilhoProps{
    text: string
    numero: number
    bool: boolean

}

const DiretaFilho: React.FC<DiretaFilhoProps> = ({text, numero, bool}) =>{
    return(
        <div>
            <div>{text}</div>
            <div>{numero}</div>
            <div>{bool? "Verdadeiro" : "falso"}</div>
        </div>
    )
}

export default DiretaFilho;