// src/components/ModelViewer.js
import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

const ModelViewer = () => {
  const groupRef = useRef();
  const cameraRef = useRef();
  const pointLightRef1 = useRef();
  const pointLightRef2 = useRef();
  const [theta1, setTheta1] = useState(0);
   const { scene } = useThree();

  

   // Load HDR Environment
  useEffect(() => {
    const hdrEquirect = new RGBELoader().load(
      "https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/ml_gradient_freebie_01.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      }
    );
    // /models/gear/Gear1.obj
    // Load OBJ model without MTLLoader
    const objLoader = new OBJLoader();
    objLoader.load('/models/low_poly_tree/Lowpoly_tree_sample.obj', (object) => {
      // Apply MeshStandardMaterial with environment map
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0,
            metalness: 0.5,
            envMap: scene.environment,
            envMapIntensity: 1,
          });
          child.material.needsUpdate = true;
        }
      });
      object.scale.set(0.08, 0.08, 0.08); // Adjust scale if necessary
      object.position.set(-0.1, -0.1, -0.1);
      groupRef.current.add(object);
    });
  }, [scene]);



  

  useFrame(() => {
    setTheta1((prevTheta) => prevTheta + 0.0025);

    if (cameraRef.current && groupRef.current) {
      const theta = theta1;
      cameraRef.current.position.x = Math.sin(theta) * 10;
      cameraRef.current.position.z = Math.cos(theta) * 10;
      cameraRef.current.position.y = Math.cos(theta);
      cameraRef.current.lookAt(0, 0, 0);

      pointLightRef1.current.position.x = Math.sin(theta + 1) * 11;
      pointLightRef1.current.position.z = Math.cos(theta + 1) * 11;
      pointLightRef1.current.position.y = 2 * Math.cos(theta - 3) + 3;

      pointLightRef2.current.position.x = -Math.sin(theta + 1) * 11;
      pointLightRef2.current.position.z = -Math.cos(theta + 1) * 11;
      pointLightRef2.current.position.y = 2 * -Math.cos(theta - 3) - 6;

      groupRef.current.rotation.y += 0.01; // Rotate the model
    }
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
        position={[0, 0, 10]}
      />
      <group ref={groupRef}>
        <pointLight
          ref={pointLightRef1}
          color={0x85ccb8}
          intensity={7.5}
          distance={20}
          position={[0, 3, 2]}
        />
        <pointLight
          ref={pointLightRef2}
          color={0x9f85cc}
          intensity={7.5}
          distance={20}
          position={[0, 3, 2]}
        />
      </group>
    </>
  );
};

export default ModelViewer;
