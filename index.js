import{a as g,i as c,S as y}from"./assets/vendor-Bm2N4jGG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h=[{name:"key",value:"52802727-e127d4f3f7eb26b70bb46f136"},{name:"image_type",value:"all"},{name:"orientation",value:"all"},{name:"safesearch",value:!0}],b=`https://pixabay.com/api/?${h.map(({name:n,value:o})=>`${n}=${o}`).join("&")}`;function v(n,o,t=20){return g.get(`${b}&per_page=${t}&page=${o}&q=${n}`).then(({data:e})=>e).catch(e=>console.log(e))}let i;function L(){document.querySelector(".next").classList.remove("off")}function f(){document.querySelector(".next").classList.add("off")}function d(){document.querySelector(".loader").classList.remove("off")}function q(){document.querySelector(".loader").classList.add("off")}function S(){document.querySelector(".gallery").innerHTML=""}function m(n,o,t){v(n,o,t).then(s=>{const e=Math.trunc(s.totalHits/t),r=s.hits;if(r.length===0){c.info({message:"No images found"});return}$(r),o<=e?L():(f(),c.info({message:"We're sorry, but you've reached the end of search results."})),i?i.refresh():i=new y(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(s=>console.log(s)).finally(()=>q())}function $(n){const o=n.map(t=>`
         <li class="cart">
            <a class="photo_link" href="${t.largeImageURL}">
               <img 
                  class="photo_image"
                  src="${t.webformatURL}"
                  alt="${t.tags}"
                  height="152px" />
            </a>
            <div class="photo_info">
               <p><b>Likes:</b> ${t.likes}</p>
               <p><b>Views:</b> ${t.views}</p>
               <p><b>Comments:</b> ${t.comments}</p>
               <p><b>Downloads:</b> ${t.downloads}</p>
            </div>
         </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",o)}let l,u=1;const p=15;document.querySelector(".form").addEventListener("submit",x);document.querySelector(".next").addEventListener("click",w);function x(n){if(n.preventDefault(),l=document.querySelector(".input").value.trim(),document.querySelector(".input").value="",!l){c.warning({title:"Warning",message:"Please enter a search query."});return}d(),S(),m(l,1,p)}function w(n){n.preventDefault(),f(),d(),u++,m(l,u,p),setTimeout(()=>{const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})},300)}
//# sourceMappingURL=index.js.map
