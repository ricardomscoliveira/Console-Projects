import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'

import ADD_EscolhaRank from './components/screens/ADD_EscolhaRank'
import AdicionarRank1v1 from './components/screens/AdicionarRank1v1'
import AdicionarRank2v2 from './components/screens/AdicionarRank2v2'
import AdicionarRank3v3 from './components/screens/AdicionarRank3v3'
import CHECK_EscolhaRank from './components/screens/CHECK_EscolhaRank'
import ConsultarRank1v1 from './components/screens/ConsultarRank1v1'
import ConsultarRank2v2 from './components/screens/ConsultarRank2v2'
import ConsultarRank3v3 from './components/screens/ConsultarRank3v3'
import MainMenu from './components/screens/MainMenu'

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                    <Switch>
                        <Route exact path="/ADD_EscolhaRank" component = {ADD_EscolhaRank} /> 
                        <Route exact path="/AdicionarRank1v1" component = {AdicionarRank1v1} />
                        <Route exact path="/AdicionarRank2v2" component = {AdicionarRank2v2} />    
                        <Route exact path="/AdicionarRank3v3" component = {AdicionarRank3v3} />
                        <Route exact path="/CHECK_EscolhaRank" component = {CHECK_EscolhaRank} />
                        <Route exact path="/ConsultarRank1v1" component = {ConsultarRank1v1} />
                        <Route exact path="/ConsultarRank2v2" component = {ConsultarRank2v2} />
                        <Route exact path="/ConsultarRank3v3" component = {ConsultarRank3v3} />
                        <Route exact path="/" component = {MainMenu} />

                    </Switch>
            </NativeRouter>
        );
    }
}
