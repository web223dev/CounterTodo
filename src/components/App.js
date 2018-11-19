import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import TodosContainer from 'containers/TodosContainer';

import AppTemplate from './AppTemplate';

class App extends Component {
  render() {
    return (
      <AppTemplate 
        Counter={<CounterContainer />}
        Todos={<TodosContainer />}
      />      
    );
  }
}

export default App;