import{a as f,S as m,i}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y="54252525-58ca19d218db43072309044ad";async function g(o){return(await f.get(p,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a");function L(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p>❤️ ${r}</p>
          <p>👁️ ${a}</p>
          <p>💬 ${u}</p>
          <p>⬇️ ${d}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search query!"});return}b(),S();try{const s=await g(t);if(s.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits)}catch{i.error({message:"Something went wrong. Try again later."})}finally{q()}});
//# sourceMappingURL=index.js.map
