import type { CityValue } from "@/types";
import * as THREE from "three"
import { color } from "../config";
export class SurroundLine{
    height:CityValue;
    time:CityValue;
    child:any;
    scene:THREE.Scene;
    constructor(scene:THREE.Scene,child:THREE.Object3D,height:CityValue,time:CityValue){
        this.scene = scene
        this.child = child
        this.height = height
        this.time = time
        this.createMesh()
    }
    computedMesh(){
        this.child.geometry.computeBoundingBox()
        this.child.geometry.computeBoundingSphere()

    }
    createMesh(){
        this.computedMesh()
        const { max,min } = this.child.geometry.boundingBox
        const size = max.z - min.z
                      const material = new THREE.ShaderMaterial({
            uniforms:{
                u_height:this.height,
                u_up_color:{
                    value:new THREE.Color(color.risingColor)
                },
                u_city_color:{
                    value:new THREE.Color(color.mesh)
                },
                u_head_color:{
                    value:new THREE.Color(color.head)
                },
                u_size:{
                    value:size
                },
                u_time:this.time,
            },
            vertexShader:`
            uniform float u_time;
            varying vec3 v_position;
            
            void main() {
              // 变化的时间 
              float uMax = 4.0;
            
              v_position = position;
              
              // 变化的比例
              float rate = u_time / uMax * 2.0;
              
              // 边界条件
              if (rate > 1.0) {
                rate = 1.0;
              }
              
              float z = position.z * rate;
            
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
            `,
            fragmentShader:`
            varying vec3 v_position;
        
            uniform vec3 u_city_color;
            uniform vec3 u_head_color;
            uniform float u_size;
            
            uniform vec3 u_up_color;
            uniform float u_height; 
            
            void main() {
              vec3 base_color = u_city_color;
              base_color = mix(base_color, u_head_color, v_position.z / u_size);
            
              // 上升线条的高度是多少
              if (u_height > v_position.z && u_height < v_position.z + 6.0) {
                float f_index = (u_height - v_position.z) / 3.0;
                base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
              }
            
              gl_FragColor = vec4(base_color, 1.0);
            }
            `
        }) 
        const mesh = new THREE.Mesh(this.child.geometry,material);
        mesh.position.copy(this.child.position)
        mesh.rotation.copy(this.child.rotation)
        mesh.scale.copy(this.child.scale)
        this.scene.add(mesh)
    }
}                  