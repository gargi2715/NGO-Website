const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));
    const prefix = counter.getAttribute("data-prefix") || "";
    let count = 0;
    const increment = Math.max(1, Math.ceil(target / 100));
    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counter.innerText = prefix + count.toLocaleString("en-IN");
            setTimeout(updateCounter, 20);
        }
        else {
            counter.innerText = prefix + target.toLocaleString("en-IN");
  }
    };
    updateCounter();
});
const volunteerForm = document.getElementById("volunteerForm");
if (volunteerForm) {
    volunteerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const interest = document.getElementById("interest").value;
        const message = document.getElementById("formMessage");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;
        if (name === "" || email === "" || phone === "" || interest === "") {
            message.innerText = "Please fill all required fields.";
            message.style.color = "red";
        }
        else if (!emailPattern.test(email)) {
            message.innerText = "Enter a valid email address.";
            message.style.color = "red";
        }
        else if (!phonePattern.test(phone)) {
            message.innerText = "Enter a valid 10-digit phone number.";
            message.style.color = "red";
        }
        else {
            message.innerText = "Thank you! Your application has been submitted.";
            message.style.color = "green";
            volunteerForm.reset();
        }
    });
}
let totalRaised = 50000;
const goal = 100000;
function updateProgress() {
    const progressBar = document.getElementById("progressBar");
    const raisedAmount = document.getElementById("raisedAmount");
    if (!progressBar || !raisedAmount) return;
    const percentage = Math.min((totalRaised / goal) * 100, 100);
    progressBar.style.width = percentage + "%";
    raisedAmount.innerText =
        "₹" + totalRaised.toLocaleString("en-IN") +
        " raised out of ₹" + goal.toLocaleString("en-IN");
}
updateProgress();
function selectAmount(amount, button) {
    const input = document.getElementById("donationAmount");
    if (input) {
        input.value = amount;
        document.querySelectorAll(".amount-buttons button")
            .forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    }
}
const donationForm = document.getElementById("donationForm");
if (donationForm) {
    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const amount = Number(document.getElementById("donationAmount").value);
        const message = document.getElementById("donationMessage");
        if (!Number.isFinite(amount) || amount <= 0) {
            message.innerText = "Please enter a valid donation amount.";
            message.style.color = "red";
        }
        else {
            totalRaised += amount;
            updateProgress();
            message.innerText =
                "Thank you! Your demo donation of ₹" +
                amount.toLocaleString("en-IN") + " has been added.";
            message.style.color = "green";
            donationForm.reset();
        }
    });
}
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
galleryImages.forEach(image => {
    image.addEventListener("click", function() {
        lightboxImage.src = image.src;
        lightbox.classList.add("open");
    });
});
if (closeLightbox) {
    closeLightbox.addEventListener("click", function() {
        lightbox.classList.remove("open");
    });
}
if (lightbox) {
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("open");
        }
    });
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && lightbox) {
        lightbox.classList.remove("open");
    }
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const text = document.getElementById("contactText").value.trim();
        const message = document.getElementById("contactMessage");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name === "" || !emailPattern.test(email) || text === "") {
            message.innerText = "Please enter valid details.";
            message.style.color = "red";
        }
        else {
            message.innerText = "Your message has been submitted successfully!";
            message.style.color = "green";
            contactForm.reset();
        }
    });
}