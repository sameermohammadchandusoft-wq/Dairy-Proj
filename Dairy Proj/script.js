

    // Load header.html dynamically
    fetch("header.html")
    
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
         const searchBtn = document.querySelector('.btn-search');
         const searchBox = document.querySelector('.search-box');

      // Toggle search box on button click
        searchBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent click from reaching document
        searchBox.classList.toggle('show');
        });

      // Hide search box when clicking outside
        document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
          searchBox.classList.remove('show');
        }
        });
        });
  


document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Slide down animation
  function slideDown(element, duration = 300) {
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;
    if (display === 'none') display = 'block';
    element.style.display = display;

    const height = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;

    element.offsetHeight; // force repaint

    element.style.transition = `height ${duration}ms ease`;
    element.style.height = height + 'px';

    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition');
    }, duration);
  }

  // Slide up animation
  function slideUp(element, duration = 300) {
    element.style.height = element.offsetHeight + 'px';
    element.offsetHeight; // force repaint
    element.style.transition = `height ${duration}ms ease`;
    element.style.height = 0;
    element.style.overflow = 'hidden';

    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition');
    }, duration);
  }

  // Open first question by default
  if (faqQuestions.length > 0) {
    const firstAnswer = faqQuestions[0].nextElementSibling;
    faqQuestions[0].classList.add('active');
    firstAnswer.style.display = 'block';
  }

  // Toggle FAQ
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Close all other questions
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          slideUp(q.nextElementSibling);
        }
      });

      // Toggle clicked question
      if (!isActive) {
        question.classList.add('active');
        slideDown(answer);
      } else {
        question.classList.remove('active');
        slideUp(answer);
      }
    });
  });
});

   fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
        
      });
      document.addEventListener("DOMContentLoaded", () => {
      const backToTop = document.getElementById("backToTop");
 
      if (backToTop) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
            backToTop.style.display = "flex";
          }
          else {
            backToTop.style.display = "none";
          }
        });
 
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
