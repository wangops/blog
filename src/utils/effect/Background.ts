import * as Three from "three"
export class Background{
    scene:Three.Scene;
    url:string;
    constructor(scene:Three.Scene){
        this.scene = scene
        this.url = '/imgs/black-bg.png'
        this.init()
    }
    init(){
        const loader = new Three.TextureLoader()
        const geometry = new Three.SphereGeometry(5000,32,32)
        const material = new Three.MeshBasicMaterial({
            side:Three.DoubleSide,
            color:0xff0000,
            map:loader.load(this.url)
        })
        const sphere = new Three.Mesh(geometry,material)
        sphere.position.copy({
            x:0,
            y:0,
            z:0
        })
        this.scene.add(sphere)
    }
}