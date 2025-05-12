// Modal functionality
const modal = document.getElementById('appDownloadModal');
const closeModal = document.querySelector('.close-modal');

function showAppDownload() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeAppDownload() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking the close button
closeModal.addEventListener('click', closeAppDownload);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeAppDownload();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeAppDownload();
    }
});

// Add animation to reward cards
function animateRewardCards() {
    const cards = document.querySelectorAll('.reward-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate');
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    animateRewardCards();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 