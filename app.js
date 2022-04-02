const tl = gsap.timeline({default : {  ease : "power1.out"}});

tl.to('.text',{y:"0%",duration:1 , stagger: "0.25"});
tl.to('.slider',{y:"-100%",duration:0.5 , delay:"1"})
tl.to('.intro',{y:"-100%",duration:0.5} , "-=1")
// tl.fromto('h1',{opacity:0},{opacity:100,duration:1})

var headerHeight = $(".header").height();
var marginTop = headerHeight.toString() + "px";
var startPoint = headerHeight / 2;
startPoint = startPoint.toString() + "px";
$(".content").css("margin-top", marginTop);

const titleScaleDown = basicScroll.create({
   elem: document.querySelector('h1'),
   from: '0',
   to: marginTop,
   direct: true,
   props: {
      '--scale': {
         from: '1',
         to: '0.9'
      }
   }
});

const titleFadeOut = basicScroll.create({
   elem: document.querySelector('h1'),
   from: startPoint,
   to: marginTop,
   direct: true,
   props: {
      '--opacity': {
         from: '1',
         to: '0'
      }
   }
});

const backgroundFadeOut = basicScroll.create({
   elem: document.querySelector('.backgroundImage'),
   from: '0',
   to: marginTop,
   direct: true,
   props: {
      '--blur': {
         from: '10px',
         to: '40px'
      },
      '--scale': {
         from: '1.2',
         to: '1.5'
      }
   }
});

const fadeIn = basicScroll.create({
   elem: document.querySelector('h2'),
   from: 'top-bottom',
   to: 'middle-middle',
   direct: true,
   props: {
      '--opacity2': {
         from: '0',
         to: '1'
      },
     '--scale2': {
       from: '0.95',
       to: '1'
     }
   }
});

const fadeInText = basicScroll.create({
   elem: document.querySelector('p'),
   from: 'top-bottom',
   to: 'middle-middle',
   direct: true,
   props: {
      '--opacity3': {
         from: '0',
         to: '1',
         timing: 'quartIn'
      }
   }
});

fadeInText.start();
fadeIn.start();
titleScaleDown.start();
titleFadeOut.start();
backgroundFadeOut.start();

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if (scroll > headerHeight) {
    $("h1").addClass("hidden");
  } else if (scroll < headerHeight) {
    $("h1").removeClass("hidden");
  }
});
