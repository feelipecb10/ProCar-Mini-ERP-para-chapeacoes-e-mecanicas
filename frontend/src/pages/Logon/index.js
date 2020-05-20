import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/teste.PNG';

export default function Logon() {
    const [login, setLogin] = useState('');
    const [senhaDigitada, setSenha] = useState('');
    const histoy = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('sessao', { login, senhaDigitada });
            /*alert(response.data);*/

            localStorage.setItem('usuarioLogin', login);
            /*var jsonAux = JSON.stringify(response.data.idUsuario);*/
            localStorage.setItem('idUsuario', response.data);
             
            histoy.push('/dashboard');  
            
        }catch(err) {
            alert('Login ou Senha Incorretos!');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form onSubmit={handleLogin}>
                    <h1>Entrar No Sistema</h1>

                    <input 
                    placeholder="Digite seu Login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    />
                    <input
                    placeholder="Digite sua senha"
                    type="password"
                    value={senhaDigitada}
                    onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className ="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho acesso
                    </Link>
                </form>
            </section>

            
        </div>
    );
}