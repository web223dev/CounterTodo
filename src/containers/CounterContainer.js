import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/modules/counter';
import Counter from 'components/Counter';

class CounterContainer extends Component {
  render() {
    const { number, handleIncrement, handleDecrement } = this.props;
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
  handleIncrement: () => { dispatch(actions.increment()) },
  handleDecrement: () => { dispatch(actions.decrement()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);