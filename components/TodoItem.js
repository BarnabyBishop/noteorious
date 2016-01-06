import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

class TodoItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false
        };
    }

    handleDoubleClick() {
        this.setState({ editing: true });
    }

    handleSave(id, text, createNext, height) {
        this.props.editTodo(id, text, createNext, height);
        this.setState({ editing: false });
    }

    render() {
        const {todo, completeTodo, deleteTodo} = this.props;

        return (
            <li className={classnames({
                completed: todo.completed,
                editing: this.state.editing
            })}>
                <div className="view">
                    <input className="toggle"
                                 type="checkbox"
                                 checked={todo.completed}
                                 onChange={() => completeTodo(todo.id)} />
                    <TextInput
                        text={todo.text}
                        height={todo.height}
                        multiline={todo.multiline}
                        autoFocus={todo.autoFocus}
                        editing={this.state.editing}
                        onSave={(text, createNext, height) => this.handleSave(todo.id, text, createNext, height)}
                        setMultiline={(multiline) => this.props.setMultiline(todo.id, multiline)} />
                    <button className="destroy"
                                    onClick={() => deleteTodo(todo.id)} />
                </div>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
};

export default TodoItem;
