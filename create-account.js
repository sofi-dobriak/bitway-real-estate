import"./assets/styles-auqwEq4C.js";const t={createForm:document.querySelector(".js-create-form"),createButton:document.querySelector(".js-create-button"),modalWindowBackDrop:document.querySelector(".modal-backdrop")};t.createForm.addEventListener("submit",e=>{e.preventDefault();const r=e.target.elements["user-name"].value.trim(),o=e.target.elements["user-surname"].value.trim(),a=e.target.elements["user-email"].value.trim(),s=e.target.elements["user-password"].value.trim();(r!==""||o!==""||a!==""||s!=="")&&n()});function n(){t.modalWindowBackDrop.classList.toggle("is-open")}t.modalWindowBackDrop.addEventListener("click",()=>{t.modalWindowBackDrop.remove("is-open")});
//# sourceMappingURL=create-account.js.map
