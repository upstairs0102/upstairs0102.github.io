const title=document.querySelector('.title-layer');
const portrait=document.querySelector('.portrait-layer');
const hero=document.querySelector('.hero');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let queued=false;
function paint(){queued=false;const y=Math.max(0,Math.min(scrollY,hero.offsetHeight));const mobile=innerWidth<=700;title.style.transform=reduced.matches?'none':`translate3d(0,${y*(mobile?.085:.16)}px,0)`;portrait.style.transform=reduced.matches?'none':`translate3d(0,${y*(mobile?-.025:-.04)}px,0)`;}
function schedule(){if(!queued){queued=true;requestAnimationFrame(paint);}}
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',schedule);paint();
document.querySelector('#year').textContent=new Date().getFullYear();
