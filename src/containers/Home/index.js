import React, { useState, useRef} from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from "axios";
import { Container, Imagem, ContainerItns, H1, P, Input, Button, } from './styles'

import Logo from '../../assts/logo.svg'





function App() {
  const [user, setUser] = useState([])
  const history = useHistory()
  const InputOrder = useRef()
  const InputName = useRef()


  async function addNewuser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      order: InputOrder.current.value,
      ClientName: InputName.current.value
    });

    setUser([...user, newUser]);
    history.push('/usuarios')


  }


  return (
    <Container>
      <Imagem src={Logo} alt="Logo-Imagem" />
      <ContainerItns>
        <H1>Faça seu pedido</H1>

        <P>Pedido</P>
        <Input ref={InputOrder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

        <P>Nome</P>
        <Input ref={InputName} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewuser} >Novo Pedido</Button>
  
      </ContainerItns>


    </Container>
  )

}

export default App;