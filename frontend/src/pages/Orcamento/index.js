import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';
import { useEffect } from 'react';

export default function Orcamento(){
    const idUsuario = localStorage.getItem('idUsuario');
    const [produtos, setProdutos] = useState([]);
    const [idProduto, setProdutoUtilizado] = useState ('');
    const [valor, setValor] = useState ('');
    const [clientes, setClientes] = useState([]);
    const [idCliente, setClienteSelect] = useState('');
    const [data_pedido, setDataPedido] = useState('');

    const history = useHistory();

    useEffect(() => {
        api.get('produto', {
            headers: {
                autorizacao: idUsuario,
            }
        }).then(response => {
            setProdutos(response.data);
        })
    }, [idUsuario]);

    useEffect(() => {
        api.get('cliente', {
            headers: {
                autorizacao: idUsuario,
            }
        }).then(response => {
            setClientes(response.data);
        })
    }, [idUsuario]);

    async function handleRegister(e) {
        e.preventDefault(); 

        const data = {
            valor,
            data_pedido,
            idCliente,
            idProduto
        };

        try {
            await api.post('orcamento', data, {
                headers: {
                    autorizacao:idUsuario,
                }
            });
            alert('Gerado com Sucesso!.');
            history.push('/consulta-orcamento');  
        } catch(err) {
            alert('Erro ao gerar orçamento, tente novamente.');
        }
    }

    return(
        <div id="page-orcamento">
            <div className="menu">
            <Menu />
            </div>
        
        <div className="content">
            <section>
             <h1>Orçamento</h1>
             <img src={logoImg} alt="Logo" />
            </section>

            <form onSubmit={handleRegister} >   
                <label>Valor Serviços</label>  
                <input
                    placeholder="Valor Serviços"
                    value={valor}
                    onChange={e => setValor(e.target.value)} 
                    />

                <label>Produto utilizado</label>
                <select value={idProduto} name="produtoUtilizado" onChange={e => setProdutoUtilizado(e.target.value)} >
                    <option value="">Selecione</option>
                    {produtos.map(produto => (
                        <option key={produto.idProduto} value={produto.idProduto}>{produto.descricao}</option>
                    ))}
                </select> 

                <label>Data do Pedido</label>
                <input
                    placeholder="Data do Pedido"
                    type="date"
                    value={data_pedido}
                    onChange={e => setDataPedido(e.target.value)}
                />

                <label>Selecionar Cliente</label>
                <select name="ClienteSelect" onChange={e => setClienteSelect(e.target.value)} >
                    <option value="">Selecione</option>
                    {clientes.map(cliente => (
                        <option key={cliente.idCliente} value={cliente.idCliente}>{cliente.nome}</option>
                    ))}
                </select> 

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}