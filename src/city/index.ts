import { loadFBX } from '@/utils';
import  * as THREE from 'three'
import type { OrbitControls } from 'three/examples/jsm/Addons.js';
import type { CityValue } from '@/types';
import { SurroundLine } from '@/utils/effect/SurroundLine';
import { Radar } from '@/utils/effect/Radar'; 
import { Road } from "@/utils/effect/Road"
import { Smoke } from '@/utils/effect/Smoke';
import { Background } from '@/utils/effect/Background';
import { Fly } from '@/utils/effect/Fly';
import { Wall } from '@/utils/effect/Wall';
import { Cone } from '@/utils/effect/Cone';
import { Ball } from '@/utils/effect/Ball';
import { Circle } from '@/utils/effect/Circle';
import * as TWEEN from "@tweenjs/tween.js"

export class City{
    scene:THREE.Scene;
    camera:THREE.Camera;
    controls:OrbitControls;
    height:CityValue;
    top:CityValue;
    time:CityValue ;
    smoke?:Smoke;
    flag:boolean;
    tweenPosition:any;
    constructor(scene:THREE.Scene,camera:THREE.Camera,controls:OrbitControls){
        this.scene = scene
        this.camera = camera
        this.controls = controls;
        this.height = {value:3000000}
        this.top = {
            value: 0,
        }
        this.time = {value:10}
        this.flag = false
        this.loadCity()
    }
    loadCity(){
        loadFBX('/assets/models/beijing.fbx').then((object)=>{
            object.traverse((child:THREE.Object3D)=>{
                if(child.type == "Mesh"){
                    new SurroundLine(this.scene as any, child, this.height, this.time);
                }
            })
            this.initEffect()
        })
    }
    initEffect(){
        new Radar(this.scene, this.time);
        new Road(this.scene, this.time);
        //new Background(this.scene)
        new Fly(this.scene,this.time)
        new Wall(this.scene,this.time)   
        new Cone(this.scene,this.top,this.height)  
        new Ball(this.scene,this.time)
        new Circle(this.scene,this.time)
        this.smoke = new Smoke(this.scene)
        this.addClick()
    }
    start(delta:number) {
        if(this.smoke)this.smoke.animation()
        this.time.value += delta;
        this.height.value += 0.4;
        if (this.height.value > 160) {
          this.height.value = 5;
        }

        if (this.top.value > 15 || this.top.value < 0) {
            this.flag = !this.flag
        }
        this.top.value += this.flag ? -0.8 : 0.8;

        if(this.tweenPosition)this.tweenPosition.update()
    }


    addClick(){
        document.onclick = (event:MouseEvent)=>{
            this.clickEvent(event)
        }
    }
    clickEvent(event:MouseEvent){
        // 获取到浏览器坐标
        const x = (event.clientX / window.innerWidth) * 2 - 1
        const y = -(event.clientY / window.innerHeight) * 2 + 1
        console.log(x)
        console.log(y)
        // 创建三维设备坐标
        const standardVector =  new THREE.Vector2(x,y)
        // 转化为世界坐标
        //const worldVector = standardVector.unproject(this.camera)
        // 做序列化
        //const ray = worldVector.sub(this.camera.position).normalize()
        // 创建一个射线发射器，用来发射一条射线
        const raycaster = new THREE.Raycaster()
        raycaster.setFromCamera(standardVector,this.camera)

        // 返回涉嫌碰撞到的物体
        const intersects = raycaster.intersectObjects(this.scene.children,true)

        let point3D = null;
        if(intersects .length){
            point3D = intersects[0]
        }
        if(point3D){
            const proportion = 3;
            const time = 1000
            console.log(point3D)
            this.tweenPosition = new TWEEN.Tween(this.camera.position).to({
                x:point3D.point.x * proportion,
                y:point3D.point.y * proportion,
                z:point3D.point.z * proportion
            },time).start()
        } 
    }
}