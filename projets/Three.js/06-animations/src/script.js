import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { TetrahedronGeometry } from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Base
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)



/**
 * Animate
 */
gsap.to(mesh.position, {duration: 1, delay: 1, y: +1,repeat:-1,yoyo:true, easeEach:"expo.inOut"})
// gsap.to(mesh.rotation, {duration: 1, delay: 1, y: Math.PI,repeat:-1, easeEach:"expo.inOut"})


const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
     mesh.rotation.y = elapsedTime
    // mesh.rotation.x = elapsedTime
    // mesh.rotation.z = elapsedTime

    // ...
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()