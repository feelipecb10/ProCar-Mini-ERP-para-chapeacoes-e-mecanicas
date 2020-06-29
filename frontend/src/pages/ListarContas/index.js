import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';
import api from '../../services/api';
import './styles.css';
import Menu from '../Menu/index.js';


export default function ListarContas() {
    const [contas, setContas] = useState([]);
    const [tipoTitulo, setTipoTitulo] = useState([]);
    const history = useHistory();

    const idUsuario = localStorage.getItem('idUsuario');  


    useEffect(() => {
        api.get('lancamento', {
        headers: {
            autorizacao: idUsuario,
        }

        }).then(response => {
        setContas(response.data);
        })
    }, [idUsuario]);


    async function updateConta(idFinanceiro) {
        try{
        console.log(idUsuario, idFinanceiro);
         await api.post(`lancamento/${idFinanceiro}`, {
           headers: {
             autorizacao: idUsuario,
           }
         });
  
         /*setContas(contas.filter(conta => conta.idFinanceiro !== idFinanceiro));*/
    }catch(err){
        alert('Erro ao deletar conta, tente novamente.');
        console.log(idUsuario, idFinanceiro);
        }
    }

    
    return(
        <div className="listar-contas-container">

            <div className="menu">
                <Menu />
            </div>
            
            <div className="content">                
                <h1>Contas Cadastradas</h1>    

                <label>Selecione o Tipo de Conta:</label>

                <select defaultValue="" name="tipoTitulo" onClick={e => setTipoTitulo(e.target.value) }>
                    <option value="" disabled>Selecione</option>
                    <option value="RECEBER">RECEBER</option>
                    <option value="PAGAR">PAGAR</option>
                </select>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Número Documento</th>
                            <th>Tipo Titulo</th>
                            <th>Data Lançamento</th>
                            <th>Data Emissão</th>
                            <th>Data Vencimento</th>
                            <th>EDITAR OU REMOVER</th>
                        </tr> 
                    </thead>

                    <tbody>
                        {contas.filter(contas => contas.tipo_titulo == tipoTitulo ).map(conta => (
                            <tr key={conta.idFinanceiro}>
                            <td>{conta.idFinanceiro}</td>
                            <td>{conta.numero_documento}</td>
                            <td>{conta.tipo_titulo}</td>
                            <td>{conta.data_lancamento}</td>
                            <td>{conta.data_emissao}</td>
                            <td>{conta.data_vencimento}</td>
                            <td><FiEdit size={23} color="black" cursor="pointer"/>
                            <MdDeleteForever  size={23} color="black" cursor="pointer" onClick={() => updateConta(conta.idFinanceiro)} /></td>
                        </tr>
                        ))}
                    </tbody>    
                </table>                            
            </div>
        </div>    
    )
}