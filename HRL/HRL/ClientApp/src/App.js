import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { FetchClientData } from './components/FetchClients.js'
import { AddClient } from "./components/AddClient"

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-client-data' component={FetchClientData} />
                <Route path='/add-client-data' component={AddClient} />
                <Route path='/edit-client-data/:id' component={AddClient} />
            </Layout>
        );
    }
}
