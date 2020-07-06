

// --------- Adds <li> items to the DOM ----------

const myList = document.getElementById('myList');
// new list item

let newListItem = document.createElement('li');
newListItem.innerHTML = `<a href="#section1">Section 1</a>
<a href="#section2">Section 2</a>
<a href="#section3">Section 3</a>
<a href="#section4">Section 4</a>`;

myList.appendChild(newListItem);


// ------------ Adds new section to DOM -------------


const newSec = document.getElementById('sections');
// new section item

let newSecItem = document.createElement('section3');
newSecItem.innerHTML = `
<section id="section4" data-nav="Section 4" class="your-active-class">
      <div class="landing__container">
        <h2>Section 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>
`;

sections.appendChild(newSecItem);


// ------------responsive Navigation on smaller screens -----------

const navbarSwitch = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('#myList');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

navbarSwitch.addEventListener("click", navbarSwitchClick);

function navbarSwitchClick() {
    navbarSwitch.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    smoothScroll(event); //calls smooth scroll function found on line 41 when nav item is clicked
    if(navbarMenu.classList.contains("open")){ // closed navbar on smaller screens
        navbarSwitch.click();
    }
}

// script to create smooth scrolling for navigation

// *********** window.scrollInToView()**************
smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "body" : event.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



/// script for active navigation style scroll

window.addEventListener('scroll', event => {
    let nav = document.querySelector('.navbar__menu');
    
    (window.scrollY >= 1) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});


window.addEventListener('scroll', event => {
    let navLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
    
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (
            section.offsetTop <= fromTop && 
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});



















