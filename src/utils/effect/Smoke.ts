import * as Three from "three"
export class Smoke{
    scene:Three.Scene;
    smokes:Array<any>;
    geometry?:Three.BufferGeometry;
    material?:Three.PointsMaterial;
    points?:Three.Points;
    constructor(scene:Three.Scene){
        this.scene = scene
        this.smokes = []
        this.init()
    }
    init(){
        this.geometry = new Three.BufferGeometry()
        this.material = new Three.PointsMaterial({
            size:1,
            map: new Three.TextureLoader().load('/assets/models/smoke.png'),
            transparent:true,
            depthWrite:false,
        })
        this.material.onBeforeCompile = function(shader:Three.WebGLProgramParametersWithUniforms){
            const vertexShader = `
                attribute float a_opacity;
                attribute float a_size;
                attribute float a_scale;
                varying float v_opacity;

                void main(){
                    v_opacity = a_opacity;
                  
            `
            const glPosition = `
                gl_PointSize = a_size * a_scale;
            `
            shader.vertexShader = shader.vertexShader.replace('void main() {', vertexShader)
            shader.vertexShader = shader.vertexShader.replace('gl_PointSize = size', glPosition)
                    
            const fragment1 = `
                varying float v_opacity;
            
                void main() {
            `
            const fragment2 = `
                gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
            `

            shader.fragmentShader = shader.fragmentShader.replace('void main() {', fragment1)
            shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4(outgoingLight, diffuseColor.a);', fragment2)
        }
        this.points = new Three.Points(this.geometry, this.material);

        this.scene.add(this.points)
    }

    createParticle(){
        this.smokes.push({
            size:100,
            opacity:1,
            x:0,
            y:0,
            z:0,
            speed:{
                x:Math.random(),
                y:Math.random() + 0.3,
                z:Math.random()
            },
            scale:1
        })
    }
    setAttribute(positionList:Array<any>,opacityList:Array<any>,sizeList:Array<any>,scaleList:Array<any>){
        this.geometry!.setAttribute('position', new Three.BufferAttribute(new Float32Array(positionList), 3))
        this.geometry!.setAttribute('a_opacity', new Three.BufferAttribute(new Float32Array(opacityList), 1))
        this.geometry!.setAttribute('a_size', new Three.BufferAttribute(new Float32Array(sizeList), 1))
        this.geometry!.setAttribute('a_scale', new Three.BufferAttribute(new Float32Array(scaleList), 1))
    }

    update(){
        const positionList = new Array<any>()
        const sizeList = new Array<any>()
        const scaleList = new Array<any>()
        const opacityList = new Array<any>()
        this.smokes  = this.smokes.filter(item=>{
            if (item.opacity < 0) {
                return false;
            }
            item.opacity -= 0.01;
        
            item.x = item.x + item.speed.x
            item.y = item.y + item.speed.y
            item.z = item.z + item.speed.z
        
            item.scale += 0.01;
        
            positionList.push(item.x, item.y, item.z);
            sizeList.push(item.size);
            scaleList.push(item.scale);
            opacityList.push(item.opacity);
        
            return true
        })
        this.setAttribute(
            positionList,
            opacityList,
            sizeList,
            scaleList,
        )
        
    }
    animation() {
        this.createParticle()
        this.update();
    }
}