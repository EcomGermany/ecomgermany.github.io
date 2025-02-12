// localization.js

const translations = {
  en: {
    labelName: "Full Name *",
    placeholderName: "Your full name",
    labelEmail: "Email Address *",
    placeholderEmail: "Your email address",
    labelClient: "I am a *",
    optionSelect: "Select an option",
    optionPrivate: "Private Client",
    optionRestaurant: "Restaurant",
    optionRetail: "Retail",
    optionWholesale: "Wholesale",
    optionOther: "Other / No Comment",
    labelMessage: "Message *",
    placeholderMessage: "Your message",
    submitButton: "Send Message"
  },
  es: {
    labelName: "Nombre Completo *",
    placeholderName: "Tu nombre completo",
    labelEmail: "Correo Electrónico *",
    placeholderEmail: "Tu correo electrónico",
    labelClient: "Soy *",
    optionSelect: "Selecciona una opción",
    optionPrivate: "Cliente Privado",
    optionRestaurant: "Restaurante",
    optionRetail: "Minorista",
    optionWholesale: "Mayorista",
    optionOther: "Otro / Sin comentario",
    labelMessage: "Mensaje *",
    placeholderMessage: "Tu mensaje",
    submitButton: "Enviar Mensaje"
  },
  de: {
    labelName: "Vollständiger Name *",
    placeholderName: "Ihr vollständiger Name",
    labelEmail: "E-Mail-Adresse *",
    placeholderEmail: "Ihre E-Mail-Adresse",
    labelClient: "Ich bin *",
    optionSelect: "Wählen Sie eine Option",
    optionPrivate: "Privatkunde",
    optionRestaurant: "Restaurant",
    optionRetail: "Einzelhandel",
    optionWholesale: "Großhändler",
    optionOther: "Andere / Kein Kommentar",
    labelMessage: "Nachricht *",
    placeholderMessage: "Ihre Nachricht",
    submitButton: "Nachricht Senden"
  }
};

function getLanguageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "en";
}

function updateLocalization(lang) {
  if (!translations[lang]) lang = "en";
  const t = translations[lang];

  // Update labels
  document.getElementById("label-name").textContent = t.labelName;
  document.getElementById("label-email").textContent = t.labelEmail;
  document.getElementById("label-client").textContent = t.labelClient;
  document.getElementById("label-message").textContent = t.labelMessage;

  // Update placeholders
  document.getElementById("name").placeholder = t.placeholderName;
  document.getElementById("email").placeholder = t.placeholderEmail;
  document.getElementById("message").placeholder = t.placeholderMessage;

  // Update select options
  const clientSelect = document.getElementById("client-type");
  clientSelect.options[0].text = t.optionSelect;
  clientSelect.options[1].text = t.optionPrivate;
  clientSelect.options[2].text = t.optionRestaurant;
  clientSelect.options[3].text = t.optionRetail;
  clientSelect.options[4].text = t.optionWholesale;
  clientSelect.options[5].text = t.optionOther;

  // Update submit button text
  document.getElementById("submit-button").textContent = t.submitButton;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLanguageFromURL();
  updateLocalization(lang);
});
