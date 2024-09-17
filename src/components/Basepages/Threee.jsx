import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Threee = () => {
  const canvasRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    setScene(scene);

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    setCamera(camera);

    const renderer = new THREE.WebGLRenderer({ canvas });
    setRenderer(renderer);

    // Create a sphere for the person's head
    const geometry = new THREE.SphereGeometry(0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(0, 1.5, 0); // Position above the desk
    scene.add(sphere);

    // Create a box for the person's body
    const boxGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 1, 0);
    scene.add(box);

    // Create a box for the desk
    const deskGeometry = new THREE.BoxGeometry(1, 0.2, 0.5);
    const deskMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(0, 0.1, 0);
    scene.add(desk);

    // Create a plane for the floor
    const planeGeometry = new THREE.PlaneGeometry(5, 5);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Create a clock to track time
    const clock = new THREE.Clock();

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Update time
      const elapsedTime = clock.getDelta();

      // Rotate the sphere (head)
      sphere.rotation.y += 0.1 * elapsedTime;

      // Make the box (body) oscillate
      box.position.y = 1 + Math.sin(elapsedTime * 2) * 0.1;

      // Render the scene
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Threee;