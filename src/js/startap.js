let bgHeader = document.querySelector(".header-backround"),
    bgDoYouLike = document.querySelector(".main-backround"),
    popupRegister = document.querySelector(".popup-register"),
    activePopup,
    activePopupForm = document.querySelector(".popup-form"),
    activeFirstPopup,
    activeSecondPopup,
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
  firstPopupMenu.style.display = "block",
  popupRegister.classList.add("active-first-popup"), 
  activePopup = document.querySelector(".active-popup"), 
  activePopup.onclick = checkClick
}

function secondPopupOpen() {
  secondPopupMenu.style.display = "block",
  popupRegister.classList.add("active-popup"), 
  activePopup = document.querySelector(".active-popup"), 
  activePopup.onclick = checkClick
}

function popupLoadOpen() {
  popupLoad.style.display = "block",
  popupLoad.classList.add("active-popup"), 
  activePopup = document.querySelector(".active-popup"),

  activePopup.onclick = checkClick
}

// Фільтр картинок
function allOpen() {
  photoFirst.style.display = "block",
  photoSecond.style.display = "block",
  photoThird.style.display = "block",
  photoFouth.style.display = "block",
  photoFifth.style.display = "block",
  photoSixth.style.display = "block",
  photoSeventh.style.display = "block",
  photoEighth.style.display = "block",
  photoNinth.style.display = "block",
  localStorage.setItem("PInfo", "All")
}

function brandingOpen() {
  photoFirst.style.display = "block",
  photoSecond.style.display = "block",
  photoThird.style.display = "block",
  photoFouth.style.display = "none",
  photoFifth.style.display = "none",
  photoSixth.style.display = "none",
  photoSeventh.style.display = "none",
  photoEighth.style.display = "none",
  photoNinth.style.display = "none",
  localStorage.setItem("PInfo", "branding")
}

function designOpen() {
  photoFouth.style.display = "block",
  photoFifth.style.display = "block",
  photoSixth.style.display = "block",
  photoFirst.style.display = "none",
  photoSecond.style.display = "none",
  photoThird.style.display = "none",
  photoSeventh.style.display = "none",
  photoEighth.style.display = "none",
  photoNinth.style.display = "none",
  localStorage.setItem("PInfo", "design")
}

function developmentOpen() {
  photoSeventh.style.display = "block",
  photoEighth.style.display = "block",
  photoNinth.style.display = "block",
  photoFirst.style.display = "none",
  photoSecond.style.display = "none",
  photoThird.style.display = "none",
  photoFouth.style.display = "none",
  photoFifth.style.display = "none",
  photoSixth.style.display = "none",
  localStorage.setItem("PInfo", "development")
}

function strategyOpen() {
  photoThird.style.display = "block",
  photoFifth.style.display = "block",
  photoSixth.style.display = "block",
  photoFirst.style.display = "none",
  photoSecond.style.display = "none",
  photoFouth.style.display = "none",
  photoSeventh.style.display = "none",
  photoEighth.style.display = "none",
  photoNinth.style.display = "none",
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
  window.scrollTo(0, (window.pageYOffset + 4120))
}

function scrollClients(){
  window.scrollTo(0, (window.pageYOffset + 5305))
}

function scrollContact(){
  window.scrollTo(0, (window.pageYOffset + 5980))
}
function scrollGetInTouch(){
  window.scrollTo(0, (window.pageYOffset + 2480))
}

// Драгондроп
greenColorFirst.ondragstart = function(e){
  console.log(e)
  greenColorSecond.ondragenter = function(e){
      podia(e)
      console.log(e)
      greenColorSecond.ondrop = function(e){
          greenColorFirst.style.display = "none",
          greenColorSecond.style.backgroundColor = "green"
      
      }
  }
  greenColorSecond.ondragleave = function(){
      console.log(e)
  }
  greenColorSecond.ondragover = function(e){
      podia(e)
  }
}

redColorFirst.ondragstart = function(e){
  console.log(e)
  redColorSecond.ondragenter = function(e){
      podia(e)
      console.log(e)
      redColorSecond.ondrop = function(e){
          redColorFirst.style.display = "none",
          redColorSecond.style.backgroundColor = "red"
      }
  }
  redColorSecond.ondragleave = function(){
      console.log(e)
  }
  redColorSecond.ondragover = function(e){
      podia(e)
  }
}

blueColorFirst.ondragstart = function(e){
  console.log(e)
  blueColorSecond.ondragenter = function(e){
      podia(e)
      console.log(e)
      blueColorSecond.ondrop = function(e){
          blueColorFirst.style.display = "none",
          blueColorSecond.style.backgroundColor = "blue"
      }
  }
  blueColorSecond.ondragleave = function(){
      console.log(e)
  }
  blueColorSecond.ondragover = function(e){
      podia(e)
  }
  
}

brownColorFirst.ondragstart = function(e){
  console.log(e)
  brownColorSecond.ondragenter = function(e){
      podia(e)
      console.log(e)
      brownColorSecond.ondrop = function(e){
          brownColorFirst.style.display = "none",
          brownColorSecond.style.backgroundColor = "brown"
      }
  }
  brownColorSecond.ondragleave = function(){
      console.log(e)
  }
  brownColorSecond.ondragover = function(e){
      podia(e)
  }
}