import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";




const IndiretaPai: React.FC = () =>{
    
    const [nome, setNome] = useState<string>("?");
    const [idade, setIdade] = useState<number>(0);
    const [nerd, setNerd] = useState<boolean>(false)
    
    function fornecerInfo(nomeParam: string, idadeParam: number, nerdParam: boolean){
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return(
        <div>
            {`Ola me chamo ${nome} tenho ${idade} anos e eu ${nerd? "Sou": "Não sou"} Nerd`}
            <IndiretaFilho onClick={fornecerInfo}/>
        </div>
    )
}

export default IndiretaPai;