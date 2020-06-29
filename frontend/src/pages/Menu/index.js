import React, { useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';


function Logout() {
    localStorage.clear();
  }

export default class Menu extends Component {
    
    
    render(){
        return <div className="navbar">

        <Link to="/dashboard">Home</Link>
        
        <div className="subnav">
            <button className="subnavbtn">Gerenciar Clientes</button>
            <div className="subnav-content">
            <Link to="/cadastro-clientes">Cadastrar Clientes</Link>
            <Link to="/listar-clientes">Listar Clientes</Link>
            </div>
        </div> 
        
        <div className="subnav">
            <button className="subnavbtn">Gerenciar Produtos</button>
            <div className="subnav-content">
            <Link to="/adicionar-produtos">Adicionar Produtos</Link>
            <Link to="/listar-produtos">Listar Produtos</Link>
            </div>
        </div> 
        
        <div className="subnav">
            <button className="subnavbtn">Financeiro</button>
            <div className="subnav-content">
            <Link to="/cadastrar-contas">Cadastrar Contas</Link>
            <Link to="/listar-contas">Listar Contas</Link>
            </div>
        </div>
        
        <div className="subnav">
            <button className="subnavbtn">Orçamento</button>
            <div className="subnav-content">
            <Link to="/gerar-orcamento">Gerar Novo</Link>
            <Link to="/consulta-orcamento">Consulta Orçamento</Link>    
            </div>
        </div>
        
        
        <div className="buttonSair">          
        <button type="button" onClick={Logout}>
          <FiPower size={18} color="#E02041" />
        </button>        
        </div>
        
        
        </div>
    }
}