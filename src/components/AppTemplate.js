import React from 'react';

const AppTemplate = ({Counter, Todos}) => {
  return (
    <div className="App">
      <div className="CounterWrapper">
        {Counter}
      </div>
      <div className="TodosWrapper">
        {Todos}
      </div>
    </div>
  );
};

export default AppTemplate;