import React, { Component } from "react";

import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters rendered ");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log(this.props);
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          ></Counter>
        ))}{" "}
      </div>
    );
  }
}

export default Counters;
