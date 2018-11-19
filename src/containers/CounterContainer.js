import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';
import Counter from 'components/Counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
  handleIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment(); 
  }  
  handleDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }
  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;
    return (
      <Counter
        number={number}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    );
  }
}

export default connect(
  (state) => ({
    number: state.counter.number
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);