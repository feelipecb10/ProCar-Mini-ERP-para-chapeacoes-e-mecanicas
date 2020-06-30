import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';


export default function ConsultaOrcamento() {
    const [orcamentos, setOrcamentos] = useState([]);
    const history = useHistory();

    const idUsuario = localStorage.getItem('idUsuario');  


    useEffect(() => {
        api.get('orcamento', {
        headers: {
            autorizacao: idUsuario,
        }

        }).then(response => {
        setOrcamentos(response.data);
        })
    }, [idUsuario]);


    async function deleteOrcamento(idOrcamento) {
        try{
         await api.delete(`orcamento/${idOrcamento}`, {
           headers: {
             autorizacao: idUsuario,
           }
         });
  
         setOrcamentos(orcamentos.filter(orcamento => orcamento.idOrcamento !== idOrcamento));
    }catch(err){
        alert('Erro ao deletar orçamento, tente novamente.');
        }
    }

    
    return(
        <div className="consulta-orcamento-container">

            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">                
                <h1>Orçamentos Gerados</h1>    

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Valor</th>
                            <th>Data Pedido</th>
                            <th>ID Cliente</th>
                            <th>ID Produto</th>
                            <th>EDITAR OU REMOVER</th>
                        </tr> 
                    </thead>

                    <tbody>
                        {orcamentos.map(orcamento => (
                            <tr key={orcamento.idOrcamento}>
                            <td>{orcamento.idOrcamento}</td>
                            <td>{orcamento.valor}</td>
                            <td>{orcamento.data_pedido}</td>
                            <td>{orcamento.idCliente}</td>
                            <td>{orcamento.idProduto}</td>
                            <td><FiEdit size={23} color="black" cursor="pointer"/>
                            <MdDeleteForever  size={23} color="black" cursor="pointer" onClick={() => deleteOrcamento(orcamento.idOrcamento)} /></td>
                        </tr>
                        ))}
                    </tbody>    
                </table>                            
            </div>
        </div>    
    )
}