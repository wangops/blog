import * as Three from "three"
import { color } from "../config"
export class Fly{
    scene:Three.Scene;
    time:any;
    constructor(scene:Three.Scene,time:any){
        this.scene = scene;
        this.time = time
        this.createFly({
            source:{
                x:300,
                y:0,
                z:-200
            },
            target:{
                x:-500,
                y:0,
                z:-240
            },
            range:200,
            height:300,
            color:color.fly,
            size:30
        })
    }
    createFly(options:any){
        const source = new Three.Vector3(options.source.x,options.source.y,options.source.z)
        const target = new Three.Vector3(options.target.x,options.target.y,options.target.z)
        const center = target.clone().lerp(source,0.5)
        center.y +=  options.height
        const len = Math.floor(source.distanceTo(target))
        const curve = new Three.QuadraticBezierCurve3(source,center,target)

        const points = curve.getPoints(len)
        const position = new Array<number>()
        const positionIndex = new Array<number>()
        points.forEach((item:Three.Vector3,index:number)=>{
            position.push(item.x,item.y,item.z)
            positionIndex.push(index)
        })
        const geometry = new Three.BufferGeometry()
        geometry.setAttribute("position",new Three.Float32BufferAttribute(position,3))
        geometry.setAttribute("a_position",new Three.Float32BufferAttribute(positionIndex,1))
        const material = new Three.ShaderMaterial({
            uniforms:{
                u_color:{
                    value: new Three.Color(options.color)
                },
                u_range:{
                    value: options.range
                },
                u_size:{
                    value:options.size
                },
                u_total:{
                    value:len
                },
                u_time:this.time
            },
            vertexShader: `
                attribute float a_position;
        
                uniform float u_time;
                uniform float u_size;
                uniform float u_range;
                uniform float u_total;
      
                varying float v_opacity;
        
                void main() {
                    float size = u_size;
                    float total_number = u_total * mod(u_time, 1.0);           
                    if (total_number > a_position && total_number < a_position + u_range) {
                
                    // 拖尾效果
                        float index = (a_position + u_range - total_number) / u_range;
                        size *= index;
                    
                    
                        v_opacity = 1.0;
                    } else {
                        v_opacity = 0.0;
                    }
                
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size / 10.0;
                }
            `,
            fragmentShader: `
                uniform vec3 u_color;
                varying float v_opacity;
                
                void main() {
                gl_FragColor = vec4(u_color, v_opacity);
                }
            `,
            transparent:true,
        })

        const point = new Three.Points(geometry,material)
        this.scene.add(point)
    }
}