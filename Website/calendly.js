const CALENDLY_URL = "https://calendly.com/charles-nicholas17/intro-call";

export function initCalendly() {
  const container = document.getElementById("calendly-embed");
  if (!container) return;

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  script.onload = () => {
    Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: container,
    });
  };
  document.head.appendChild(script);

  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}
