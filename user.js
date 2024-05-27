document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".nav-linkn");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetTab = document.getElementById(targetId);

            // Remove 'active' class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove("active");
            });

            // Add 'active' class to the clicked tab
            this.classList.add("active");

            // Hide all tab content
            document.querySelectorAll(".tab-content").forEach(tabContent => {
                tabContent.classList.remove("active");
            });

            // Show the corresponding tab content
            targetTab.classList.add("active");
        });
    });
});


