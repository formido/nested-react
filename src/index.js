import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Counter from './counter.js';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <button onClick={this.props.actions.increment}>{this.props.count}</button>
          <Counter />
        </p>
      </div>
    );
  }
}

const model = {
  count: 1,
  update: (msg) => {
    if (msg.increment) {
      model.count = model.count + 1;
    }
    state.render(model);
  }
};

const actions = {
  increment: () => model.update({increment: true})
};

const state = {
  render: (model) => {
    const app = <App actions={actions} count={model.count} />;
    return ReactDOM.render(app, document.getElementById('root'));
  }
};

state.render(model);

registerServiceWorker();
