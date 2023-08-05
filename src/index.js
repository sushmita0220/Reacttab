import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class StateManagement extends React.Component {
  constructor() {
    super()
    this.state = { os: "Mac" }
  }
  mac = () => this.setState({ os: "Mac" })
  win = () => this.setState({ os: "Windows" })
  linux = () => this.setState({ os: "Linux" })
  render() {
    return (
      <div>
        <h1>I am Using {this.state.os} Operating System in {this.props.laptop} machine</h1>
        <button type="button" onClick={this.win}>Change to Windows</button>
        <button type="button" onClick={this.linux}>Change to Linux</button>
        <button type="button" onClick={this.mac}>Change to Mac</button>
        <br></br><br></br>
        <App></App>
      </div>
    )
  }

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateManagement laptop="Dell" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

