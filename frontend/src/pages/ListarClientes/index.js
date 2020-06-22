import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';


export default function ListarClientes() {
    const [clientes, setClientes] = useState([]);
    const history = useHistory();

    const idUsuario = localStorage.getItem('idUsuario');  


    useEffect(() => {
        api.get('cliente', {
        headers: {
            autorizacao: idUsuario,
        }
        }).then(response => {
        setClientes(response.data);
        })
    }, [idUsuario]);


    async function deleteCliente(idCliente) {
        try{
         await api.delete(`cliente/${idCliente}`, {
           headers: {
             autorizacao: idUsuario,
           }
         });
  
         setClientes(clientes.filter(cliente => cliente.idCliente !== idCliente));
    }catch(err){
        alert('Erro ao deletar cliente, tente novamente.');
        }
    }

    async function enviaIDCliente(idCliente){
        console.log('Entrei envia id cliente');
        api.get('cliente', {
            headers: {
                autorizacao: idUsuario,
            }
            }).then(response => {
            localStorage.setItem('idCliente', idCliente);
            })
    }

    return(
        <div className="listar-clientes-container">
            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">
                
                <h1>Clientes Cadastrados</h1>
                <table>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>E-MAIL</th>
                    <th>TELEFONE</th>
                    <th>CIDADE</th>
                    <th>UF</th>
                    <th>EDITAR OU REMOVER</th>
                </tr> 

                {clientes.map(cliente => (
                    <tr key={cliente.idCliente}>
                    <td>{cliente.idCliente}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.cidade}</td>
                    <td>{cliente.uf}</td>
                    <td><Link to="/update-cliente"><FiEdit size={23} color="black" cursor="pointer"/></Link>
                    <MdDeleteForever size={23} color="black" cursor="pointer" onClick={() => deleteCliente(cliente.idCliente)} /></td>
                </tr>
                ))}
                </table>
                            
            </div>
        </div>    
    )
}