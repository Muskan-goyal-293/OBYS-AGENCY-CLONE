let gsaptl = gsap.timeline();
   function locomotiv(){
   gsap.registerPlugin(ScrollTrigger);
   const locoScroll = new LocomotiveScroll({
   el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
 }
 locomotiv();

let incress= document.querySelector(".line .part-1 h5");
let counter =0;

gsaptl.from(".line h1 , .line h2",{
    y:150,
    stagger:0.3,
})
gsaptl.from(".part-1 h5 , .part-1 h6  ",{
    opacity:0,
    onStart: function(){
    let counter =0;
    let timer = setInterval(()=>{
    if(counter<100){
        counter++;
        incress.innerHTML =counter;
    }
    else(
        clearInterval(timer)
    )
}, 40)

    }
})

gsaptl.to(".loder",{
    opacity:0,
    delay:3.7,
    duration:0.2
})

gsaptl.from(".page-1 ,nav",{
    y:1000,
    opacity:1,
    delay:0.5,
    duration:0.5
})
gsaptl.to(".loder",{
   display:"none",
})
gsaptl.from(".box-1",{
    y:200,
    opacity:0,
    stagger:0.5,
 })

 let crsr = document.querySelector(".crsr");
 let body = document.querySelector("body");
 body.addEventListener("mousemove",(detail)=>{
    gsap.to(".crsr",{
      left : detail.clientX,
    top : detail.clientY,
 })
})
Shery.makeMagnet(".nav-part-2 h4" /* Element to target.*/, {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

let videoc = document.querySelector(".video-div");
videoc.addEventListener("mouseenter",()=>{
videoc.addEventListener("mousemove",(detail)=>{
   gsap.to(".crsr",{
    opacity:0,
   })
   gsap.to(".video-crsr",{
      left: detail.x -600,
      y: detail.y - 150 ,
   })
})
})

videoc.addEventListener("mouseleave",()=>{
   gsap.to(".crsr",{
    opacity:1,
   })
   gsap.to(".video-crsr",{
      left: "80%",
      top: "0%" 
   })
})
let image = document.querySelector(".video-div img")
let video = document.querySelector(".video-div video");
let videoCrsr = document.querySelector(".video-crsr"); 
let count =1;
video.addEventListener("click",()=>{
  if (count == 1){
  video.play();
  video.style.opacity =1;
  image.style.opacity =0;
  videoCrsr.style.scale =0.8;
  videoCrsr.innerHTML =`<i class="ri-pause-line"></i>`;
  count =0
  }
  else{
    video.pause();
    video.style.opacity =1;
    image.style.opacity =1;
    videoCrsr.style.scale =1;
    videoCrsr.innerHTML =`<i class="ri-arrow-right-s-fill">`;
    count =1
  }
})

Shery.imageEffect(".image-div",{
  style:5,
  config:{"a":{"value":2.52,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8333428912385336},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey: true,
}) 

let flag = document.querySelector(".flag");
let hero= document.querySelector("#hero-3");
hero.addEventListener("mouseenter",(detail)=>{
   gsap.to(".flag",{
    x:detail.x,
    y:detail.y,
    opacity:1,
   })

})

hero.addEventListener("mouseleave",(detail)=>{
   gsap.to(".flag",{
    opacity:0,
   })

})