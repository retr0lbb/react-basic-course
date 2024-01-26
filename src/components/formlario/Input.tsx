import React, { useState } from "react";

export const Input: React.FC = () =>{

    const [valor, setValor] = useState<string>("Henrique Barbosa Sampaio")
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px"
        }}>
            <h1>{valor? valor: "sem valor"}</h1>
            <input value={valor} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setValor(e.target.value)} />
            <input value={valor} readOnly />
            <input value={undefined} />
        </div>
    )
}