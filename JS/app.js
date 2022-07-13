/*
 * Define Global Variables
 * Global variables are variables that are available throughout the program.
 * They are used to store data that is needed throughout the program.
 *  
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

// window.addEventListener("scroll", setActiveSection)
// window.addEventListener("scroll", addActiveClass)

// build the nav
const nav = document.querySelector("nav")
const navList = document.createElement("ul")
navList.classList.add("nav-list")
nav.appendChild(navList)


// Add class 'active' to section when near top of viewport
function addActiveClass() {
     const section = document.querySelectorAll("section")
          if (isInViewport) {
               section.classList.add("active")

          } else {
               section.classList.remove("active")
          }
     }


function isInViewport(elem) {
     const bounding = elem.getBoundingClientRect()
     return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
     )
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * Events are functions that are called when something happens.
 * They are used to respond to the user's actions. 
*/
function scrollToSection(event) {
     event.preventDefault()
     const section = event.target.getAttribute("href")
     const element = document.querySelector(section)
     element.scrollIntoView( {behavior: "smooth"} )
}



// Build menu
const sections = document.querySelectorAll("section")
sections.forEach(section => {
     const listItem = document.createElement("li")
          
     const link = document.createElement("a")
     link.setAttribute("href", `#${section.id}`)
     link.textContent = section.dataset.nav
     link.addEventListener("click", scrollToSection)
     listItem.appendChild(link)
     navList.appendChild(listItem)
}
)


// Scroll to section on link click
const links = document.querySelectorAll("nav a")

// Set sections as active
function setActiveSection() {
     const sections = document.querySelectorAll("section")
     for (let i = 0; i < sections.length; i++) {
          const section = sections[i]
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          const isInViewport = sectionTop <= window.scrollY + window.innerHeight && sectionBottom >= window.scrollY
          if (isInViewport) {
               section.classList.add("active")
          } else {
               section.classList.remove("active")
          }
     }
}



