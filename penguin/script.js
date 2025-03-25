document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in Effect on Scroll (Including About Section)
    const sections = document.querySelectorAll(".fade-out");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = "visible"; // Ensure About becomes visible
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Search Functionality
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query === "") {
            alert("Please enter a search term.");
            return;
        }

        let found = false;
        document.querySelectorAll("section").forEach(section => {
            if (section.innerText.toLowerCase().includes(query)) {
                section.scrollIntoView({ behavior: "smooth" });
                found = true;
            }
        });

        if (!found) {
            alert("No matching content found.");
        }
    }

    // Attach event listener to the button
    if (searchButton) {
        searchButton.addEventListener("click", performSearch);
    }

    // Allow pressing Enter key to trigger search
    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                performSearch();
            }
        });
    }
});
