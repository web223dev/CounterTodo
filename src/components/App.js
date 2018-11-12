import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import Todos from 'components/Todos';
import AppTemplate from './AppTemplate';

class App extends Component {
  render() {
    return (
      <AppTemplate 
        Counter={<CounterContainer />}
        Todos={<Todos />}
      />      
    );
  }
}

export default App;