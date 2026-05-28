const { name } = require("espree");
const { id } = require("prelude-ls");





//  ---- DOM Elements -----
const yearEl = document.getElementById("year");

const nav = document.getElementById("nav");

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

const featureGrid = document.getElementById("featureGrid");

const hoursList = document.getElementById("hoursList");

const ctaBtn = document.getElementById("ctaBtn");

const callBtn = document.getElementById("callBtn");

const phoneLink = document.getElementById("phoneLink");

const addressLink = document.getElementById("addressLink");

const emailLink = document.getElementById("emailLink");

const heading = document.getElementById("heroHeading");

const heroSubtext = document.getElementById("heroSubtext");

// ---- Modal Elements ----

const serviceModal = document.getElementById("serviceModal");

const serviceModalOverlay = document.getElementById("serviceModalOverlay");

const serviceModalClose = document.getElementById("serviceModalClose");

const serviceModalTitle = document.getElementById("serviceModalTitle");

const serviceModalPrice
= document.getElementById("serviceModalPrice");

const serviceModalList = document.getElementById("serviceModalList")

// ---- Main Shop Object ----
const shopInfo = {
    name: "Vintage Barbershop",
    address: "123 Main St, Houston",
    phoneDisplay: "(555) 123 - 4567",
    phoneRaw: "5551234567",
    email: "hello@vintagebarbershop.com"
};

// ----  Navigation Data (Array off Objects) ----

const navLinks = [
    { label: "Home", href: "#hero"},
    { label: "Services", href: "#features"},
    { label: "Book", href: "#cta"},
    { label: "Contact", href: "#footer"}
];

//  ----- Services Data (Array of Objects) -----

const services = [
    {
        id: 1,
        title: "Classic Haircut",
        image: "assets/images/feature-1.jpg",
        alt: "Classic haircut",
        description: "Timeless cuts with modern precision tailored to your style.",
        price: 25,
        popular: true,
        deatails: [
            "Consultation with your barber before the cut begins.",
            "Hair sectioning and shape-up based on your preferred style.",
            "Professional clippers, trimmers, and shears used for precision.",
            "Neckline cleanup and finishing touches included.",
            "Light styling product applied for a clean final look.",
        ],
    },
    {
        id: 2,
        title: "Beard Trim",
        text: "Hot towel treatment with a smooth traditional shave.",
        image: "assets/images/feature-4.jpeg",
        alt: "Beard trim",
        description: "Shape, line-up, and refine your beard for a clean finish.",
        price: 15,
        popular: false,
        details: [
            "Beard assessment and shaping based on face structure.",
            "Line-up around cheeks, jawline, and neckline.",
            "Trimmers and detail tools used for crisp edges.",
            "Conditioning beard product may be applied for softness.",
            "Final symmetry check for a polished finish.",
        ],
    },
    {
        id: 3,
        title: "Straight Razor Shave",
        image: "assets/images/feaature-3.jpg",
        alt: "Straight razor shave",
        description: "Hot towel, smooth shave, and classic barbershop experience.",
        price: 30,
        popular: true,
        details: [
            "Hot towel prep to soften facial hair and open pores.",
            "Premium shaving cream or lather applied to protect the skin.",
            "Straight razor shave performed with careful detailing.",
            "Second hot towel may be used for comfort and cleanup.",
            "Aftershave or soothing skin product applied after service.",
        ],
    },
    {
        id: 4,
        title: "Fade & Style",
        image: "assets/images/feature-2.jpg",
        alt: "Fade haircut",
        description: "A clean fade with finishing detail for a sharp, modern look.",
        price: 35,
        popular: false,
        details: [
            "Style consultation before clipper work begins.",
            "Fade blended to your preferred level and finish.",
            "Detailing around temples, neckline, and beard area if needed.",
            "Scissors and clipper-over-comb may be used for texture.",
            "Styling product added to complete the final look.",
        ],
    },
    {
        id: 5,
        title: "Fade & Style",
        image: "assets/images/feature-2.jpg",
        alt: "Fade haircut",
        description: "A clean fade with finishing detail for a sharp, modern look.",
        price: 35,
        popular: false,
        details: [
            "Style consultation before clipper work begins.",
            "Fade blended to your preferred level and finish.",
            "Detailing around temples, neckline, and beard area if needed.",
            "Scissors and clipper-over-comb may be used for texture.",
            "Styling product added to complete the final look.",
        ],
    },
    {
        id: 6,
        title: "Fade & Style",
        image: "assets/images/feature-2.jpg",
        alt: "Fade haircut",
        description: "A clean fade with finishing detail for a sharp, modern look.",
        price: 35,
        popular: false,
        details: [
            "Style consultation before clipper work begins.",
            "Fade blended to your preferred level and finish.",
            "Detailing around temples, neckline, and beard area if needed.",
            "Scissors and clipper-over-comb may be used for texture.",
            "Styling product added to complete the final look.",
        ],
    },
];


//  ---- Render Features using forEach ----

// const renderFeatures = () => {

//     if (!featureGrid) return;

//      services.forEach(service => { //calls the array name and use forEach to loop through it, services is the parameter that represents each item in the array as we loop through it

//         const card = document.createElement("article");
//         card.classList.add("feature-card");

//         card.innerHTML = `
//             <img src"${service.image}" alt="${service.title}"
//             class="feature-img" />
//             <h3 class="feature-title">${service.title}</h3>
//             <p class="feature-text">${service.title}</p>
//          `; //insert data into the card using template literals

//         featureGrid.appendChild(card); //adds it to the page
//     });
// };


const renderFeaturesMap = () => {
    const cardsHTML = services
        .map((service) => {
            return `
        <article class="feature-card">
            <img src="${service.image}" alt="{service.title}" class="feature-img" />
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">${service.text}</p>
        </article>
    `;
        })
        .join("");

    featureGrid.innerHTML = cardsHTML;
}

//  ---- Render Navigsation using map() ----

const renderNavigation = () => {

    // Desktop Nav
    if (nav) {
        const navHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="nav-link">
                ${link.label}
            </a>
        `;
        })
        .join(""); // join() is needed to convert the array of strings into one big string without commas in between
        // we use empty string ("") as a seperator because we don't want anything in between the links (no commas, no spaces, dashes, etc.)
        nav.innerHTML = navHTML
    }

    // Mobile Nav
    if (mobileMenu) {
        const mobileHTML = navLinks.map(link => {
            return `
                <a href="${link.href}" class="mobile-link">
                    ${link.label}
                </a>
            `;
        }).join("");

        mobileMenu.innerHTML = mobileHTML;
    }
};

//  ---- Helpers / Functions ----

const handleHeaderOnScroll = () => {
    if (!siteHeader) return;

    if (window.scrollY > 10) {
        siteHeader.classList.add("is-scrolled");
    } else {
        siteHeader.classList.remove("is-scrolled");
    }
};

// Update foooter year automatically

const setCurrentYear = () => {
    const now = new Date();

    yearEl.textContent = now.getFullYear();
};

// Toggle mobile menu open/ close

let isMenuOpen = false;

const toggleMobileMenu = () => {
    if (!mobileMenu) return;

    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");

        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");

        isMenuOpen = false;
    }
};


//  Close mobile menu (used when a link is clicked)

const closeMobileMenu = () => {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("is-open");

    isMenuOpen = false;
};

// Reusable function with parameters (practice pattern)

const updateHeadingText = (newText) => {
    if (!heading) return;

    heading.textContent = newText;
};

// ---- Event Listeners ----

window.addEventListener("scroll", handleHeaderOnScroll);

//  1) Set year on page load

setCurrentYear();

    //  2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
}

//  3) Close mobile menu when a mobile link is clicked (event delegation)

if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        // If they clicked an <a> inside the menu, close it

        if (event.target.tagName === "A") {
            closeMobileMenu();
        }
    });
}

//  4) CTA Button: "Book Now" (placeholder behavior)

if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - great choice!");
    });
}

//  5) Call Button: try to use the phone number in the footer

if (callBtn) {
    callBtn.addEventListener("click", () => {
        // If you later set phoneLink href to tel:, this will work perfectly.

        //  For now, this is a beginner-friendly placeholder.

        if (phoneLink) {
            updateHeadingText("Call us at " + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature coming next!");
        }
    });
}
renderFeaturesMap();
renderNavigation();
// handleHeaderOnScroll();

// const siteHeader = document.querySelector(".site-header"); //NO LONGER USED

// const cardContainer = document.querySelector("") //NO LONGER USED
