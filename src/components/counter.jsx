import React, { Component } from "react";

class Counter extends Component {
  getBadgedClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
  renderTags = () => {
    if (this.state.tags.length === 0) return <p>There are no tags </p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };
  handleDecrement = e => {
    this.setState({
      value: this.state.value - 1
    });
  };
  render() {
    console.log(" counter rendered ");
    return (
      <React.Fragment>
        {this.props.children}
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <span className={this.getBadgedClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
