import ParOuImpar from "./components/condicional/parOuImpar"
import Card from "./components/cardWrapper/Card"
import UserInfo from "./components/condicional/userInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"

import { Input } from "./components/formlario/Input"
import Contador from "./components/contador/Contador"

function App() {
  

  return (
    <>
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
    
    </>
  )
}

export default App
