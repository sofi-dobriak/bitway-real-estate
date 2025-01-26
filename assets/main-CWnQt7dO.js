(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={verifyButton:document.querySelector(".js-verify-button")};a.verifyButton.addEventListener("click",i=>{i.preventDefault(),basicLightbox.create(`
  <div class="modal-window">
    <picture>
        <source srcset="/img/create-page/modal-check-img.webp 1x, /img/create-page/modal-check-img@2x.webp 2x"
            media="(min-width: 1200px)" type="image/webp" />
        <source srcset="/img/create-page/modal-check-img.png 1x, /img/create-page/modal-check-img@2x.png 2x"
            media="(min-width: 1200px)" type="image/png" />
        <img class="modal-check-image" src="/img/create-page/modal-check-img.png" alt="A check image" />
    </picture>

    <h2 class="modal-title">Password Changed Successfully</h2>
    <p class="modal-text">Your password has been updated successfully</p>
    <a class="modal-link button" href="./login-account.html">Back to Login</a>
</div>`).show()});
//# sourceMappingURL=main-CWnQt7dO.js.map
