import { useEffect } from 'react';
import * as echarts from 'echarts'
import chinaGeo from '@/assets/json/chinaGeo.json'
import { NodeType,Node,statNode,makeSeries } from './Node';
import { ToonShader1 } from 'three/examples/jsm/Addons.js';
import Grid from 'echarts/types/src/coord/cartesian/Grid.js';
export default function CesiumViewer() {
    const dataList = [
        {name: "南海诸岛",value: 100,},
        { name: "北京", value: 540 },
        { name: "天津", value: 130 },
        { name: "上海", value: 400 },
        { name: "重庆", value: 750 },
        { name: "河北", value: 130 },
        { name: "河南", value: 830 },
        { name: "云南", value: 110 },
        { name: "辽宁", value: 19 },
        { name: "黑龙江", value: 150 },
        { name: "湖南", value: 690 },
        { name: "安徽", value: 60 },
        { name: "山东", value: 39 },
        { name: "新疆", value: 452 },
        { name: "江苏", value: 31 },
        { name: "浙江", value: 104 },
        { name: "江西", value: 36 },
        { name: "湖北", value: 52 },
        { name: "广西", value: 33 },
        { name: "甘肃", value: 73 },
        { name: "山西", value: 54 },
        { name: "内蒙古", value: 778 },
        { name: "陕西", value: 22 },
        { name: "吉林", value: 44 },
        { name: "福建", value: 18 },
        { name: "贵州", value: 54 },
        { name: "广东", value: 98 },
        { name: "青海", value: 13 },
        { name: "西藏", value: 0 },
        { name: "四川", value: 44 },
        { name: "宁夏", value: 42 },
        { name: "海南", value: 22 },
        { name: "台湾", value: 23 },
        { name: "香港", value: 25 },
        { name: "澳门", value: 555 },
    ]
    const chinaGeoCoordMap =  {
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京市: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
    }
    const option = {
        grid: {
            top: '40px',
            left: '40px',
            right: '0px',
            bottom: '20px',
        },
        geo: {
            map: "china",
            zoom: 1.2,
            layoutSize: "100%", //保持地图宽高比
            // 设置图块颜色，也可以通过图例 visualMap 设置颜色，但是飞线的颜色设置会失效，一直取 图例 设置的颜色；根据需求选择；
            regions: getRegions(dataList),
            label: {
                // 默认样式
                normal: {
                    show: true,
                    fontSize: "14",
                    color: "rgba(255,255,255,.3)",
                },
                // 高亮样式
                emphasis: {
                    show: true,
                    textStyle: {
                        color: "#ff0000",
                    },
                },
            },
            itemStyle: {
                // 默认样式，图块没数据时，会取默认颜色
                normal: {
                    borderColor: "#ffffff",
                    areaColor: "#2754f9",
                    opacity: 0.8,
                },
                // 高亮样式
                emphasis: {
                    areaColor: "#f2d5ad",
                },
            },
        },
        series:new Array<any>()
    }
    let myChart:ECharts = null;
    let s:Node;
    useEffect(()=>{
        const chart = echarts.init(document.getElementById('map')); 
        myChart = chart;
        echarts.registerMap('china', chinaGeo);
        chart.setOption(option);
        window.addEventListener('resize', function() {
            chart.resize();    
        });
        clickAction()
        getPie()
        chart.on('restore', function () {
            // 动画完成后执行的操作
            console.log('Animation has ended');
        });
    })

    const clickAction = ()=>{
        const s1 = new Node(NodeType.NodeTypeService,"内蒙古",chinaGeoCoordMap['内蒙古']) 
        const p1 = new Node(NodeType.NodeTypePower,"辽宁",chinaGeoCoordMap['辽宁'])
        const p2 = new Node(NodeType.NodeTypePower,"西藏",chinaGeoCoordMap['西藏'])
        const a1 = new Node(NodeType.NodeTypeAlgorithm,"河北",chinaGeoCoordMap['河北'])
        const a2 = new Node(NodeType.NodeTypeAlgorithm,"山西",chinaGeoCoordMap['山西'])
        const a3 = new Node(NodeType.NodeTypeAlgorithm,"湖北",chinaGeoCoordMap['湖北'])
        s1.nodes.push(p1)
        s1.nodes.push(p2)

        p1.nodes.push(a1)
        p1.nodes.push(a2)
        p2.nodes.push(a3)

        const data1 = new Node(NodeType.NodeTypeData,"上海市",chinaGeoCoordMap['上海'])
        const data2 = new Node(NodeType.NodeTypeData,"江苏",chinaGeoCoordMap['江苏'])
        const data3 = new Node(NodeType.NodeTypeData,"安徽",chinaGeoCoordMap['安徽'])
        const data4 = new Node(NodeType.NodeTypeData,"浙江",chinaGeoCoordMap['浙江'])
        const data5 = new Node(NodeType.NodeTypeData,"福建",chinaGeoCoordMap['福建'])
        const data6 = new Node(NodeType.NodeTypeData,"广东",chinaGeoCoordMap['广东'])
        const data7 = new Node(NodeType.NodeTypeData,"山东",chinaGeoCoordMap['山东'])
        a1.nodes.push(...[data1,data2,data3])
        a2.nodes.push(...[data4,data5])
        a3.nodes.push(...[data6,data7])
        s = s1
        addService(s1)
    }

    const addService = (s:Node)=>{
        option.series = makeSeries(s)
        console.log(option.series)
        myChart.setOption(option)
        getPie()
    }


    const getPie = ()=>{
        let stat ;
        if(!s){
            stat = {data:0,algorithm:0,power:0,service:0}
        }else{
            stat = statNode(s)
        }
        const option = {
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: stat.service, name: 'Service' },
                  { value: stat.power, name: 'Power' },
                  { value: stat.algorithm, name: 'Algorithm' },
                  { value: stat.data, name: 'Data' },
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          const pieChart = echarts.init(document.getElementById('pie')); 
          pieChart.setOption(option);
    }
    
    return (<div className ="map_box">
                <div className="map" id="map"/>
                <div className="map_stat">
                    <div className="map_circle" id="pie"></div>
                    <div className="map_line" id="line"></div>
                </div>
            </div>
    );
};


const getLine = (data:any,chinaGeoCoordMap:any)=>{
    const res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem.name];
        var toCoord = [116.4551, 40.2539]; //中心点地理坐标
        if (fromCoord && toCoord) {
            res.push([
                {
                    // 飞线从哪里出发
                    coord: fromCoord,
                    value: dataItem.value,
                },
                {
                    // 飞线去往哪里
                    coord: toCoord,
                },
            ]);
        }
    }
    return res;
}

const getRegions = (dataList:Array<any>)=>{
        let arr:Array<any> = [];
        let color = [
            "#3eb9e2",
            "#3abae0",
            "#377bac",
            "#38a0cb",
            "#398fbe",
            "#3571a3",
        ];
        dataList.forEach((i:any, j:any) => {
            arr.push({
                name: i.name,
                itemStyle: {
                    areaColor: color[j % (color.length - 1)],
                },
            });
        });
        return arr;
}