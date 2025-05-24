 // Variables globales
 let isLightMode = false;
 let isMobileMenuOpen = false;

 // Éléments DOM
 const themeToggle = document.getElementById('themeToggle');
 const burger = document.getElementById('burger');
 const mobileMenu = document.getElementById('mobileMenu');
 const progressBar = document.getElementById('progressBar');
 const contactForm = document.getElementById('contactForm');

 // Gestion du thème
 themeToggle.addEventListener('click', () => {
     document.body.classList.toggle('light-mode');
     isLightMode = !isLightMode;
     
     const icon = themeToggle.querySelector('i');
     if (isLightMode) {
         icon.className = 'fas fa-sun';
     } else {
         icon.className = 'fas fa-moon';
     }
 });

 // Gestion du menu mobile
 burger.addEventListener('click', () => {
     burger.classList.toggle('active');
     mobileMenu.classList.toggle('active');
     isMobileMenuOpen = !isMobileMenuOpen;
     
     // Empêcher le scroll quand le menu est ouvert
     document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
 });

 // Fermer le menu mobile lors du clic sur un lien
 const mobileLinks = mobileMenu.querySelectorAll('a');
 mobileLinks.forEach(link => {
     link.addEventListener('click', () => {
         burger.classList.remove('active');
         mobileMenu.classList.remove('active');
         isMobileMenuOpen = false;
         document.body.style.overflow = 'auto';
     });
 });

 // Barre de progression du scroll
 function updateProgressBar() {
     const scrollTop = window.pageYOffset;
     const docHeight = document.body.scrollHeight - window.innerHeight;
     const scrollPercent = (scrollTop / docHeight) * 100;
     progressBar.style.width = scrollPercent + '%';
 }

 window.addEventListener('scroll', updateProgressBar);

 // Animation au scroll - Intersection Observer
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('fade-in-up');
         }
     });
 }, observerOptions);

 // Observer tous les éléments avec la classe fade-in-up
 document.addEventListener('DOMContentLoaded', () => {
     const elementsToAnimate = document.querySelectorAll('.fade-in-up');
     elementsToAnimate.forEach(el => {
         observer.observe(el);
     });
 });

 // Smooth scroll pour les liens de navigation
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Gestion du formulaire de contact
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Récupération des données du formulaire
     const formData = new FormData(contactForm);
     const data = {
         name: formData.get('name'),
         email: formData.get('email'),
         subject: formData.get('subject'),
         message: formData.get('message')
     };

     // Simulation d'envoi (remplacez par votre logique d'envoi)
     simulateFormSubmission(data);
 });

 function simulateFormSubmission(data) {
     const submitBtn = contactForm.querySelector('button[type="submit"]');
     const originalText = submitBtn.innerHTML;
     
     // Animation de chargement
     submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
     submitBtn.disabled = true;
     
     // Simulation d'envoi avec délai
     setTimeout(() => {
         // Réinitialiser le bouton
         submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
         submitBtn.style.background = 'var(--accent-color)';
         
         // Réinitialiser le formulaire
         contactForm.reset();
         
         // Restaurer le bouton après 3 secondes
         setTimeout(() => {
             submitBtn.innerHTML = originalText;
             submitBtn.style.background = 'var(--primary-color)';
             submitBtn.disabled = false;
         }, 3000);
         
         console.log('Données du formulaire:', data);
         alert('Message envoyé avec succès ! Je vous répondrai bientôt.');
     }, 2000);
 }

 // Effet de parallaxe pour l'image hero
//  window.addEventListener('scroll', () => {
//      const scrolled = window.pageYOffset;
//      const heroImage = document.querySelector('.hero-image');
//      if (heroImage) {
//          heroImage.style.transform = `translateY(${-50 + scrolled * 0.1}%) rotate(${scrolled * 0.1}deg)`;
//      }
//  });

 // Animation de dactylographie pour le titre
 function typewriterEffect() {
     const title = document.querySelector('.hero-title');
     const text = title.textContent;
     title.textContent = '';
     title.style.opacity = '1';
     
     let i = 0;
     const timer = setInterval(() => {
         title.textContent += text.charAt(i);
         i++;
         if (i >= text.length) {
             clearInterval(timer);
         }
     }, 100);
 }

 // Effet de particules flottantes
 function createFloatingParticles() {
     const particlesContainer = document.createElement('div');
     particlesContainer.style.cssText = `
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
         z-index: -1;
     `;
     document.body.appendChild(particlesContainer);

     for (let i = 0; i < 20; i++) {
         const particle = document.createElement('div');
         particle.style.cssText = `
             position: absolute;
             width: 4px;
             height: 4px;
             background: var(--primary-color);
             border-radius: 50%;
             opacity: 0.3;
             animation: float ${5 + Math.random() * 10}s linear infinite;
             left: ${Math.random() * 100}%;
             top: ${Math.random() * 100}%;
             animation-delay: ${Math.random() * 5}s;
         `;
         particlesContainer.appendChild(particle);
     }
 }

 // Ajouter les styles CSS pour l'animation des particules
 const particleStyles = document.createElement('style');
 particleStyles.textContent = `
     @keyframes float {
         0% {
             transform: translateY(0px) rotate(0deg);
             opacity: 0.3;
         }
         50% {
             opacity: 0.6;
         }
         100% {
             transform: translateY(-100px) rotate(360deg);
             opacity: 0;
         }
     }
 `;
 document.head.appendChild(particleStyles);

 // Navigation active
 function updateActiveNavLink() {
     const sections = document.querySelectorAll('section[id]');
     const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
     
     let current = '';
     sections.forEach(section => {
         const sectionTop = section.offsetTop - 100;
         const sectionHeight = section.offsetHeight;
         if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
             current = section.getAttribute('id');
         }
     });

     navLinks.forEach(link => {
         link.classList.remove('active');
         if (link.getAttribute('href') === `#${current}`) {
             link.classList.add('active');
         }
     });
 }

 window.addEventListener('scroll', updateActiveNavLink);

 // Styles pour le lien actif
 const activeNavStyles = document.createElement('style');
 activeNavStyles.textContent = `
     .nav-links a.active,
     .mobile-menu a.active {
         color: var(--primary-color) !important;
     }
     .nav-links a.active::after {
         width: 100% !important;
     }
 `;
 document.head.appendChild(activeNavStyles);

 // Initialisation au chargement de la page
 document.addEventListener('DOMContentLoaded', () => {
     // Démarrer l'effet de dactylographie après un délai
     setTimeout(typewriterEffect, 1000);
     
     // Créer les particules flottantes
     createFloatingParticles();
     
     // Mettre à jour la navigation active
     updateActiveNavLink();
     
     // Animation d'entrée pour les éléments
     const heroContent = document.querySelector('.hero-content');
     if (heroContent) {
         heroContent.style.opacity = '0';
         heroContent.style.transform = 'translateY(50px)';
         setTimeout(() => {
             heroContent.style.transition = 'all 1s ease';
             heroContent.style.opacity = '1';
             heroContent.style.transform = 'translateY(0)';
         }, 500);
     }
 });

 // Gestion du redimensionnement de la fenêtre
 window.addEventListener('resize', () => {
     // Fermer le menu mobile si on passe en desktop
     if (window.innerWidth > 768 && isMobileMenuOpen) {
         burger.classList.remove('active');
         mobileMenu.classList.remove('active');
         isMobileMenuOpen = false;
         document.body.style.overflow = 'auto';
     }
 });

 // Effet de hover pour les cartes
 document.querySelectorAll('.about-card, .skill-category, .project-card').forEach(card => {
     card.addEventListener('mouseenter', function() {
         this.style.transform = this.classList.contains('project-card') 
             ? 'translateY(-10px) scale(1.02)' 
             : 'translateY(-10px)';
     });
     
     card.addEventListener('mouseleave', function() {
         this.style.transform = 'translateY(0) scale(1)';
     });
 });

 // Console log stylisé pour les développeurs curieux
 console.log('%c🚀 Portfolio développé avec passion', 'color: #00ff88; font-size: 16px; font-weight: bold;');
 console.log('%cSi vous voulez en savoir plus sur le code, n\'hésitez pas à me contacter !', 'color: #4ecdc4; font-size: 12px;');
