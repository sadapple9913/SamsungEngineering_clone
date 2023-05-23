// main.js
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

// 뉴스버튼

newsbtn.addEventListener('mousedown', e => {
  news.classList.toggle('on')
})

newsbtn.addEventListener('blur', e => {
  news.classList.remove('on')
})


// 오토배너

const banner = document.querySelectorAll('.banner')
const videobar = document.querySelectorAll(".video_bar")
const playBtn = document.querySelector(".btn_play");
const progress = document.querySelectorAll('.progress')
const videos = document.querySelectorAll('video');
// const video = document.querySelectorAll('video')
// const video2 = document.querySelector('.myVideo2')
// const video3 = document.querySelector('.myVideo3')

let bnnNum = 0;
let lastNum = document.querySelectorAll(".banner_wrap > li").length -2;

console.log(progress);


function autoBanner(){
  bnnNum++
  if(bnnNum>lastNum) bnnNum =0;
  activ(bnnNum,banner);
  activ(bnnNum,progress)

  autoBnn = setTimeout(autoBanner,15000);
  
}
let autoBnn = setTimeout(autoBanner,15000);

console.log(autoBnn);

// videobar 눌렀을때 영상전환

for(let i=0;i<videobar.length;i++){
  videobar[i].addEventListener("click", e=>{
    e.preventDefault();
    activ(i,banner);
    activ(i,progress)
    clearTimeout(autoBnn);
    autoBnn = setTimeout(autoBanner, 15000);
  })
}


//배너 재생 멈춤 버튼

let flag = 0;

playBtn.addEventListener('click', e =>{
  e.preventDefault();
  if(flag == 0){
    playBtn.classList.add('on','active');
    clearTimeout(autoBnn);
    flag = 1;
  }else{
    playBtn.classList.remove('on','active');
    autoBnn = setTimeout(autoBanner,1000);
    flag = 0
  }
});

//business

const businessMenu = document.querySelectorAll(".business_title_wrap>ul>li");
const businessBox = document.querySelector(".business_content_box");
const businessPic = document.querySelectorAll(".business_content_info>li");
const prevBusiness = document.querySelectorAll(".prev");
const nextBusiness = document.querySelectorAll(".next");
boxWid = document.querySelector('.business_content>ul>li').offsetWidth;
const businessBg = document.querySelector(".business_content_info")
let nowIdx = 0;
console.log(businessPic);

for (let i = 0; i < businessMenu.length; i++) {
  businessMenu[i].addEventListener("click", e => {
    e.preventDefault();
    businessBox.style.left = `${-(boxWid * i) + "px"}`;
    nowIdx = i;
    noneAll(businessPic);
    businessPic[i].style.display = "block";
    activ(i, businessMenu);
  });
}

for (let i = 0; i < prevBusiness.length; i++) {
  prevBusiness[i].addEventListener("click", e => {
    e.preventDefault();
    console.log(i);
    let idx = i;
    if (idx <= 0) {
      idx = 7;
    }
    businessBox.style.left = `${-((idx - 1) * boxWid) + "px"}`;
    noneAll(businessPic);
    for (let el of businessMenu) {
      el.classList.remove("on");
    }
    businessMenu[idx - 1].classList.add("on");
    businessPic[(idx - 1)].style.display = "block";
  });
}

for (let i = 0; i < nextBusiness.length; i++) {
  nextBusiness[i].addEventListener("click", e => {
    e.preventDefault();
    let idx = i;
    if (idx == 6) {
      idx = -1;
    }
    businessBox.style.left = -((idx + 1) * boxWid) + "px";
    noneAll(businessPic);
    for (let el of businessMenu) {
      el.classList.remove("on");
    }
    businessMenu[idx + 1].classList.add("on");
    businessPic[(idx + 1)].style.display = "block";
  });
}

window.addEventListener('scroll', () => {
  if ( window.scrollY >= 1100 ) {
    businessBg.classList.add('on');
  }
}
)


// innovation
const delivery = document.querySelector('.delivery')
const deliveryFold = document.querySelector(".delivery_folding")
const beyond = document.querySelector('.beyond')
const beyondFold = document.querySelector(".beyond_folding")
const deliveryInner = document.querySelector(".delivery>.innovation_inner")
const beyondInner = document.querySelector(".beyond>.innovation_inner")
console.log(beyondFold);
const winWidth = window.innerWidth
console.log(winWidth);


function scrollAction() {
  if ( window.scrollY >= 2200 ) {
    delivery.classList.add('on','off');
    beyondFold.classList.add('scroll');
    deliveryFold.classList.add('on',"off");
    deliveryInner.classList.add('on')
    deliveryFold.classList.remove('on');
    beyond.classList.add("scroll");
    // 이벤트 제거
    window.removeEventListener('scroll', scrollAction);
  }
}

// 이벤트 리스너 등록
window.addEventListener('scroll',  scrollAction);

deliveryFold.addEventListener('click' ,e=>{
  e.preventDefault();
  if(winWidth>1275){
  delivery.classList.add('off','on');
  deliveryFold.classList.add('on',"off");
  deliveryInner.classList.add('on')

  
  beyondFold.classList.remove('on');
  beyondInner.classList.remove('on');
  beyond.classList.remove('on');
  delivery.classList.remove ("fold");
  deliveryFold.classList.remove("on");
  }
});

beyondFold.addEventListener('click' , e=>{
  e.preventDefault();
  if(winWidth>1275){
  deliveryInner.classList.remove('on');
  delivery.classList.remove('off');
  deliveryFold.classList.remove("off");
  beyond.classList.remove("scroll","fold");

  beyondFold.classList.add('on');
  beyondInner.classList.add('on');
  beyond.classList.add('on');
  deliveryFold.classList.add('on');
  delivery.classList.add("fold");
  }
});



// 반응형 1275 이하일때 위아래로 넓어지는거 
deliveryFold.addEventListener('click' ,e=>{
  e.preventDefault();
  if(winWidth<1276){
    delivery.classList.add('off','on');
    deliveryFold.classList.add('on',"off");
    deliveryInner.classList.add('on')
  
    
    beyondFold.classList.remove('on');
    beyondInner.classList.remove('on');
    beyond.classList.remove('on');
    delivery.classList.remove ("fold");
    deliveryFold.classList.remove("on");
  }
});

beyondFold.addEventListener('click' , e=>{
  e.preventDefault();
  if(winWidth<1276){
    deliveryInner.classList.remove('on');
    delivery.classList.remove('off');
    deliveryFold.classList.remove("off");
    beyond.classList.remove("scroll","fold");
  
    beyondFold.classList.add('on');
    beyondInner.classList.add('on');
    beyond.classList.add('on');
    deliveryFold.classList.add('on');
    delivery.classList.add("fold");
  }
});




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
  }else if(scroll > 4100){
    topBtn.classList.add('ab');
    topBtn.classList.add('on');
  }else{
    topBtn.classList.remove('ab');
    topBtn.classList.add('on');
  }
})

// 속성값을 가져와서 변수에저장하고 랜덤함수만들어서 오토배너처럼 
// 시간지정해주고 몇초후에 멈추게 만들고 스크롤 내릴때 작동하게

const shift1 = document.querySelectorAll('.shift1');
const shift2 = document.querySelectorAll('.shift2');
const shift34 = document.querySelectorAll('.shift34');
const originalValues1 = [];
const originalValues2 = [];
const originalValues34 = [];

let shift;

shift1.forEach((element) => {
  originalValues1.push(element.innerText);
});

shift2.forEach((element) => {
  originalValues2.push(element.innerText);
});

shift34.forEach((element) => {
  originalValues34.push(element.innerText);
});

function numShift1(elements) {
  const newValue = Math.floor(Math.random() * 100);

  elements.forEach((element) => {
    element.innerText = newValue;
  });

  shift = setTimeout(() => {
    numShift1(elements);
  }, 30);

  setTimeout(() => {
    elements.forEach((element, index) => {
      element.innerText = originalValues1[index];
    });
    clearTimeout(shift);
  }, 1000);
}

function numShift2(elements) {
  const newValue = [Math.floor(Math.random() * 10) + "," + Math.floor(Math.random() * 1000)];

  elements.forEach((element) => {
    element.innerText = newValue;
  });

  shift = setTimeout(() => {
    numShift2(elements);
  }, 30);

  setTimeout(() => {
    elements.forEach((element, index) => {
      element.innerText = originalValues2[index];
    });
    clearTimeout(shift);
  }, 1000);
}

function numShift34(elements) {
  const newValue = [Math.floor(Math.random() * 100) + "." + Math.floor(Math.random() * 10)];

  elements.forEach((element) => {
    element.innerText = newValue;
  });

  shift = setTimeout(() => {
    numShift34(elements);
  }, 30);

  setTimeout(() => {
    elements.forEach((element, index) => {
      element.innerText = originalValues34[index];
    });
    clearTimeout(shift);
  }, 1000);
}


window.addEventListener('scroll', () => {
  if (window.scrollY <= 570 || window.scrollY >= 540 ) {
    numShift1(shift1);
    numShift2(shift2);
    numShift34(shift34);
  }
}, { once: true });

});