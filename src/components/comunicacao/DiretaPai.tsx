import React from "react";
import DiretaFilho from "./DiretaFilho";




const DiretaPai: React.FC = () =>{
    return(
        <div>
            <DiretaFilho text="ola ninho" numero={1} bool={false} />
        </div>
    )
}

export default DiretaPai;