import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";

// Tyres
const ftyreGeometry=new THREE.CylinderGeometry(.15,.15,2);
const ftyreMatarial=new THREE.MeshBasicMaterial({color:"black"});
const ftyre=new THREE.Mesh(ftyreGeometry,ftyreMatarial);
ftyre.rotation.x=Math.PI/2
ftyre.position.z=5
ftyre.position.y=-2.8

const btyreGeometry=new THREE.CylinderGeometry(.15,.15,2);
const btyreMatarial=new THREE.MeshBasicMaterial({color:"black"});
const btyre=new THREE.Mesh(btyreGeometry,btyreMatarial);
btyre.rotation.x=Math.PI/2
btyre.position.z=5
btyre.position.y=-2.8
btyre.position.x=-1.5

// car body

const carGeometry= new RoundedBoxGeometry(2.5,1.99,.5);
const carMaterial=new THREE.MeshBasicMaterial({color:"wheat"});
const carBody=new THREE.Mesh(carGeometry,carMaterial);
carBody.rotation.x=Math.PI/2
carBody.position.z=5
carBody.position.y=-2.6
carBody.position.x=-.8

const hoodGeometry= new RoundedBoxGeometry(1.2,1.99,.5);
const hoodMaterial=new THREE.MeshBasicMaterial({color:"white"});
const hood=new THREE.Mesh(hoodGeometry,hoodMaterial);
hood.rotation.x=Math.PI/2
hood.position.z=5
hood.position.y=-2.3
hood.position.x=-1




const car=new THREE.Group()
car.add(ftyre,btyre,carBody,hood);
car.position.x=-7.5

export default car;