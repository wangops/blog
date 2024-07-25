
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { City } from "@/city/index";
import { VRButton } from "three/examples/jsm/Addons.js";
export const initCity = ()=>{

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,3000)
    camera.position.set(2000,2000,2000)
    scene.add(camera)


    const renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setSize(window.innerWidth,window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    renderer.setClearColor(new THREE.Color(0x000000))
    const el = document.getElementById('gl')
    console.log(el)
    el!.appendChild(renderer.domElement)

    document.body.appendChild(VRButton.createButton( renderer ))
    renderer.xr.enabled = true;

    const controls = new OrbitControls(camera,renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = true
    controls.minDistance = 100
    controls.maxDistance = 2000
    controls.enablePan = true

    scene.add(new THREE.AmbientLight(0xadadad))
    const directionLight = new THREE.DirectionalLight(0xffffff)
    directionLight.position.set(0,0,0)
    scene.add(directionLight)


    const city = new City(scene,camera,controls)
    const clock = new THREE.Clock()

    const start = ()=>{
        const delta = clock.getDelta()
        city.start(delta)
        controls.update()
        renderer.render(scene,camera)
        renderer.setAnimationLoop(start)
        //requestAnimationFrame(start)
    }
    start()

    window.addEventListener('resize',()=>{
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth,window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    })
}

