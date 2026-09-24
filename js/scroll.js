// Smooth Scrolling Navigation

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  updateActiveNav();
  initScrollToTop();
  
  // Update active nav on scroll
  window.addEventListener('scroll', updateActiveNav);
});

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navHeight = document.querySelector('.nav').offsetHeight;
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  // Update active class
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Initialize Scroll to Top Button
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (!scrollBtn) return;
  
  const progressCircle = scrollBtn.querySelector('.progress-ring-progress');
  const circumference = 2 * Math.PI * 27; // 2 * PI * radius
  
  // Set initial progress
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;
  
  // Show/hide button and update progress on scroll
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show button after scrolling past hero section (first viewport)
    if (scrollTop > windowHeight * 0.5) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
    
    // Calculate scroll progress
    const scrollableHeight = documentHeight - windowHeight;
    const scrollProgress = scrollTop / scrollableHeight;
    const offset = circumference - (scrollProgress * circumference);
    
    progressCircle.style.strokeDashoffset = offset;
  });
  
  // Scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
