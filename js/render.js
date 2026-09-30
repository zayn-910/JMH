/**
 * render.js — shared markup builders.
 * Keeping card markup in ONE place means the design only needs
 * updating here, not on every page.
 */

function packageCardHTML(pkg){
  return `
  <article class="ticket-card">
    <div class="ticket-media">
      <img src="${pkg.heroImg}" alt="${pkg.title}" loading="lazy">
      <span class="ticket-badge">${pkg.badge}</span>
    </div>
    <div class="ticket-body">
      <div class="ticket-route">
        <span>${pkg.duration}D / ${pkg.duration - 1}N</span>
        <span class="line"></span>
        <span>${pkg.tripType}</span>
      </div>
      <h3><a href="package-detail.html?id=${pkg.id}">${pkg.title}</a></h3>
      <p class="muted" style="font-size:.9rem;">${pkg.destination}</p>
      <div class="ticket-meta">
        <span>★ ${pkg.rating} (${pkg.reviews})</span>
      </div>
    </div>
    <div class="ticket-stub">
      ${pkg.country === "India"
        ? `<div class="ticket-price"><small>Contact us for pricing</small></div>`
        : `<div class="ticket-price">${formatINR(pkg.price)}<small>per person</small></div>`}
      <a href="package-detail.html?id=${pkg.id}" class="btn btn-primary btn-sm">View Details</a>
    </div>
  </article>`;
}

function renderCardsInto(containerEl, list){
  if (!containerEl) return;
  if (!list.length){
    containerEl.innerHTML = `<div class="empty-state">
      <h3>No packages match your filters</h3>
      <p>Try widening your budget range or choosing a different trip type.</p>
    </div>`;
    return;
  }
  containerEl.innerHTML = list.map(packageCardHTML).join("");
}
