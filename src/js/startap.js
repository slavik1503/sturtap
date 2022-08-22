let bgHeader = document.querySelector(".header-backround"),
    bgDoYouLike = document.querySelector(".main-backround"),
    popupRegister = document.querySelector(".popup-register"),
    activePopup,
    activePopupForm = document.querySelector(".popup-form"),
    activeFirstPopup,
    activeSecondPopup,
    firstPopup = document.querySelector(".first-popup"),
    firstPopupMenu = document.querySelector(".first-popup-menu"),
    photoFirst = document.querySelector(".photo-first"),
    photoSecond = document.querySelector(".photo-second"),
    photoThird = document.querySelector(".photo-third"),
    photoFouth = document.querySelector(".photo-fouth"),
    photoFifth = document.querySelector(".photo-fifth"),
    photoSixth = document.querySelector(".photo-sixth"),
    photoSeventh = document.querySelector(".photo-seventh"),
    photoEighth = document.querySelector(".photo-eighth"),
    photoNinth = document.querySelector(".photo-ninth")


// ТРІПЛ КЛІК
function tripleClick(event) {
  let hack = document.querySelector(".hack"),
      hackSecond = document.querySelector(".hack-second"),
      hackThird = document.querySelector(".hack-third")
  if(event.detail === 3){
      alert("YOu hack this cite")
      hack.innerHTML = "Hack this site"
      hack.style.color = "red"
      hackSecond.innerHTML = "Hack this site"
      hackSecond.style.color = "red"
      hackThird.innerHTML = "Hack this site"
      hackThird.style.color = "red"
  }
}


// паралакс ефект
document.addEventListener("scroll", function(){
  bgHeader.style.backgroundSize = (120 + (window.pageYOffset / 5) + "%") + "auto"
  bgHeader.style.transition = "all 1.5s ease"
  bgDoYouLike.style.backgroundSize = (150 + ((window.pageYOffset - bgDoYouLike.getBoundingClientRect().y) / 5) + "%") + "auto"
  bgDoYouLike.style.transition = "all 1.5s ease"
} )

// Попап авторизації
function popupOpen() {
  popupRegister.style.display = "block"
  popupRegister.classList.add("active-popup")
  activePopup = document.querySelector(".active-popup")
  activePopupForm.style.zIndex = "12"
  activePopup.onclick = checkClick
}

function firstPopupOpen() {
  firstPopupMenu.style.display = "block"
  popupRegister.classList.add("active-first-popup")
  activePopup = document.querySelector(".active-popup")
  activePopupForm.style.zIndex = "12"
  activePopup.onclick = checkClick
}
function popupClose(){
  popupRegister.style.display = "none"
  popupRegister.classList.remove("active-popup")
  activePopupForm.style.zIndex = "-1"
}
// Фільтр картинок
function allOpen() {
  photoFirst.style.display = "block"
  photoSecond.style.display = "block"
  photoThird.style.display = "block"
  photoFouth.style.display = "block"
  photoFifth.style.display = "block"
  photoSixth.style.display = "block"
  photoSeventh.style.display = "block"
  photoEighth.style.display = "block"
  photoNinth.style.display = "block"
  localStorage.setItem("PInfo", "All")
}

function brandingOpen() {
  photoFirst.style.display = "block"
  photoSecond.style.display = "block"
  photoThird.style.display = "block"
  photoFouth.style.display = "none"
  photoFifth.style.display = "none"
  photoSixth.style.display = "none"
  photoSeventh.style.display = "none"
  photoEighth.style.display = "none"
  photoNinth.style.display = "none"
  localStorage.setItem("PInfo", "branding")
}

function designOpen() {
  photoFouth.style.display = "block"
  photoFifth.style.display = "block"
  photoSixth.style.display = "block"
  photoFirst.style.display = "none"
  photoSecond.style.display = "none"
  photoThird.style.display = "none"
  photoSeventh.style.display = "none"
  photoEighth.style.display = "none"
  photoNinth.style.display = "none"
  localStorage.setItem("PInfo", "design")
}

function developmentOpen() {
  photoSeventh.style.display = "block"
  photoEighth.style.display = "block"
  photoNinth.style.display = "block"
  photoFirst.style.display = "none"
  photoSecond.style.display = "none"
  photoThird.style.display = "none"
  photoFouth.style.display = "none"
  photoFifth.style.display = "none"
  photoSixth.style.display = "none"
  localStorage.setItem("PInfo", "development")
}

function strategyOpen() {
  photoThird.style.display = "block"
  photoFifth.style.display = "block"
  photoSixth.style.display = "block"
  photoFirst.style.display = "none"
  photoSecond.style.display = "none"
  photoFouth.style.display = "none"
  photoSeventh.style.display = "none"
  photoEighth.style.display = "none"
  photoNinth.style.display = "none"
  localStorage.setItem("PInfo", "strategy")
}

if(localStorage.PInfo == 'All' || localStorage.PInfo === null){
  allOpen()
} else if(localStorage.PInfo == 'branding'){
  brandingOpen()
} else if(localStorage.PInfo == 'design'){
  designOpen()
} else if(localStorage.PInfo == 'development'){
  developmentOpen()
} else if(localStorage.PInfo == 'strategy'){
  strategyOpen()
}

// Скрол до відповідних Блоків
function scrollHome(){
  window.scrollTo(0)
}
function scrollServices(){
  window.scrollTo(0 , (window.pageYOffset + 877))
}

function scrollAbout(){
  window.scrollTo(0, (window.pageYOffset + 1640))
}

function scrollWorks(){
  window.scrollTo(0, (window.pageYOffset + 2683))
}

function scrollBlog(){
  window.scrollTo(0, (window.pageYOffset + 4820))
}

function scrollClients(){
  window.scrollTo(0, (window.pageYOffset + 6005))
}

function scrollContact(){
  window.scrollTo(0, (window.pageYOffset + 6680))
}
function scrollGetInTouch(){
  window.scrollTo(0, (window.pageYOffset + 2480))
}

// Драгондроп
