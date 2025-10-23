// UnifiedBeez Architecture - Shared Navigation JavaScript

// =============================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Handle all internal anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if just "#" or empty
            if (targetId === '#' || targetId === '#!') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Scroll to hash on page load
    if (window.location.hash) {
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }
});

// =============================================================
// BACK TO TOP BUTTON FUNCTIONALITY
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        // Smooth scroll to top on click
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// =============================================================
// HIGHLIGHT ACTIVE NAVIGATION LINK
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.architecture-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        // Check if current page matches link
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// =============================================================
// BREADCRUMB DYNAMIC GENERATION (Optional)
// =============================================================
function generateBreadcrumb() {
    const breadcrumbContainer = document.querySelector('.breadcrumb');
    if (!breadcrumbContainer) return;

    const currentPage = window.location.pathname.split('/').pop();
    let breadcrumbHTML = '<a href="index.html">🏠 Home</a> <span>/</span> ';

    switch(currentPage) {
        case 'manual-onboarding.html':
            breadcrumbHTML += '<span>📝 Manual Onboarding</span>';
            break;
        case 'beezaro-copilot.html':
            breadcrumbHTML += '<span>🤖 Beezaro Copilot</span>';
            break;
        case 'side-by-side-comparison.html':
            breadcrumbHTML += '<span>⚡ Side-by-Side Comparison</span>';
            break;
        case 'documentation.html':
            breadcrumbHTML += '<span>📚 Complete Documentation</span>';
            break;
        default:
            breadcrumbHTML = '<span>🏠 Home</span>';
    }

    breadcrumbContainer.innerHTML = breadcrumbHTML;
}

// Call on page load
document.addEventListener('DOMContentLoaded', generateBreadcrumb);

// =============================================================
// KEYBOARD SHORTCUTS
// =============================================================
document.addEventListener('keydown', function(e) {
    // Alt + H: Go to Home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.location.href = 'index.html';
    }

    // Alt + M: Go to Manual Onboarding
    if (e.altKey && e.key === 'm') {
        e.preventDefault();
        window.location.href = 'manual-onboarding.html';
    }

    // Alt + C: Go to Beezaro Copilot
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        window.location.href = 'beezaro-copilot.html';
    }

    // Alt + S: Go to Side-by-Side
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        window.location.href = 'side-by-side-comparison.html';
    }

    // Alt + ArrowUp: Back to top
    if (e.altKey && e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// =============================================================
// PRINT FUNCTIONALITY
// =============================================================
function printPage() {
    window.print();
}

// =============================================================
// EXPORT TO PDF (Optional - requires html2pdf library)
// =============================================================
function exportToPDF() {
    if (typeof html2pdf === 'undefined') {
        alert('PDF export library not loaded. Please install html2pdf.js');
        return;
    }

    const element = document.body;
    const opt = {
        margin: 10,
        filename: 'unifiedbeez-architecture.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// =============================================================
// SEARCH FUNCTIONALITY (Optional)
// =============================================================
function searchArchitecture(query) {
    // This can be expanded with a full-text search implementation
    console.log('Searching for:', query);
    // Future: Implement search across all pages
}

// =============================================================
// CONSOLE INFO
// =============================================================
console.log('%c🐝 UnifiedBeez Architecture Documentation', 'font-size: 16px; font-weight: bold; color: #1A4D2E;');
console.log('%cKeyboard Shortcuts:', 'font-weight: bold; color: #2D6A4F;');
console.log('  Alt + H → Home');
console.log('  Alt + M → Manual Onboarding');
console.log('  Alt + C → Beezaro Copilot');
console.log('  Alt + S → Side-by-Side Comparison');
console.log('  Alt + ↑ → Back to Top');
