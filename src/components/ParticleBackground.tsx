import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150, // Interaction radius
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      size: number;
      opacity: number;
      hue: number;
      density: number;
    }

    const particles: Particle[] = [];
    const particleCount = 180;

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 2;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseVx: (Math.random() - 0.5) * 0.5,
        baseVy: (Math.random() - 0.5) * 0.5,
        size: size,
        opacity: Math.random() * 0.5 + 0.4,
        hue: Math.random() * 60 + 200, // Blue to cyan range
        density: (Math.random() * 30) + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear completely for sharper lines, or use fillRect for trail

      // Optional: Trail effect
      // ctx.fillStyle = 'rgba(2, 6, 23, 0.2)';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Physics with Mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        // Max distance, past that the force is 0
        const maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;

        // If force is negative (outside radius), set to 0
        if (force < 0) force = 0;

        const directionX = (forceDirectionX * force * particle.density) * 0.6;
        const directionY = (forceDirectionY * force * particle.density) * 0.6;

        if (distance < mouse.radius) {
          // Repulsion: Move away from mouse
          particle.vx -= directionX;
          particle.vy -= directionY;
        } else {
          // Return to base velocity over time (friction/inertia)
          if (particle.vx !== particle.baseVx) {
            const dvx = particle.vx - particle.baseVx;
            particle.vx -= dvx * 0.05; // Friction factor
          }
          if (particle.vy !== particle.baseVy) {
            const dvy = particle.vy - particle.baseVy;
            particle.vy -= dvy * 0.05;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary Check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.baseVx *= -1; // Flip base velocity too so it doesn't fight
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.baseVy *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          // Optimization: Only check half the pairs if loop index available, sticking to keeping it simple for now
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 80%, 70%, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Connect to mouse
        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `hsla(${particle.hue}, 90%, 80%, ${0.2 * (1 - distance / mouse.radius)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)' }}
    />
  );
};

export default ParticleBackground;