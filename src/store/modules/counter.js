export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

const initialState = {
  number: 0
}

export default function Counter(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return {
        number: state.number + 1
      }
    case DECREMENT:
      return {
        number: state.number - 1
      }
    default: 
      return state;
  }
}