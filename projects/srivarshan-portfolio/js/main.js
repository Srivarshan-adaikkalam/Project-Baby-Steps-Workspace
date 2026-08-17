document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // 0. Lenis Smooth Scroll Engine
    // =========================================
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // =========================================
    // 1. The Infinite Mask Reveal
    // =========================================
    const maskOverlay = document.getElementById('mask-overlay');
    
    // Track mouse before the mask blows up
    let isMaskExpanded = false;
    document.addEventListener('mousemove', (e) => {
        if(!isMaskExpanded) {
            maskOverlay.style.setProperty('--x', `${e.clientX}px`);
            maskOverlay.style.setProperty('--y', `${e.clientY}px`);
        }
    });

    // Expand the mask when the user scrolls down from the top
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "+=500", // Blow up over the first 500px of scroll
        scrub: true,
        onUpdate: (self) => {
            if (self.progress > 0) isMaskExpanded = true;
            // Scale mask size from 150px to 3000px
            const currentSize = 150 + (self.progress * 3500);
            maskOverlay.style.setProperty('--size', `${currentSize}px`);
            
            // Fade out the instruction text
            const instruction = document.querySelector('.mask-instruction');
            if(instruction) instruction.style.opacity = 0.5 - (self.progress * 2);

            // Hide overlay completely when done to allow clicks underneath
            if(self.progress === 1) maskOverlay.style.pointerEvents = "none";
        }
    });

    // =========================================
    // 2. Split-Text Spring Physics
    // =========================================
    // Custom function to wrap each character in a span without external libraries
    function splitText(selector) {
        document.querySelectorAll(selector).forEach(element => {
            const text = element.getAttribute('data-text') || element.innerText;
            element.innerHTML = '';
            // Split string into array of chars
            [...text].forEach(char => {
                const span = document.createElement('span');
                span.className = 'char-span';
                // Preserve spaces
                if(char === ' ') {
                    span.innerHTML = '&nbsp;';
                } else {
                    span.innerText = char;
                }
                element.appendChild(span);
            });
        });
    }

    splitText('.split-text-target');

    // Trigger the spring animation when they come into view
    gsap.utils.toArray('.split-text-target').forEach(el => {
        gsap.to(el.querySelectorAll('.char-span'), {
            y: "0%",
            duration: 1.2,
            stagger: 0.05,
            ease: "elastic.out(1, 0.5)", // The beautiful bouncy spring effect
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
            }
        });
    });

    // =========================================
    // 3. Bento Grid & Magnetic Hover
    // =========================================
    // Fade up bento cards on scroll
    gsap.utils.toArray('.bento-card').forEach((card, i) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            }
        });
    });

    // Magnetic Hover Interaction
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            // Calculate mouse position relative to the center of the element
            const x = (e.clientX - rect.left) - rect.width / 2;
            const y = (e.clientY - rect.top) - rect.height / 2;
            
            // Move the element towards the mouse
            gsap.to(el, {
                x: x * 0.05,
                y: y * 0.05,
                duration: 0.5,
                ease: "power2.out"
            });
            
            // Move inner content slightly more for a parallax depth effect
            const inner = el.querySelector('.card-inner');
            if (inner) {
                gsap.to(inner, {
                    x: x * 0.03,
                    y: y * 0.03,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });

        el.addEventListener('mouseleave', () => {
            // Reset position with a spring bounce when mouse leaves
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
            
            const inner = el.querySelector('.card-inner');
            if (inner) {
                gsap.to(inner, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        });
    });

    // =========================================
    // 4. Pinned Horizontal Scrollytelling
    // =========================================
    const horizontalSection = document.getElementById('horizontal-pin');
    const galleryTrack = document.getElementById('gallery-track');

    if(horizontalSection && galleryTrack) {
        // Calculate how far to translate the track (total width - viewport width)
        const getScrollAmount = () => -(galleryTrack.scrollWidth - window.innerWidth);

        const tween = gsap.to(galleryTrack, {
            x: getScrollAmount,
            ease: "none"
        });

        ScrollTrigger.create({
            trigger: horizontalSection,
            start: "top top",
            // The distance the user has to scroll vertically to finish the horizontal track
            end: () => `+=${getScrollAmount() * -1}`, 
            pin: true,
            animation: tween,
            scrub: 1, // Smooth scrub
            invalidateOnRefresh: true
        });

        // Add internal parallax to the images inside the horizontal track
        gsap.utils.toArray('.parallax-img').forEach(img => {
            gsap.to(img, {
                x: "10%", // Move opposite to scroll direction
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalSection,
                    start: "top top",
                    end: () => `+=${getScrollAmount() * -1}`,
                    scrub: true
                }
            });
        });
    }

});
