// AJAX form submission for Netlify Forms with inline messages
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  const messages = document.getElementById("form-messages");

  async function showMessage(text, isError = false) {
    messages.style.display = "block";
    messages.textContent = text;
    messages.className = `form-messages-container ${
      isError ? "error" : "success"
    }`;
  }

  form.addEventListener("submit", async (e) => {
    // Let Netlify handle non-JS submissions
    e.preventDefault();

    // Simple client-side validation (redundant with HTML required attributes)
    const name = form.querySelector('[name="nombre"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const asunto = form.querySelector('[name="asunto"]').value.trim();
    const mensaje = form.querySelector('[name="mensaje"]').value.trim();

    if (!name || !email || !asunto || !mensaje) {
      showMessage("Please complete all required fields.", true);
      return;
    }

    // Build form data
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        showMessage(
          "Thank you — your message has been sent. We will contact you soon."
        );
        form.reset();
      } else {
        const json = await response.json();
        showMessage(
          json.error || "Submission failed. Please try again later.",
          true
        );
      }
    } catch (err) {
      showMessage("Network error. Please try again later.", true);
    }
  });
});
