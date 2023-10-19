// Babylon.js
import  "https://assets.babylonjs.com/generated/Assets.js";
import  "https://cdn.babylonjs.com/recast.js";
import  "https://cdn.babylonjs.com/ammo.js";
import  "https://cdn.babylonjs.com/havok/HavokPhysics_umd.js";
import  "https://cdn.babylonjs.com/cannon.js";
import  "https://cdn.babylonjs.com/Oimo.js";
import  "https://cdn.babylonjs.com/earcut.min.js";
import  "https://cdn.babylonjs.com/babylon.js";
import  "https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js";
import  "https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js";
import  "https://cdn.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js";
import  "https://cdn.babylonjs.com/loaders/babylonjs.loaders.js";
import  "https://cdn.babylonjs.com/serializers/babylonjs.serializers.min.js";
import  "https://cdn.babylonjs.com/gui/babylon.gui.min.js";
import  "https://cdn.babylonjs.com/inspector/babylon.inspector.bundle.js";

const canvas = document.getElementById('renderCanvas');   // create a canvas where the magic is going to happen

const engine = new BABYLON.Engine(canvas);   // add the engine needed 

const createScene = async function () {

    //this is where we will spend most of thee time 
    const scene = new BABYLON.Scene(engine); // create a reference to the scene using the new Babylon engine

    //default camera and light for testing --------------
    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
    // --------------------------------------------------

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    const groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
    let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.rootUrl, scene);
    groundMaterial.diffuseTexture = groundTexture;
    ground.material = groundMaterial;

    BABYLON.SceneLoader.ImportMesh("", Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    });

    return scene;
}

const scene = await createScene(); // creates the scene were making

engine.runRenderLoop(function () {  // renders the scene
    scene.render();
});

window.addEventListener('resize', function() {     // enable the Babylon engine to resize properly 
    engine.resize();
});