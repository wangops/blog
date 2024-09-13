export enum NodeType{
    NodeTypeData       = 0,   // 数据节点
    NodeTypeAlgorithm  = 1,   // 算法节点
    NodeTypePower      = 2,   // 算力节点
    NodeTypeService    = 3    // 服务节点
}

export class Node{
    type:NodeType
    name:string
    nodes:Array<Node>
    color:string
    coordinate:Array<number>
    constructor(type:NodeType,name:string,coordinate:Array<number>){
        this.type = type
        this.name = name
        this.coordinate = coordinate
        this.nodes = new Array()
        if(this.type == NodeType.NodeTypeData){
            this.color = "#00ffff";
        }else if(this.type == NodeType.NodeTypeAlgorithm){
            this.color = "#ffff00"
        }else if(this.type == NodeType.NodeTypePower){
            this.color = "#00ff00"
        }else{
            this.color = "#e8211e"
        }
    }
    // 标记中心点
    makeNodeCenter(){
        return {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 15,
            rippleEffect: {
                period: 3,
                brushType: "fill", // 动画样式 fill stroke
                scale: 20,
                color: this.color,
                number: 2,
            },
            symbol: "circle", // 图标样式
            symbolSize: 2,
            itemStyle: {
                color: this.color,
            },
            // 中心点数据
            data: [
                {
                    name: this.name,
                    value:this.coordinate
                },
            ],
        }
    }
    // 标记线条
    makeNodeLine(parentNode:Node){
        return {
            type: "lines",
            coordinateSystem: "geo",
            zlevel: 100,
            animation:false,
            effect: {
                show: true,
                period: 3, // 图标飞跃速度，值越小速度越快
                trailLength: 0.3, // 尾迹长度[0,1]值越大，尾迹越长
                symbol: "pin", // 图标类型
                symbolSize: 6, // 图标大小
                color: "#2754f9", // 图标颜色
                loop:true,
                roundTrip:false
            },
            lineStyle: {
                color: "#2754f9",
                normal: {
                    show: true,
                    width: 2, //尾迹线条宽度
                    opacity: 0.0, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                    color: "#000000", // 飞线颜色
                },
            },
            // 飞线数据
            data: [[{coord: parentNode.coordinate},{coord: this.coordinate}]]
        }
    }
}

// 统计节点数量
export const statNode = (node:Node)=>{
    const stat = {data:0,algorithm:0,power:0,service:0}
    recursiveNode(node,stat)
    return stat
}
const recursiveNode = (node:Node,stat:any)=>{
    if(node.type == NodeType.NodeTypeData){
        stat.data += 1;
    }else if(node.type == NodeType.NodeTypeAlgorithm){
        stat.algorithm += 1;
    }else if(node.type == NodeType.NodeTypePower){
        stat.power += 1;
    }else{
        stat.service += 1;
    }
    if(node.nodes && node.nodes.length > 0){
        node.nodes.forEach((subNode:Node)=>{
            recursiveNode(subNode,stat)
        })
    }
}

export const makeSeries = (node:Node)=>{
    const serries = new Array()
    makeLine(null,node,serries)
    return serries
}
const makeLine  = (parentNode:Node | null,node:Node,serries:Array<any>)=>{
    serries.push(node.makeNodeCenter())
    if(node.nodes && node.nodes.length > 0){
        node.nodes.forEach((subNode:Node)=>{
            serries.push(subNode.makeNodeLine(node))
            makeLine(node,subNode,serries)
        })
    }
}