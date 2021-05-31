import React from "react";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import { Radio } from "antd";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: 3,
      ignoreProp: 0,
      seed: 40, 
      showErrorComponent: false
    };

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)});
    this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent});
  }

  onChange = (e) => {
    this.setState({ task: e.target.value });
  };

  mountComponent = ()=> {
    console.log('mountComp');
    switch (this.state.task.toString()) {
      case "1":
        return (
          <div>
            <h3>ДЗ №5 Задание 1</h3>
            <Test1 arg={77} />
            <Test2 arg={75} />
          </div>
        );
      case "2":
        return (
          <div>
            <h3>ДЗ №5 Задание 2</h3>
            <Clock />
          </div>
        );
      case "3":
        return (
          <div>
            <h3>ДЗ №5 Задание 3</h3>
            <button onClick={this.ignoreProp}>IgnoreProp</button>
            <button onClick={this.seedGenerator}>Generate seed</button>
            <button onClick={this.toggleError}>Togle Error</button>
            <Counter 
              ignoreProp={this.state.ignoreProp}
              seed = {this.state.seed}
              showErrorComponent = {this.state.showErrorComponent}
            />
          </div>
        );
      case "4":
        return (
          <div>
            <h3>ДЗ №5 Задание 4</h3>
            <Counter />
          </div>
        );
      default: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Radio.Group onChange={this.onChange} value={this.state.task}>
          <Radio value={1}>Задание 1</Radio>
          <Radio value={2}>Задание 2</Radio>
          <Radio value={3}>Задание 3</Radio>
          <Radio value={4}>Задание 4</Radio>
        </Radio.Group>
        <div>{this.state.task}</div>
        <div>{this.mountComponent()}</div>
      </div>
    );
  }
}

export default App;
