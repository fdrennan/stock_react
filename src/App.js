import React, { Component } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Plot from "./components/Plot/Plot";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: {}
    };
  }

  getStock = info => {
    console.log(info);
    let { stock, start, end } = info;
    fetch(`http://drenr.com:8000/Stocks?stock=${stock}&from=${start}&to=${end}`)
      .then(response => response.json())
      .then(result =>
        this.setState({
          stock: result.data
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Form getStock={this.getStock} />
          <Plot stock={this.state.stock} />
        </div>
      </div>
    );
  }
}

export default App;
