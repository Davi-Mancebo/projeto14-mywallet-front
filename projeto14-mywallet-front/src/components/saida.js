import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Geral } from "../assets/css/style";

export default function Entrada() {
    const localUser = localStorage.getItem("usuario");
    const localUserObject = JSON.parse(localUser)

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()
  const config = {
    headers: {
      Authorization: localUserObject.token,
    },
  };
  function enviar() {
    if(parseInt(value) > 0){
        setValue(Math.sign(parseFloat(value)))
        console.log(value)
    }

    const data = {
      value: parseFloat(value),
      description: description,
      type: "saida",
    };

    axios.post(`${process.env.REACT_APP_API_URL}/extracts`, data, config).then(() => navigate("/home"));
  }

  return (
    <Geral switchColor={true}>
      <div className="title">
        <h1>Nova Saida</h1> <></>
      </div>

      <div className="send">
        <input
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={enviar}>Salvar entrada</button>
      </div>
    </Geral>
  );
}
