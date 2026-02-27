import{a as y,i,S as g}from"./assets/vendor-Bm2N4jGG.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h=[{name:"key",value:"52802727-e127d4f3f7eb26b70bb46f136"},{name:"image_type",value:"all"},{name:"orientation",value:"all"},{name:"safesearch",value:!0}],b=`https://pixabay.com/api/?${h.map(({name:o,value:n})=>`${o}=${n}`).join("&")}`;function v(o,n,t=20){return y.get(`${b}&per_page=${t}&page=${n}&q=${o}`).then(({data:e})=>e).catch(e=>console.log(e))}let c;function L(){document.querySelector(".next").classList.remove("off")}function f(){document.querySelector(".next").classList.add("off")}function d(){document.querySelector(".loader").classList.remove("off")}function q(){document.querySelector(".loader").classList.add("off")}function S(){document.querySelector(".gallery").innerHTML=""}function m(o,n,t){v(o,n,t).then(s=>{const e=Math.trunc(s.totalHits/t),r=s.hits;if(r.length===0){i.info({message:"No images found"});return}$(r),n<=e?L():(f(),i.info({message:"We're sorry, but you've reached the end of search results."})),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(s=>console.log(s)).finally(()=>q())}function $(o){const n=o.map(t=>`
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
         </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",n)}let a,u=1;const p=15;document.querySelector(".form").addEventListener("submit",x);document.querySelector(".next").addEventListener("click",O);function x(o){if(o.preventDefault(),a=document.querySelector(".input").value.trim(),document.querySelector(".input").value="",!a){i.warning({title:"Warning",message:"Please enter a search query."});return}d(),S(),m(a,u,p)}function O(o){o.preventDefault(),f(),d(),u++,m(a,u,p)}
//# sourceMappingURL=index.js.map
