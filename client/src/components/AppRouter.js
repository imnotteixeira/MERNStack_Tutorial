import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHome from './AppHome';
import TodoList from './TodoList'

class AppRouter extends Component {


    render(){
        return(
            <Switch>
                <Route exact path='/' component={AppHome}/>
                <Route exact path='/todo' component={TodoList}/>
            </Switch>
        )
    }
}

export default AppRouter;