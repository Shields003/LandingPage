/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
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

const navLinks = document.querySelectorAll("nav a")
for (let i = 0; i < navLinks.length; i++) {
     navLinks[i].addEventListener("click", function (e) {
          e.preventDefault()
          const target = e.target.getAttribute("href")
          const targetElement = document.querySelector(target)
       
          window.scrollTo({
               top: top,
               behavior: "smooth"
          })
     }
     )
}

/**
 * End Helper Functions
 * Begin Main Functions
 * Main functions are the ones that call the other functions.
*/

const onloadFunction = function() {
     const element1= document.getElementById("pageTop")
     element1.scrollIntoView( {behavior: "smooth"} )   //scrolls to the section1
}
window.addEventListener("load", onloadFunction)


// build the nav
const nav = document.querySelector("nav")
const navList = document.createElement("ul")
navList.classList.add("nav-list")
nav.appendChild(navList)


// Add class 'active' to section when near top of viewport
function addActiveClass() {
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



