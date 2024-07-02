import * as THREE from "three"
const geometry1=new THREE.BoxGeometry(2,2,2);
const matarial1=new THREE.MeshBasicMaterial({color:"yellow",wireframe:true})
const cube1=new THREE.Mesh(geometry1,matarial1);
cube1.position.x=-3;


const geometry2=new THREE.BoxGeometry(2,2,2);
const matarial2=new THREE.MeshBasicMaterial({color:"red",wireframe:true})
const cube2=new THREE.Mesh(geometry2,matarial2);
cube2.position.x=3;

export default {cube1,cube2};