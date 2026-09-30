/**
 * filter.js — powers the search/filter bar on destinations.html
 * Splits results into National (India) and International sections.
 */
document.addEventListener("DOMContentLoaded", () => {
  const nationalGrid = document.getElementById("packages-grid-national");
  const intlGrid = document.getElementById("packages-grid-international");
  if (!nationalGrid && !intlGrid) return; // not on this page

  const searchInput = document.getElementById("f-search");
  const typeSelect = document.getElementById("f-type");
  const budgetSelect = document.getElementById("f-budget");
  const sortSelect = document.getElementById("f-sort");
  const resultsCount = document.getElementById("results-count");
  const clearBtn = document.getElementById("f-clear");

  // populate trip type dropdown from data
  TRIP_TYPES.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t; opt.textContent = t;
    typeSelect.appendChild(opt);
  });

  // pre-select from URL query (e.g. from homepage quick search)
  const params = new URLSearchParams(location.search);
  if (params.get("q")) searchInput.value = params.get("q");
  if (params.get("type")) typeSelect.value = params.get("type");

  function isNational(p){
    return p.country === "India";
  }

  function applyFilters(){
    let list = [...PACKAGES];
    const q = searchInput.value.trim().toLowerCase();
    if (q){
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q)
      );
    }
    if (typeSelect.value) list = list.filter(p => p.tripType === typeSelect.value);

    if (budgetSelect.value){
      const [min, max] = budgetSelect.value.split("-").map(Number);
      list = list.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortSelect.value){
      case "price-asc": list.sort((a,b) => a.price - b.price); break;
      case "price-desc": list.sort((a,b) => b.price - a.price); break;
      case "rating": list.sort((a,b) => b.rating - a.rating); break;
      case "duration": list.sort((a,b) => a.duration - b.duration); break;
    }

    const national = list.filter(isNational);
    const international = list.filter(p => !isNational(p));

    if (nationalGrid) renderCardsInto(nationalGrid, national);
    if (intlGrid) renderCardsInto(intlGrid, international);

    if (resultsCount){
      resultsCount.textContent =
        `${list.length} package${list.length !== 1 ? "s" : ""} found — ${national.length} National, ${international.length} International`;
    }
  }

  [searchInput, typeSelect, budgetSelect, sortSelect].forEach(el =>
    el.addEventListener("input", applyFilters)
  );

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    typeSelect.value = "";
    budgetSelect.value = "";
    sortSelect.value = "";
    applyFilters();
  });

  applyFilters();
});
