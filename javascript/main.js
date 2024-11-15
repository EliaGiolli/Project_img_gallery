import { Cities, openModal, closeModal } from "./data.js";

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.city-card').forEach((card, index) => {
        const button = card.querySelector("button");
        button.addEventListener('click', () => {
            console.log(`Button clicked for city: ${Cities[index].titolo}`); // Debugging log
            const city = Cities[index];
            openModal(city); 
        });
    });

    document.getElementById("close-modal").addEventListener("click", closeModal);
});