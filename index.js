import{a as l,S as u,i as a}from"./assets/vendor-dgoA7Xew.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="54231751-132efb34a356b2aedfd75411f";function m(s){return l.get(d,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),p=new u(".gallery a");function h(){c.innerHTML=""}function y(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>❤️ ${r.likes}</p>
          <p>👁 ${r.views}</p>
          <p>💬 ${r.comments}</p>
          <p>⬇ ${r.downloads}</p>
        </div>
      </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),p.refresh()}function g(){document.querySelector(".loader").classList.remove("is-hidden")}function L(){document.querySelector(".loader").classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query"});return}h(),g(),m(o).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r.hits)}).catch(r=>{a.error({message:"Something went wrong. Please try again later."}),console.log(r)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
