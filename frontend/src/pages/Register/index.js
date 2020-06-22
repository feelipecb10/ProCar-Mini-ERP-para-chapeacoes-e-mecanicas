import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/teste.PNG';
import axios from 'axios';

/*
useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufSigla = response.data.map(uf => uf.sigla);
    });
  }, []);*/

export default function Register() {
    const [login, setLogin] = useState('');
    const [crip, setCrip] = useState('');
    const [cpf_cnpj, setCpf_Cnpj] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [n, setN] = useState('');
    const [uf, setUf] = useState('');
    

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        
        

        const data = {
            login,
            crip,
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
            /*const response = await api.post('usuario', data);*/
            await api.post('usuario', data);
            alert('Cadastrado com Sucesso!.');
            history.push('/');

            /*alert(`Seu ID : ${response.data.idUsuario}`);*/

            
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
            /*console.log(err);*/

        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo" />

                    <h1>Cadastro de Usuário</h1>
                    <p>Faça o cadastro de usuário para poder acessar seu Sistema.</p>

                    <Link className ="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Já tenho Acesso
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                 <input
                  placeholder="Login"
                  value={login}
                  onChange={e => setLogin(e.target.value)}              
                 />
                 <input
                  type="password"
                  placeholder="Senha"
                  value={crip}
                  onChange={e => setCrip(e.target.value)}
                  />
                 <input
                  placeholder="CPF/CNPJ"
                  value={cpf_cnpj}
                  onChange={e => setCpf_Cnpj(e.target.value)}
                  />
                  <input 
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                  <input 
                  placeholder="Telefone"
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
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
                     onChange={e => setUf(e.target.value)}
                     
                     />
                 </div>
                 <input 
                  placeholder="Bairro"
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                  />
                  <div className="input-group">
                     <input
                      placeholder="Rua"
                      value={rua}
                      onChange={e => setRua(e.target.value)}
                      />
                     <input 
                     placeholder="Número" 
                     style={{ width: 120 }} 
                     value={n}
                     onChange={e => setN(e.target.value)}
                     />
                     </div>
                     <input 
                     placeholder="CEP" 
                     value={cep}
                     onChange={e => setCep(e.target.value)}
                     />

                 <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        
    );
}