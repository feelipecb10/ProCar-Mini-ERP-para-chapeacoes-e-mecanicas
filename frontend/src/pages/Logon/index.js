import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/teste.PNG';
import heroesImg from '../../assets/logo2.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');  
        }catch(err) {
            alert('Falha no login, tente novamente.');
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
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <input
                    placeholder="Digite sua senha"
                    type="password"
                    /*value={senha}
                    onChange={e => setSenha(e.target.value)}*/
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