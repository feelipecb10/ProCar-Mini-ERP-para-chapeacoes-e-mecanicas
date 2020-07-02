import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';

export default function CadastroContas(){
    const [tipo_titulo, setTipo_Titulo] = useState ('');
    const [numero_documento, setNumeroDocumento] = useState('');
    const [data_lancamento, setData_Lancamento] = useState('');
    const [data_emissao, setData_Emissao] = useState('');
    const [data_vencimento, setData_Vencimento] = useState('');
    const [valor, setValor] = useState('');
    const idUsuario = localStorage.getItem('idUsuario');
    const [idCliente, setIDCliente] = useState(''); 

    const history = useHistory();

    async function RegistrarFinanceiro(e){
        e.preventDefault();

        const data = {
            tipo_titulo,
            numero_documento,
            data_lancamento,
            data_emissao,
            data_vencimento,
            valor,
            idCliente,
        };

        try{
            await api.post('lancamento', data, {
                headers: {
                    autorizacao: idUsuario,
                    }   
            })
            alert('Conta Cadastrada com Sucesso!');
            history.push('/listar-contas');
        }
        catch(err){
            alert('Erro ao cadastrar conta!');

        }
    }

    return(
        <div id="page-CadastrarContas">
            <div className="menu">
            <Menu />
            </div>
        
        <div className="content">
            <section>
             <h1>Cadastro de Contas</h1>
             <img src={logoImg} alt="Logo" />
            </section>

            <form onSubmit={RegistrarFinanceiro}>     

                <label>Tipo do titulo</label>
                <select defaultValue="" name="tipo-titulo" onChange={e => setTipo_Titulo(e.target.value)} >
                    <option value="" disabled>Selecione</option>
                    <option value="RECEBER">RECEBER</option>
                    <option value="PAGAR">PAGAR</option>
                </select>           
                <label>Número Documento</label>
                <input
                placeholder="Número Documento"
                value={numero_documento}
                onChange={e => setNumeroDocumento(e.target.value)} 
                />
                <label>Data de lançamento</label>
                <input
                placeholder="Data de Lançamento"
                type="date"
                value={data_lancamento}
                onChange={e => setData_Lancamento(e.target.value)} 
                />
                <label>Data de emissão</label>
                <input
                placeholder="Data de Emissão"
                type="date"
                value={data_emissao}
                onChange={e => setData_Emissao(e.target.value)} 
                />
                <label>Data do vencimento</label>
                <input
                placeholder="Data do Vencimento"
                type="date"
                value={data_vencimento}
                onChange={e => setData_Vencimento(e.target.value)} 
                />
                <label>Valor</label>
                <input
                placeholder="Valor"
                value={valor}
                onChange={e => setValor(e.target.value)} 
                />
                <label>idCliente</label>
                <input
                placeholder="idCliente"
                value={idCliente}
                onChange={e => setIDCliente(e.target.value)} 
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}