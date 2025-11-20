// ===== DARK/LIGHT MODE TOGGLE =====
const toggleBtn = document.getElementById("toggleThemeBtn");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ===== CLICK COUNTER =====
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const clickCount = document.getElementById("clickCount");

counterBtn.addEventListener("click", () => {
    count++;
    clickCount.textContent = count;
    // Animate counter
    clickCount.style.transform = "scale(1.5)";
    setTimeout(() => {
        clickCount.style.transform = "scale(1)";
    }, 200);
});

// ===== COLLAPSIBLE FAQ =====
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
    });
});

// ===== DROPDOWN MENU =====
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// ===== PASSWORD SHOW/HIDE =====
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");

togglePasswordBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePasswordBtn.textContent = "Show";
    }
});

// ===== FORM VALIDATION =====
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    formSuccess.style.opacity = 0;

    let valid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        formSuccess.textContent = "Thank you for signing up! 🎉";
        form.reset();
        count = 0;
        clickCount.textContent = count;
        togglePasswordBtn.textContent = "Show";
        passwordInput.type = "password";

        formSuccess.style.opacity = 1;
    }
});
