(() => {
  const phone = "2348109771274";
  const makeWhatsAppUrl = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const brand = "Feestivities Hampers & Gifts";

  const calendarYear = (() => {
    try {
      return new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", year: "numeric" }).format(new Date());
    } catch {
      return String(new Date().getFullYear());
    }
  })();
  document.querySelectorAll("[data-calendar-year]").forEach((element) => {
    element.textContent = calendarYear;
  });

  // Keep the product links usable without JavaScript, and refine their prefilled text when available.
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const item = link.getAttribute("data-whatsapp");
    if (item) {
      link.href = makeWhatsAppUrl(`Hello ${brand}, I am interested in your ${item}. Please send me the available options and prices.`);
    }
  });
  document.querySelectorAll("[data-general-whatsapp]").forEach((link) => {
    link.href = makeWhatsAppUrl(`Hello ${brand}, I would like to place an order. Please help me choose a hamper or gift.`);
  });

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  };

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      navigation.classList.toggle("is-open", open);
    });
    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", (event) => {
      if (menuToggle.getAttribute("aria-expanded") === "true" && !navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  const updateScrollDetails = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    document.documentElement.style.setProperty("--scroll-progress", String(progress));
    header?.classList.toggle("is-scrolled", window.scrollY > 14);
  };
  updateScrollDetails();
  window.addEventListener("scroll", updateScrollDetails, { passive: true });
  window.addEventListener("resize", updateScrollDetails, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -5% 0px", threshold: 0.07 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("show"));
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const productSlides = document.querySelectorAll(".product-slide[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((other) => {
        const selected = other === button;
        other.classList.toggle("is-selected", selected);
        other.setAttribute("aria-pressed", String(selected));
      });
      productSlides.forEach((slide) => {
        const visible = filter === "all" || slide.dataset.category === filter;
        slide.hidden = !visible;
        if (visible) slide.classList.add("show");
      });
      document.querySelector("#gift-rail")?.scrollTo({ left: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-rail][data-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      const rail = document.getElementById(button.dataset.rail);
      if (!rail) return;
      const direction = Number(button.dataset.direction) || 1;
      rail.scrollBy({ left: direction * Math.max(250, rail.clientWidth * 0.72), behavior: "smooth" });
    });
  });

  const heroStage = document.querySelector("[data-parallax-stage]");
  if (heroStage && window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroStage.addEventListener("pointermove", (event) => {
      const rect = heroStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroStage.style.setProperty("--tilt-x", `${(x * 11).toFixed(2)}px`);
      heroStage.style.setProperty("--tilt-y", `${(y * 11).toFixed(2)}px`);
    });
    heroStage.addEventListener("pointerleave", () => {
      heroStage.style.setProperty("--tilt-x", "0px");
      heroStage.style.setProperty("--tilt-y", "0px");
    });
  }

  const form = document.querySelector("#enquiry-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const message = [
        `Hello ${brand},`,
        "I would like to make an enquiry.",
        `Full Name: ${data.get("name")}`,
        `Phone Number: ${data.get("phone")}`,
        `Occasion: ${data.get("occasion")}`,
        `Preferred Hamper: ${data.get("hamper")}`,
        `Budget: ${data.get("budget") || "Not specified"}`,
        `Message: ${data.get("message") || "Please help me choose an option."}`,
        "Thank you."
      ].join("\n");
      const url = makeWhatsAppUrl(message);
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) window.location.assign(url);
    });
  }
})();
