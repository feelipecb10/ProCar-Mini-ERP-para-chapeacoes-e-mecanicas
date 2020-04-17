import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';

export default function AdicionarProdutos() {
    return(
        <div className="adicionar-produtos-container">
            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">
                <h1>AdicionarProdutos em Desenvolvimento</h1>
            </div>
        </div>    
    )
}