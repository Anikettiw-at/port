'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeDModelPlaceholder() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Basic Three.js setup
    const scene = new THREE.Scene();
    // Use background color from CSS variables or default
    scene.background = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--background').trim() || '#f0f0f0');

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Simple rotating cube as placeholder
    const geometry = new THREE.BoxGeometry();
     // Use accent color from CSS variables for the material
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#008080';
    const material = new THREE.MeshStandardMaterial({ color: accentColor, roughness: 0.5, metalness: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 3;

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
        if(mountRef.current) {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
    }
    window.addEventListener('resize', handleResize);


    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        // Use optional chaining to safely access removeChild
        mountRef.current?.removeChild(renderer.domElement);
      }
      // Dispose Three.js objects to free memory
       geometry.dispose();
       material.dispose();
       renderer.dispose();
       scene.remove(cube); // Remove object from scene
       scene.remove(ambientLight);
       scene.remove(pointLight);
       // Consider disposing lights if needed
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <div ref={mountRef} className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-border" data-ai-hint="abstract geometric shape 3d render"/>;
}
