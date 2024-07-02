import * as THREE from "three"
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { color } from "three/examples/jsm/nodes/Nodes.js";
// Floor Texture
const floorTexture=new THREE.TextureLoader().load("../imges/grass.jfif")
// Floor
const floorGeometry=new THREE.PlaneGeometry(20,20);
const floorMatarial=new THREE.MeshBasicMaterial({map:floorTexture,side:THREE.DoubleSide});
const floor=new THREE.Mesh(floorGeometry,floorMatarial);
floor.rotation.x=-Math.PI/2;
floor.position.y=-3
// Road texture
const roadTexture=new THREE.TextureLoader().load("../imges/road.jfif")
// road
const roadGeometry =new THREE.PlaneGeometry(20,3.5);
const roadMatarial=new THREE.MeshBasicMaterial({map:roadTexture})
const road=new THREE.Mesh(roadGeometry,roadMatarial);
road.position.y=-2.99;
road.position.z=5
road.rotation.x=-Math.PI/2;
const floorAndRoad=new THREE.Group();
floorAndRoad.add(floor,road);

export default floorAndRoad;
