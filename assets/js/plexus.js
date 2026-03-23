/**
 * Lightweight Plexus Background (Phase 2 - Optimized & Visible)
 * Corrected color handling for RGB and higher visibility
 */

const initPlexus = () => {
    const container = document.getElementById('plexus-layer');
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    let particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 100;
    const connectionDistance = isMobile ? 100 : 180;
    
    let themeColor = 'rgb(0, 0, 0)';

    const updateTheme = () => {
        // Read theme color from CSS variable
        themeColor = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color').trim();
    };

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        updateTheme();
    };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 0.8; 
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const init = () => {
        resize();
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    const drawLine = (p1, p2, distance) => {
        const opacity = 1 - distance / connectionDistance;
        // Optimization: Use globalAlpha for cleaner and faster transparency control
        ctx.globalAlpha = opacity * 0.6; // Increased from original subtle 0.15
        ctx.strokeStyle = themeColor;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            
            ctx.globalAlpha = 0.8; // High visibility for dots
            ctx.fillStyle = themeColor;
            p1.draw();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    drawLine(p1, p2, dist);
                }
            }
        }
        requestAnimationFrame(animate);
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    window.addEventListener('resize', resize);
    init();
    animate();
};

document.addEventListener('DOMContentLoaded', initPlexus);
