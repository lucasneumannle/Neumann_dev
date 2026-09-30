(() => {
  "use strict";
  const config = window.ACQUA_CONFIG || {};
  const phone = "5547997207567";
  const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
  const current = new URLSearchParams(location.search);
  const campaign = {};
  campaignKeys.forEach(key => {
    const value = current.get(key);
    if (value && value.length < 180) campaign[key] = value;
  });
  try {
    if (Object.keys(campaign).length) sessionStorage.setItem("acqua_campaign", JSON.stringify(campaign));
  } catch (_) {}

  if (config.canonicalUrl && /^https:\/\//.test(config.canonicalUrl)) {
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = config.canonicalUrl;
    document.head.append(canonical);
  }

  const services = document.getElementById("solution-list");
  if (services && Array.isArray(config.services)) {
    config.services.forEach(name => {
      const item = document.createElement("li");
      item.textContent = String(name);
      services.append(item);
    });
  }

  document.querySelectorAll(".wa-link").forEach(link => {
    const message = link.dataset.message || "Olá! Vim pelo site da Acqua Life e gostaria de conversar.";
    link.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    link.addEventListener("click", () => {
      const locationName = link.dataset.location || "unknown";
      let savedCampaign = {};
      try { savedCampaign = JSON.parse(sessionStorage.getItem("acqua_campaign") || "{}"); } catch (_) {}
      const payload = { event: "whatsapp_click", location: locationName, ...savedCampaign };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
      if (typeof window.gtag === "function") window.gtag("event", "whatsapp_click", { location: locationName, ...savedCampaign });
      if (typeof window.fbq === "function") {
        window.fbq("trackCustom", "whatsapp_click", { location: locationName });
        window.fbq("track", "Lead", { content_name: locationName });
      }
    });
  });

  const header = document.querySelector(".site-header");
  const mobileBar = document.querySelector(".mobile-bar");
  let scrollScheduled = false;
  const updateScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 32);
    mobileBar?.classList.toggle("visible", y > 180);
    scrollScheduled = false;
  };
  addEventListener("scroll", () => {
    if (!scrollScheduled) { requestAnimationFrame(updateScroll); scrollScheduled = true; }
  }, { passive: true });
  updateScroll();

  document.getElementById("year").textContent = String(new Date().getFullYear());

  const trackingConfigured = Boolean(config.metaPixelId || config.gaMeasurementId);
  const consentBox = document.getElementById("consent");
  const loadTracking = () => {
    if (config.gaMeasurementId && /^G-[A-Z0-9]+$/.test(config.gaMeasurementId)) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", config.gaMeasurementId);
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.gaMeasurementId);
      document.head.append(script);
    }
    if (config.metaPixelId && /^\d{5,25}$/.test(config.metaPixelId)) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", config.metaPixelId);
      window.fbq("track", "PageView");
    }
  };
  if (trackingConfigured) {
    let choice = "";
    try { choice = localStorage.getItem("acqua_tracking_consent") || ""; } catch (_) {}
    if (choice === "accepted") loadTracking();
    else if (!choice && consentBox) consentBox.hidden = false;
    document.getElementById("consent-accept")?.addEventListener("click", () => {
      try { localStorage.setItem("acqua_tracking_consent", "accepted"); } catch (_) {}
      consentBox.hidden = true;
      loadTracking();
    });
    document.getElementById("consent-reject")?.addEventListener("click", () => {
      try { localStorage.setItem("acqua_tracking_consent", "rejected"); } catch (_) {}
      consentBox.hidden = true;
    });
  }
})();
