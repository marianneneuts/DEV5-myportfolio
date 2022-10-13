import * as THREE from 'three'

export default class Base {
    constructor() {
        this.group = new THREE.Group();
        this.createGround();
        this.createSky();
    }

    createGround() {
        const textureLoader = new THREE.TextureLoader();
        const leavesTexture = textureLoader.load('/textures/fallen-leaves.jpg');

        const geometry = new THREE.BoxGeometry(80, 0.1, 80);
        const material = new THREE.MeshStandardMaterial({ color: 0x4c0000 });
        material.map = leavesTexture;
        const ground = new THREE.Mesh(geometry, material);
        ground.position.y = -0.05;
        this.group.add(ground);
    }

    createSky() {
        const textureLoader = new THREE.TextureLoader();
        const spookyTexture = textureLoader.load('/textures/spooky-halloween.jpg');

        const geometry = new THREE.SphereGeometry(200, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0x333333 });
        material.map = spookyTexture;
        material.side = THREE.BackSide;
        const sky = new THREE.Mesh(geometry, material);
        this.group.add(sky);
    }
}