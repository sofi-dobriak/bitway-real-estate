import"./assets/styles-B6CXeTBy.js";import{b as c}from"./assets/vendor-CAXQE2hQ.js";const e={verifyButton:document.querySelector(".js-verify-button")};console.log(e.verifyButton);e.verifyButton.addEventListener("click",a=>{a.preventDefault(),c.create(`
  <div class="modal-window">
    <picture>
        <source srcset="./img/create-page/modal-check-img.webp 1x, ./img/create-page/modal-check-img@2x.webp 2x"
            media="(min-width: 1200px)" type="image/webp" />
        <source srcset="./img/create-page/modal-check-img.png 1x, ./img/create-page/modal-check-img@2x.png 2x"
            media="(min-width: 1200px)" type="image/png" />
        <img class="modal-check-image" src="./img/create-page/modal-check-img.png" alt="A check image" />
    </picture>


    <h2 class="modal-title">Password Changed Successfully</h2>
    <p class="modal-text">Your password has been updated successfully</p>
    <a class="modal-link button" href="./login-account.html">Back to Login</a>
</div>`).show()});
//# sourceMappingURL=OTP-page.js.map
