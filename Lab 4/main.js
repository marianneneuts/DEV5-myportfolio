import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Base from './src/base'
import House from './src/house'
import Skeleton from './src/skeleton'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 50, 75, 0 );
scene.add( directionalLight );

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set( 0, 20, 100 );
controls.update();

const base = new Base();
scene.add(base.group);

const house = new House();
scene.add(house.group);

for (let i = 0; i < 35; i++) {
    const x = Math.random() * 80 - 40;
    const z = Math.random() * 80 - 40;
    if (x > 10 || x < -10 || z > 10 || z < -10) {
        const skeleton = new Skeleton(x, z);
        scene.add(skeleton.group);
    }
}

scene.fog = new THREE.Fog(0xaaaaaa, 0, 300);

function animate() {
	requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
animate();