let burger = document.querySelector('.navbar-toggler');
let search = document.querySelector('.search');
let searchIcon = document.querySelector('.bi-search');
let profileIcon = document.querySelector('.bi-person');
let shopIcon = document.querySelector('.bi-cart3');

let profileCompStyles = window.getComputedStyle(profileIcon);
let shopCompStyles = window.getComputedStyle(shopIcon);

// nav responsiveness
burger.addEventListener('click', () => {
 //search input
        search.classList.toggle('searchToggle');
        searchIcon.classList.toggle('searchToggle');
// icons
         if(profileCompStyles.getPropertyValue('display') === 'block' && shopCompStyles.getPropertyValue('display') === 'block') {
            profileIcon.style.display = "none";
            shopIcon.style.display = "none";
            } else if(profileCompStyles.getPropertyValue('display') === 'none' && shopCompStyles.getPropertyValue('display') === 'none') {
               setTimeout(() => {
                profileIcon.style.display = 'block';
                shopIcon.style.display = 'block';
               }, 380)
               }
            })


// nav scroll effect
let nav = document.querySelector('nav');
let navbarCollapse = document.querySelector('.navbar-collapse');
var lastScrollTop = 0;

window.addEventListener("scroll", function() { 
   var st = window.pageYOffset;
   if (st > lastScrollTop){
      // downscroll code
      nav.style.opacity = '0';
   } else {
      // upscroll code
      nav.style.opacity = '1';
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// dropdown footer
const firstArrow = document.querySelector('.arrow-one');
const secondArrow = document.querySelector('.arrow-two');
const thirdArrow = document.querySelector('.arrow-three');
const fourthArrow = document.querySelector('.arrow-four');

function showingFooter(el) {
   el.addEventListener('click', () => {
      if (el.parentNode.nextElementSibling.style.display === "none") {
         el.parentNode.nextElementSibling.style.display = "block";
         el.classList.add('arrow-rotate');
       } else {
         el.parentNode.nextElementSibling.style.display = "none";
         el.classList.remove('arrow-rotate');
       }
   })
}

showingFooter(firstArrow);
showingFooter(secondArrow);
showingFooter(thirdArrow);
showingFooter(fourthArrow);


