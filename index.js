import{a as b,S as w,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();async function m(e,s){const o="https://pixabay.com/api/";return console.log(o),(await b.get(o,{params:{key:"53364117-23ce706026567dc1d7b8b2eb2",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}let u;function g(e){const s=document.querySelector("ul.gallery"),o=e.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${r.webformatURL}"
                    data-source="${r.largeImageURL}"
                    alt="${r.tags}"
                />
            </a>
            <ul class="image-info">
                <li class="image-info-item">
                    <p class="info-p">Likes</p>
                    <span class="info-span">${r.likes}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Views</p>
                    <span class="info-span">${r.views}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Comments</p>
                    <span class="info-span">${r.comments}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Downloads</p>
                    <span class="info-span">${r.downloads}</span>
                </li>
            </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",o),u?u.refresh():u=new w(".gallery a",{captionsData:"alt",captionDelay:250})}function S(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function y(){const e=document.querySelector(".js-loader");e.classList.add("loader"),console.log(e)}function n(){document.querySelector(".js-loader").classList.remove("loader")}function h(){const e=document.querySelector(".load-button");e.style="display: block"}function p(){const e=document.querySelector(".load-button");e.style="display: none"}let i=1,f="";const L=15,d=document.querySelector(".form"),q=document.querySelector(".load-button");d.addEventListener("submit",async e=>{e.preventDefault();const s=document.querySelector("input").value.trim();if(s!==""){i=1,f=s,S(),p(),y();try{const o=await m(f,i);if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n(),d.reset();return}g(o.hits),n(),o.totalHits>L&&h()}catch(o){console.error(o),l.error({message:"Something went wrong! Please try again later.",position:"topRight"}),n()}finally{d.reset()}}});q.addEventListener("click",async()=>{i+=1,p(),y();try{const e=await m(f,i);g(e.hits),n();const s=document.querySelector(".gallery-item");if(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const o=Math.ceil(e.totalHits/L);i>=o?(p(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):h()}catch(e){console.error(e),l.error({message:"Error loading more images",position:"topRight"}),n()}});
//# sourceMappingURL=index.js.map
