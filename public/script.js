document.addEventListener("DOMContentLoaded", function () {
    const toggleDetailsButton = document.getElementById("toggleDetails");
    const description = document.querySelector("p.hidden");
    const imdbLink = document.querySelector("a.hidden");
    const container = document.querySelector(".container");

    toggleDetailsButton.addEventListener("click", () => {
        description.classList.toggle("hidden");
        imdbLink.classList.toggle("hidden");
    });

    const changeTitleButton = document.getElementById("changeTitle");
    const title = document.querySelector("h1");

    changeTitleButton.addEventListener("click", () => {
        title.textContent = "Something Else";
    });

    const resetTitleButton = document.getElementById("resetTitle");

    resetTitleButton.addEventListener("click", () => {
        title.textContent = "Memento";
    });

    const card = document.querySelector(".container");

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

    const duplicateButton = document.getElementById("duplicateCard");

    duplicateButton.addEventListener("click", () => {
        const clonedCard = card.cloneNode(true);
        container.insertAdjacentElement("beforeend", clonedCard);
    });

    const removeButton = document.getElementById("removeCard");

    removeButton.addEventListener("click", () => {
        const cards = document.querySelectorAll(".container");
        if (cards.length > 1) {
            const lastCard = cards[cards.length - 1];
            lastCard.remove();
        }
    });
});
