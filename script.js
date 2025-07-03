// CondoPay Demo Site - JavaScript
// Enhanced functionality for investor presentation

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Animate counters on page load
    initCounterAnimations();
    
    // Add dynamic typing effect to hero section
    initTypingEffect();
    
    // Add hover effects to cards
    initCardEffects();
    
    // Add loading screen
    initLoadingScreen();
});

/**
 * Initialize smooth scrolling for navigation
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                
                // Trigger counter animation for stat cards
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    if (!stat.dataset.animated) {
                        animateStatNumber(stat);
                        stat.dataset.animated = 'true';
                    }
                });
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.problem-card, .solution-card, .team-card, .market-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Animate counter numbers
 */
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = prefix + Math.floor(start).toLocaleString() + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = prefix + target.toLocaleString() + suffix;
        }
    }
    updateCounter();
}

/**
 * Initialize counter animations for hero stats
 */
function initCounterAnimations() {
    setTimeout(() => {
        const heroStats = document.querySelectorAll('.hero .stat-number');
        heroStats.forEach((stat, index) => {
            setTimeout(() => {
                animateStatNumber(stat);
            }, index * 300);
        });
    }, 1000);
}

/**
 * Animate individual stat number
 */
function animateStatNumber(stat) {
    const text = stat.textContent;
    
    // Extract number and format
    if (text.includes('€')) {
        const number = parseInt(text.replace(/[^\d]/g, ''));
        if (number) {
            stat.textContent = '€0';
            animateCounter(stat, number, 2000, '€');
        }
    } else if (text.includes('%')) {
        const number = parseInt(text.replace(/[^\d]/g, ''));
        if (number) {
            stat.textContent = '0%';
            animateCounter(stat, number, 1500, '', '%');
        }
    } else if (text.includes('K+')) {
        const number = parseInt(text.replace(/[^\d]/g, ''));
        if (number) {
            stat.textContent = '0K+';
            animateCounter(stat, number, 2000, '', 'K+');
        }
    } else if (text.includes('M')) {
        const number = parseInt(text.replace(/[^\d]/g, ''));
        if (number) {
            stat.textContent = '€0M';
            animateCounter(stat, number, 2000, '€', 'M');
        }
    } else if (text.includes('.')) {
        const number = parseFloat(text);
        if (number) {
            stat.textContent = '0.0%';
            animateCounterFloat(stat, number, 1500, '', '%');
        }
    } else if (text.includes('x')) {
        const number = parseFloat(text.replace('x', ''));
        if (number) {
            stat.textContent = '0x';
            animateCounterFloat(stat, number, 2000, '', 'x');
        }
    }
}

/**
 * Animate counter for decimal numbers
 */
function animateCounterFloat(element, target, duration = 2000, prefix = '', suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = prefix + start.toFixed(1) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = prefix + target.toFixed(1) + suffix;
        }
    }
    updateCounter();
}

/**
 * Add typing effect to hero subtitle
 */
function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero p');
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    
    setTimeout(typeWriter, 1500);
}

/**
 * Enhanced card hover effects
 */
function initCardEffects() {
    const cards = document.querySelectorAll('.problem-card, .solution-card, .team-card, .market-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add tilt effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Simple loading screen effect
 */
function initLoadingScreen() {
    // Add loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: white;
        font-size: 2rem;
        font-weight: bold;
    `;
    loadingOverlay.innerHTML = 'CondoPay<br><small style="font-size: 1rem; opacity: 0.8;">Caricamento...</small>';
    document.body.appendChild(loadingOverlay);
    
    // Remove loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(loadingOverlay);
            }, 500);
        }, 800);
    });
}

/**
 * Add parallax effect to hero section
 */
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

/**
 * Add dynamic background particles (optional enhancement)
 */
function addBackgroundParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Add click tracking for analytics (demo purpose)
 */
function initAnalytics() {
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('CTA Click:', this.textContent);
            // Here you would send to analytics service
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navigation Click:', this.getAttribute('href'));
            // Here you would send to analytics service
        });
    });
}

/**
 * Add keyboard navigation support
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize additional features
setTimeout(() => {
    initAnalytics();
    initKeyboardNavigation();
    // Uncomment for additional effects:
    // initParallaxEffect();
    // addBackgroundParticles();
}, 1000);