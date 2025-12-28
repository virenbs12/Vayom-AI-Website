import React from "react";
import logoImage from "@assets/Full_logo_side_text_without_bg_(2000px)_1766952657667.png";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Vayom AI" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
