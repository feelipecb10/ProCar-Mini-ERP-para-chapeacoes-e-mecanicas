import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import './stylesMenu.css';
import logoImg from '../../assets/logo.svg';
import carroImg from '../../assets/carro.png';

export default function DashBoard() {
       return (
        <div className="dashboard-container">
            <div class="navbar">

            <Link to="/dashboard">Home</Link>

            <div class="subnav">
                <button class="subnavbtn">Gerenciar Clientes</button>
                <div class="subnav-content">
                <a href="#company">Cadastrar Clientes</a>
                <a href="#team">Listar Clientes</a>
                </div>
            </div> 

            <div class="subnav">
                <button class="subnavbtn">Gerenciar Produtos</button>
                <div class="subnav-content">
                <a href="#bring">Adicionar</a>
                <a href="#deliver">Listar</a>
                </div>
            </div> 

            <div class="subnav">
                <button class="subnavbtn">Financeiro</button>
                <div class="subnav-content">
                <a href="#link1">Cadastrar Conta</a>
                <a href="#link2">Listar Contas</a>
                </div>
            </div>

            <div class="subnav">
                <button class="subnavbtn">Orçamento</button>
                <div class="subnav-content">
                <a href="#link1">Gerar Novo</a>
                <a href="#link2">Consultar Orçamentos</a>
                </div>
            </div>

         <div class="buttonSair">
         <button type="button">
              <FiPower size={18} color="#E02041" />
         </button>
         </div>

         </div>

         <div className="corpo">
             
        </div>
    </div>


   );
}