import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default function Routes() {

    return(

<BrowserRouter>
    <Switch>

        <Route exact path='/'> <HomePage /> </Route>
        <Route exact path='/admin'> <AdminPage /> </Route>
        <Route exact path='/viagens'> <ViagensPage /> </Route>
        <Route exact path='/contato'> <ContatoPage /> </Route>
        <Route exact path='/pedido'> <PedidoPage /> </Route>


    </Switch>
</BrowserRouter>

    );
}