import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/todoActions';
import PropTypes from 'prop-types';

class TodoList extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    onDeleteClick = id => {
        this.props.deleteTodo(id);
    }

    render(){
        const { items } = this.props.todolist;
        return(
            <Container>
                
                <ListGroup>
                    <TransitionGroup className = "shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick = {this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

TodoList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todolist: state.todolist
});

export default connect(mapStateToProps, 
                        { getTodos, 
                          deleteTodo
                        })(TodoList);