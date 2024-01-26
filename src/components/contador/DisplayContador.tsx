import React from "react";


interface DisplayCounterProps{
    numero: number
}
export const DisplayCounter: React.FC<DisplayCounterProps> = ({numero}) =>{
    return(
        <h3>{numero}</h3>
    )
}