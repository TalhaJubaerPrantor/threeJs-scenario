import * as THREE from "three";



// roof texture
const roofTexture=new THREE.TextureLoader().load("../imges/concreate.jfif")
// Roof
const roofGeometry=new THREE.BoxGeometry(8.5,.5,4.5);
const roofMatarial=new THREE.MeshBasicMaterial({map:roofTexture,bumpMap:roofTexture})
const roof=new THREE.Mesh(roofGeometry,roofMatarial);
roof.position.z=-3
roof.position.y=-.3


// chimney texture
const chimneyTexture=new THREE.TextureLoader().load("../imges/concreate.jfif")
// Chimney
const chimneyGeometry=new THREE.CylinderGeometry(.5,.5,1.3)
const chimneyMatareial=new THREE.MeshBasicMaterial({map:chimneyTexture})
const chimney=new THREE.Mesh(chimneyGeometry,chimneyMatareial)
chimney.position.x=-2.5
chimney.position.z=-2.5
chimney.position.y=.5
// Chimney top
const chimneyTopTexture=new THREE.TextureLoader().load("../imges/chimney.webp")
// Chimney top
const coneGeometry=new THREE.ConeGeometry(1,1,5)
const coneMatareial=new THREE.MeshBasicMaterial({map:chimneyTopTexture,color:"brown"})
const cone=new THREE.Mesh(coneGeometry,coneMatareial)
cone.position.x=-2.5
cone.position.z=-2.5
cone.position.y=1.3


// House body texture
const houseBodyTexture=new THREE.TextureLoader().load("../imges//brick wall.jpg")
// House Body
const houseGeometry=new THREE.BoxGeometry(8,2.5,4)
const houseMaterial=new THREE.MeshBasicMaterial({map:houseBodyTexture})
const houseBody= new THREE.Mesh(houseGeometry,houseMaterial);
houseBody.position.y=-1.74;
houseBody.position.z=-3

// Door Texture
const doorTexture=new THREE.TextureLoader().load("../imges/door.png")
// Door
const doorGeometry=new THREE.PlaneGeometry(1,2)
const doorMaterial=new THREE.MeshBasicMaterial({map:doorTexture})
const door=new THREE.Mesh(doorGeometry,doorMaterial);
door.position.y=-2
door.position.z=-.99
door.position.x=-1

// Garage Door texture
const garageDoorTexture=new THREE.TextureLoader().load("../imges/garage door.png")
// Garage
const garageGeometry=new THREE.PlaneGeometry(3,2)
const garageMaterial=new THREE.MeshBasicMaterial({map:garageDoorTexture})
const garage=new THREE.Mesh(garageGeometry,garageMaterial);
garage.position.y=-2
garage.position.z=-.99
garage.position.x=2

// Window
const windowTexture=new THREE.TextureLoader().load("../imges/window.png")
// Window
const windowGeometry=new THREE.PlaneGeometry(1,1)
const windowMaterial=new THREE.MeshBasicMaterial({map:windowTexture,bumpMap:windowTexture})
const window=new THREE.Mesh(windowGeometry,windowMaterial);
window.position.y=-1.8
window.position.z=-.99
window.position.x=-2.7

const house=new THREE.Group();
house.add(roof,houseBody,chimney,cone,door,garage,window);

 

export default house;