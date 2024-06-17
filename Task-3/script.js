/*dynamic content update(events are updated by clicking the slider buttons) */
document.addEventListener('DOMContentLoaded', function() {
    
    const eventCardsContainer = document.querySelector('.event-cards');
    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');

    if (eventCardsContainer && sliderPrev && sliderNext) {
        const events = [
            { title: 'Food Festival', description: 'Taste the best dishes from around the world.', date: 'August 15, 2024', location: 'City Square' },
            { title: 'Tech Conference', description: 'Join us for the latest in tech and innovation.', date: 'September 5, 2024', location: 'Convention Center' },
            { title: 'Book Fair', description: 'Explore new books and meet your favorite authors.', date: 'November 25, 2024', location: 'Library Hall' },
        ];

        let eventIndex = 0;

        function addEvent(event) {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
            `;
            eventCardsContainer.appendChild(eventCard);
        }

        function loadNextEvent() {
            if (eventIndex < events.length) {
                addEvent(events[eventIndex]);
                eventIndex++;
            }
        }

        sliderPrev.addEventListener('click', function() {
            eventCardsContainer.scrollBy({
                left: -200, 
                behavior: 'smooth'
            });
            loadNextEvent();
        });

        sliderNext.addEventListener('click', function() {
            eventCardsContainer.scrollBy({
                left: 200, 
                behavior: 'smooth'
            });
            loadNextEvent();
        });

        loadNextEvent();
    }

    /*form validation in login and signup form*/
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateSignupForm()) {
                alert('Account Created Successfully!');
            }
        });

        document.getElementById('password').addEventListener('focus', function() {
            const passwordPolicy = document.getElementById('password-policy');
            passwordPolicy.classList.add('visible');
            setTimeout(function() {
                passwordPolicy.classList.remove('visible');
            }, 5000);
        });

        document.addEventListener('click', function(event) {
            const passwordPolicy = document.getElementById('password-policy');
            if (!document.getElementById('password').contains(event.target)) {
                passwordPolicy.classList.remove('visible');
            }
        });

        function validateSignupForm() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let isValid = true;
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const emailError = document.getElementById('email-error');

            if (!emailRegex.test(email) || email.includes('..') || email.includes('--') || email.includes('__') || /[^a-zA-Z0-9](\.|-|_)[^a-zA-Z0-9]/.test(email)) {
                isValid = false;
                emailError.textContent = 'Email is not in correct format. Must contain latin letters, numbers, underscores (_), periods (.), or dashes (-). A period (.) is not permitted at the start or end, and consecutive periods or special characters are not allowed.';
            } else {
                emailError.textContent = '';
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{4,8}$/;
            const passwordError = document.getElementById('password-error');
            if (!passwordRegex.test(password)) {
                isValid = false;
                passwordError.textContent = 'Password is not in correct format. Must be 4-8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
            } else {
                passwordError.textContent = '';
            }

            return isValid;
        }
    }

    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateLoginForm()) {
                alert('Successfully logged in!');
            }
        });

        function validateLoginForm() {
            const email = document.getElementById('email1').value;
            const password = document.getElementById('password1').value;
            let isValid = true;
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const emailError = document.getElementById('email-error1');

            if (!emailRegex.test(email) || email.includes('..') || email.includes('--') || email.includes('__') || /[^a-zA-Z0-9](\.|-|_)[^a-zA-Z0-9]/.test(email)) {
                isValid = false;
                emailError.textContent = 'Email is not in correct format. Must contain latin letters, numbers, underscores (_), periods (.), or dashes (-). A period (.) is not permitted at the start or end, and consecutive periods or special characters are not allowed.';
            } else {
                emailError.textContent = '';
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{4,8}$/;
            const passwordError = document.getElementById('password-error1');
            if (!passwordRegex.test(password)) {
                isValid = false;
                passwordError.textContent = 'Password is not in correct format. Must be 4-8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
            } else {
                passwordError.textContent = '';
            }

            return isValid;
        }
    }
      // Dropdown menu functionality
    const helpCentre = document.querySelector('.help-centre');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    helpCentre.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!helpCentre.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});