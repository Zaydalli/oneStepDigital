"use client";
import { useEffect } from "react";
import { trackMeta } from "@/lib/meta";

/** One listener for every WhatsApp link on the site (pricing, contact, footer, chat): sends Meta "Contact". */
export default function MetaEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.('a[href*="wa.me/"]');
      if (!link) return;
      const label = (link.textContent || "").trim().slice(0, 60) || "WhatsApp";
      trackMeta("Contact", { content_name: label, content_category: "WhatsApp" });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
