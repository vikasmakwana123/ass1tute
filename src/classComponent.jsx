import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          border: '1px solid gray',
          padding: '30px',
          backgroundColor: 'beige',
          borderRadius: '10px',
        }}
      >
        <h1>Class Component</h1>
        <hr style={{ border: '1px solid black', width: '100%' }} />
        <h1>Counter: {this.state.count}</h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
            marginTop: '20px',
          }}
        >
          <button className="button1" onClick={() => this.increment()}>
            Increment by 1
          </button>
          <button className="button1" onClick={() => this.decrement()}>
            Decrement by 1
          </button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
