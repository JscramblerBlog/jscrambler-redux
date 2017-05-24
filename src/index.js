import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}

const store = createStore(reducer)

const Counter = ({value}) => {
  return (
  <div>
    <h3>Counter</h3>
    <button onClick={() => store.dispatch({ type: 'INCREMENT'})}>+</button>
    {value}
  </div>
  )
}

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render);

render();

