import './style.css'
import * as THREE from 'three'

//console.log('Hello Three.js')
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
 const sizes = {
    width: 800,
    height: 600
}

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

/**Position
*/
//mesh.position.x = 0.7
//mesh.position.x = -0.6
//mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)
scene.add(mesh)
//console.log(mesh.position.length())
//mesh.position.normalize()

/**
 * Scale
 */
mesh.scale.set(2,0.5,0.5)
//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5

/**Rotation
*/
mesh.rotation.reorder('XYZ')
mesh.rotation.x = Math.PI*0.25
mesh.rotation.y = Math.PI*0.25




//Axes helper



const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)



/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3


scene.add(camera)
camera.lookAt(mesh.position)
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)