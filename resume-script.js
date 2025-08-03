// Smooth scrolling and intersection observer for animations
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add staggered animation delays for skill categories
                if (entry.target.querySelector('.skills-grid')) {
                    const skillCategories = entry.target.querySelectorAll('.skill-category');
                    skillCategories.forEach((category, index) => {
                        setTimeout(() => {
                            category.style.transform = 'scale(1)';
                            category.style.opacity = '1';
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Initialize skill categories with initial hidden state
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.style.transform = 'scale(0.8)';
        category.style.opacity = '0';
        category.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Add hover effects to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click animation to social buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
        });
    });

    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        document.body.style.backgroundPosition = `center ${parallax}px`;
    });

    // Add typing effect to main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        mainTitle.style.borderRight = '2px solid #2563eb';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    mainTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Add pulse animation to achievement badge
    const prizeBadge = document.querySelector('.prize-badge');
    if (prizeBadge) {
        setInterval(() => {
            prizeBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                prizeBadge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Add click-to-copy functionality for contact info
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const text = item.textContent.trim();
        if (text.includes('@') || text.match(/^\d+$/)) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function() {
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<span style="color: #10b981;">Copied!</span>';
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 1500);
                }).catch(() => {
                    console.log('Copy failed');
                });
            });
        }
    });

    // Add progress bar animation for skills
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 100}ms`;
        tag.classList.add('skill-animate');
    });
});

// Add CSS for skill animation
const style = document.createElement('style');
style.textContent = `
    @keyframes skillPop {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .skill-animate {
        animation: skillPop 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
    }
    
    .loaded {
        overflow-x: hidden;
    }
    
    .card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);

// Print functionality
function printResume() {
    window.print();
}

// Add print styles
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        body {
            background: white !important;
            padding: 0 !important;
        }
        
        .card {
            box-shadow: none !important;
            page-break-inside: avoid;
            margin-bottom: 1rem !important;
        }
        
        .social-btn {
            display: none !important;
        }
        
        .cert-link {
            color: #000 !important;
        }
        
        .cert-link::after {
            content: " (" attr(href) ")";
            font-size: 0.8em;
            color: #666;
        }
    }
`;
document.head.appendChild(printStyle);