import"./assets/styles-DGWAkR4s.js";const c=document.querySelector(".search-section"),r=document.querySelector(".search-list");c.addEventListener("mouseenter",()=>{document.body.style.backgroundColor="rgba(15, 16, 21, 0.1)"});c.addEventListener("mouseleave",()=>{document.body.style.backgroundColor="transparent"});r.addEventListener("click",t=>{t.preventDefault();const e=t.target.closest(".options-item");if(e){const o=e.closest(".search-item"),n=e.querySelector(".options-text");o.querySelector(".search-item-text").textContent=n.textContent}});const i=document.querySelector(".properties-section"),s=document.querySelector(".modal-backdrop");i.addEventListener("click",t=>{const e=t.target.closest(".js-action-button"),o=e.querySelector(".share");e&&e.classList.toggle("active"),o&&s.classList.toggle("is-open")});s.addEventListener("click",()=>{s.classList.remove("is-open")});
//# sourceMappingURL=index.js.map
