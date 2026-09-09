document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     1. MOBILE MENU
  ========================================================= */
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
    if (mobileMenuButton) mobileMenuButton.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    if (mobileMenuButton) mobileMenuButton.setAttribute("aria-expanded", "false");
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = mobileMenu?.classList.contains("active");
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);

  mobileMenuLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });

  /* =========================================================
     2. SERVICES ACCORDION
  ========================================================= */
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item) => {
    const header = item.querySelector(".service-header");
    const content = item.querySelector(".service-content");
    const icon = item.querySelector(".service-icon");

    if (!header || !content) return;

    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    header.setAttribute("aria-expanded", content.classList.contains("active") ? "true" : "false");

    function toggleService() {
      const isActive = content.classList.contains("active");

      serviceItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector(".service-content");
          const otherHeader = otherItem.querySelector(".service-header");
          const otherIcon = otherItem.querySelector(".service-icon");

          if (otherContent) otherContent.classList.remove("active");
          if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
          if (otherIcon) otherIcon.textContent = "+";
        }
      });

      if (isActive) {
        content.classList.remove("active");
        header.setAttribute("aria-expanded", "false");
        if (icon) icon.textContent = "+";
      } else {
        content.classList.add("active");
        header.setAttribute("aria-expanded", "true");
        if (icon) icon.textContent = "−";
      }
    }

    header.addEventListener("click", toggleService);
    header.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleService();
      }
    });
  });

  /* =========================================================
     3. TESTIMONIAL CAROUSEL
  ========================================================= */
  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonials = document.querySelectorAll(".testimonial");
  const testimonialControls = document.querySelectorAll(".testimonial-controls button");
  const testimonialDots = document.querySelectorAll(".testimonial-dots button");

  let currentTestimonial = 0;
  let testimonialTimer = null;

  if (testimonialTrack && testimonials.length > 0) {
    testimonialTrack.style.width = `${testimonials.length * 100}%`;

    testimonials.forEach((slide) => {
      slide.style.width = `${100 / testimonials.length}%`;
    });

    function updateTestimonial(index, animate = true) {
      if (testimonials.length === 0) return;

      currentTestimonial = (index + testimonials.length) % testimonials.length;
      testimonialTrack.style.transition = animate ? "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)" : "none";

      const offset = currentTestimonial * (100 / testimonials.length);
      testimonialTrack.style.transform = `translateX(-${offset}%)`;

      testimonialDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === currentTestimonial);
        dot.setAttribute("aria-current", dotIndex === currentTestimonial ? "true" : "false");
      });
    }

    function nextTestimonial() { updateTestimonial(currentTestimonial + 1); }
    function previousTestimonial() { updateTestimonial(currentTestimonial - 1); }

    testimonialControls.forEach((button) => {
      const action = button.dataset.direction;
      if (action === "next") {
        button.addEventListener("click", () => { nextTestimonial(); restartTestimonialTimer(); });
      } else if (action === "prev") {
        button.addEventListener("click", () => { previousTestimonial(); restartTestimonialTimer(); });
      }
    });

    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => { updateTestimonial(index); restartTestimonialTimer(); });
    });

    function startTestimonialTimer() {
      clearInterval(testimonialTimer);
      testimonialTimer = setInterval(nextTestimonial, 5000);
    }

    function stopTestimonialTimer() { clearInterval(testimonialTimer); }
    function restartTestimonialTimer() { stopTestimonialTimer(); startTestimonialTimer(); }

    testimonialTrack.addEventListener("mouseenter", stopTestimonialTimer);
    testimonialTrack.addEventListener("mouseleave", startTestimonialTimer);

    updateTestimonial(0, false);
    startTestimonialTimer();
  }

  /* =========================================================
     4. NEWSLETTER FORM
  ========================================================= */
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const submitButton = newsletterForm.querySelector('button[type="submit"]');

      if (!emailInput || !emailInput.value.trim()) return;

      if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = "Thank You";
        submitButton.disabled = true;

        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          emailInput.value = "";
        }, 2500);
      }
    });
  }

  /* =========================================================
     5. BACK TO TOP
  ========================================================= */
  const backToTopButtons = document.querySelectorAll(".back-to-top");

  backToTopButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  /* =========================================================
     6. SCROLL REVEAL ANIMATION
  ========================================================= */
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  /* =========================================================
     7. CURRENT YEAR
  ========================================================= */
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
