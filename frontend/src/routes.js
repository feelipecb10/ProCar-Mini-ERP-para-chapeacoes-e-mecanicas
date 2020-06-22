import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Dashboard from './pages/Dashboard';
import CadastroClientes from './pages/CadastroClientes';
import ListarClientes from './pages/ListarClientes';
import AdicionarProdutos from './pages/AdicionarProdutos';
import ListarProdutos from './pages/ListarProdutos';
import CadastroContas from './pages/CadastrarContas';
import UpdateClientes from './pages/UpdateClientes';
import ListarContas from './pages/ListarContas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />

                <Route path="/dashboard" component={Dashboard} />
                <Route path="/cadastro-clientes" component={CadastroClientes} />
                <Route path="/listar-clientes" component={ListarClientes} />
                <Route path="/adicionar-produtos" component={AdicionarProdutos} />
                <Route path="/listar-produtos" component={ListarProdutos} />
                <Route path="/cadastrar-contas" component={CadastroContas} />
                <Route path="/update-cliente" component={UpdateClientes} />
                <Route path="/listar-contas" component={ListarContas} />
            </Switch>
        </BrowserRouter>
    );
}