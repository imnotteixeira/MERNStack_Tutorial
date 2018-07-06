import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { Link } from 'react-router-dom';

class AppNavbar extends Component {

    
    state = {
        isOpen: false
    }


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <Link exact to="/">
                            <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        </Link>
                        
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/imnotteixeira">
                                        Github
                                    </NavLink>
                                    
                                </NavItem>
                                
                                <Link exact to="/todo">
                                    <NavItem>
                                        <NavLink href="/todo">
                                            To-Do List
                                        </NavLink>
                                    </NavItem>
                                </Link>

                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
                
        )
    }
}

export default AppNavbar;