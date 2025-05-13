// Product prices in IDR
const productPrices = {
    espresso: 75000,
    frappe: 89000,
    coldbrew: 65000,
    cappuccino: 65000,
    mocha: 82000
};

// Add-on prices in IDR
const addonPrices = {
    'extra-shot': 15000,
    'whipped-cream': 8000,
    'caramel-syrup': 8000
};

// Form validation functions
function validateName(name) {
    if (name.length < 2) {
        return "Name must be at least 2 characters long";
    }
    if (name.length > 50) {
        return "Name must be less than 50 characters";
    }
    return "";
}

function validateEmail(email) {
    if (!email.includes('@')) {
        return "Please enter a valid email address";
    }
    if (!email.includes('.')) {
        return "Please enter a valid email address";
    }
    return "";
}

function validatePhone(phone) {
    if (phone.length < 10) {
        return "Phone number must be at least 10 digits";
    }
    if (phone.length > 15) {
        return "Phone number must be less than 15 digits";
    }
    return "";
}

function validateAddress(address) {
    if (address.length < 10) {
        return "Please enter a complete address";
    }
    return "";
}

function validateQuantity(quantity) {
    if (quantity < 1) {
        return "Quantity must be at least 1";
    }
    if (quantity > 20) {
        return "Maximum order quantity is 20";
    }
    return "";
}

// Format currency to IDR
function formatToRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

// Calculate total price
function calculateTotal() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const addons = document.querySelectorAll('input[name="addons"]:checked');
    
    let total = 0;
    
    if (product) {
        total += productPrices[product] * quantity;
    }
    
    addons.forEach(addon => {
        total += addonPrices[addon.value] * quantity;
    });
    
    document.getElementById('totalPrice').textContent = formatToRupiah(total);
}

// Form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Add event listeners for real-time validation
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
        
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });
    
    // Add event listeners for price calculation
    document.getElementById('product').addEventListener('change', calculateTotal);
    document.getElementById('quantity').addEventListener('input', calculateTotal);
    document.querySelectorAll('input[name="addons"]').forEach(addon => {
        addon.addEventListener('change', calculateTotal);
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Show success message
            alert('Order placed successfully! Thank you for choosing MR.COFFEE.');
            form.reset();
            calculateTotal();
        }
    });
});

// Validate individual input
function validateInput(input) {
    const errorElement = input.nextElementSibling;
    let errorMessage = '';
    
    switch(input.id) {
        case 'name':
            errorMessage = validateName(input.value);
            break;
        case 'email':
            errorMessage = validateEmail(input.value);
            break;
        case 'phone':
            errorMessage = validatePhone(input.value);
            break;
        case 'address':
            errorMessage = validateAddress(input.value);
            break;
        case 'quantity':
            errorMessage = validateQuantity(input.value);
            break;
    }
    
    if (errorMessage) {
        input.classList.add('error');
        errorElement.textContent = errorMessage;
        return false;
    } else {
        input.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }
}

// Add smooth scrolling for form navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 