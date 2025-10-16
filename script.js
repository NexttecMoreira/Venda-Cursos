// Initialize Vanta.js
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4f46e5,
            backgroundColor: 0x0a0a0a,
            points: 10.00,
            maxDistance: 25.00,
            spacing: 18.00
        });
        
        // Initialize GSAP animations
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.utils.toArray('.course-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8
            });
        });
        
        gsap.utils.toAll('.glow-hover').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.3
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.3
                });
            });
        });
        
        // FAQ functionality
        function toggleFAQ(button) {
            const faqItem = button.closest('.faq-item');
            faqItem.classList.toggle('active');
        }
        
        // Initialize Feather Icons
        feather.replace();