// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Most Popular Products Data
const popularProducts = [
    {
        name: "Signature Espresso",
        price: "$4.99",
        image: "images/products/espresso.jpg",
        description: "Our signature blend of premium beans"
    },
    {
        name: "Caramel Frappe",
        price: "$5.99",
        image: "images/products/frappe.jpg",
        description: "Creamy caramel delight"
    },
    {
        name: "Cold Brew",
        price: "$4.49",
        image: "images/products/coldbrew.jpg",
        description: "Smooth and refreshing"
    },
    {
        name: "Cappuccino",
        price: "$4.29",
        image: "images/products/cappuccino.jpg",
        description: "Classic Italian style"
    },
    {
        name: "Mocha Latte",
        price: "$5.49",
        image: "images/products/mocha.jpg",
        description: "Rich chocolate and coffee"
    }
];

// Load popular products
function loadPopularProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) {
        console.error('Product grid element not found');
        return;
    }

    // Clear existing content
    productGrid.innerHTML = '';

    popularProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <a href="menu.html" class="cta-button">View Details</a>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Initialize with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        loadPopularProducts();
        console.log('Products loaded successfully');
    } catch (error) {
        console.error('Error loading products:', error);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--gradient-dark)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Add scroll reveal animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.product-card, .ceo-content, .rewards-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('scroll-reveal', 'active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); 