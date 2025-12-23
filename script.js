//Header Scroll Effect
const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Product Gallery Functionality
let currentSlide = 0;
const galleryImages = document.querySelectorAll('.gallery-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const dotsContainer = document.getElementById('galleryDots');

// Create dots
galleryImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    // Remove active class from all
    galleryImages.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current
    currentSlide = index;
    galleryImages[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Update thumbnails (accounting for multiple rows)
    thumbnails.forEach(thumb => {
        if (parseInt(thumb.dataset.index) === currentSlide) {
            thumb.classList.add('active');
        }
    });
}

// Arrow navigation
document.getElementById('prevSlide').addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1;
    goToSlide(currentSlide);
});

document.getElementById('nextSlide').addEventListener('click', () => {
    currentSlide = currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
});

// Thumbnail click
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const index = parseInt(thumbnail.dataset.index);
        goToSlide(index);
    });
});

// Auto-play gallery (optional)
let autoPlayInterval = setInterval(() => {
    currentSlide = currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
}, 5000);

// Pause autoplay on hover
document.querySelector('.gallery-main').addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

document.querySelector('.gallery-main').addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
        currentSlide = currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1;
        goToSlide(currentSlide);
    }, 5000);
});

// Subscription Type Toggle
const purchaseTypeRadios = document.querySelectorAll('input[name="purchase-type"]');
const singleContent = document.getElementById('singleContent');
const doubleContent = document.getElementById('doubleContent');

purchaseTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'single') {
            singleContent.classList.add('active');
            doubleContent.classList.remove('active');
        } else if (e.target.value === 'double') {
            doubleContent.classList.add('active');
            singleContent.classList.remove('active');
        }
        updateAddToCartLink();
    });
});

// Dynamic Add to Cart Link
// 9+ variations based on:
// - Single Subscription: 3 fragrance options
// - Double Subscription: 2 fragrance selections × 3 options each = 9 combinations
// Total: 12 possible cart links

const addToCartBtn = document.getElementById('addToCart');

// Add to Cart URL mapping
const cartLinks = {
    // Single Subscription (3 variations)
    'single-fragrance-1': 'https://example.com/cart/add/single-fragrance-1',
    'single-fragrance-2': 'https://example.com/cart/add/single-fragrance-2',
    'single-fragrance-3': 'https://example.com/cart/add/single-fragrance-3',

    // Double Subscription (9 variations - Fragrance 1 × Fragrance 2)
    'double-original-original': 'https://example.com/cart/add/double-original-original',
    'double-original-lily': 'https://example.com/cart/add/double-original-lily',
    'double-original-rose': 'https://example.com/cart/add/double-original-rose',
    'double-lily-original': 'https://example.com/cart/add/double-lily-original',
    'double-lily-lily': 'https://example.com/cart/add/double-lily-lily',
    'double-lily-rose': 'https://example.com/cart/add/double-lily-rose',
    'double-rose-original': 'https://example.com/cart/add/double-rose-original',
    'double-rose-lily': 'https://example.com/cart/add/double-rose-lily',
    'double-rose-rose': 'https://example.com/cart/add/double-rose-rose'
};

function updateAddToCartLink() {
    const purchaseType = document.querySelector('input[name="purchase-type"]:checked').value;

    let cartKey;

    if (purchaseType === 'single') {
        // Single subscription - get single fragrance selection
        const fragranceRadio = document.querySelector('input[name="fragrance"]:checked');
        const fragranceValue = fragranceRadio ? fragranceRadio.value : 'fragrance-1';
        cartKey = `${purchaseType}-${fragranceValue}`;
    } else {
        // Double subscription - get both fragrance selections
        const fragrance1Radio = document.querySelector('input[name="fragrance-double-1"]:checked');
        const fragrance2Radio = document.querySelector('input[name="fragrance-double-2"]:checked');

        const fragrance1 = fragrance1Radio ? fragrance1Radio.value : 'original';
        const fragrance2 = fragrance2Radio ? fragrance2Radio.value : 'original';

        cartKey = `${purchaseType}-${fragrance1}-${fragrance2}`;
    }

    // Update the Add to Cart button href
    const newLink = cartLinks[cartKey] || 'https://example.com/cart/add/default';
    addToCartBtn.href = newLink;

    console.log(`Add to Cart updated: ${cartKey} -> ${newLink}`);
}

// Listen to fragrance selection changes for single subscription
document.querySelectorAll('input[name="fragrance"]').forEach(radio => {
    radio.addEventListener('change', updateAddToCartLink);
});

// Listen to fragrance selection changes for double subscription (both groups)
document.querySelectorAll('input[name="fragrance-double-1"]').forEach(radio => {
    radio.addEventListener('change', updateAddToCartLink);
});

document.querySelectorAll('input[name="fragrance-double-2"]').forEach(radio => {
    radio.addEventListener('change', updateAddToCartLink);
});

// Initialize Add to Cart link on page load
updateAddToCartLink();

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');

        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-icon').textContent = '+';
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            accordionItem.classList.add('active');
            header.querySelector('.accordion-icon').textContent = '−';
        }
    });
});

// Percentage Counter Animation on Scroll
const statPercentages = document.querySelectorAll('.stat-percentage');
let hasAnimated = false;

function animateCounters() {
    statPercentages.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + '%';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '%';
            }
        };

        updateCounter();
    });
}

// Intersection Observer for stats section
const statsSection = document.querySelector('.stats-section');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            hasAnimated = true;
        }
    });
}, observerOptions);

if (statsSection) {
    observer.observe(statsSection);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler (Newsletter)
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Here you would normally send this to your backend
        console.log('Newsletter signup:', email);

        // Show success message (you can customize this)
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
}

// Add keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.getElementById('prevSlide').click();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('nextSlide').click();
    }
});

// Lazy loading for images (performance optimization)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to current nav item based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Prevent default form submissions
document.querySelectorAll('form').forEach(form => {
    if (!form.hasAttribute('action')) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
});

console.log('GTG Perfumes - All interactive features loaded successfully!');
