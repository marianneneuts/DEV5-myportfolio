import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Skeleton {
    constructor(x, z) {
        this.group = new THREE.Group();
        this.createSkeleton(x, z);
    }

    createSkeleton(x, z) {
        const loader = new GLTFLoader();
        loader.load('/models/skeleton/scene.gltf', (gltf) => {
            const skeleton = gltf.scene;
            skeleton.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.set(0x444444);
                }
            });
            skeleton.scale.set(0.75, 0.75, 0.75);
            skeleton.position.x = x;
            skeleton.position.z = z;
            skeleton.position.y = 4.25;
            skeleton.rotateY(Math.random() * Math.PI * 2);
            this.group.add( skeleton );
        });
    }
}