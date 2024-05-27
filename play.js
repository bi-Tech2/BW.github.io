// Function to filter cards based on search input
function filterCards() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');
    let found = false; // Flag to check if any card matches the search query

    cards.forEach(card => {
        const title = card.querySelector('.name h3').textContent.toLowerCase();
        const artist = card.querySelector('.name p').textContent.toLowerCase();
        if (title.includes(searchQuery) || artist.includes(searchQuery)) {
            card.style.display = 'block';
            found = true; // Set flag to true if a match is found
        } else {
            card.style.display = 'none';
        }
    });

    // Display "No results" message if no card matches the search query
    const noResultsMessage = document.getElementById('noResults');
    noResultsMessage.style.display = found ? 'none' : 'block';
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', filterCards);


document.addEventListener("DOMContentLoaded", function() {
    const toggleOverlayBtns = document.querySelectorAll(".toggle-overlay");
    const overlays = document.querySelectorAll(".over");

    toggleOverlayBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            // Close all other open overlays
            overlays.forEach((overlay, overlayIndex) => {
                if (overlayIndex !== index && overlay.classList.contains("show")) {
                    overlay.classList.remove("show");
                }
            });
            // Toggle the clicked overlay
            overlays[index].classList.toggle("show");
        });
    });

    const closeOverlayBtns = document.querySelectorAll(".close-overlay");

    closeOverlayBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            overlays[index].classList.remove("show");
        });
    });
});


