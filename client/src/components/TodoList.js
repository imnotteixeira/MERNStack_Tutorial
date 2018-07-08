import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, checkTodo } from '../actions/todoActions';
import PropTypes from 'prop-types';

class TodoList extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    onDeleteClick = id => {
        this.props.deleteTodo(id);
    }

    onDoneClick = id => {
        this.props.checkTodo(id);
    }

    render(){
        const { items } = this.props.todolist;
        return(
            <Container>
                
                <ListGroup>
                    <TransitionGroup className = "todo-list">
                        {items.map(({ _id, title, content, done }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem
                                    color={done ? "success" : "danger"}
                                >
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick = {this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    
                                    {title} - {content}

                                    {!done ? 
                                    <Button
                                        className="done-btn"
                                        color="success"
                                        size="sm"
                                        onClick = {this.onDoneClick.bind(this, _id)}
                                    >
                                        &loz;
                                    </Button> : ""}
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
    todolist: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todolist: state.todolist
});

export default connect(mapStateToProps, 
                        { getTodos, 
                          deleteTodo,
                          checkTodo
                        })(TodoList);