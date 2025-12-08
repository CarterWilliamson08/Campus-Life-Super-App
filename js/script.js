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

    /* ---------- EVENTS PAGE: FEATURE CARDS ---------- */

    const featuresEl = document.getElementById('event-features');

    const events = [
        {
            title: "Placeholder Event Name",
            description: "Short placeholder description of event. Replace this later with real text when you add actual events.",
            details: "This is an extended detail section that can include event schedule, additional info, rules, contact info, etc.",
            image: "./imgs/placeholder.png"
        },
        {
            title: "Placeholder Event Name",
            description: "Short placeholder description of event. Replace this later with real text when you add actual events.",
            details: "Additional information about this placeholder event. This will expand when the user clicks the details button.",
            image: "./imgs/placeholder.png"
        },
        {
            title: "Placeholder Event Name",
            description: "Short placeholder description of event. Replace this later with real text when you add actual events.",
            details: "More placeholder details to demonstrate expandable content. Works smoothly across all cards.",
            image: "./imgs/placeholder.png"
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
        question: "Placeholder Question 1",
        short: "Short placeholder summary of the FAQ. Replace this text later with your real question summary.",
        details: "This is placeholder detailed text for FAQ #1. You can expand this later with the full answer, explanation, or steps.",
        icon: "./imgs/placeholder.png"
    },
    {
        question: "Placeholder Question 2",
        short: "Short placeholder summary that briefly introduces the FAQ topic.",
        details: "More placeholder details for FAQ #2. This section will expand when the user clicks to show the answer.",
        icon: "./imgs/placeholder.png"
    },
    {
        question: "Placeholder Question 3",
        short: "Short placeholder description for the FAQ. This should be replaced with a real explanation later.",
        details: "Placeholder expanded content for FAQ #3. You can enter instructions, policies, or explanations here when ready.",
        icon: "./imgs/placeholder.png"
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
        title: "Main Course (Placeholder)",
        description: "Short placeholder description of today's main entrée. Replace this text when ready.",
        image: "./imgs/placeholder.png",
        nutritionLink: "#"
    },
    {
        title: "Side Dish (Placeholder)",
        description: "Short placeholder description of today's side dish. Replace this with real menu info.",
        image: "./imgs/placeholder.png",
        nutritionLink: "#"
    },
    {
        title: "Dessert (Placeholder)",
        description: "Short placeholder description of the featured dessert. Replace with real menu details.",
        image: "./imgs/placeholder.png",
        nutritionLink: "#"
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

        const nutrition = document.createElement("a");
        nutrition.href = item.nutritionLink;
        nutrition.textContent = "Nutrition Information";
        nutrition.style.display = "block";
        nutrition.style.marginTop = "16px";
        nutrition.style.fontWeight = "bold";
        nutrition.style.color = "maroon";
        nutrition.style.textDecoration = "underline";
        nutrition.style.cursor = "pointer";

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(nutrition);

        card.appendChild(img);
        card.appendChild(content);

        diningContainer.appendChild(card);
    });
}
