import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from "axios";
import {
  Container, Imagem, ContainerItns, H1, Button, Orders,
  DeleteOrder,
  DivOrder,
  DivName,
  DivOrders
} from './styles'

import Logo from '../../assts/logo2.svg'
import Trash from '../../assts/trash.svg'





function Users() {
  const [user, setUser] = useState([])
  const history = useHistory()



  useEffect(() => {
    async function fetchUser() {
      const { data: newusers } = await axios.get("  http://localhost:3001/users/")

      setUser(newusers)

    }
    fetchUser()


  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = user.filter((user) => user.id !== userId);

    setUser(newUsers)
  }

  function Page() {
    history.push('/')
  }

  return (
    <Container>
      <Imagem src={Logo} alt="Logo-Imagem" />
      <ContainerItns>
        <H1>Pedidos</H1>

        <ol>
          <H1>Lista de Pedidos Feitos</H1>
          {user.map((user) => (
            <Orders key={user.id}>
              <DivOrders>
                <DivOrder>{user.order}</DivOrder>
                <DivName>{user.ClientName}</DivName>
              </DivOrders>

              <DeleteOrder onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="icon-trash" />
              </DeleteOrder>
            </Orders>
          ))}
        </ol>

        <Button onClick={Page}>Voltar</Button>
      </ContainerItns>


    </Container>
  )

}

export default Users;