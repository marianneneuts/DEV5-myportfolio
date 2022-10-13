import * as THREE from 'three'

export default class Base {
    constructor() {
        this.group = new THREE.Group();
        this.createGround();
    }

    createGround() {
        const geometry = new THREE.BoxGeometry(80, 0.1, 80);
        const material = new THREE.MeshStandardMaterial({ color: 0x4d2c1f});
        const ground = new THREE.Mesh(geometry, material);
        ground.position.y = -0.05;
        this.group.add(ground);
    }
}