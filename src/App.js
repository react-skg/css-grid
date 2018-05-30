import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="item logo">LOGO</div>
        <div class="item content">
          <p >I'm the Content!</p>
        </div>
        <div class="item nav">NAV</div>
        <div className="item footer">I'm the Footer</div>
      </div>
    );
  }
}

export default App;
