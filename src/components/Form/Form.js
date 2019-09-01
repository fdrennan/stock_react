import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "",
      start: "",
      end: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getStock(this.state);
  };

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label>STOCK</label>
          <input name="stock" type="text" />
          <br />
          <label>FROM</label>
          <input name="start" type="date" min="2019-01-01" max="2019-07-31" />
          <br />
          <label>TO</label>
          <input name="end" type="date" min="2019-01-02" max="2019-08-01" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
