// nav
const navBtn = document.querySelector('.nav-line-group')
const navbar = document.querySelector('.navbar__toggle-menu')
const navMenu = document.querySelector('.navbar__toggle-menu-list')
const navImages = document.querySelector('.navbar__toggle-menu-img')
const navList = document.querySelector('.navbar__toggle-menu-list-s')
const navListItems = document.querySelectorAll(
  '.navbar__toggle-menu-list-s-item'
)

let showMenu = false

navBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    navBtn.classList.add('close')
    navMenu.classList.add('show')
    navImages.classList.add('show')
    navList.classList.add('show')
    navbar.classList.add('show')
    navListItems.forEach((item) => item.classList.add('show'))

    // setMenu
    showMenu = true
  } else {
    navBtn.classList.remove('close')
    navMenu.classList.remove('show')
    navImages.classList.remove('show')
    navList.classList.remove('show')
    navbar.classList.remove('show')
    navListItems.forEach((item) => item.classList.remove('show'))

    // setMenu
    showMenu = false
  }
}

// nav scroll 
const navbarScroll = document.querySelector('.navbar');

window.addEventListener('scroll', function(e) {
  if(this.scrollY > 100) {
    navbarScroll.classList.add('nav-active-color')
  } else {
    navbarScroll.classList.remove('nav-active-color')
  }
})



// slick for testimonial
$('.test-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.test-arrow-prev',
  nextArrow: '.test-arrow-next',

  // responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '50px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
})



// tilt 
VanillaTilt.init(document.querySelector('.tilt'), {
  max: 35,
  speed: 5500,
})

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll('.tilt'))

// faq
const faq = document.querySelector('.faq')
const faqBtn = document.querySelectorAll('.faq-btn')

faqBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    btn.parentElement.classList.toggle('active')
  })
})

function activeFaq() {
  console.log('test')
}

// contact
const labels = document.querySelectorAll('.section-contact-content-item label')

labels.forEach((label) => {
  const l = (label.innerHTML = label.innerText
    .split('')
    .map(
      (latter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${latter}</span>`
    )
    .join(''))

  console.log(l)
})



// pop up 
const popBtn = document.querySelector('#btn-pop')
const pop = document.querySelector('.pop')
const closePop = document.querySelector('.close-pop')

console.log(popBtn)
popBtn.addEventListener('click', function (e) {
  pop.classList.add('pop-active')
  console.log(e)
})
closePop.addEventListener('click', function () {
  pop.classList.remove('pop-active')
})



// // showcase
// const showcase = document.querySelector('#showcase')

// window.addEventListener('scroll', function () {
//   const l = (showcase.style.backgroundSize = `${
//     160 - this.window.pageYOffset / 7
//   }%`)
// })

// mixitup
var mixer = mixitup('.education-inner-content');
mixer.filter('.category-a')








