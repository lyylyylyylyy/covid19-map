import React ,  { Component } from 'react';
import Map from './components/Map';
import WorldData from './components/WorldData';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

class App extends Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <TabPane tab="世界疫情概览" key="1">
          <WorldData></WorldData>
        </TabPane>
        <TabPane tab="世界疫情地图" key="2">
          <Map></Map>
        </TabPane>
      </Tabs>
    );
  }
}

export default App;
