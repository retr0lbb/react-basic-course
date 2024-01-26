import React from "react"

interface PassoCounterProps{
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number
}
export const PassoCounter: React.FC<PassoCounterProps> = ({onChange, value}) =>{
    return(
        <div>
            <label htmlFor="passo">Passo</label>
            <input value={value} onChange={onChange} type="number" name="passo" id="passo" />
        </div>
    )
}