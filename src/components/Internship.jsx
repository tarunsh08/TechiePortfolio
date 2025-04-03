import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Internship = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a1a, 1);
    mountRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      paddingTop: '80px' 
    }}>
      <div
        ref={mountRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />

      <div style={{
        position: 'relative',
        zIndex: 100,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          color: '#00fffc',
          fontSize: '3rem',
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '0 0 10px #00fffc, 0 0 20px #0084ff',
          marginBottom: '2rem'
        }}>
          Internship Details
        </h1>

        <div style={{
          background: 'rgba(10, 10, 26, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 252, 0.3)',
          borderRadius: '12px',
          padding: '2rem',
          color: '#ffffff',
          maxWidth: '800px',
          lineHeight: '1.6',
          boxShadow: '0 0 30px rgba(0, 255, 252, 0.1)'
        }}>
          <p style={{ marginBottom: '1rem' }}>
          Are you ready to gain hands-on experience and kickstart your career? TechieGreeks is offering 1-3 month internships in Content Writing, Graphic Designing, Digital Marketing, and App Development! Work on real-world projects, enhance your skills, and learn from industry experts. Plus, your hard work won’t go unnoticed—we provide performance-based stipends to reward your dedication. Whether you're a beginner or looking to refine your expertise, this is your chance to grow and shine. Apply now and take a step toward a brighter future! 🚀
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Duration: 1-3 months | Location: Ghaziabad (Uttar Pradesh) | Stipend: Performance-based
          </p>
        </div>
        <div style={{
          marginTop: '2rem',
          textAlign: 'left'
        }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRNO3oFVDIwsHBCVM6XoC9pOS1BJB1zrcKke6h1GD69VhCsQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'linear-gradient(90deg, #00fffc 0%, #0084ff 100%)',
              color: '#0a0a1a',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              fontFamily: "'Rajdhani', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 0 15px rgba(0, 255, 252, 0.5)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 0 25px rgba(0, 255, 252, 0.8)'
              }
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Internship;