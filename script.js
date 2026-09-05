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

    if (mobileMenuButton) {
      mobileMenuButton.setAttribute("aria-expanded", "true");
    }
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

    if (mobileMenuButton) {
      mobileMenuButton.setAttribute("aria-expanded", "false");
    }
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = mobileMenu?.classList.contains("active");

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
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
    header.setAttribute(
      "aria-expanded",
      content.classList.contains("active") ? "true" : "false"
    );

    function toggleService() {
      const isActive = content.classList.contains("active");

      // Close all other service items
      serviceItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherContent =
            otherItem.querySelector(".service-content");
          const otherHeader =
            otherItem.querySelector(".service-header");
          const otherIcon =
            otherItem.querySelector(".service-icon");

          if (otherContent) {
            otherContent.classList.remove("active");
          }

          if (otherHeader) {
            otherHeader.setAttribute("aria-expanded", "false");
          }

          if (otherIcon) {
            otherIcon.textContent = "+";
          }
        }
      });

      // Toggle current item
      if (isActive) {
        content.classList.remove("active");
        header.setAttribute("aria-expanded", "false");

        if (icon) {
          icon.textContent = "+";
        }
      } else {
        content.classList.add("active");
        header.setAttribute("aria-expanded", "true");

        if (icon) {
          icon.textContent = "−";
        }
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
  const testimonialControls =
    document.querySelectorAll(".testimonial-controls button");
  const testimonialDots =
    document.querySelectorAll(".testimonial-dots button");

  let currentTestimonial = 0;
  let testimonialTimer = null;

  if (testimonialTrack && testimonials.length > 0) {
    /*
      Make the track width dynamic.

      Example:
      6 testimonials = 600%
      Each slide = 16.6667%
    */

    testimonialTrack.style.width = `${testimonials.length * 100}%`;

    testimonials.forEach((slide) => {
      slide.style.width = `${100 / testimonials.length}%`;
    });

    function updateTestimonial(index, animate = true) {
      if (testimonials.length === 0) return;

      currentTestimonial =
        (index + testimonials.length) % testimonials.length;

      if (!animate) {
        testimonialTrack.style.transition = "none";
      } else {
        testimonialTrack.style.transition =
          "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
      }

      const offset =
        currentTestimonial * (100 / testimonials.length);

      testimonialTrack.style.transform =
        `translateX(-${offset}%)`;

      // Update dots
      testimonialDots.forEach((dot, dotIndex) => {
        dot.classList.toggle(
          "active",
          dotIndex === currentTestimonial
        );

        dot.setAttribute(
          "aria-current",
          dotIndex === currentTestimonial ? "true" : "false"
        );
      });

      // Update controls
      testimonialControls.forEach((button) => {
        button.classList.remove("active");
      });
    }

    function nextTestimonial() {
      updateTestimonial(currentTestimonial + 1);
    }

    function previousTestimonial() {
      updateTestimonial(currentTestimonial - 1);
    }

    // Previous / Next buttons
    testimonialControls.forEach((button) => {
      const action =
        button.dataset.direction ||
        button.getAttribute("data-slide");

      if (
        action === "next" ||
        action === "right" ||
        action === "next-testimonial"
      ) {
        button.addEventListener("click", () => {
          nextTestimonial();
          restartTestimonialTimer();
        });
      }

      if (
        action === "prev" ||
        action === "previous" ||
        action === "left" ||
        action === "previous-testimonial"
      ) {
        button.addEventListener("click", () => {
          previousTestimonial();
          restartTestimonialTimer();
        });
      }
    });

    // If buttons don't have data-direction,
    // automatically treat first button as Previous
    // and second button as Next.
    if (testimonialControls.length >= 2) {
      const firstButton = testimonialControls[0];
      const secondButton = testimonialControls[1];

      if (
        !firstButton.dataset.direction &&
        !firstButton.dataset.slide
      ) {
        firstButton.addEventListener("click", () => {
          previousTestimonial();
          restartTestimonialTimer();
        });
      }

      if (
        !secondButton.dataset.direction &&
        !secondButton.dataset.slide
      ) {
        secondButton.addEventListener("click", () => {
          nextTestimonial();
          restartTestimonialTimer();
        });
      }
    }

    // Dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateTestimonial(index);
        restartTestimonialTimer();
      });
    });

    // Auto play
    function startTestimonialTimer() {
      clearInterval(testimonialTimer);

      testimonialTimer = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    function stopTestimonialTimer() {
      clearInterval(testimonialTimer);
    }

    function restartTestimonialTimer() {
      stopTestimonialTimer();
      startTestimonialTimer();
    }

    // Pause when mouse is over slider
    testimonialTrack.addEventListener(
      "mouseenter",
      stopTestimonialTimer
    );

    testimonialTrack.addEventListener(
      "mouseleave",
      startTestimonialTimer
    );

    // Pause when user focuses the slider
    testimonialTrack.addEventListener(
      "focusin",
      stopTestimonialTimer
    );

    testimonialTrack.addEventListener(
      "focusout",
      startTestimonialTimer
    );

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialTrack.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].screenX;
        stopTestimonialTimer();
      },
      { passive: true }
    );

    testimonialTrack.addEventListener(
      "touchend",
      (event) => {
        touchEndX = event.changedTouches[0].screenX;

        const swipeDistance =
          touchStartX - touchEndX;

        if (Math.abs(swipeDistance) > 50) {
          if (swipeDistance > 0) {
            nextTestimonial();
          } else {
            previousTestimonial();
          }
        }

        startTestimonialTimer();
      },
      { passive: true }
    );

    // Keyboard navigation
    testimonialTrack.setAttribute("tabindex", "0");

    testimonialTrack.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "ArrowRight") {
          nextTestimonial();
          restartTestimonialTimer();
        }

        if (event.key === "ArrowLeft") {
          previousTestimonial();
          restartTestimonialTimer();
        }
      }
    );

    // Start carousel
    updateTestimonial(0, false);
    startTestimonialTimer();
  }


  /* =========================================================
     4. NEWSLETTER FORM
  ========================================================= */

  const newsletterForm =
    document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailInput =
        newsletterForm.querySelector(
          'input[type="email"]'
        );

      const submitButton =
        newsletterForm.querySelector(
          'button[type="submit"]'
        );

      if (!emailInput) return;

      const email = emailInput.value.trim();

      if (!email) {
        emailInput.focus();
        return;
      }

      /*
        Front-end only.

        Later, you can connect this form to:
        - Mailchimp
        - Klaviyo
        - Shopify
        - ConvertKit
        - Formspree
        - Your own backend
      */

      if (submitButton) {
        const originalText =
          submitButton.textContent;

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

  const backToTopButtons =
    document.querySelectorAll(
      ".back-to-top, [data-back-to-top]"
    );

  backToTopButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });


  /* =========================================================
     6. HEADER SCROLL EFFECT
  ========================================================= */

  const header =
    document.querySelector(".site-header");

  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
  );

  handleHeaderScroll();


  /* =========================================================
     7. SCROLL REVEAL ANIMATION
  ========================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -50px 0px",
        }
      );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }


  /* =========================================================
     8. SMOOTH SCROLL FOR ANCHOR LINKS
  ========================================================= */

  const anchorLinks =
    document.querySelectorAll(
      'a[href^="#"]:not([href="#"])'
    );

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId =
        link.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerHeight =
        header?.offsetHeight || 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      closeMobileMenu();
    });
  });


  /* =========================================================
     9. PROJECT CARD INTERACTION
  ========================================================= */

  const projectCards =
    document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("is-hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-hovered");
    });
  });


  /* =========================================================
     10. IMAGE LOADING
  ========================================================= */

  const images =
    document.querySelectorAll("img");

  images.forEach((image) => {
    /*
      Hero images should normally load immediately.
      Other images can use lazy loading.
    */

    if (
      !image.closest(".hero") &&
      !image.hasAttribute("loading")
    ) {
      image.setAttribute("loading", "lazy");
    }

    image.addEventListener("load", () => {
      image.classList.add("loaded");
    });
  });


  /* =========================================================
     11. CURRENT YEAR
  ========================================================= */

  const yearElements =
    document.querySelectorAll(
      "[data-current-year]"
    );

  yearElements.forEach((element) => {
    element.textContent =
      new Date().getFullYear();
  });


  /* =========================================================
     12. MOBILE MENU BODY LOCK
  ========================================================= */

  const style = document.createElement("style");

  style.textContent = `
    body.menu-open {
      overflow: hidden;
    }

    .newsletter-form button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `;

  document.head.appendChild(style);


  /* =========================================================
     13. REDUCED MOTION
  ========================================================= */

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add(
      "reduced-motion"
    );

    // Stop testimonial autoplay
    clearInterval(testimonialTimer);
  }


  /* =========================================================
     14. CONSOLE MESSAGE
  ========================================================= */

  console.log(
    "Interior Studio website initialized successfully."
  );
});
