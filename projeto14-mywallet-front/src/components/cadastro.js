import React, { useState } from "react";
import { StyledLogin, StyledLink } from "../assets/css/style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [value, setValue] = useState(false);

  const navigate = new useNavigate();
  function cadastro() {
    const dados = {
      name: name,
      email: email,
      password: senha,
    };
    console.log(dados);

    axios
      .post(`${process.env.REACT_APP_API_URL}/cadastro`, dados)
      .then((crr) => {
        alert("cadastrado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        if(err.code === "ERR_BAD_REQUEST"){
          setValue(true)
          setTimeout(() => setValue(false), 7000) 
        }

        console.log(err);
      });
  }

  return (
    <StyledLogin>
      <h1>MyWallet</h1>
      {value && <h2>Verifique os dados e tente novamente</h2>}
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Senha"
        value={senha}
        onChange={(s) => setSenha(s.target.value)}
        type="password"
      />
      <button onClick={cadastro}>Cadastrar</button>

      <StyledLink to={"/"}>
        <p>Já tem uma conta? Entre agora!</p>
      </StyledLink>
    </StyledLogin>
  );
}
