let hamburgerBtn = document.querySelector('.hamburger-menu');
let aside = document.querySelector('.aside');
hamburgerBtn.onclick = ()=>{
  if (hamburgerBtn.style.color != 'black') {
    hamburgerBtn.style.color = 'black';
    aside.style.display = 'flex';
  } else {
    hamburgerBtn.style.color = 'white';
    aside.style.display = 'none';
  }
}

let love = 0;
function loveIt() {
  let lo = document.querySelector('.love');
  love++;
  lo.innerHTML = love;
}
let like = 0;
function likeIt() {
  let lo = document.querySelector('.like');
  like++;
  lo.innerHTML = like;
}
let dislike = 0;
function dislikeIt() {
  let lo = document.querySelector('.dislike');
  dislike++;
  lo.innerHTML = dislike;
}