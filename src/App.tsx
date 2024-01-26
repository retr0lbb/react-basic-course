import ParOuImpar from "./components/condicional/parOuImpar"
import Card from "./components/cardWrapper/Card"
import UserInfo from "./components/condicional/userInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"

import { Input } from "./components/formlario/Input"
import Contador from "./components/contador/Contador"
import { MegaSena } from "./components/megaSena/MegaSena"

function App() {
  

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5rem"
    }}>

    <h1>Veja as mecanicas mais legais do react</h1>
    
    
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "4rem"
    }}>
    <Card title="Gerador mega sena" color="#4f27ec">
      <MegaSena />
    </Card>

    <Card title="Contador componente classe" color="#4f27ec">
      <Contador passo={0} numeroInicial={12}/>
    </Card>

    <Card title="Formularios e inputs controlados" color="#509df5">
      <Input />
    </Card>

    <Card title="Comunição Indireta" color="#d1fb39">
      <IndiretaPai />
    </Card>

    <Card title="Comunição direta" color="#ff0000">
      <DiretaPai />
    </Card>

    <Card title="Desafio condicional" color="#090">
      <ParOuImpar numero={11} />
      <UserInfo user={{name: ""}}/>
    </Card>
    </div>
    </div>
  )
}

export default App
