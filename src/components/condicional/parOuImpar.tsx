import React from "react";

interface ParOuImparProps{
    numero: number;
}

const ParOuImpar: React.FC<ParOuImparProps> = (props) =>{
    const isPar = props.numero % 2  === 0

    return(
        <div>
            {isPar? <span>o numero {props.numero} é par</span>: <span>o numero {props.numero} é impar</span>}
        </div>
    )    
} 

export default ParOuImpar;