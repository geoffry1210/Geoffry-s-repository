

// Car inventory data
const carInventory = [
    {
        id: 1,
        name: "Tesla Model S Plaid",
        brand: "Tesla",
        price: "$129,990",
        year: 2025,
        range: "396 miles",
        acceleration: "1.99s 0-60mph",
        horsepower: "1,020 hp",
        image: "https://kimi-web-img.moonshot.cn/img/cdn.arstechnica.net/e90ca01d0bee3caf6aaeafff348e273dc599119d.jpg",
        category: "luxury"
    },
    {
        id: 2,
        name: "Lucid Air Dream Edition",
        brand: "Lucid",
        price: "$249,000",
        year: 2025,
        range: "516 miles",
        acceleration: "2.5s 0-60mph",
        horsepower: "1,111 hp",
        image: "https://kimi-web-img.moonshot.cn/img/robbreport.com/55fb1dee678ad4bd38403c52ff41debfddab47ae.jpg",
        category: "ultra-luxury"
    },
    {
        id: 3,
        name: "BMW i7 xDrive60",
        brand: "BMW",
        price: "$147,000",
        year: 2025,
        range: "387 miles",
        acceleration: "4.5s 0-60mph",
        horsepower: "536 hp",
        image: "https://kimi-web-img.moonshot.cn/img/di-uploads-pod23.dealerinspire.com/f6ef1c77f42025aaacd258a590ca6d2e7c195943.jpg",
        category: "luxury"
    },
    {
        id: 4,
        name: "Mercedes-Benz EQS 580",
        brand: "Mercedes",
        price: "$147,550",
        year: 2025,
        range: "453 miles",
        acceleration: "4.1s 0-60mph",
        horsepower: "516 hp",
        image: "https://kimi-web-img.moonshot.cn/img/wtop.com/27a162c4c45e362a7b34d5c2de9c4fa7da08eaa5.jpg",
        category: "luxury"
    },
    {
        id: 5,
        name: "Porsche Taycan Turbo S",
        brand: "Porsche",
        price: "$230,000",
        year: 2025,
        range: "227 miles",
        acceleration: "2.6s 0-60mph",
        horsepower: "750 hp",
        image: "https://kimi-web-img.moonshot.cn/img/images.fastcompany.com/06ad90e329e563ad11242a241715b9f14248b385.jpg",
        category: "performance"
    },
    {
        id: 6,
        name: "Audi e-tron GT RS",
        brand: "Audi",
        price: "$167,000",
        year: 2025,
        range: "232 miles",
        acceleration: "3.1s 0-60mph",
        horsepower: "637 hp",
        image: "https://kimi-web-img.moonshot.cn/img/hips.hearstapps.com/f3da27aa55748ff39be84c09b40680c42f259887.jpg",
        category: "performance"
    },
    {
        id: 7,
        name: "Polestar 3 Performance",
        brand: "Polestar",
        price: "$83,900",
        year: 2025,
        range: "300 miles",
        acceleration: "4.6s 0-60mph",
        horsepower: "517 hp",
        image: "https://kimi-web-img.moonshot.cn/img/images.fastcompany.net/faea1d55f2244b901ee44a5ecceed912b40761b4.jpg",
        category: "luxury"
    },
    {
        id: 8,
        name: "Genesis Electrified G80",
        brand: "Genesis",
        price: "$89,900",
        year: 2025,
        range: "282 miles",
        acceleration: "4.9s 0-60mph",
        horsepower: "365 hp",
        image: "https://kimi-web-img.moonshot.cn/img/b1745379.smushcdn.com/88b7875c439395ef3fd79a6e3d8824c187620713.png",
        category: "luxury"
    }
];

// User authentication state
let currentUser = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load user session from localStorage
    loadUserSession();
    
    // Initialize particles animation
    createParticles();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Load featured cars on homepage
    if (document.getElementById('featuredCars')) {
        loadFeaturedCars();
    }
    
    // Initialize inventory page if present
    if (document.getElementById('carGrid')) {
        initializeInventory();
    }
    
    // Initialize contact form if present
    if (document.getElementById('contactForm')) {
        initializeContactForm();
    }
    
    // Initialize authentication if present
    if (document.getElementById('authForm')) {
        initializeAuth();
    }
    
    // Initialize seller dashboard if present
    if (document.getElementById('sellerDashboard')) {
        initializeSellerDashboard();
    }
    
    // Initialize mobile menu
    initializeMobileMenu();
}

// Particle system for hero background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Scroll animations using Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Special handling for car cards with stagger
                if (entry.target.classList.contains('car-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.animationDelay = delay + 'ms';
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal, .car-card, .benefit-card').forEach(el => {
        observer.observe(el);
    });
}

// Load featured cars on homepage
function loadFeaturedCars() {
    const featuredCarsContainer = document.getElementById('featuredCars');
    if (!featuredCarsContainer) return;
    
    // Get first 6 cars for featured section
    const featuredCars = carInventory.slice(0, 6);
    
    featuredCarsContainer.innerHTML = featuredCars.map(car => `
        <div class="car-card scroll-reveal">
            <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-price">${car.price}</div>
                <div class="car-specs">
                    <span>Range: ${car.range}</span>
                    <span>0-60: ${car.acceleration}</span>
                    <span>Power: ${car.horsepower}</span>
                    <span>Year: ${car.year}</span>
                </div>
                <a href="car-details.html?id=${car.id}" class="view-details">View Details</a>
            </div>
        </div>
    `).join('');
}

// Initialize inventory page
function initializeInventory() {
    renderCarGrid(carInventory);
    initializeFilters();
    initializeSearch();
}

function renderCarGrid(cars) {
    const carGrid = document.getElementById('carGrid');
    if (!carGrid) return;
    
    carGrid.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-price">${car.price}</div>
                <div class="car-specs">
                    <span>Range: ${car.range}</span>
                    <span>0-60: ${car.acceleration}</span>
                    <span>Power: ${car.horsepower}</span>
                    <span>Year: ${car.year}</span>
                </div>
                <a href="car-details.html?id=${car.id}" class="view-details">View Details</a>
            </div>
        </div>
    `).join('');
}

function initializeFilters() {
    // Price range slider
    const priceSlider = document.getElementById('priceRange');
    const priceDisplay = document.getElementById('priceDisplay');
    
    if (priceSlider && priceDisplay) {
        priceSlider.addEventListener('input', function() {
            const maxPrice = parseInt(this.value);
            priceDisplay.textContent = `$0 - $${maxPrice.toLocaleString()}`;
            applyFilters();
        });
    }
    
    // Brand checkboxes
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Year dropdown
    const yearSelect = document.getElementById('yearFilter');
    if (yearSelect) {
        yearSelect.addEventListener('change', applyFilters);
    }
    
    // Category filter
    const categorySelect = document.getElementById('categoryFilter');
    if (categorySelect) {
        categorySelect.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    let filteredCars = [...carInventory];
    
    // Price filter
    const priceSlider = document.getElementById('priceRange');
    if (priceSlider) {
        const maxPrice = parseInt(priceSlider.value);
        filteredCars = filteredCars.filter(car => {
            const price = parseInt(car.price.replace(/[$,]/g, ''));
            return price <= maxPrice;
        });
    }
    
    // Brand filter
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked'))
        .map(cb => cb.value);
    if (selectedBrands.length > 0) {
        filteredCars = filteredCars.filter(car => selectedBrands.includes(car.brand));
    }
    
    // Year filter
    const yearSelect = document.getElementById('yearFilter');
    if (yearSelect && yearSelect.value) {
        filteredCars = filteredCars.filter(car => car.year >= parseInt(yearSelect.value));
    }
    
    // Category filter
    const categorySelect = document.getElementById('categoryFilter');
    if (categorySelect && categorySelect.value) {
        filteredCars = filteredCars.filter(car => car.category === categorySelect.value);
    }
    
    renderCarGrid(filteredCars);
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredCars = carInventory.filter(car => 
                car.name.toLowerCase().includes(searchTerm) ||
                car.brand.toLowerCase().includes(searchTerm)
            );
            renderCarGrid(filteredCars);
        });
    }
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateContactForm(data)) {
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            this.reset();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateContactForm(data) {
    const required = ['name', 'email', 'message'];
    let isValid = true;
    
    required.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            showFieldError(field, 'This field is required');
            isValid = false;
        }
    });
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Clear previous errors
    clearFieldError(fieldName);
    
    // Required field validation
    if (field.required && value === '') {
        showFieldError(fieldName, 'This field is required');
        return false;
    }
    
    // Email validation
    if (fieldName === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(fieldName, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorElement = document.getElementById(`${fieldName}Error`);
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearFieldError(fieldName) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorElement = document.getElementById(`${fieldName}Error`);
    
    if (field) {
        field.classList.remove('error');
    }
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

// Authentication system
function initializeAuth() {
    const authForm = document.getElementById('authForm');
    const toggleAuth = document.getElementById('toggleAuth');
    const authTitle = document.getElementById('authTitle');
    
    let isLoginMode = true;
    
    if (toggleAuth) {
        toggleAuth.addEventListener('click', function(e) {
            e.preventDefault();
            isLoginMode = !isLoginMode;
            updateAuthForm(isLoginMode);
        });
    }
    
    if (authForm) {
        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            if (isLoginMode) {
                handleLogin(data);
            } else {
                handleRegister(data);
            }
        });
    }
}

function updateAuthForm(isLogin) {
    const authTitle = document.getElementById('authTitle');
    const toggleAuth = document.getElementById('toggleAuth');
    const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
    const submitButton = document.getElementById('authSubmit');
    
    if (isLogin) {
        authTitle.textContent = 'Login to Your Account';
        toggleAuth.textContent = 'Need an account? Register';
        submitButton.textContent = 'Login';
        if (confirmPasswordGroup) {
            confirmPasswordGroup.style.display = 'none';
        }
    } else {
        authTitle.textContent = 'Create Your Account';
        toggleAuth.textContent = 'Already have an account? Login';
        submitButton.textContent = 'Register';
        if (confirmPasswordGroup) {
            confirmPasswordGroup.style.display = 'block';
        }
    }
}

function handleLogin(data) {
    // Simulate login (in real app, this would be an API call)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === data.email && u.password === data.password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showNotification('Login successful!', 'success');
        
        // Redirect based on user role
        setTimeout(() => {
            if (user.role === 'seller') {
                window.location.href = 'seller-dashboard.html';
            } else {
                window.location.href = 'inventory.html';
            }
        }, 1500);
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleRegister(data) {
    // Validate registration data
    if (data.password !== data.confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    if (data.password.length < 6) {
        showNotification('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === data.email);
    
    if (existingUser) {
        showNotification('Email already registered', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        email: data.email,
        password: data.password,
        name: data.name || 'User',
        role: 'buyer', // Default role
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showNotification('Registration successful! Please login.', 'success');
    
    // Switch to login form
    setTimeout(() => {
        updateAuthForm(true);
        document.getElementById('authForm').reset();
    }, 2000);
}

function loadUserSession() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        updateNavigation();
    }
}

function updateNavigation() {
    const navLinks = document.querySelector('.nav-links');
    if (currentUser && navLinks) {
        // Add user-specific navigation items
        const userItem = document.createElement('li');
        userItem.innerHTML = `<a href="#">Welcome, ${currentUser.name}</a>`;
        navLinks.appendChild(userItem);
        
        if (currentUser.role === 'seller') {
            const dashboardItem = document.createElement('li');
            dashboardItem.innerHTML = '<a href="seller-dashboard.html">Dashboard</a>';
            navLinks.appendChild(dashboardItem);
        }
        
        const logoutItem = document.createElement('li');
        logoutItem.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
        navLinks.appendChild(logoutItem);
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Seller dashboard functionality
function initializeSellerDashboard() {
    if (!currentUser || currentUser.role !== 'seller') {
        window.location.href = 'login.html';
        return;
    }
    
    loadSellerListings();
    initializeAddCarForm();
}

function loadSellerListings() {
    const sellerListings = JSON.parse(localStorage.getItem('sellerListings') || '[]');
    const listingsContainer = document.getElementById('sellerListings');
    
    if (listingsContainer) {
        listingsContainer.innerHTML = sellerListings.map(car => `
            <div class="listing-card">
                <img src="${car.image}" alt="${car.name}" class="listing-image">
                <div class="listing-info">
                    <h3>${car.name}</h3>
                    <p class="listing-price">${car.price}</p>
                    <div class="listing-actions">
                        <button onclick="editListing(${car.id})" class="edit-btn">Edit</button>
                        <button onclick="deleteListing(${car.id})" class="delete-btn">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initializeAddCarForm() {
    const addCarForm = document.getElementById('addCarForm');
    if (addCarForm) {
        addCarForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const carData = Object.fromEntries(formData);
            
            // Add seller information
            carData.id = Date.now();
            carData.sellerId = currentUser.id;
            carData.createdAt = new Date().toISOString();
            
            // Save to seller listings
            const sellerListings = JSON.parse(localStorage.getItem('sellerListings') || '[]');
            sellerListings.push(carData);
            localStorage.setItem('sellerListings', JSON.stringify(sellerListings));
            
            // Also add to main inventory
            carInventory.push(carData);
            
            showNotification('Car listing added successfully!', 'success');
            this.reset();
            loadSellerListings();
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for global access
window.ElectraLux = {
    carInventory,
    currentUser,
    logout,
    showNotification,
    formatPrice
};
