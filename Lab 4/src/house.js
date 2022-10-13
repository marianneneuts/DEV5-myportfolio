import * as THREE from 'three'

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createWalls();
    }

    createWalls() {
        const geometry = new THREE.BoxGeometry( 20, 20, 1 );
        const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
        const wall1 = new THREE.Mesh( geometry, material );
        const wall2 = new THREE.Mesh( geometry, material );
        const wall3 = new THREE.Mesh( geometry, material );
        const wall4 = new THREE.Mesh( geometry, material );

        wall1.position.set( 0, 10, 10 );
        wall2.position.set( 0, 10, -10 );
        wall3.position.set( 10, 10, 0 );
        wall3.rotation.y = Math.PI / 2;
        wall4.position.set( -10, 10, 0 );
        wall4.rotation.y = Math.PI / 2;

        this.group.add( wall1 );
        this.group.add( wall2 );
        this.group.add( wall3 );
        this.group.add( wall4 );
    }
}