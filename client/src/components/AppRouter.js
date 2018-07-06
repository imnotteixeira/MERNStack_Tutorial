import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHome from './AppHome';
import HelloWorld from './HelloWorld'

class AppRouter extends Component {


    render(){
        return(
            <Switch>
                <Route exact path='/' component={AppHome}/>
                <Route exact path='/hw' component={HelloWorld}/>
            </Switch>
        )
    }
}

export default AppRouter;