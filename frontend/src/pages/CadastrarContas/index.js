import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';

export default function CadastroContas(){
    const [tipo_titulo, setTipo_Titulo] = useState ('');
    const [data_lancamento, setData_Lancamento] = useState('');
    const [data_emissao, setData_Emissao] = useState('');
    const [data_vencimento, setData_Vencimento] = useState('');
    const [valor, setValor] = useState('');
    const idUsuario = localStorage.getItem('idUsuario');
    const idCliente = 1 /*exemplo idCliente Estatico*/

    async function RegistrarFinanceiro(e){
        e.preventDefault();

        const data = {
            tipo_titulo,
            data_lancamento,
            data_emissao,
            data_vencimento,
            valor,
        }

        try{
            await api.post('financeiro', data, {
                headers: {
                    autorizacao: idUsuario,
                    auto: idCliente,
                }
            })
        }
        catch(err){

        }
    }

    return(
        <div className="container">
            <div className="menu">
            <Menu />
            </div>
        
        <div className="content">
            <form onSubmit={RegistrarFinanceiro}> 
                <input
                placeholder="Tipo do titulo"
                value={tipo_titulo}
                onChange={e => setTipo_Titulo(e.target.value)} 
                />
                <input
                placeholder="Data de Lançamento"
                type="date"
                value={data_lancamento}
                onChange={e => setData_Lancamento(e.target.value)} 
                />
                <input
                placeholder="Data de Emissão"
                type="date"
                value={data_emissao}
                onChange={e => setData_Emissao(e.target.value)} 
                />
                <input
                placeholder="Data do Vencimento"
                type="date"
                value={data_vencimento}
                onChange={e => setData_Vencimento(e.target.value)} 
                />
                <input
                placeholder="Valor"
                value={valor}
                onChange={e => setValor(e.target.value)} 
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}