// Grabbing the canvas (i just felt like i had to put a comment)
const canvas = document.getElementById("canvas");
// Babylon.js setup
const engine = new BABYLON.Engine(canvas, true);
//-----------------------------------------------//
const scene = new BABYLON.Scene(engine);
const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
var light = new BABYLON.PointLight('light1', new BABYLON.Vector3(10, 20, 10), scene);
// Skybox setup
var skyboxMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.inclination = 0;
//skyboxMaterial._cachedDefines.FOG = true;

// Sky mesh (box)
var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
skybox.material = skyboxMaterial;
// Ground mats setup
var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
groundMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
// Camera controls
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
camera.keysUp.push(87);    // W
camera.keysDown.push(83)   // D        
camera.keysLeft.push(65);  // A            
camera.keysRight.push(68); // S
// Baseplate
for (i = 0; i < 20; i += 1) {
    for (j = 0; j < 20; j += 1) {
        var box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);
        box.material = groundMaterial;
        box.position.x = j;
        box.position.z = i;
    }
}
// Render loop
var renderLoop = function() {
    scene.render();
};
engine.runRenderLoop(renderLoop);