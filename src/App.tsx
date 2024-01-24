import ParOuImpar from "./components/condicional/parOuImpar"
import Card from "./components/cardWrapper/Card"
import UserInfo from "./components/condicional/userInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"

function App() {
  

  return (
    <>
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
