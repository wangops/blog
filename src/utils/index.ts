import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import * as THREE from "three"
export const loadFBX = (url:string) => {
    const fbxLoader = new FBXLoader()
    return new Promise<THREE.Object3D>(((resolve, reject) => {
            fbxLoader.load(url, (object) => {
            resolve(object)
        }, () => {}, (error) => {
            reject(error)
        })
    }))
}
