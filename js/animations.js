// Animation Engine for Portfolio

// Projects Data
const projects = [
  {
    id: "sifat-mebel",
    title: "Sifat Mebel",
    date: "8th January 2025",
    description: "Simple landing page for local company selling furniture in Uzbekistan.",
    tags: ["Nuxt", "Figma Design"],
    link: "https://sifat-mebel.uz/en"
  },
  {
    id: "mutolaa",
    title: "Mutolaa",
    date: "15th December 2024",
    description: "Book reading platform with modern UI and seamless user experience.",
    tags: ["Vue", "Tailwind CSS"],
    link: "https://mutolaa.com/"
  },
  {
    id: "premium-pro",
    title: "Premium Pro",
    date: "20th November 2024",
    description: "Premium e-commerce platform with advanced features and payment integration.",
    tags: ["Nuxt", "PostgreSQL", "Stripe"],
    link: "https://premiumpro.world/"
  },
  {
    id: "jizzakh-school",
    title: "Jizzakh School",
    date: "10th October 2024",
    description: "International school website with student portal and administrative features.",
    tags: ["React", "Node.js"],
    link: "https://jis.academy/"
  },
  {
    id: "obyektivka",
    title: "Obyektivka.uz",
    date: "5th September 2024",
    description: "Photography equipment marketplace connecting buyers and sellers.",
    tags: ["Vue", "Express.js"],
    link: "https://www.obyektivka.uz/"
  },
  {
    id: "ims",
    title: "IMS",
    date: "15th August 2024",
    description: "International school management system with comprehensive tracking features.",
    tags: ["Nuxt", "Nest.js", "PostgreSQL"],
    link: "https://intms.org/"
  },
  {
    id: "itlive",
    title: "IT Live",
    date: "1st July 2024",
    description: "IT education academy platform with course management and student tracking.",
    tags: ["React", "TypeScript"],
    link: "https://itliveacademy.uz/"
  },
  {
    id: "eurostudy",
    title: "Euro Study Info",
    date: "10th June 2024",
    description: "Educational consultancy platform for students seeking European universities.",
    tags: ["Vue", "Tailwind CSS"],
    link: "#"
  },
  {
    id: "akocars",
    title: "Ako Cars",
    date: "25th May 2024",
    description: "Car rental mobile application with real-time booking and payment processing.",
    tags: ["React Native", "Node.js"],
    link: "https://akocarsapp.com/"
  }
];

// Experience Data
const experiences = [
  {
    dateRange: "March 2025 - April 2026",
    duration: "1 yr & 1 mo",
    company: "Learnify",
    companyLink: "https://learnify.uz/",
    title: "Frontend developer",
    type: "Full-time (remote)",
    description: "Working on a unicorn startup building educational technology platform. Developing responsive web applications with Vue.js and implementing complex UI components."
  },
  {
    dateRange: "Jan 2025 - Feb 2026",
    duration: "1 yr & 1 mo",
    company: "Dadshop",
    companyLink: null,
    title: "Full-stack developer",
    type: "Part-time",
    description: "Building e-commerce solutions with modern tech stack. Handling both frontend and backend development, database design, and API integration."
  },
  {
    dateRange: "Sep 2024 - Feb 2025",
    duration: "6 mos",
    company: "Freelance",
    companyLink: null,
    title: "Full-stack developer",
    type: "Self-employed",
    description: "Delivered multiple web projects for clients worldwide. Specialized in Vue/Nuxt ecosystem and Node.js backend development."
  },
  {
    dateRange: "June 2024 - Sep 2024",
    duration: "4 mos",
    company: "Urbandrive",
    companyLink: null,
    title: "Frontend developer",
    type: "Full-time",
    description: "Developed car rental platform features and improved user experience. Collaborated with design team to implement pixel-perfect interfaces."
  },
  {
    dateRange: "Oct 2022 - Jul 2023",
    duration: "10 mos",
    company: "United IT Company",
    companyLink: null,
    title: "Frontend developer",
    type: "Full-time",
    description: "Built corporate web applications and landing pages. Worked with React and Vue.js frameworks to create responsive interfaces."
  },
  {
    dateRange: "Aug 2020 - Jul 2021",
    duration: "1 yr",
    company: "Phoenix Tashkent",
    companyLink: null,
    title: "Junior developer",
    type: "Full-time",
    description: "Started career in web development. Learned modern frameworks and best practices while contributing to client projects."
  }
];

// Blog Posts Data
const posts = [
  {
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for creating applications that grow with your business needs.",
    date: "March 15, 2025",
    link: "https://medium.com/@manuchehr/building-scalable-apps"
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Exploring the latest CSS features and how to use them effectively.",
    date: "February 28, 2025",
    link: "https://medium.com/@manuchehr/modern-css"
  },
  {
    title: "Vue 3 Composition API Deep Dive",
    excerpt: "Understanding the power of Composition API and when to use it.",
    date: "February 10, 2025",
    link: "https://medium.com/@manuchehr/vue3-composition"
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Tips and tricks for writing better TypeScript code.",
    date: "January 20, 2025",
    link: "https://medium.com/@manuchehr/typescript-practices"
  },
  {
    title: "Performance Optimization Guide",
    excerpt: "Practical techniques to make your web apps lightning fast.",
    date: "January 5, 2025",
    link: "https://medium.com/@manuchehr/performance-guide"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Trends and technologies shaping the future of the web.",
    date: "December 15, 2024",
    link: "https://medium.com/@manuchehr/future-web"
  }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  animateHero();
  initHeroScroll();
  renderProjects();
  renderExperience();
  renderPosts();
});

// Hero Animation
function animateHero() {
  const heroName = document.querySelector('[data-animate="hero"]');
  if (heroName) {
    setTimeout(() => {
      heroName.classList.add('animated');
    }, 100);
  }
}

// Hero Scroll Effect
function initHeroScroll() {
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  const aboutSection = document.querySelector('#about');
  
  if (!hero || !heroContent || !aboutSection) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;
    
    // Add scrolled class when user scrolls down
    if (scrolled > heroHeight * 0.2) {
      hero.classList.add('scrolled');
    } else {
      hero.classList.remove('scrolled');
    }
    
    // Hide hero content when About title reaches center of screen
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const aboutTitle = aboutSection.querySelector('.section-title');
    const aboutTitleTop = aboutTitle ? aboutTitle.getBoundingClientRect().top : aboutTop;
    const screenCenter = window.innerHeight / 2;
    
    if (aboutTitleTop <= screenCenter) {
      heroContent.classList.add('hidden');
    } else {
      heroContent.classList.remove('hidden');
    }
  });
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Trigger image curtain reveal for About section
        if (entry.target.classList.contains('image-wrapper')) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 300);
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(el => observer.observe(el));
  
  // Observe image wrapper for curtain effect
  const imageWrapper = document.querySelector('.image-wrapper');
  if (imageWrapper) {
    observer.observe(imageWrapper);
  }
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map((project, index) => `
    <a href="${project.link}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="project-card stagger-item"
       data-project="${project.id}"
       style="animation-delay: ${index * 0.1}s"
       data-animate="fade">
      <div class="project-header">
        <div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-date">${project.date}</p>
        </div>
        <svg class="project-icon external-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </a>
  `).join('');

  // Re-observe stagger items
  const staggerItems = projectsGrid.querySelectorAll('.stagger-item');
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  staggerItems.forEach(item => staggerObserver.observe(item));
}

// Render Experience
function renderExperience() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  timeline.innerHTML = experiences.map((exp, index) => `
    <div class="timeline-item stagger-item" 
         style="animation-delay: ${index * 0.1}s"
         data-animate="fade">
      <p class="timeline-date">${exp.dateRange} (${exp.duration})</p>
      <div class="timeline-company">
        ${exp.companyLink 
          ? `<a href="${exp.companyLink}" target="_blank" rel="noopener noreferrer">
              ${exp.company}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>`
          : exp.company
        }
      </div>
      <p class="timeline-title">${exp.title}</p>
      <p class="timeline-type">${exp.type}</p>
      <p class="timeline-description">${exp.description}</p>
    </div>
  `).join('');

  // Re-observe stagger items
  const staggerItems = timeline.querySelectorAll('.stagger-item');
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  staggerItems.forEach(item => staggerObserver.observe(item));
}

// Render Posts
function renderPosts() {
  const postsGrid = document.querySelector('.posts-grid');
  if (!postsGrid) return;

  postsGrid.innerHTML = posts.map((post, index) => `
    <a href="${post.link}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="post-card stagger-item"
       style="animation-delay: ${index * 0.1}s"
       data-animate="fade">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <p class="post-date">${post.date}</p>
    </a>
  `).join('');

  // Re-observe stagger items
  const staggerItems = postsGrid.querySelectorAll('.stagger-item');
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  staggerItems.forEach(item => staggerObserver.observe(item));
}
