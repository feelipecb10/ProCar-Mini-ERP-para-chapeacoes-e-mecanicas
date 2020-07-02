import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';
import axios from 'axios';

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
    const [uf, setUf] = useState('');
    const idUsuario = localStorage.getItem('idUsuario');

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
        };

        
        try {        
            await api.post('cliente', data, {
                headers: {
                    autorizacao: idUsuario,
                }
            })
            alert('Cliente Cadastrado com Sucesso!');
            history.push('/listar-clientes');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);

            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        if (uf === "0") {
            return;
        }

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(response => {
            const cityNames = response.data.map(city => city.nome);
            setCities(cityNames);
      });
    }, [uf]);

    function handleSelectUf(event) {
        const uf = event.target.value;
        setUf(uf);
    }

    function handleSelectCity(event) {
        const city = event.target.value;
        setCidade(city);
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
                    <div className="input-group">                  
                    <select onChange={handleSelectUf} value={uf}  name="uf" id="uf" style={{ width: 200 }} >
                        <option value="0">UF</option>
                        {ufs.map(uf => (
                            <option key={uf} value={uf}>{uf}</option>
                        ))}
                     </select>

                     <select name="city" id="city" value={cidade} onChange={handleSelectCity} >
                        <option value="0">Cidade</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                     </select>
                    </div> 
                    <input 
                    placeholder="Bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                    />
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