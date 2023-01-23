import React, { useEffect, useState } from "react";
import { StyledLogin, StyledLink } from "../assets/css/style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [value, setValue] = useState(false);
  const usuarioLogado = localStorage.getItem("logado");

  const navigate = new useNavigate();
  function login() {
    const dados = { email: email, password: senha };
    console.log(dados);

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, dados)
      .then((crr) => {
        const serialData = JSON.stringify(crr.data);

        localStorage.setItem("usuario", serialData);
        localStorage.setItem("saldo", crr.data?.saldo);
        localStorage.setItem("logado", true);
        console.log(crr.data);
        navigate("/home");
      })
      .catch((err) => {
        setValue(true);
        setTimeout(() => setValue(false), 7000);
      });
  }

  useEffect(() => {
    if (usuarioLogado) {
      navigate("/home");
    }
  }, []);

  return (
    <StyledLogin>
      <h1>MyWallet</h1>
      {value && <h2>Verifique os dados e tente novamente</h2>}
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
      <button onClick={login}>Entrar</button>

      <StyledLink to={"/cadastro"}>
        <p>Primeira vez? Cadastre-se!</p>
      </StyledLink>
    </StyledLogin>
  );
}
