function closeAlert(e) {
    const alertContParent = e.currentTarget.closest(".alert_container");
    if (alertContParent){
        alertContParent.remove();
    }
    return e.stopPropagation();
}

document.addEventListener("DOMContentLoaded", (event) => {
    /*note the css used could only satsifed with removeEventListener and addEventListener but this for dynamic and better ux */
    const allModalBtns = document.querySelectorAll(".modal_opener");

    function hideAllModals() {
        document.querySelectorAll(".active_mask").forEach((aModal) => {
            aModal.classList.remove("active_mask");
        });
    }

    function openModal(e) {
        /*why it so easy as it css core based*/
        if (e.currentTarget.getAttribute("data-target") && document.querySelector(e.currentTarget.getAttribute("data-target"))) {
            const targetModal = document.querySelector(e.currentTarget.getAttribute("data-target"));
            // can omited if single modal
            hideAllModals();
            targetModal.classList.add("active_mask");
            // stop blubling up to prev elements
            e.stopPropagation();
            // remove before add this technique make sure never duplicate occurs
            document.body.removeEventListener("click", closeModal);
            document.body.addEventListener("click", closeModal);
        }
    }

    function closeModal(e) {
        if (e.target.closest(".close_modal") || !(e.target.closest(".set_modal .modal_content") && !e.target.closest(".close_modal"))) {
            // lessjs technique
            hideAllModals();
            document.body.removeEventListener("click", closeModal);
        }
    }
    Array.from(allModalBtns).forEach((btn) => {
        btn.addEventListener("click", openModal);
    });
    /* post filter */
    const allPosts = Array.from(document.querySelectorAll(".post"));
    const allFilters = Array.from(document.querySelectorAll(".filter"));

    function applyFilter() {
        let allUnchecked = true;
        allPosts.forEach((p) => {
            p.classList.add("hide_me");
        });
        allFilters.forEach((c) => {
            if (c.checked && c.hasAttribute("data-author")) {
                Array.from(document.querySelectorAll(`.post[data-author='${c.getAttribute("data-author")}']`)).forEach((tPost) => {
                    tPost.classList.remove("hide_me");
                });
                allUnchecked = false;
            }
        });
        if (allUnchecked) {
            /* back to default */
            allPosts.forEach((p) => {
                p.classList.remove("hide_me");
            });
        }
    }
    allFilters.forEach((btn) => {
        btn.addEventListener("change", applyFilter);
    });

    /* Form and Alert */
    function displayMsg(msg) {
        const alertCont = document.querySelector("#alert_container");
        if (alertCont && msg) {
            alertCont.innerHTML = `
                <div class="alert_container success">
                   <div class="alert_msg">${msg}</div>
                   <div class="alert_close">
                     <button type="button" class="btn_danger c_pointer" onclick="closeAlert(event)">X</button>
                   </div>
                </div>
            `;
        }
    }

    document.querySelector("#subscribe_form").addEventListener("submit", (e)=>{
        e.preventDefault();
        const nameinput = document.querySelector("#subscribe_form [type='text']");
        const emailInput = document.querySelector("#subscribe_form [type='email']");
        (nameinput) ? nameinput.value = "" : false;
        (emailInput) ? emailInput.value = "" : false;
        hideAllModals();
        displayMsg('You subscribed successfully.');
    });
});