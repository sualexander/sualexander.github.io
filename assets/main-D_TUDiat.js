(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const u=document.querySelectorAll(".slide"),v=document.querySelector(".hover.left"),p=document.querySelector(".hover.right");let i=0,h;function m(r){u[i].classList.remove("active"),i=(r+u.length)%u.length,u[i].classList.add("active")}function y(){clearInterval(h),h=setInterval(function(){m(i+1)},5e3)}v.addEventListener("click",()=>{m(i-1),y();const r=document.querySelector(".slideshow-nav.left");r.classList.add("clicking"),setTimeout(()=>{r.classList.remove("clicking")},500)});p.addEventListener("click",()=>{m(i+1),y();const r=document.querySelector(".slideshow-nav.right");r.classList.add("clicking"),setTimeout(()=>{r.classList.remove("clicking")},500)});m(0);y();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".gallery-header").forEach(e=>{const t=e.nextElementSibling;e.addEventListener("click",()=>{e.classList.toggle("active"),e.querySelector(".arrow").classList.toggle("expanded");const l=t.classList.contains("active"),g=t.scrollHeight;l?t.style.height=0:t.style.height=g+"px",t.classList.toggle("active")}),e.classList.toggle("active"),e.querySelector(".arrow").classList.toggle("expanded"),t.classList.toggle("active"),t.style.height=t.scrollHeight+"px"});const c=document.querySelector(".hover.left"),a=document.querySelector(".hover.right"),n=document.querySelector(".slideshow-nav.left"),o=document.querySelector(".slideshow-nav.right");c.addEventListener("mouseenter",()=>{n.style.opacity="1"}),c.addEventListener("mouseleave",()=>{n.style.opacity="0"}),a.addEventListener("mouseenter",()=>{o.style.opacity="1"}),a.addEventListener("mouseleave",()=>{o.style.opacity="0"}),document.querySelectorAll(".gallery-item").forEach(e=>{const t=e.querySelectorAll("img");if(t[0].classList.add("active"),t.length==1)return;let l=t.length-1;setInterval(()=>{t[l].classList.remove("active"),l=(l+1)%t.length,t[l].classList.add("active")},Math.random()*4e3+5e3)});const s=document.querySelector(".scroll-arrow");s.addEventListener("click",()=>{document.querySelector(".gallery").scrollIntoView({behavior:"smooth"})}),window.addEventListener("scroll",()=>{window.scrollY>0&&(s.style.opacity="0",s.style.pointerEvents="none")}),document.querySelectorAll(".links a").forEach(e=>{const t=e.offsetWidth;e.style.setProperty("--gradient-width",`${t*2}px`),e.style.setProperty("--animation-duration",`${t*.025}s`)}),document.querySelectorAll(".social-media img").forEach(e=>{const g=window.getComputedStyle(e).maskImage.replace(/^url\(['"](.+)['"]\)$/,"$1"),d=new Image;d.src=g,d.onload=()=>{const f=d.naturalWidth/d.naturalHeight;e.style.width=`${32*f}px`}})});
