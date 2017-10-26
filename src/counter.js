import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function _Counter(props) {
   return (
      <div className="App">
        <p className="App-intro">
          <button onClick={props.actions.increment}>{props.count}</button>
        </p>
      </div>
    );
 }

const model = {
  count: 1,
  update: (msg) => {
    if (msg.increment) {
      model.count = model.count + 1;
    }
    state.render(model, 'counter-root');
  }
};

const actions = {
  increment: () => model.update({increment: true})
};

const state = {
  render: (model, rootId) => {
    const app = <_Counter actions={actions} count={model.count} />;
    return ReactDOM.render(app, document.getElementById(rootId));
  }
};

class ReactHost extends Component {
  componentDidMount() {
    state.render(model, 'counter-root');  
  }

  render() {
    return (
      <div id="counter-root"></div>
    );
  }
}

const Counter = ReactHost;
export default Counter;

