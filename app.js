// app.js

// 타임라인 생성
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

// 1단계: 꼭짓점에서 점 → 사각형
tl.from(".red", {
  scale: 0,
  transformOrigin: "top left",
})
  .from(".yellow", {
    scale: 0,
    transformOrigin: "bottom left",
  })
  .from(".green", {
    scale: 0,
    transformOrigin: "top right",
  })
  .from(".blue", {
    scale: 0,
    transformOrigin: "bottom right",
  });

tl.to(".red", { x: "+=1300", borderRadius: "50%", duration: 2 }, "<")
  .to(".yellow", { y: "-=450", borderRadius: "50%", duration: 2 }, "<")
  .to(".green", { y: "+=450", borderRadius: "50%", duration: 2 }, "<")
  .to(".blue", { x: "-=1300", borderRadius: "50%", duration: 2 }, "<");
