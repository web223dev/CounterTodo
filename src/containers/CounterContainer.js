import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';
import Counter from 'components/Counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment(); 
  }  
  handleDecrement = () => {
    this.props.decrement();
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

const mapStateToProps = (state) => ({
  number: state.counter.number
});
const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch(counterActions.increment()) },
  decrement: () => { dispatch(counterActions.decrement()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);