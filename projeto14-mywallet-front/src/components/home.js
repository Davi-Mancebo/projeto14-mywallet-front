import React, { useEffect, useState } from "react";
import { Geral } from "../assets/css/style";
import plus from "../assets/img/plus.png"
import min from "../assets/img/min.png"
import exit from "../assets/img/exit.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home(){
    const localUser = localStorage.getItem("usuario");
    const userSaldo = parseInt(localStorage.getItem("saldo").replace(",","."))
    const localUserObject = JSON.parse(localUser)

    const [saldo, setSaldo] = useState(userSaldo)
    const [extrato, setExtrato] = useState([])

    const config = {    
        headers: {
            Authorization: localUserObject.token
        }
    }

    function update(){
        axios.get(`${process.env.REACT_APP_API_URL}/saldo`, config).then((crr) => {
            const saldos = parseInt(crr.data)
            console.log(saldos)
            setSaldo(saldos)
        })
        axios.get(`${process.env.REACT_APP_API_URL}/extracts`, config).then((crr) => {
            const extratos = crr.data
            console.log(extratos)
            setExtrato(extratos)
        }).catch(err => console.log(err))
    }

    useEffect(update, [])
    setInterval(update, 150000)

    const navigate = new useNavigate()
    return(
        <Geral>
            <div className="title">
                <h1>Olá, {localUserObject.name}</h1>
                <img src={exit} onClick={() => {
                    localStorage.clear()
                    navigate("/")
                }}/>
            </div>
            { saldo === 0 &&
            <div className="vazio">
                <p>Não há registros de</p>
                <p>entrada ou saída</p>
            </div> 
            }
            { saldo > 0 &&
                <div className="conteudo">
                    <div className="extrato">
                        {extrato.map((e) => <Extratos date={e.date} description={e.description} value={e.value} type={e.type}/>)}
                    </div>

                    <div className="saldo">
                    <h2>Saldo</h2>
                    {saldo.toFixed(2).replace(".",",")}
                    </div>
                </div>
            }
            { saldo < 0 &&
                <div className="conteudo">
                    <div className="extrato">
                        {extrato.map((e) => <Extratos date={e.date} description={e.description} value={e.value}/>)}
                    </div>

                    <div className="saldo">
                    <h2>Saldo</h2>
                    <h3 type={() => {
                        if(parseFloat(saldo) < 0){
                            return true
                        }
                    }}>{saldo}</h3>
                    </div>
                </div>
            }
            <div className="bottom">
                    <div className="button" onClick={() => navigate("/nova-entrada")}>
                        <img src={plus}/>
                        <div>
                            <h1>Nova</h1>
                            <h1>entrada</h1>
                        </div>
                    </div>

                <div className="button" onClick={() => navigate("/nova-saida")}>
                    <img src={min}/>
                    <div>
                        <h1>Nova</h1>
                        <h1>saída</h1>
                    </div>
                </div>
            </div>
        </Geral>
    )
}
function Extratos(props){
    return(
        <div className="div">
            <div className="name">
                <p>{props.date}</p>
                <h1>{props.description}</h1>
            </div>
            <h3 switchColor={true}>{props.value}</h3>
        </div>
    )
}