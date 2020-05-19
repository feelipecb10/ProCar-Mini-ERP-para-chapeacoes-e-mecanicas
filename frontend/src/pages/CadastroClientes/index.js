import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';


export default function CadastroClientes() {
    const [nome, setNome] = useState('');
    const [cpf_cnpj, setCpf_Cnpj] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [n, setN] = useState('');
    const [uf, setUF] = useState('');
    const idUsuario = localStorage.getItem('usuarioId');


    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome,
            cpf_cnpj,
            email,            
            telefone,
            cidade,
            bairro,
            cep,
            rua,
            n,           
            uf,
            idUsuario
        };

        /*api.post('cliente', data);*/
        try {
            /*const response = await*/ 
           
            await api.post('cliente', data);
            alert('Cliente Cadastrado com Sucesso!.');


            /*alert(`Seu ID de acesso: ${response.data.idUsuario}`);*/

            /*history.push('/');*/
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (        
        <div className="cadastro-container">
            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">
                <section>
                    <h1>Cadastro de Clientes</h1>
                    <img src={logoImg} alt="Logo" />
                </section>
                
                <form onSubmit={handleRegister}>
                    <h1>Dados Gerais</h1>
                    <input
                     placeholder="Nome Completo"
                     value={nome}
                     onChange={e => setNome(e.target.value)}   
                    />
                    <input
                    type="email" 
                    placeholder="Email/Opcional"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="CPF/CNPJ"
                    value={cpf_cnpj}
                    onChange={e => setCpf_Cnpj(e.target.value)}
                    />
                    <input 
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <h1>Endereço</h1>
                    <input 
                    placeholder="Rua"
                    value={rua}
                    onChange={e => setRua(e.target.value)}
                    />
                    <input 
                    placeholder="Número"
                    value={n}
                    onChange={e => setN(e.target.value)}
                    />
                    <input 
                    placeholder="Bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                    /> 

                    <div className="input-group">                  
                    <input 
                    placeholder="Cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    />
                    <input 
                    placeholder="UF"
                    style={{ width: 80 }} 
                    value={uf}
                    onChange={e => setUF(e.target.value)}
                    />
                    </div>    

                    <input 
                    placeholder="CEP"
                    value={cep}
                    onChange={e => setCEP(e.target.value)}
                    /> 
                    <button className="button" type="submit">Cadastrar</button>                                    
                </form>
                
            </div>
        </div>
    )
}