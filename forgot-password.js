import"./assets/styles-CcuUsfU_.js";const e={forgotForm:document.querySelector(".js-forgot-form"),forgotInput:document.querySelector(".js-forgot-input"),forgotLink:document.querySelector(".js-forgot-link")};e.forgotLink.addEventListener("click",o=>{o.preventDefault();const r=e.forgotForm.elements["user-email"].value.trim();let t=e.forgotForm.querySelector(".forgot-message-text");r!==""?window.location.href="./OTP-page.html":t||(e.forgotInput.insertAdjacentHTML("afterend",s()),t=e.forgotForm.querySelector(".forgot-message-text"),setTimeout(()=>{t.classList.add("visible")},0))});function s(){return'<p class="forgot-message-text">Please enter a valid email!</p>'}
//# sourceMappingURL=forgot-password.js.map
