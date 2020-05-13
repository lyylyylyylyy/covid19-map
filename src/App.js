import React ,  { Component } from 'react';
import './App.css';
import Map from './components/Map';
import WorldData from './components/WorldData';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <div className = "data1">
          <WorldData></WorldData>
        </div>
        <div className="App">
          <span id = "title">新冠肺炎世界疫情地图</span>
          <Map className = "map"></Map>
        </div>
      </div>
    );
  }
}

export default App;
