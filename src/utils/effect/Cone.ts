import { color } from "../config";
import * as Three from "three"

export class Cone{
    scene?:Three.Scene;
    top?:any;
    height:any;
    constructor(scene:Three.Scene,top:any,height:any){
        this.scene =  scene;
        this.top = top;
        this.height = height
        this.createCone({
            color:color.cone,
            height:60,
            opacity:0.6,
            speed:4.0,
            position:{
                x:0,
                y:50,
                z:200 
            }
        })
    }
    createCone(options:any){
        const geometry = new Three.ConeGeometry(15,30,4)
        const material = new Three.ShaderMaterial({
            uniforms:{
                u_color:{
                    value:new Three.Color(options.color)
                },
                u_height:this.height,
                u_top:this.top
            },
            vertexShader:`
                uniform float u_top;
                uniform float u_height;
                void main(){
                    float f_angle = u_height / 10.0;
                    float new_x = position.x * cos(f_angle) - position.z * sin(f_angle);
                    float new_y = position.y;
                    float new_z = position.z * cos(f_angle) + position.x * sin(f_angle);

                    vec4 v_position = vec4(new_x,new_y + u_top,new_z,1.0);
                    gl_Position = projectionMatrix * modelViewMatrix * v_position;
                }
            `,
            fragmentShader:`
                uniform vec3 u_color;
                void main(){
                    gl_FragColor = vec4(u_color,0.6);
                }
            `,
            transparent:true,
            side:Three.DoubleSide,
            depthTest:false
        })

        const  mesh = new Three.Mesh(geometry,material);
        mesh.position.copy(options.position)
        mesh.rotateZ(Math.PI)
        this.scene?.add(mesh)
    }
}