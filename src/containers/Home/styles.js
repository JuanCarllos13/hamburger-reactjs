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

export const P = styled.p`
    color: white;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-left: 25px;


`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 15px;
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;




`

export const Button = styled.button`
    background: #D93856;
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
