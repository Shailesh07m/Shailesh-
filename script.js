// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Course Selection Logic for Admission Form
function updateCourses() {
    const streamSelect = document.getElementById('preferredStream');
    const courseSelect = document.getElementById('preferredCourse');
    const alternativeSelect = document.getElementById('alternativeCourse');

    if (!streamSelect || !courseSelect || !alternativeSelect) return;

    const selectedStream = streamSelect.value;
    
    // Clear existing options
    courseSelect.innerHTML = '<option value="">Select a course</option>';
    alternativeSelect.innerHTML = '<option value="">Select alternative course (optional)</option>';

    const courses = {
        commerce: [
            { value: 'bcom', text: 'Bachelor of Commerce (B.Com)' },
            { value: 'bba', text: 'Bachelor of Business Administration (BBA)' },
            { value: 'bcom-af', text: 'B.Com in Accounting & Finance' }
        ],
        science: [
            { value: 'bsc-cs', text: 'B.Sc Computer Science' },
            { value: 'bsc-it', text: 'B.Sc Information Technology' },
            { value: 'bsc-biotech', text: 'B.Sc Biotechnology' },
            { value: 'bsc-maths', text: 'B.Sc Mathematics' }
        ],
        arts: [
            { value: 'ba', text: 'Bachelor of Arts (B.A.)' },
            { value: 'ba-psychology', text: 'B.A. Psychology' },
            { value: 'ba-mass-comm', text: 'B.A. Mass Communication' },
            { value: 'bsw', text: 'Bachelor of Social Work (BSW)' }
        ]
    };

    if (selectedStream && courses[selectedStream]) {
        courses[selectedStream].forEach(course => {
            const option = document.createElement('option');
            option.value = course.value;
            option.textContent = course.text;
            courseSelect.appendChild(option);

            // Add to alternative options as well
            const altOption = document.createElement('option');
            altOption.value = course.value;
            altOption.textContent = course.text;
            alternativeSelect.appendChild(altOption);
        });
    }
}

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    // Admission Form Handling
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateAdmissionForm()) {
                showSuccessMessage('Application submitted successfully! We will contact you soon.');
                admissionForm.reset();
            }
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                showSuccessMessage('Message sent successfully! We will respond within 24 hours.');
                contactForm.reset();
            }
        });
    }
});

// Admission Form Validation
function validateAdmissionForm() {
    const requiredFields = [
        'firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'gender',
        'address', 'city', 'state', 'pincode', 'nationality',
        'lastSchool', 'boardUniversity', 'passingYear', 'percentage', 'previousStream',
        'preferredStream', 'preferredCourse', 'fatherName', 'motherName', 'parentPhone',
        'category', 'declaration'
    ];

    let isValid = true;
    let firstErrorField = null;

    // Clear previous error states
    clearFormErrors();

    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            if (field.type === 'checkbox' && !field.checked) {
                showFieldError(field, 'This field is required');
                isValid = false;
                if (!firstErrorField) firstErrorField = field;
            } else if (field.type !== 'checkbox' && !field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
                if (!firstErrorField) firstErrorField = field;
            }
        }
    });

    // Email validation
    const email = document.getElementById('email');
    if (email && email.value && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
        if (!firstErrorField) firstErrorField = email;
    }

    // Phone validation
    const phone = document.getElementById('phone');
    if (phone && phone.value && !isValidPhone(phone.value)) {
        showFieldError(phone, 'Please enter a valid phone number');
        isValid = false;
        if (!firstErrorField) firstErrorField = phone;
    }

    // Pincode validation
    const pincode = document.getElementById('pincode');
    if (pincode && pincode.value && !isValidPincode(pincode.value)) {
        showFieldError(pincode, 'Please enter a valid 6-digit pincode');
        isValid = false;
        if (!firstErrorField) firstErrorField = pincode;
    }

    // Scroll to first error field
    if (!isValid && firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
    }

    return isValid;
}

// Contact Form Validation
function validateContactForm() {
    const requiredFields = ['contactName', 'contactEmail', 'enquiryType', 'subject', 'message'];
    let isValid = true;
    let firstErrorField = null;

    clearFormErrors();

    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field && !field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
            if (!firstErrorField) firstErrorField = field;
        }
    });

    // Email validation
    const email = document.getElementById('contactEmail');
    if (email && email.value && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
        if (!firstErrorField) firstErrorField = email;
    }

    if (!isValid && firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
    }

    return isValid;
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

function isValidPincode(pincode) {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
}

function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFormErrors() {
    // Reset border colors
    document.querySelectorAll('input, select, textarea').forEach(field => {
        field.style.borderColor = '#e9ecef';
    });

    // Remove error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.remove();
    });
}

function showSuccessMessage(message) {
    // Create success modal/notification
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        text-align: center;
        max-width: 400px;
        margin: 0 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;

    modalContent.innerHTML = `
        <div style="color: #27ae60; font-size: 3rem; margin-bottom: 1rem;">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3 style="color: #2c3e50; margin-bottom: 1rem;">Success!</h3>
        <p style="color: #666; margin-bottom: 2rem;">${message}</p>
        <button onclick="this.closest('.success-modal').remove()" 
                style="background: #e74c3c; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 1rem;">
            OK
        </button>
    `;

    modal.className = 'success-modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 5000);
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
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
});

// Animate Elements on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.value-card, .course-card, .quick-link-card, .news-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }
    }
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('input, select, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
            // Reset border color if no error
            if (!this.parentNode.querySelector('.error-message')) {
                this.style.borderColor = '#e9ecef';
            }
        });
    });
});

// Auto-update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(element => {
        element.innerHTML = element.innerHTML.replace('2024', currentYear);
    });
});

// Loading spinner for form submissions
function showLoadingSpinner(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    button.disabled = true;
    
    return function() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Enhanced form submission with loading state
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const hideSpinner = showLoadingSpinner(submitButton);
                
                // Simulate form processing time
                setTimeout(() => {
                    hideSpinner();
                }, 1000);
            }
        });
    });
});