import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';


export default function AdicionarProdutos() {
    return(
        <div className="adicionar-produtos-container">
            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">
                <form>
                <input
                 placeholder="Descrição"
                 /*value={descricao}
                 onChange={e => setDescricao(e.target.value)}*/
                />
                <input
                placeholder="Quantidade"
                /*value={quantidade}
                onChange={e => setQuantidade(e.target.value)}*/
                />
                <input
                placeholder="Valor"
                /*value={valor}
                onChange={e => setValor(e.target.value)}*/
                />
                <button className="button" type="submit">Cadastrar</button> 
                </form>
            </div>
        </div>    
    )
}