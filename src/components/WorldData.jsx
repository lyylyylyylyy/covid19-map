import React, {Component} from 'react'
import './style.css'

class WorldData extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          confirmed: 0,
          death: 0
        };
    }
    componentDidMount() {
        fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
            .then(function(response) {
                return response.json();
            })
            .then((myjson) => {
                this.setState({confirmed: myjson.latest.confirmed, death: myjson.latest.deaths})
                console.log(this.state);
                //return myjson.latest;
            })
    }
    render() {
        return (
            <div className="world-data">
                <div id="data1">全球新冠肺炎确诊人数：<span>{this.state.confirmed}</span></div>
                <div id="data2">全球新冠肺炎死亡人数：<span>{this.state.death}</span>  </div>
                <div id="data3">国家和地区数：<span>188</span></div>
            </div>
        )
    }
}

export default WorldData;