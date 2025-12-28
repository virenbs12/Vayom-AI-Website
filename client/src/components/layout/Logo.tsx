import React from "react";
import logoImage from "@assets/generated_images/vayom_ai_premium_brand_logo_asset.png";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className || "h-12"}`}>
      <img 
        src={logoImage} 
        alt="Vayom AI" 
        className="h-full w-auto object-contain brightness-0 dark:brightness-0 dark:invert"
      />
    </div>
  );
}
