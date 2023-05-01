// bub1.js
window.addEventListener("load" , ()=>{

const wrap = document.querySelector('#wrap')
const lis = document.querySelectorAll('nav>ul>li')
const header = document.querySelector(".header_wrap")
const gnbmenus = document.querySelectorAll('nav>ul>li>ul')
const newsbtn = document.querySelector('.news_top')
const news = document.querySelector('.news')
const area = document.querySelector('.area')
const btnplay = document.querySelector('.btn_play')

function noneAll(value) {
  for (let el of value) {
    el.style.display = "none";
  }
}

function activ(index, list){
  for(let el of list){
    el.classList.remove('on','active')
  }
  list[index].classList.add('on' , 'active')
}


// 주메뉴
const curtain = document.querySelector('.curtain')


for(var i=0; i<lis.length; i++){
  lis[i].addEventListener("mouseover" , e=>{
    e.currentTarget.classList.add('on')
    curtain.classList.add('on');
  })
  
  lis[i].addEventListener("mouseout" , e =>{
    e.currentTarget.classList.remove('on');
    curtain.classList.remove('on');
  })

  lis[i].children[0].addEventListener('focus',e=>{ 
    e.currentTarget.parentElement.classList.add('on');
    curtain.classList.add('on');
  })

  lis[i].children[0].addEventListener('blur',e=>{
    e.currentTarget.parentElement.classList.remove('on'); 
    curtain.classList.remove('on');
  })
}

// // 스크롤 올릴때 주메뉴 나오기

var prevScrollTop = 0;
var nowScrollTop = 0;

function wheelDelta() {
  return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
};

window.addEventListener('scroll', function() {
  nowScrollTop = window.scrollY;
  if (wheelDelta() == 'down') {
    header.classList.remove("on");
  }
  if (wheelDelta() == 'up') {
    header.classList.add("on");
  }
  prevScrollTop = nowScrollTop;
});


// 검색박스
const srchBox = document.querySelector(".srch_wrap")
const btnSrch = document.querySelector(".btn_srch")
const btnClose = document.querySelector(".btn_srch_close")

btnSrch.addEventListener("click" , e=>{
  e.preventDefault();
  srchBox.classList.add("on");
})

btnClose.addEventListener("click" ,e =>{
  e.preventDefault();
  srchBox.classList.remove("on");
})




// ham menu
const hamBtn = document.querySelector(".ham_menu");
const hamWrap = document.querySelector("#ham_menu_wrap");
const hamClose = document.querySelector(".ham_close");
const hamMenu = document.querySelectorAll(".ham_gnb>li");
const hamMenuA = document.querySelectorAll(".ham_gnb>li>a");
const hamSubMenu = document.querySelectorAll(".ham_gnb>li>div");
const hamFold = document.querySelectorAll("ul.ham_gnb>li>div>ul>li");
const hamFoldMenu = document.querySelectorAll("ul.ham_gnb>li>div>ul>li>ul");
const hamMore = document.querySelectorAll(".ham_more");

function langOut() {
  langAll.style.display = "none";
}

function noneAll(value) {
  for (let el of value) {
    el.style.display = "none";
  }
}

// 햄버거 버튼 열고 닫고
hamBtn.addEventListener("click", (e) => {
  e.preventDefault();
  hamWrap.classList.add("on");
})

hamClose.addEventListener("click", (e) => {
  e.preventDefault();
  hamWrap.classList.remove("on");
})

// 햄버거 메뉴 누르면 하위 메뉴 나오게

for (let i = 0; i < hamMenuA.length; i++) {
  hamMenuA[i].addEventListener("click", e => {
    e.preventDefault();

    if (hamMenuA[i].closest("li").classList.contains("on")) {
      hamMenuA[i].closest("li").classList.remove("on");
    } else {
      for (let k = 0; k < hamMenu.length; k++) {
        hamMenu[k].classList.remove("on");
      }
      hamMenuA[i].closest("li").classList.add("on");
    }
  })
}

// 햄버거 소메뉴

for (let i = 0; i < hamFold.length; i++) {
  hamFold[i].addEventListener("click", e => {
    e.preventDefault();
    if (hamFold[i].children[1].classList.contains("on")) {
      hamFold[i].children[1].classList.remove("on");
    } else {
      hamFold[i].children[1].classList.add("on");
    }
  });
}


for (let i = 0; i < hamMore.length; i++) {
  hamMore[i].addEventListener("click", e => {
    hamMore[i].classList.toggle("on");
  });
}



//top버튼
//클릭하면 스크롤이 맨위로 올라감

const topBtn = document.querySelector('.btn_top')
const quickMenu = document.querySelector('.quick_menu')
console.log(quickMenu);

topBtn.addEventListener('click', e => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})


// 스크롤 위치에 따라 top버튼이 사라졌다 나왔다 위치고정까지

window.addEventListener('scroll',()=>{
  let scroll = document.querySelector('html').scrollTop;
  console.log(scroll);
  if(scroll<=0){
    topBtn.classList.remove('on','ab');
    quickMenu.classList.remove('on','ab');
    toggleBtn.classList.remove('on');

  }else if(scroll > 0){
    topBtn.classList.add('ab','on');
    quickMenu.classList.add('ab','on');
    toggleBtn.classList.add('on');
  }else{
    topBtn.classList.remove('ab');
    topBtn.classList.add('on');
    quickMenu.classList.remove('ab');
    quickMenu.classList.add('on');
    toggleBtn.classList.add('on');

  }
})



// toggle 버튼 누르면 quick메뉴 나오게

const toggleBtn = document.querySelector('.toggle_btn')


toggleBtn.addEventListener('click' , e=>{
  quickMenu.classList.toggle('open');
})

});