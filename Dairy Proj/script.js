

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.btn-search');
  const searchPopup = document.getElementById('searchPopup');

  // Toggle popup when clicking search icon
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = searchPopup.style.display === 'block';
    searchPopup.style.display = isVisible ? 'none' : 'block';
  });

  // Close popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchPopup.contains(e.target) && !searchBtn.contains(e.target)) {
      searchPopup.style.display = 'none';
    }
  });

  // Optional form submission
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = this.querySelector('input').value.trim();
    if (query) {
      console.log("Searching for:", query);
    }
  });
});



    

      fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;

        // ✅ Place this code inside the fetch callback
        const searchBtn = document.querySelector('.btn-search');
        const searchPopup = document.getElementById('searchPopup');

        // Toggle popup on button click
        searchBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isVisible = searchPopup.style.display === 'block';
          searchPopup.style.display = isVisible ? 'none' : 'block';
        });

        // Hide popup on outside click
        document.addEventListener('click', (e) => {
          if (!searchPopup.contains(e.target) && !searchBtn.contains(e.target)) {
            searchPopup.style.display = 'none';
          }
        });

        // Optional: form submission logic
        document.getElementById('searchForm').addEventListener('submit', function (e) {
          e.preventDefault();
          const query = this.querySelector('input').value.trim();
          if (query) {
            console.log("Searching for:", query);
          }
        });
      });

// Fetch body content dynamically
fetch("body.html")
  .then(res => res.text())
  .then(data => {
    // Insert the fetched HTML content into the body
    document.getElementById("body").innerHTML = data;

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const grid = document.querySelector(".grid");
    const blogCards = document.querySelectorAll(".grid .blog-card");

    let page = 0; // 0 = first 3 blogs, 1 = last 2 blogs

    const showPage = () => {
      blogCards.forEach((card, index) => {
        if (page === 0 && index < 3) {
          card.style.display = "block"; // show first 3
        } else if (page === 1 && index >= 3) {
          card.style.display = "block"; // show last 2
        } else {
          card.style.display = "none"; // hide others
        }
      });
    };

    // Show first 3 blogs initially
    showPage();

    // Next → go to page 2 (last 2 blogs)
    nextBtn.addEventListener("click", () => {
      if (page === 0) {
        page = 1;
        showPage();
      }
    });

    // Prev → go back to page 1 (first 3 blogs)
    prevBtn.addEventListener("click", () => {
      if (page === 1) {
        page = 0;
        showPage();
      }
    });
  })
  .catch(error => {
    console.error("Error loading content: ", error);
  });





  // Fetch and insert footer content dynamically
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;

    // Now that the footer is inserted, add event listeners for the button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
      // Show the button when scrolled more than 300px down
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      });

      // Smooth scroll to the top when button is clicked
      backToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  })
  .catch(error => console.error('Error loading footer:', error));

document.addEventListener("DOMContentLoaded", () => {
  // Any other DOM content logic you want to include can go here.
});



 
