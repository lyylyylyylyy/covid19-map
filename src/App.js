import React ,  { Component } from 'react';
import './App.css';
import Map from './components/Map';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <span id = "title">新冠肺炎世界疫情地图</span>
        <Map className = "map"></Map>
      </div>
    );
  }
}

export default App;
