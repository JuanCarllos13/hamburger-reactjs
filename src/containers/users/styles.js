import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40;
    height: 100vh;

`


export const Imagem = styled.img`
   margin-top: 30px;
    margin-bottom: 25px;

`

export const ContainerItns = styled.div`
    display: flex;
    flex-direction: column;

`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 50px;

`

export const Button = styled.button`
    background: rgba(255, 255, 255, 0.14);
    margin-top: 85px;
    width: 342px;
    height: 68px;
    border: none;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    cursor: pointer;
    margin-bottom: 10px;


    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }


`

export const Orders = styled.li`
  width: 342px;
  height: auto;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const DivOrders = styled.div`
  align-items: center;
  width: 219px;
  height: auto;
  padding-left: 10px;
  display: block;
  padding: 10px;
  background: none;
`;

export const DivOrder = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  background: none;
`;

export const DivName = styled.div`
  align-items: center;
  padding-top: 29px;
  background: none;
`;

export const DeleteOrder = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img{
      background: none;
  }
`;