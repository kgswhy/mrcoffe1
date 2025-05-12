// Menu Items Data
const menuItems = [
    {
        name: "Signature Espresso",
        price: "$4.99",
        image: "images/products/espresso.jpg",
        description: "Our signature blend of premium beans",
        category: "espresso"
    },
    {
        name: "Caramel Frappe",
        price: "$5.99",
        image: "images/products/frappe.jpg",
        description: "Creamy caramel delight",
        category: "frappe"
    },
    {
        name: "Cold Brew",
        price: "$4.49",
        image: "images/products/coldbrew.jpg",
        description: "Smooth and refreshing",
        category: "brewed"
    },
    {
        name: "Cappuccino",
        price: "$4.29",
        image: "images/products/cappuccino.jpg",
        description: "Classic Italian style",
        category: "espresso"
    },
    {
        name: "Mocha Latte",
        price: "$5.49",
        image: "images/products/mocha.jpg",
        description: "Rich chocolate and coffee",
        category: "espresso"
    },
    {
        name: "Vanilla Frappe",
        price: "$5.99",
        image: "images/products/vanilla-frappe.jpg",
        description: "Sweet vanilla treat",
        category: "frappe"
    },
    {
        name: "Pour Over",
        price: "$4.99",
        image: "images/products/pourover.jpg",
        description: "Handcrafted perfection",
        category: "brewed"
    },
    {
        name: "Croissant",
        price: "$3.99",
        image: "images/products/croissant.jpg",
        description: "Buttery and flaky",
        category: "bread"
    },
    {
        name: "Chocolate Muffin",
        price: "$3.49",
        image: "images/products/muffin.jpg",
        description: "Rich chocolate goodness",
        category: "bread"
    }
];

// Load menu items
function loadMenuItems(category = 'all') {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
                <a href="order.html" class="cta-button">Order Now</a>
            </div>
        `;
        menuGrid.appendChild(menuCard);
    });
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Load filtered items
            loadMenuItems(button.dataset.filter);
        });
    });

    // Load all items initially
    loadMenuItems();
});

// Add animation to menu cards
function animateMenuCards() {
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate');
    });
}

// Call animation when items are loaded
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            animateMenuCards();
        }
    });
});

observer.observe(document.querySelector('.menu-grid'), {
    childList: true
}); 