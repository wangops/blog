import { color } from "../config";
import * as Three from "three"
import { Cylinder } from "./Cylinder";
export class Wall{
    config:any;
    constructor(scene:Three.Scene,time:any){
        this.config = {
            radius:50,
            height:50,
            open:true,
            color:color.wall,
            opacity:0.6,
            position:{
                x:0,
                y:0,
                z:200
            },
            speed:1.0
        }    
        new Cylinder(scene,time).createCylinder(this.config)
    }
}