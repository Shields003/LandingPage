/*
 * Define Global Variables
 * Global variables are variables that are available throughout the program.
 * They are used to store data that is needed throughout the program.
 */
/**
 * End Global Variables
 * Start Helper Functions
 * Helper functions are functions that are used in other functions.
 * They are used to help the other functions.
 */
/**
 * End Helper Functions
 * Begin Main Functions
 * Main functions are the ones that call the other functions.
 */

window.addEventListener("scroll", setActiveSection);
// window.addEventListener("scroll", addActiveClass);
let currentSection = null;

// Add event listeners to all links

// build the nav
const nav = document.querySelector("nav");
const navList = document.createElement("ul");
navList.classList.add("nav-list");
nav.appendChild(navList);

// Add class 'active' to section when near top of viewport
// function addActiveClass() {
//   const section = document.querySelectorAll("links");
//   if (isInViewport) {
//     section.classList === "activeLink";
//   } else {
//     section.classList.remove("active");
//   }
// }

function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= window.innerHeight &&
    bounding.right <= window.innerWidth
  );
}

/**
 * End Main Functions
 * Begin Events
 * Events are functions that are called when something happens.
 * They are used to respond to the user's actions.
 * // Scroll to anchor ID
 */
function scrollToSection(event) {
  event.preventDefault();
  const section = event.target.getAttribute("href");
  const element = document.querySelector(section);
  element.scrollIntoView({ behavior: "smooth" });
}

// Build menu dynamically
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const listItem = document.createElement("li");

  const link = document.createElement("a");
  link.setAttribute("href", `#${section.id}`);
  link.textContent = section.dataset.nav;
  link.addEventListener("click", scrollToSection);
  listItem.appendChild(link);
  navList.appendChild(listItem);
});

const get_active_section = (sections) => {
  let active_section = null;
  const bottomofscreen = window.scrollY + window.innerHeight;
  sections.forEach((section) => {
    if (
      !active_section ||
      (section.offsetTop > active_section.offsetTop &&
        section.offsetTop < bottomofscreen - 200)
    ) {
      active_section = section;
    }
  });
  return active_section;
};

// Set sections as active
// Only one link can be active at a time
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  const onscreen_sections = [];
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const isInViewport =
      sectionTop <= window.scrollY + window.innerHeight &&
      sectionBottom >= window.scrollY;
    if (isInViewport) {
      onscreen_sections.push(section);
    }
  });
  if (onscreen_sections.length > 0) {
    currentSection = get_active_section(onscreen_sections);
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    currentSection.classList.add("active");
    const activeLink = document.querySelector(
        `a[href="#${currentSection.id}"]`
      ),
      activeListItem = activeLink.parentNode;
    navList.querySelectorAll("li").forEach((listItem) => {
      listItem.classList.remove("activeLink");
    });
    activeListItem.classList.add("activeLink");
  }
}


