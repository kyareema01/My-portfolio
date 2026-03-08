document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Toggle Mobile Menu
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon from hamburger to X
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.querySelector('i').classList.remove('fa-times');
      menuBtn.querySelector('i').classList.add('fa-bars');
    });
  });
});

// 1. Set up the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the element is visible on the screen
    if (entry.isIntersecting) {
      // Add the 'active' class to trigger the animation
      entry.target.classList.add('active');

      // Optional: Stop observing the element so it only animates once
      observer.unobserve(entry.target);
    }
  });
}, {
  // 0.1 means the animation triggers when 10% of the element is visible
  threshold: 0.1,
  // Adds a slight buffer before triggering
  rootMargin: "0px 0px -50px 0px"
});

// 2. Select all elements with the 'scroll-reveal' class
const hiddenElements = document.querySelectorAll('.scroll-reveal');

// 3. Tell the observer to watch each of those elements
hiddenElements.forEach((el) => observer.observe(el));