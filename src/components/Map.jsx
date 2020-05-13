import React, {Component} from 'react'
import echarts from 'echarts/lib/echarts';
import world from 'echarts/map/json/world';
import 'echarts/map/js/world';
import '../App.css';
echarts.registerMap('world', world);





class Map extends Component{

    constructor(props) {
        super(props);
        this.state = {dataset: null};
        
    }

    

    componentDidMount() {
        //var data = [];

        var myChart = echarts.init(document.getElementById("main"));
        fetch('https://lab.isaaclin.cn/nCoV/api/area?lang=en')
            .then(function(response) {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson.results);
                // var res = myJson.locations;
                
                let dataSet = myJson.results.map(item=>{
                    //console.log(item.countryEnglishName)
                    if (item.countryName === '中国') {
                        if (item.locationId === 951001) {
                            return {
                                name: item.countryName,
                                value: [item.deadCount,item.curedCount, item.currentConfirmedCount,item.confirmedCount]
                            }
                        }
                    } else {
                        return {
                            name:item.countryName,
                            value:[item.deadCount,item.curedCount, item.currentConfirmedCount,item.confirmedCount]
                        }
                    }
                })
                
                dataSet.push({name: '朝鲜', value: [0,0,0,0]});
                dataSet.push({name: '莱索托', value: [0,0,0,0]});
                dataSet.push({name: '西撒哈拉', value: [0,0,0,0]});
                console.log(dataSet)
                /*
                for (var location of myJson.locations) {
                    var message = new Map();
                    message['name'] = location.country;
                    message['value'] =  [location.latest['confirmed'], location.latest['deaths'], location.latest['recovered']];
                    data.push(message);
                    message = new Map();
                }

                this.setState({dataset : data}, function() {
                    console.log(this.state.dataset);
                });
                
                return data;
                */
               
               const options = {

                title: {
                    sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
                    left: 'center',
                    top: 'top'
                },
                tooltip: {
                    
                     trigger: 'item',
                     formatter: function (params) {
                         console.log(params)
                         //return params.name
                         
                         
                         if (!params.data) {
                             return null;
                         } else {
                            return params.name + ' : ' + '<br/>' + 'confirmed: ' + params.data.value[3] + '<br/>' + 'death: ' + params.data.value[0] + '<br/>' + 'recovered: ' + params.data.value[1] + '<br/>' + 'currentconfirmed: ' + params.data.value[2];
                         }
                         
                     }
                 },
            
                visualMap: {
                    min: 0,
                    max: 1600000,
                    text: ['High', 'Low'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['rgb(255,222,173)', 'rgb(255,215,0)','rgb(255,114,86)'],
                        
                    }
                },
                series: [
                    {
                        name: 'Coronavirus-19',
                        type: 'map',
                        mapType: 'world',
                        roam: true,
                        itemStyle: {
                            emphasis: {label: {show: true}}
                        },
                        data: dataSet,
                        nameMap: {
                            'Afghanistan': '阿富汗',
                            'Angola': '安哥拉',
                            'Albania': '阿尔巴尼亚',
                            'United Arab Emirates': '阿联酋',
                            'Argentina': '阿根廷',
                            'Armenia': '亚美尼亚',
                            'French Southern and Antarctic Lands': '法属南半球和南极领地',
                            'Australia': '澳大利亚',
                            'Austria': '奥地利',
                            'Azerbaijan': '阿塞拜疆',
                            'Burundi': '布隆迪共和国',
                            'Belgium': '比利时',
                            'Benin': '贝宁',
                            'Burkina Faso': '布基纳法索',
                            'Bangladesh': '孟加拉国',
                            'Bulgaria': '保加利亚',
                            'The Bahamas': '巴哈马',
                            'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
                            'Belarus': '白俄罗斯',
                            'Belize': '伯利兹',
                            'Bermuda': '百慕大',
                            'Bolivia': '玻利维亚',
                            'Brazil': '巴西',
                            'Brunei': '文莱',
                            'Bhutan': '不丹',
                            'Botswana': '博茨瓦纳',
                            'Central African Republic': '中非共和国',
                            'Canada': '加拿大',
                            'Switzerland': '瑞士',
                            'Chile': '智利',
                            'China': '中国',
                            'Ivory Coast': '象牙海岸',
                            'Cameroon': '喀麦隆',
                            'Congo (Brazzaville)': '刚果（布）',
                            'Congo (Kinshasa)': '刚果（金）',
                            'Colombia': '哥伦比亚',
                            'Costa Rica': '哥斯达黎加',
                            'Cuba': '古巴',
                            'Northern Cyprus': '北塞浦路斯',
                            'Cyprus': '塞浦路斯',
                            'Czech Republic': '捷克共和国',
                            'Germany': '德国',
                            'Djibouti': '吉布提',
                            'Denmark': '丹麦',
                            'Dominican Republic': '多米尼加',
                            'Algeria': '阿尔及利亚',
                            'Ecuador': '厄瓜多尔',
                            'Egypt': '埃及',
                            'Eritrea': '厄立特里亚',
                            'Spain': '西班牙',
                            'Estonia': '爱沙尼亚',
                            'Ethiopia': '埃塞俄比亚',
                            'Finland': '芬兰',
                            'Fiji': '斐',
                            'Falkland Islands': '福克兰群岛',
                            'France': '法国',
                            'Gabon': '加蓬',
                            'United Kingdom': '英国',
                            'Georgia': '格鲁吉亚',
                            'Ghana': '加纳',
                            'Guinea': '几内亚',
                            'Gambia': '冈比亚',
                            'Guinea Bissau': '几内亚比绍',
                            'Equatorial Guinea': '赤道几内亚',
                            'Greece': '希腊',
                            'Greenland': '格陵兰',
                            'Guatemala': '危地马拉',
                            'French Guiana': '法属圭亚那',
                            'Guyana': '圭亚那',
                            'Honduras': '洪都拉斯',
                            'Croatia': '克罗地亚',
                            'Haiti': '海地',
                            'Hungary': '匈牙利',
                            'Indonesia': '印度尼西亚',
                            'India': '印度',
                            'Ireland': '爱尔兰',
                            'Iran': '伊朗',
                            'Iraq': '伊拉克',
                            'Iceland': '冰岛',
                            'Israel': '以色列',
                            'Italy': '意大利',
                            'Jamaica': '牙买加',
                            'Jordan': '约旦',
                            'Japan': '日本',
                            'Kazakhstan': '哈萨克斯坦',
                            'Kenya': '肯尼亚',
                            'Kyrgyzstan': '吉尔吉斯斯坦',
                            'Cambodia': '柬埔寨',
                            'Korea': '韩国',
                            'Kosovo': '科索沃',
                            'Kuwait': '科威特',
                            'Laos': '老挝',
                            'Lebanon': '黎巴嫩',
                            'Liberia': '利比里亚',
                            'Libya': '利比亚',
                            'Sri Lanka': '斯里兰卡',
                            'Lesotho': '莱索托',
                            'Lithuania': '立陶宛',
                            'Luxembourg': '卢森堡',
                            'Latvia': '拉脱维亚',
                            'Morocco': '摩洛哥',
                            'Moldova': '摩尔多瓦',
                            'Madagascar': '马达加斯加',
                            'Mexico': '墨西哥',
                            'Macedonia': '北马其顿',
                            'Mali': '马里',
                            'Myanmar': '缅甸',
                            'Montenegro': '黑山',
                            'Mongolia': '蒙古',
                            'Mozambique': '莫桑比克',
                            'Mauritania': '毛里塔尼亚',
                            'Malawi': '马拉维',
                            'Malaysia': '马来西亚',
                            'Namibia': '纳米比亚',
                            'New Caledonia': '新喀里多尼亚',
                            'Niger': '尼日尔',
                            'Nigeria': '尼日利亚',
                            'Nicaragua': '尼加拉瓜',
                            'Netherlands': '荷兰',
                            'Norway': '挪威',
                            'Nepal': '尼泊尔',
                            'New Zealand': '新西兰',
                            'Oman': '阿曼',
                            'Pakistan': '巴基斯坦',
                            'Panama': '巴拿马',
                            'Peru': '秘鲁',
                            'Philippines': '菲律宾',
                            'Papua New Guinea': '巴布亚新几内亚',
                            'Poland': '波兰',
                            'Puerto Rico': '波多黎各',
                            'Dem. Rep. Korea': '朝鲜',
                            'Portugal': '葡萄牙',
                            'Paraguay': '巴拉圭',
                            'Qatar': '卡塔尔',
                            'Romania': '罗马尼亚',
                            'Russia': '俄罗斯',
                            'Rwanda': '卢旺达',
                            'W. Sahara': '西撒哈拉',
                            'Saudi Arabia': '沙特阿拉伯',
                            'Sudan': '苏丹',
                            'South Sudan': '南苏丹',
                            'Senegal': '塞内加尔',
                            'Solomon Islands': '所罗门群岛',
                            'Sierra Leone': '塞拉利昂',
                            'El Salvador': '萨尔瓦多',
                            'Somaliland': '索马里兰',
                            'Somalia': '索马里',
                            'Serbia': '塞尔维亚',
                            'Suriname': '苏里南',
                            'Slovakia': '斯洛伐克',
                            'Slovenia': '斯洛文尼亚',
                            'Sweden': '瑞典',
                            'Swaziland': '斯威士兰',
                            'Syria': '叙利亚',
                            'Chad': '乍得',
                            'Togo': '多哥',
                            'Thailand': '泰国',
                            'Tajikistan': '塔吉克斯坦',
                            'Turkmenistan': '土库曼斯坦',
                            'Timor-Leste': '东帝汶',
                            'Trinidad and Tobago': '特立尼达和多巴哥',
                            'Tunisia': '突尼斯',
                            'Turkey': '土耳其',
                            'United Republic of Tanzania': '坦桑尼亚联合共和国',
                            'Uganda': '乌干达',
                            'Ukraine': '乌克兰',
                            'Uruguay': '乌拉圭',
                            'United States of America': '美国',
                            'Uzbekistan': '乌兹别克斯坦',
                            'Venezuela': '委内瑞拉',
                            'Vietnam': '越南',
                            'Vanuatu': '瓦努阿图',
                            'West Bank': '西岸',
                            'Yemen': '也门共和国',
                            'South Africa': '南非',
                            'Zambia': '赞比亚共和国',
                            'Zimbabwe': '津巴布韦',
                            'Tanzania': '坦桑尼亚',
                            'Cote dIvoire': '科特迪瓦',
                            'Guinea-Bissau': '塞拉利昂',
                            'Czech Rep.': '捷克',
                            'Lao PDR': '老挝',
                            'Bahamas': '巴哈马',
                            'Solomon Is.': '所罗门',
                            'Saint Lucia': '圣卢西亚',
                            'Barbados': '巴巴多斯',
                            'St. Vin. and Gren.': '圣文森特和格林纳丁斯',
                            'Grenada': '格林那达',
                            'Cape Verde': '佛得角',
                            'São Tomé and Principe': '圣多美和普林西比',
                            "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
                            "Falkland Is.": "马尔维纳斯群岛（福克兰）",
                            "Dominica": "多米尼加",
                            "Antigua and Barb.": "安提瓜和巴布达",
                            "Montserrat": "蒙特塞拉特",
                            "Faeroe Is.": "法罗群岛",
                        },
                    
                    }
                ]
                
            };
            myChart.setOption(options);
            
            })
    }
    render() {
        return(
                <div id="main" style={{width: 600, height: 300}}></div>
        )
    }
}
export default Map;


