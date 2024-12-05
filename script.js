// JavaScript for GS Data and Doc Hub

// Highlight the active navigation link
document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = location.href;
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      // Highlight the link only if it's an internal link
      if (link.href === currentLocation) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});

// Smooth scrolling for internal links (only for links that refer to sections within the same page)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth',
          });
      }
  });
});

// Dynamic year in the footer
document.addEventListener('DOMContentLoaded', () => {
  const footerYearElement = document.querySelector('.footer-bottom p');
  if (footerYearElement) {
      const currentYear = new Date().getFullYear();
      footerYearElement.innerHTML = `&copy; ${currentYear} GS Data & Doc Hub. All rights reserved.`;
  }
});

// Scroll-to-top button (optional)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
  } else {
      scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});

// Hero Section Typing Effect
document.addEventListener('DOMContentLoaded', () => {
  const text = "Transforming Ideas into Impact";
  const heroHeading = document.querySelector('.hero h1');
  let index = 0;

  function typeEffect() {
      if (index < text.length) {
          heroHeading.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeEffect, 100); // Adjust typing speed
      }
  }
  typeEffect();
});

// Sticky Navigation Bar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
      header.classList.toggle('sticky', window.scrollY > 0);
  }
});

// Social Media Icon Hover Effects
const socialIcons = document.querySelectorAll('.socials a img');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.3s ease';
  });
  icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
  });
});

// Get Started Button Alert
const getStartedButton = document.querySelector('footer button');
if (getStartedButton) {
  getStartedButton.addEventListener('click', () => {
      alert('Thank you for your interest! We look forward to working with you.');
  });
};

// Toggle service details
document.addEventListener("DOMContentLoaded", () => {
  const serviceTitles = document.querySelectorAll(".service h2");
  serviceTitles.forEach(title => {
      title.addEventListener("click", () => {
          const details = title.nextElementSibling;
          if (details) {
              if (details.style.display === "block") {
                  details.style.display = "none";
              } else {
                  details.style.display = "block";
              }
          }
      });
  });
});

// Contact form submission (example)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
      form.addEventListener("submit", (e) => {
          e.preventDefault(); // Prevent form submission

          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const subject = document.getElementById("subject").value.trim();
          const message = document.getElementById("message").value.trim();

          if (!name || !email || !message) {
              alert("Please fill in all required fields.");
              return;
          }

          alert(`Thank you, ${name}! Your message has been sent.`);
          form.reset(); // Clear the form
      });
  }
});
