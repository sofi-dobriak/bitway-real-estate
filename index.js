import"./assets/styles-CcuUsfU_.js";const t={searchSection:document.querySelector(".search-section"),searchList:document.querySelector(".search-list")};t.searchSection.addEventListener("mouseenter",()=>{document.body.style.backgroundColor="rgba(15, 16, 21, 0.1)"});t.searchSection.addEventListener("mouseleave",()=>{document.body.style.backgroundColor="transparent"});t.searchList.addEventListener("click",o=>{o.preventDefault();const e=o.target.closest(".options-item");if(e){const s=e.closest(".search-item"),c=e.querySelector(".options-text");s.querySelector(".search-item-text").textContent=c.textContent}});
//# sourceMappingURL=index.js.map
