import React, { useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import carroImg from '../../assets/carro.png';

export default class Menu extends Component {
    render(){
        return <div class="navbar">

        <Link to="/dashboard">Home</Link>
        
        <div class="subnav">
            <button class="subnavbtn">Gerenciar Clientes</button>
            <div class="subnav-content">
            <Link to="/cadastro-clientes">Cadastrar Clientes</Link>
            <Link to="/listar-clientes">Listar Clientes</Link>
            </div>
        </div> 
        
        <div class="subnav">
            <button class="subnavbtn">Gerenciar Produtos</button>
            <div class="subnav-content">
            <Link to="/adicionar-produtos">Adicionar Produtos</Link>
            <Link to="/listar-produtos">Listar Produtos</Link>
            </div>
        </div> 
        
        <div class="subnav">
            <button class="subnavbtn">Financeiro</button>
            <div class="subnav-content">
            <Link to="/cadastrar-contas">Cadastrar Contas</Link>
            <Link to="/listar-contas">Listar Contas</Link>
            </div>
        </div>
        
        <div class="subnav">
            <button class="subnavbtn">Orçamento</button>
            <div class="subnav-content">
            <Link to="/gerar-orcamento">Gerar Novo</Link>
            <Link to="/consulta-orcamento">Consulta Orçamento</Link>    
            </div>
        </div>
        
        <div class="buttonSair">
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
        </div>
        
        </div>
    }
}