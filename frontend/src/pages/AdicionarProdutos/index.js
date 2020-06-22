import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';


export default function AdicionarProdutos() {
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const idUsuario = localStorage.getItem('idUsuario');

    const history = useHistory();

    async function RegistrarProdutos(e){
        e.preventDefault();

        const data = {
            descricao,
            quantidade,
            valor
        };

        try{
            await api.post('produto', data, {
                headers: {
                    autorizacao: idUsuario,
                }
            })
            alert('Produto Cadastrada com sucesso!');
            history.push('/listar-produtos');
        }
        catch(err){
            alert('Erro ao cadastrar produto!');
        }
    }



    return(
        <div id="page-AdicionarProdutos">
            <div className="menu">
            <Menu />
            </div>
        
        <div className="content">
            <section>
             <h1>Cadastro de Produtos</h1>
             <img src={logoImg} alt="Logo" />
            </section>

            <form onSubmit={RegistrarProdutos}>
                
                <label>Descrição do Produto</label>
                <input
                placeholder="Descrição"
                value={descricao}
                onChange={e => setDescricao(e.target.value)} 
                />
                <label>Quantidade</label>
                <input
                placeholder="Quantidade"
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)} 
                />
                <label>Valor</label>
                <input
                placeholder="Valor"
                type="current"
                value={valor}
                onChange={e => setValor(e.target.value)} 
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}