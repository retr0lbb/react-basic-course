import React,{ useState }  from "react";

export const MegaSena: React.FC = () =>{

    function gerarNumerosDaMega(lengh: number){
        if(lengh<=0){
            return "Não é possivel gerar menos que 1 numero aleatorio"
        }
        //min-max
        const min = 1
        const max = 60
        
        let array = new Set()
        do{
            const random = Math.floor(Math.random() * (max- min))+ min
            array.add(random)
        }while(array.size < lengh);
        
        let returnArray = new Array<any>
        array.forEach( (elements) =>{
            returnArray.push(elements)
        }) 
    
        return returnArray
    }


    const [numeros, setNumeros] = useState<any>([])
    
    return(
        <>
        <h3>Esses são os numero da mega sena que serão sorteados: {numeros.map((nums: any) => {
            return `${nums} `
        })}</h3>
        <button onClick={() =>{
            setNumeros(gerarNumerosDaMega(7))
        }}>Gerar Numeros</button>
        </>
    )
}