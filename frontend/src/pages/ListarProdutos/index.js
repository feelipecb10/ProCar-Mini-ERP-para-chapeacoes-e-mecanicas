import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiPower, FiEdit } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';
import logoImg from '../../assets/logo2.png';
import { useEffect } from 'react';
import {MdDeleteForever} from 'react-icons/md';

export default function ListarProdutos() {
    const [produtos, setProdutos] = useState([]);
   const [descricaoProduto, setDescricaoProduto] = useState([]);
    const history = useHistory();

    const idUsuario = localStorage.getItem('idUsuario');

    useEffect(() => {
        api.get('produto', {
            headers: {
                autorizacao: idUsuario,
            }
             }).then(response => {
            setProdutos(response.data);
             })
    }, [idUsuario]);

    async function deleteProduto(idProduto) {
        try{
            await api.delete(`produto/${idProduto}`, {
                headers: {
                    autorizacao: idUsuario,
                }
            });

            setProdutos(produtos.filter(produto => produto.idProduto !== idProduto));
        }catch(err){
            alert('Erro ao deletar Produto, tente novamente!')
        }
    }
      
    return(
        <div className="listar-produtos-container">
            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">
                <h1>Produtos Cadastrados</h1>

                {/*
                <input
                 type="text" 
                 value={descricaoProduto}
                 onChange={e => setDescricaoProduto(e.target.value)}
                 />
                 {descricaoProduto}*/
                }
                 

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descricao</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>EDITAR OU REMOVER</th>
                        </tr> 
                    </thead>

                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.idProduto}>
                            <td>{produto.idProduto}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.valor}</td>
                            <td><FiEdit size={23} color="black" cursor="pointer"/>
                            <MdDeleteForever  size={23} color="black" cursor="pointer" onClick={() => deleteProduto(produto.idProduto)} /></td>
                        </tr>
                        ))}
                   </tbody>
                </table>
            </div>
        </div>    
    )
}