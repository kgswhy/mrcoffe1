// Menu Items Data
const menuItems = [
    {
        name: "Signature Espresso",
        price: "$4.99",
        image: "images/products/pexels-ilknurerduran-31968905.jpg",
        description: "Our signature blend of premium beans",
        category: "espresso"
    },
    {
        name: "Caramel Frappe",
        price: "$5.99",
        image: "images/products/pexels-freestocks-214333.jpg",
        description: "Creamy caramel delight",
        category: "frappe"
    },
    {
        name: "Cold Brew",
        price: "$4.49",
        image: "images/products/pexels-marta-dzedyshko-1042863-2775860.jpg",
        description: "Smooth and refreshing",
        category: "brewed"
    },
    {
        name: "Cappuccino",
        price: "$4.29",
        image: "images/products/pexels-chevanon-312418.jpg",
        description: "Classic Italian style",
        category: "brewed"
    },
    {
        name: "Mocha Latte",
        price: "$5.49",
        image: "images/products/pexels-ohaakash-30147974.jpg",
        description: "Rich chocolate and coffee",
        category: "brewed"
    },
    {
        name: "Vanilla Frappe",
        price: "$5.99",
        image: "images/products/pexels-luis-espinoza-1873776-11512983.jpg",
        description: "Sweet vanilla treat",
        category: "frappe"
    },
    {
        name: "Pour Over",
        price: "$4.99",
        image: "images/products/pexels-andrew-4264049.jpg",
        description: "Handcrafted perfection",
        category: "brewed"
    },
    {
        name: "Croissant",
        price: "$3.99",
        image: "images/products/pexels-elkady-3892469.jpg",
        description: "Buttery and flaky",
        category: "bread"
    },
    {
        name: "Chocolate Muffin",
        price: "$3.49",
        image: "images/products/pexels-brigitte-tohm-36757-131899.jpg",
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