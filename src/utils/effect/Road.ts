import * as Three from "three"
import { color } from "../config";
import type { CityValue } from '@/types';
interface Position{
    x:number,
    y:number,
    z:number
}
interface FlyOptions{
    source:Position,
    target:Position,
    range:number,
    height:number,
    color:string,
    size:number
}
export class Road{
    scene:Three.Scene;
    time:CityValue;
    constructor(scene:Three.Scene,time:CityValue){
        this.scene = scene
        this.time = time
        this.createFly(<FlyOptions>{
            source:<Position>{x:300,y:0,z:-200},
            target:<Position>{x:-500,y:0,z:-240},
            range:50,
            height:300,
            color:color.fly,
            size:30
        })
    }
    createFly(options:FlyOptions){
        const curve = new Three.CatmullRomCurve3([
            new Three.Vector3(-320, 0, 160),
            new Three.Vector3(-150, 0, -40),
            new Three.Vector3(-10, 0, -35),
            new Three.Vector3(40, 0, 40),
            new Three.Vector3(30, 0, 150),
            new Three.Vector3(-100, 0, 310),
        ])
        const points = curve.getPoints(400)
        const positions = new Array<number>()
        const positionIndexs = new Array<number>()
        points.forEach((item,index)=>{
            positions.push(item.x,item.y,item.z)
            positionIndexs.push(index)
        })
        const geometry = new Three.BufferGeometry()
        geometry.setAttribute('position',new Three.Float32BufferAttribute(positions,3))
        geometry.setAttribute('position_index',new Three.Float32BufferAttribute(positionIndexs,1))
        const material = new Three.ShaderMaterial({
            uniforms:{
                u_color:{
                    value:new Three.Color(options.color)
                },
                u_range:{
                    value:options.range
                },
                u_size:{
                    value:options.size
                },
                u_total:{
                    value:400
                },
                u_time:this.time
            },
            //                         float index = (position_index  + u_range - total_number) / u_range;
            // size *=  index;
            vertexShader:`
            attribute float position_index;
        
            uniform float u_time;
            uniform float u_size;
            uniform float u_range;
            uniform float u_total;
          
            varying float v_opacity;
            
            void main() {
               float size = u_size;
               float total_number = u_total * mod(u_time, 1.0);
               
               if (total_number > position_index && total_number < position_index + u_range) {
               
                 // 拖尾效果
                 float index = (position_index + u_range - total_number) / u_range;
                 size *= index;
                 
                 
                 v_opacity = 1.0;
               } else {
                 v_opacity = 0.0;
               }
               
               gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
               gl_PointSize = size / 10.0;
            } 
            `, 
            fragmentShader:`
            uniform vec3 u_color;
            varying float v_opacity;
            
            void main() {
              gl_FragColor = vec4(u_color, v_opacity);
            }
            `,
            transparent:true
        })
        const point = new Three.Points(geometry,material)
        this.scene.add(point)
    }
}