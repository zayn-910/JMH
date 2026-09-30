/**
 * main.js — runs on every page (loaded after packages-data.js)
 * Handles: mobile nav toggle, footer year, WhatsApp floating button.
 */

// ---- Config you WILL want to edit per client ----
const WHATSAPP_NUMBER = "919071714747"; // full number, no + or spaces
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about your travel packages.";
const CALL_NUMBER = "+919071714747"; // used by the floating call button (tel: link)

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initFooterYear();
  injectWhatsAppButton();
  injectCallButton();
  highlightActiveNavLink();
});

function initNavToggle(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    const expanded = links.classList.contains("open");
    toggle.setAttribute("aria-expanded", expanded);
  });
}

function injectCallButton(){
  if (document.querySelector(".call-float")) return;
  const a = document.createElement("a");
  a.href = `tel:${CALL_NUMBER}`;
  a.className = "call-float";
  a.setAttribute("aria-label", "Call us");
  a.innerHTML = `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"/>
  </svg>`;
  document.body.appendChild(a);
}
function initFooterYear(){
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

function highlightActiveNavLink(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
}

function injectWhatsAppButton(){
  if (document.querySelector(".wa-float")) return;
  const a = document.createElement("a");
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "wa-float";
  a.setAttribute("aria-label", "Chat with us on WhatsApp");
  a.innerHTML = `<svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.68 4.57 1.86 6.44L4 29l7.76-1.8A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.6 1.07 1.1-4.48-.25-.4A9.63 9.63 0 0 1 6.3 15c0-5.36 4.36-9.72 9.72-9.72S25.7 9.64 25.7 15s-4.36 9.7-9.68 9.7Zm5.33-7.27c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44a8.72 8.72 0 0 1-1.61-2c-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.2-.55-.34Z"/>
  </svg>`;
  document.body.appendChild(a);
}
