import { Cylinder } from "./Cylinder";
import { color } from "../config";
import * as Three from "three"
export class Circle{
    constructor(scene:Three.Scene,time:any){
        const config = {
            radius :50,
            color:color.circle,
            opacity:0.6,
            height:1,
            open:false,
            position:{
                x:300,
                y:0,
                z:300
            },
            speed:2.0
        }
        new Cylinder(scene,time).createCylinder(config)
    }
}