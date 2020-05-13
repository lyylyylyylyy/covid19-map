import React, {Component} from 'react'

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
            <div>
                <span>世界新冠肺炎确诊人数：{this.state.confirmed}  </span>
                <span>世界新冠肺炎死亡人数：{this.state.death}  </span>
                <span>国家和地区数：188</span>
            </div>
        )
    }
}

export default WorldData;