import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";
import floorAndRoad from "./Objects/floorAndRoad";
import roof from "./Objects/house";
import car from "./Objects/car";
import gsap from "gsap";
const scene=new THREE.Scene();




scene.add(roof);
scene.add(floorAndRoad);
scene.add(car);
gsap.to(car.position,{duration:5,x:9,repeat:-1})



// const geometry=new THREE.BoxGeometry(2,2,2);
// const matarial=new THREE.MeshBasicMaterial({color:"yellow",wireframe:true})
// const cube=new THREE.Mesh(geometry,matarial);





console.log(scene)






// resize window



// Renderer
const target=document.querySelector(".scene");
const renderer=new THREE.WebGLRenderer({canvas:target})
window.addEventListener('resize',()=>{
        renderer.setSize(window.innerWidth,window.innerHeight)
})


// camera
const camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight);
scene.add(camera);
camera.position.z=25;
// renderer.setSize(700,700);
// control

const control=new OrbitControls(camera,target)
control.enableDamping=true

// continuous update
   
const tick=()=>{
    control.update(); 
    renderer.render(scene,camera);
    window.requestAnimationFrame(tick);
}
tick();