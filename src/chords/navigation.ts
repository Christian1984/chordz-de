(function() {
    const modal = document.querySelector("#modals-wrapper");

    const settings = document.querySelector("#settings");
    const settingsButton = document.querySelector("#settings-button");

    const privacy = document.querySelector("#privacy");
    const privacyButton = document.querySelector("#privacy-button");

    const imprint = document.querySelector("#imprint");
    const imprintButton = document.querySelector("#imprint-button");

    const closeButtons = document.querySelectorAll(".dialog-close");

    settingsButton?.addEventListener("click", () => {
        settings?.classList.remove("hidden");
        modal?.classList.remove("hidden");
    });

    privacyButton?.addEventListener("click", () => {
        privacy?.classList.remove("hidden");
        modal?.classList.remove("hidden");
    });

    imprintButton?.addEventListener("click", () => {
        imprint?.classList.remove("hidden");
        modal?.classList.remove("hidden");
    });
    
    for (const closeButton of closeButtons) {
        closeButton?.addEventListener("click", () => {
            settings?.classList.add("hidden");
            privacy?.classList.add("hidden");
            imprint?.classList.add("hidden");
            modal?.classList.add("hidden");
        });
    }
})();