import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';
import { Container } from 'reactstrap';

class AppHome extends Component {


    render(){
        return(
            <div>
                <Container>
                    <ItemModal />
                    <ShoppingList />
                </Container>
            </div>
        )
    }
}

export default AppHome;