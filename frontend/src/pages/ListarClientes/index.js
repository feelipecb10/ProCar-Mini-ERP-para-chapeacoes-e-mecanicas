import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';

export default function ListarClientes() {
    return(
        <div className="listar-clientes-container">
            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">
                
                <h1>Clientes Cadastrados</h1>
                <ul>NOME</ul> <ul>E-MAIL</ul> <ul>TELEFONE</ul> <ul>CIDADE</ul> <ul>UF</ul>             
                <ul>
                    <li>
                        
                    </li>
                </ul>
                            
            </div>
        </div>    
    )
}