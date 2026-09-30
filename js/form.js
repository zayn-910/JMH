/**
 * form.js — handles every .inquiry-form on the site (package pages + contact page).
 * On submit: opens WhatsApp with the visitor's details pre-filled, addressed to
 * WHATSAPP_NUMBER (defined in main.js). Also attempts a background save to the
 * backend at API_BASE_URL if one is configured — this is optional and non-blocking.
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".inquiry-form").forEach(form => {
    form.addEventListener("submit", handleInquirySubmit);
  });
});

function buildWhatsAppMessage(data){
  const lines = [
    "New Trip Inquiry",
    `Package: ${data.package || "General Inquiry"}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`
  ];
  if (data.travel_date) lines.push(`Preferred Travel Date: ${data.travel_date}`);
  if (data.travelers) lines.push(`No. of Travelers: ${data.travelers}`);
  if (data.destination) lines.push(`Destination of Interest: ${data.destination}`);
  if (data.message) lines.push(`Message: ${data.message}`);
  return lines.join("\n");
}

async function handleInquirySubmit(e){
  e.preventDefault();
  const form = e.target;
  const statusEl = form.querySelector(".form-status");
  const submitBtn = form.querySelector('button[type="submit"]');

  // Honeypot: bots fill every field, humans never see/fill this one.
  if (form.querySelector('input[name="company_website"]')?.value){
    showStatus(statusEl, "err", "Submission blocked.");
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  // basic client-side validation
  if (!data.name || data.name.trim().length < 2){
    return showStatus(statusEl, "err", "Please enter your full name.");
  }
  if (!/^\S+@\S+\.\S+$/.test(data.email)){
    return showStatus(statusEl, "err", "Please enter a valid email address.");
  }
  if (!/^[\d\s()+-]{7,15}$/.test(data.phone)){
    return showStatus(statusEl, "err", "Please enter a valid phone number.");
  }
  if (!data.travelers || Number(data.travelers) < 1){
    return showStatus(statusEl, "err", "Please enter the number of travelers.");
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Optional: also try saving the lead to a backend, if one is configured.
  // This never blocks or breaks the WhatsApp handoff below.
  try {
    fetch(`${API_BASE_URL}/api/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).catch(() => {});
  } catch (err) { /* backend optional, ignore failures */ }

  // Open WhatsApp with the inquiry pre-filled, addressed to the business number.
  const message = buildWhatsAppMessage(data);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank", "noopener");

  showStatus(statusEl, "ok", "Opening WhatsApp with your details — just hit Send there to reach our team!");
  form.reset();

  submitBtn.disabled = false;
  submitBtn.textContent = "Send Inquiry";
}

function showStatus(el, type, message){
  if (!el) return;
  el.textContent = message;
  el.className = `form-status ${type}`;
}
