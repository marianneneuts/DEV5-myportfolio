import * as THREE from 'three'

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createWalls();
        this.createRoof();
    }

    createWalls() {
        const textureLoader = new THREE.TextureLoader();
        const rottenTexture = textureLoader.load('/textures/rotten-wood.jpg');

        const geometry = new THREE.BoxGeometry( 20, 20, 1 );
        const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
        material.map = rottenTexture;
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

    createRoof() {
        const geometry = new THREE.ConeGeometry( 20, 10, 4 );
        const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
        const roof = new THREE.Mesh( geometry, material );
        roof.position.y = 22.5;
        roof.rotation.y = Math.PI / 4;
        this.group.add( roof );
    }
}