import React from "react";
import IndiretaFilho from "./IndiretaFilho";




const IndiretaPai: React.FC = () =>{
    let nome = "";
    let idade = 0;
    let nerd = false;
    function fornecerInfo(nomeParam: string, idadeParam: number, nerdParam: boolean){
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
    }

    return(
        <div>
            {`Ola me chamo ${nome} tenho ${idade} anos e eu ${nerd? "Sou": "Não sou"} Nerd`}
            <IndiretaFilho onClick={fornecerInfo}/>
        </div>
    )
}

export default IndiretaPai;