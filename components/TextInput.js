import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class TextInput extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit(e) {
        const text = e.target.value.trim();
        if (!this.props.multiline && e.which === 13) {
            if (e.shiftKey) {
                // Set multiline to true
                this.props.setMultiline(true);
            }
            else {
                // Otherwise the new textarea will start with a newline
                e.preventDefault();
            }
            this.props.onSave(text, !e.shiftKey);
        }

    }

    handleChange(e) {
        const input = e.target;
        const originalHeight = input.style.height;

        input.style.height = 'auto';
        const endHeight = input.scrollHeight +  + 'px';
        input.style.height = originalHeight;

        this.props.onSave(e.target.value, false, endHeight);
    }

    handleBlur(e) {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    }

    render() {
        const style = { height: this.props.height + 'px' };
        return (
            <textarea className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
                type="text"
                placeholder={this.props.placeholder}
                autoFocus="true"
                value={this.props.text}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)}
                onKeyDown={this.handleSubmit.bind(this)}
                style={style}
                rows="1" />
        );
    }
}

TextInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    height: PropTypes.number,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
};

export default TextInput;
