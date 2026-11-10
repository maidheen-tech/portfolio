(() => {
  document.documentElement.classList.add("js-enabled");

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const projectsGrid = document.querySelector("#projects-grid");
  const contactForm = document.querySelector("#contact-form");
  const formNote = document.querySelector("#form-note");

  document.querySelector("#current-year").textContent = String(new Date().getFullYear());

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  const renderProject = (project, index) => {
    const safeName = escapeHtml(project.name);
    const tags = project.technologies.map((technology) => `<li>${escapeHtml(technology)}</li>`).join("");
    const imageLabel = `<span class="project-image-label">${escapeHtml(project.status)}</span>`;

    if (project.comingSoon) {
      return `<article class="project-card project-card-coming reveal">
        <div class="coming-soon-content">
          <span class="coming-icon" aria-hidden="true">＋</span>
          <p class="eyebrow">${escapeHtml(project.status)}</p>
          <p>${escapeHtml(project.description)}</p>
        </div>
      </article>`;
    }

    const githubLink = project.githubUrl
      ? `<a class="project-action" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>`
      : `<span class="project-action disabled" aria-disabled="true">GitHub unavailable</span>`;
    const liveLink = project.liveUrl
      ? `<a class="project-action" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">Live project <span aria-hidden="true">↗</span></a>`
      : "";

    return `<article class="project-card reveal">
      <div class="project-image-wrap">
        <img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy">
        ${imageLabel}
      </div>
      <div class="project-content">
        <div class="project-topline"><span class="project-number">PROJECT / ${String(index + 1).padStart(2, "0")}</span></div>
        <h3>${safeName}</h3>
        <p>${escapeHtml(project.description)}</p>
        <ul class="tag-list">${tags}</ul>
        <div class="project-actions">${githubLink}${liveLink}</div>
      </div>
    </article>`;
  };

  projectsGrid.innerHTML = window.PORTFOLIO_PROJECTS.map(renderProject).join("");

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const senderEmail = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${senderEmail}\n\n${message}`);

    formNote.textContent = "Your email app should open with this message ready to send. If it doesn’t, email maidheenismath@gmail.com.";
    window.location.href = `mailto:maidheenismath@gmail.com?subject=${subject}&body=${body}`;
  });
})();
