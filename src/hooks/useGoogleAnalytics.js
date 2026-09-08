import { useEffect } from "react";

function measurementId(id) {
  const value = (id || import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();
  return /^G-[A-Z0-9]+$/.test(value) ? value : "";
}

export function useGoogleAnalytics(id) {
  useEffect(() => {
    const gaId = measurementId(id);
    if (!import.meta.env.PROD || !gaId || document.getElementById("ga-gtag")) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    const script = document.createElement("script");
    script.id = "ga-gtag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", gaId);
  }, [id]);
}
