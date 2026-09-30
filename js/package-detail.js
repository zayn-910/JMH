/**
 * package-detail.js — renders a single package based on ?id= in the URL.
 */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("pkg-root");
  if (!root) return;

  const id = new URLSearchParams(location.search).get("id");
  const pkg = PACKAGES.find(p => p.id === id) || PACKAGES[0];

  document.title = `${pkg.title} | JOY Makers Holidays`;

  // Hero gallery (1 main + up to 4 side thumbs)
  document.getElementById("pkg-main-img").src = pkg.heroImg;
  document.getElementById("pkg-main-img").alt = pkg.title;
  const sideWrap = document.getElementById("pkg-side-imgs");
  sideWrap.innerHTML = pkg.gallery.slice(0,2).map(src =>
    `<div><img src="${src}" alt="${pkg.title} photo" loading="lazy"></div>`
  ).join("");

  // Header info
  document.getElementById("pkg-title").textContent = pkg.title;
  document.getElementById("pkg-destination").textContent = pkg.destination;
  document.getElementById("pkg-rating").textContent = `★ ${pkg.rating} (${pkg.reviews} reviews)`;
  document.getElementById("pkg-duration-badge").textContent = `${pkg.duration}D / ${pkg.duration - 1}N`;
  document.getElementById("pkg-type-badge").textContent = pkg.tripType;
  document.getElementById("pkg-summary").textContent = pkg.summary;

  // Itinerary
  document.getElementById("pkg-itinerary").innerHTML = pkg.itinerary.map(d => `
    <div class="itinerary-day">
      <div class="day-num">D${d.day}</div>
      <div>
        <h4 style="margin-bottom:4px;">${d.title}</h4>
        <p class="muted" style="margin:0;">${d.desc}</p>
      </div>
    </div>`).join("");

  // Inclusions / exclusions
  document.getElementById("pkg-inclusions").innerHTML = pkg.inclusions.map(i => `<li>${i}</li>`).join("");
  document.getElementById("pkg-exclusions").innerHTML = pkg.exclusions.map(i => `<li>${i}</li>`).join("");

  // Photo gallery grid + lightbox
  const galleryGrid = document.getElementById("pkg-gallery-grid");
  galleryGrid.innerHTML = pkg.gallery.map(src =>
    `<img src="${src}" alt="${pkg.title} gallery photo" loading="lazy">`
  ).join("");
  initLightbox(galleryGrid);

  // Booking sidebar
  const priceEl = document.getElementById("pkg-price");
  const perEl = document.querySelector(".booking-card .price-row .per");
  if (pkg.country === "India"){
    priceEl.textContent = "Contact us for pricing";
    priceEl.style.fontSize = "1.05rem";
    if (perEl) perEl.style.display = "none";
  } else {
    priceEl.textContent = formatINR(pkg.price);
    if (perEl) perEl.style.display = "";
  }
  document.getElementById("pkg-duration-fact").textContent = `${pkg.duration} Days / ${pkg.duration - 1} Nights`;
  document.getElementById("pkg-type-fact").textContent = pkg.tripType;
  document.getElementById("pkg-destination-fact").textContent = pkg.destination;

  // Pre-fill hidden field in the inquiry form with this package name
  const pkgField = document.getElementById("inq-package");
  if (pkgField) pkgField.value = pkg.title;

  // Tabs
  initTabs();
});

function initTabs(){
  const buttons = document.querySelectorAll(".pkg-tabs button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".pkg-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
}

function initLightbox(galleryGrid){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (!lightbox) return;
  galleryGrid.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") return;
    lightboxImg.src = e.target.src;
    lightbox.classList.add("open");
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")){
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    }
  });
}
