import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import * as THREE from 'three';
import Poster1 from './Poster1';
import Footer from './Footer';
import Top_textimonials from './Top_textimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-background').appendChild(renderer.domElement);

    // Create geometry with particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create points material
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      opacity: 0.5,
      transparent: true,
    });

    // Create points and add them to the scene
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Set camera position
    camera.position.z = 500;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001; // Rotate particles
      renderer.render(scene, camera); // Render the scene
    };
    animate();

    // Adjust camera and renderer on window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.getElementById('three-background').removeChild(renderer.domElement);
    };
  }, []);

  const handleGetStartedClick = () => {
    navigate('/freelancer_form'); // Replace '/new-page' with the route you want to navigate to
  };
  useEffect(()=>{
    AOS.init({duration:3000})
    },[])
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <div className="flex w-full justify-center items-center h-screen relative">
        {/* Three.js background */}
        <div id="three-background" className="absolute top-0 left-0 w-full h-full -z-10"></div>

        {/* Foreground content */}
        <div className="flex w-full mt-20 flex-col md:flex-row justify-evenly items-center">
          <div className="text-white min-h-screen w-8/12 flex flex-col items-center justify-center">
            <h1  className="text-[2.8rem] font-extrabold mb-4 text-center home_heading_font animate-slide-in-left">
              <span data-aos="fade-right" className="text-blue-600">Effortlessly</span> connect talent with exciting <span className='text-green-600'>projects</span> in just a few clicks
            </h1>

            <p className="text-lg mb-8 text-center home_subheading_font animate-slide-in-left-delayed">
             <span data-aos="fade-up" > A platform that connects freelancers with opportunities, offering secure transactions, AI-powered recommendations, and seamless project management </span>.
            </p>

            <div className="flex space-x-4">
              <a href="/freelancer_form">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
                  Get started
                </button>
              </a>
              <form>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="bg-gray-800 text-white rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Quick search..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Top_textimonials />
      {/* <Poster1/> */}
      <Footer />
    </div>
  );
};

export default Home;
