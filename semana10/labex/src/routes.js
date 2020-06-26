import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import ViagensPage from './components/ViagensPage';
import ContatoPage from './components/ContatoPage';
import PedidoPage from './components/PedidoPage';
import AplicationPage from './components/AplicationPage';

export default function Routes() {

    return(
        <>
        <Switch>

            <Route exact path='/'> <HomePage /> </Route>
            <Route exact path='/admin'> <AdminPage /> </Route>
            <Route exact path='/viagens'> <ViagensPage /> </Route>
            <Route exact path='/contato'> <ContatoPage /> </Route>
            <Route exact path='/pedido'> <PedidoPage /> </Route>
            <Route exact path="/aplication/:id"> <AplicationPage /> </Route>


        </Switch>
        </>

    );
}