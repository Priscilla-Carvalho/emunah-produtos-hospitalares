const whatsappNumber = "5531984213500";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const message = link.dataset.message || "Olá! Vi o site da Emunah e gostaria de atendimento, por favor.";
  link.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  link.removeAttribute("target");
  link.removeAttribute("rel");
});

const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-active");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
}

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (header && toggle) {
      header.classList.remove("menu-active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const whatsappPrompt = document.querySelector(".whatsapp-prompt");
const whatsappPromptText = document.getElementById("whatsapp-prompt-text");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");

if (whatsappPrompt && whatsappPromptText && floatingWhatsapp) {
  const messages = ["Olá! Precisa de ajuda?", "Fale com um atendente"];
  let messageIndex = 0;

  const showWhatsappPrompt = () => {
    whatsappPromptText.textContent = messages[messageIndex];
    whatsappPrompt.classList.add("is-visible");
    floatingWhatsapp.classList.add("is-calling-attention");

    window.setTimeout(() => {
      whatsappPrompt.classList.remove("is-visible");
      floatingWhatsapp.classList.remove("is-calling-attention");
      messageIndex = (messageIndex + 1) % messages.length;
    }, 4500);
  };

  window.setTimeout(showWhatsappPrompt, 1600);
  window.setInterval(showWhatsappPrompt, 11000);
}
