let cont = document.querySelector('.fa-outdent');
let bigImg = document.getElementById('big-img')
cont.addEventListener('click', ()=>{
  document.querySelector('ul').style.right = '0';
  cont.style.display = 'none'
})

function none(){
  document.querySelector('ul').style.right = '-200px';
  cont.style.display = 'block'
}

function showImg(chang){
  bigImg.src = chang
}