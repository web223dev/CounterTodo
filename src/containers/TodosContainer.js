import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import * as todoActions from 'store/modules/todo';
import { bindActionCreators } from 'redux';

class TodosContainer extends Component {
  handleInsert = () => {
    const { inputValue, TodoActions } = this.props;
    TodoActions.insert(inputValue);
    TodoActions.changeInput('');
  }
  handleToggle = (id) => {
    const { TodoActions } = this.props;
    TodoActions.toggle(id);
  }
  handleRemove = (id) => {
    const { TodoActions } = this.props;
    TodoActions.remove(id);
  }
  handleChange = (e) => {
    const { TodoActions } = this.props;
    TodoActions.changeInput(e.target.value);
  }
  render() {
    const { todos, inputValue } = this.props;
    const { handleChange, handleInsert, handleRemove, handleToggle } = this;
    return (
      <Todos
        todos={todos}
        inputValue={inputValue}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onChange={handleChange}
      />
    );
  }
}

export default connect(
  ({ todos }) => ({
    inputValue: todos.get('input'),
    todos: todos.get('todos')
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);