import React from 'react';

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => {
  return (
    <li
      style={{
        textDecoration: checked ? 'line-through' : 'none'
      }}
      onClick={() => onToggle(id)}
      onDoubleClick={() => onRemove(id)}
    >
      {text}
    </li>
  )
}

const Todos = ({ todos, inputValue, onInsert, onToggle, onRemove, onChange }) => {
  const todoItems = todos.map(
    todo => {
      const { id, text, checked } = todo.toJS();
      return (
        <TodoItem
          id={id}
          checked={checked}
          text={text}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      );
    }
  )
  return (
    <div className="Todos">
      <h1>Todo List</h1>
      <input value={inputValue} onChange={onChange} />
      <button onClick={onInsert}>Add</button>
      <ul>
        {todoItems}
      </ul>
    </div>
  );
};



export default Todos;