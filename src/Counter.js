import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }

  addTen = () => {
    this.setState({
      count: this.state.count + 10
    })
  }
  takeFive = () => {
    this.setState({
      count: this.state.count - 5
    })
  }
  resetCount = () => {
    this.setState({
      count: this.state.count * 0
    })
  }

  render() {
    const { count } = this.state
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.addTen} className="full-width">Increment by 10</button>
        <button onClick={this.takeFive} className="full-width">Decrement by 5</button>
        <button onClick={this.resetCount} className="full-width">Reset</button>
      </section>
    );
  }
}
