/* KEY FEATURES:
   - Home page image carousel
   - Dynamic event cards (Events page)
   - Dynamic FAQ cards (FAQ page)
   - Dynamic dining cards (Dining page)
*/

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- GLOBAL NAV: HAMBURGER TOGGLE ---------- */

    const nav = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    if (nav && menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Optional: close menu after clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-open')) {
                    nav.classList.remove('nav-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    /* ---------- HOME PAGE: CAROUSEL ---------- */

    const carousel = document.querySelector('.carousel');
    const images = carousel ? carousel.querySelectorAll('img') : [];
    const prevBtn = document.querySelector('.left-btn');
    const nextBtn = document.querySelector('.right-btn');

    let index = 0;

    function showImage(i) {
        if (!carousel) return;
        carousel.style.transform = `translateX(${-i * 100}%)`;
    }

    function nextImage() {
        if (images.length === 0) return;
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        if (images.length === 0) return;
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    if (carousel && images.length > 0) {
        nextBtn?.addEventListener('click', nextImage);
        prevBtn?.addEventListener('click', prevImage);
        setInterval(nextImage, 4000);
    }

    if (carousel && images.length > 0) {
    images[0].addEventListener("click", () => {
        window.location.href = "./events.html";
    });
    images[1].addEventListener("click", () => {
        window.location.href = "./dining.html";
    });
    images[2].addEventListener("click", () => {
        window.location.href = "./faq.html";
    });
}


    /* ---------- EVENTS PAGE: FEATURE CARDS ---------- */

    const featuresEl = document.getElementById('event-features');

    const events = [
        {
            title: "Late Night Breakfast",
            description: "Late Night Breakfast is back for finals week! Take a break from studying and join us for food, games, and fun. Connect with friends and recharge at this campus favorite tradition.",
            details: "December 9, 2025 | 9:00pm - 10:30pm | Schervish Dining Hall",
            image: "./imgs/late_night_breakfast.jpg"
        },
        {
            title: "Chorale and Handbell Choir Christmas Concert",
            description: "Annual sacred music celebration of Lessons and Carols featuring the Walsh University Chorale and Handbell Choir.",
            details: "December 05, 2025 | 7:00 PM - 9:00 PM | Our Lady of Perpetual Help Chapel",
            image: "./imgs/choir.jpg"
        },
        {
            title: "Angel in the Rubble: An Evening with Genelle Guzman-McMillan",
            description: "Join us for an inspiring evening with Genelle Guzman-McMillan as she shares her powerful story of surviving 27 hours beneath the rubble and rediscovering faith, followed by a reception and book signing of Angel in the Rubble.",
            details: "December 02, 2025 | 06:30 PM - 08:30 PM | Cecchini Center Auxiliary Gym",
            image: "./imgs/genelle.webp"
        }
    ];

    if (featuresEl) {
        events.forEach((event) => {
            const card = document.createElement('div');
            card.className = 'feature-card';

            const img = document.createElement('img');
            img.src = event.image;
            img.alt = `${event.title} image`;

            const content = document.createElement('div');
            content.className = 'feature-card-content';

            const title = document.createElement('h3');
            title.className = 'feature-card-title';
            title.textContent = event.title;

            const desc = document.createElement('p');
            desc.className = 'feature-card-description';
            desc.textContent = event.description;

            const actions = document.createElement('div');
            actions.className = 'feature-actions';

            const rsvpBtn = document.createElement('button');
            rsvpBtn.className = 'btn-event';
            rsvpBtn.textContent = "RSVP";
            rsvpBtn.addEventListener("click", () => {
                alert(`Thanks for RSVPing to: ${event.title}!`);
            });

            const detailsBtn = document.createElement('button');
            detailsBtn.className = 'btn-event';
            detailsBtn.textContent = "Show Details";

            const detailsBox = document.createElement('div');
            detailsBox.className = "event-details-box";
            detailsBox.textContent = event.details;

            detailsBtn.addEventListener("click", () => {
                const isOpen = detailsBox.classList.contains("open");

                if (isOpen) {
                    detailsBox.style.maxHeight = detailsBox.scrollHeight + "px";
                    setTimeout(() => {
                        detailsBox.classList.remove("open");
                        detailsBox.style.maxHeight = "0";
                    }, 10);

                    detailsBtn.textContent = "Show Details";
                } else {
                    detailsBox.classList.add("open");
                    detailsBox.style.maxHeight = detailsBox.scrollHeight + "px";

                    detailsBtn.textContent = "Hide Details";
                }
            });

            actions.appendChild(rsvpBtn);
            actions.appendChild(detailsBtn);

            content.appendChild(title);
            content.appendChild(desc);
            content.appendChild(actions);
            content.appendChild(detailsBox);

            card.appendChild(img);
            card.appendChild(content);

            featuresEl.appendChild(card);
        });
    }

});

/* ---------- FAQ PAGE: FAQ CARDS ---------- */

const faqContainer = document.getElementById("faq-features");

const faqs = [
    {
        question: "How do I find upcoming campus events?",
        short: "Events are listed on Walsh’s official event calendar and student app.",
        details: "Walsh University posts campus events on the Student App, the Campus Life webpage, and digital boards across campus. Students can browse by date, category, or location and often RSVP directly through the app for dining events, athletic games, faith-based programs, and student-life activities. Some events may require a Walsh login to view additional details or to register.",
        icon: "./imgs/faq1.jpg"
    },
    {
        question: "Where can I get academic support or tutoring?",
        short: "Tutoring is available through the Academic Support Center.",
        details: "Walsh University’s Academic Support Center (ASC) offers free tutoring in subjects like math, writing, science, and computer science. Students can schedule appointments online or walk in during open hours. Additional help is available through faculty office hours and peer study groups. The ASC also provides accommodations for students registered with Accessibility Services.",
        icon: "./imgs/faq2.png"
    },
    {
        question: "How do meal plans work and where can I use them?",
        short: "Meal plans include swipes and dining dollars usable at multiple campus locations.",
        details: "Most Walsh meal plans include a set number of swipes for Schervish Dining Hall and CAV Cash or dining dollars for campus retail locations such as Cavaliers Café or The Dome. Swipes typically reset weekly depending on the plan, while dining dollars last the entire semester. Students can track balances in the Walsh app and add funds at any time.",
        icon: "./imgs/faq3.jpg"
    }
];

if (faqContainer) {
    faqs.forEach(faq => {
        const card = document.createElement("div");
        card.className = "feature-card";

        const img = document.createElement("img");
        img.src = faq.icon;
        img.alt = "FAQ icon";

        const content = document.createElement("div");
        content.className = "feature-card-content";

        const title = document.createElement("h3");
        title.className = "feature-card-title";
        title.textContent = faq.question;

        const desc = document.createElement("p");
        desc.className = "feature-card-description";
        desc.textContent = faq.short;

        const btn = document.createElement("button");
        btn.className = "btn-event";
        btn.textContent = "Show Answer";

        const answerBox = document.createElement("div");
        answerBox.className = "event-details-box";
        answerBox.textContent = faq.details;

        btn.addEventListener("click", () => {
            const isOpen = answerBox.classList.contains("open");

            if (isOpen) {
                answerBox.style.maxHeight = answerBox.scrollHeight + "px";
                setTimeout(() => {
                    answerBox.classList.remove("open");
                    answerBox.style.maxHeight = "0";
                }, 10);
                btn.textContent = "Show Answer";
            } else {
                answerBox.classList.add("open");
                answerBox.style.maxHeight = answerBox.scrollHeight + "px";
                btn.textContent = "Hide Answer";
            }
        });

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(btn);
        content.appendChild(answerBox);

        card.appendChild(img);
        card.appendChild(content);

        faqContainer.appendChild(card);
    });
}

/* ---------- DINING PAGE: FEATURE CARDS ---------- */

const diningContainer = document.getElementById("dining-features");

const diningItems = [
    {
        title: "Breakfast - Pancake Bar",
        description: "Enjoy a build-your-own pancake bar stacked with fresh toppings, syrups, and sweet breakfast favorites.",
        image: "./imgs/pancake.png",
        nutritionDetails: "Made to order, no nutrition info available. Customize with your favorite toppings!"
    },
    {
        title: "Lunch - Creole-inspired Jambalaya",
        description: "A flavorful jambalaya dish with rice, vegetables, and your choice of protein, seasoned with traditional Creole spices.",
        image: "./imgs/jambalaya.png",
        nutritionDetails: "Calories: 390cal\nCarbohydrates: 57g\nTotal Fat: 11g\nSugar: 7g\nProtein: 18g"
    },
    {
        title: "Dinner - Sweet & Sour Tofu Stir Fry",
        description: "A delicious tofu stir fry with a tangy sweet and sour sauce, served with fresh vegetables and rice.",
        image: "./imgs/tofu_stir_fry.jpg",
        nutritionDetails: "Calories: 360cal\nCarbohydrates: 64g\nTotal Fat: 8g\nSugar: 20g\nProtein: 11g"
    }
];

if (diningContainer) {
    diningItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "feature-card";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = `${item.title} image`;

        const content = document.createElement("div");
        content.className = "feature-card-content";

        const title = document.createElement("h3");
        title.className = "feature-card-title";
        title.textContent = item.title;

        const desc = document.createElement("p");
        desc.className = "feature-card-description";
        desc.textContent = item.description;

        // Button that behaves like the Events "Show Details"
        const nutritionBtn = document.createElement("button");
        nutritionBtn.className = "btn-event";
        nutritionBtn.textContent = "Nutrition Information";

        const nutritionBox = document.createElement("div");
        nutritionBox.className = "event-details-box";
        nutritionBox.textContent = item.nutritionDetails;

        nutritionBtn.addEventListener("click", () => {
            const isOpen = nutritionBox.classList.contains("open");

            if (isOpen) {
                // smooth close (same pattern as Events/FAQ)
                nutritionBox.style.maxHeight = nutritionBox.scrollHeight + "px";
                setTimeout(() => {
                    nutritionBox.classList.remove("open");
                    nutritionBox.style.maxHeight = "0";
                }, 10);
                nutritionBtn.textContent = "Nutrition Information";
            } else {
                nutritionBox.classList.add("open");
                nutritionBox.style.maxHeight = nutritionBox.scrollHeight + "px";
                nutritionBtn.textContent = "Hide Nutrition Info";
            }
        });

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(nutritionBtn);
        content.appendChild(nutritionBox);

        card.appendChild(img);
        card.appendChild(content);

        diningContainer.appendChild(card);
    });
}


/* ---------- MOBILE FEATURE CARD SLIDERS (all pages) ---------- */

function initFeatureSliders() {
    const containers = document.querySelectorAll('.feature-slider-container');
    const isMobile = () => window.innerWidth <= 900;

    containers.forEach(container => {
        const track = container.querySelector('.feature-slider');
        const cards = track ? track.children : [];
        if (!track || cards.length <= 1) return;

        let index = 0;

        function update() {
            if (!isMobile()) {
                track.style.transform = 'translateX(0)';
                return;
            }
            track.style.transform = `translateX(${-index * 100}%)`;
        }

        const prev = container.querySelector('.left-feature-btn');
        const next = container.querySelector('.right-feature-btn');

        prev?.addEventListener('click', () => {
            if (!isMobile()) return;
            index = (index - 1 + cards.length) % cards.length;
            update();
        });

        next?.addEventListener('click', () => {
            if (!isMobile()) return;
            index = (index + 1) % cards.length;
            update();
        });

        window.addEventListener('resize', update);
        update();
    });
}

/* Run after everything (cards) is on the page */
window.addEventListener('load', initFeatureSliders);


async function loadWeather() {
    const apiKey = OPENWEATHER_KEY;
    const campusLat = 40.7989;
    const campusLon = -81.3784;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${campusLat}&lon=${campusLon}&units=imperial&appid=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        document.getElementById("weather-temp").textContent =
            `${Math.round(data.main.temp)}°F`;

        document.getElementById("weather-desc").textContent =
            data.weather[0].description.replace(/\b\w/g, c => c.toUpperCase());
    } catch (err) {
        document.getElementById("weather-temp").textContent = "Sorry, weather is unavailable right now!";
        console.error("Weather API error:", err);
    }
}

document.addEventListener("DOMContentLoaded", loadWeather);
