"use client";

import { useEffect } from "react";

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      // Add null check for event
      if (!event) return;

      // Use clientX/clientY instead of x/y
      const mouseX = event.clientX || 0;
      const mouseY = event.clientY || 0;

      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();
        
        const isHovered = (
          mouseX > CARD_BOUNDS.left - CONFIG.proximity &&
          mouseX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          mouseY > CARD_BOUNDS.top - CONFIG.proximity &&
          mouseY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        );

        CARD.style.setProperty("--active", isHovered ? 1 : CONFIG.opacity);

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE = (Math.atan2(mouseY - CARD_CENTER[1], mouseX - CARD_CENTER[0]) * 180) / Math.PI;
        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
        CARD.style.setProperty("--start", ANGLE + 90);
      }
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap);
      CONTAINER.style.setProperty("--blur", CONFIG.blur);
      CONTAINER.style.setProperty("--spread", CONFIG.spread);
      CONTAINER.style.setProperty("--direction", CONFIG.vertical ? "column" : "row");
    };

    document.body.addEventListener("pointermove", UPDATE);
    RESTYLE();

    // Initialize with default position
    UPDATE({ clientX: 0, clientY: 0 });

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;