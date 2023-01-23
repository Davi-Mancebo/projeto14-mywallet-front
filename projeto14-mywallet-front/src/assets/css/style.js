import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 600px;

  flex-wrap: wrap;
  h1 {
    font-family: "Saira Stencil One", cursive;
    color: #ffffff;
    font-size: 32px;

    margin-bottom: 24px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    margin: 5px;
    color: red;
    font-size: 15px;
  }
  input {
    width: 80%;
    height: 58px;

    border: 0px solid;
    border-radius: 5px;

    margin-bottom: 13px;

    font-family: "Raleway", sans-serif;
    color: #000000;
    padding-left: 15px;
  }
  button {
    width: 80%;
    height: 48px;

    background-color: #a328d6;

    color: #ffffff;

    border: 0px;
    border-radius: 5px;

    font-size: 20px;
  }
`;
export const Geral = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 25px;
  padding-top: 25px;

  height: 600px;

  font-family: "Raleway", sans-serif;
  .title {
    color: white;
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 26px;
    }
  }
  .vazio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    width: 100%;
    height: 70%;

    color: #868686;
    font-size: 20px;

    border: 0px;
    border-radius: 5px;

    h1 {
      color: #868686;
      font-size: 20px;
    }
  }
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 70%;

    color: #868686;
    font-size: 20px;

    border: 0px;
    border-radius: 5px;

    position: relative;

    h1 {
      color: #000000;
      font-size: 16px;
      margin-left: 5px;
    }
    p {
      color: #c6c6c6;
      font-size: 16px;
    }
    .extrato {
      overflow-y: scroll;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      justify-content: space-between;
      width: 90%;
      margin-top: 18px;

      padding-bottom: 25px;
      .div {
        align-items: center;
        justify-content: space-between;
        display: flex;
        width: 100%;
        margin-bottom: 5px;

        .name {
          margin-top: 5px;
          display: flex;
        }
        h3 {
          margin-top: 5px;
          color: ${(props) => (props.switchColor ? "#03AC00" : "#C70000")};
        }
      }
    }
    .extrato::-webkit-scrollbar{
      display: none;
    }

    .saldo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;

      background-color: #ffffff;
      box-sizing: border-box;
      border-radius: 5px;
      width: 100%;
      height: 30px;
      padding: 15px;
      bottom: 0px;
      font-size: 17px;

      h2 {
        color: #000000;
      }
      h3{
        color: ${props => props.type === "saida" ? "#C70000" : "#03AC00"}
      }
    }
  }
  .send {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
    gap: 13px;
    input {
      box-sizing: border-box;
      padding-left: 15px;
      width: 90%;
      height: 40px;

      background-color: #ffffff;
      border: 0;
      border-radius: 5px;

      font-size: 20px;
    }
    button{
      font-family: "Relaway", sans-serif;
      font-size: 20px;

      width: 90%;
      height: 40px;

      color: #ffffff;

      border: 0;
      border: 10px;
      background-color: #A328D6;
    }
  }
  .bottom {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    width: 100%;
    font-family: "Raleway", sans-serif;

    .button {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      background-color: #a328d6;
      border-radius: 5px;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      height: 140px;
      padding: 10px 10px;
      box-sizing: border-box;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  color: #ffffff;
  margin-top: 36px;
`;
