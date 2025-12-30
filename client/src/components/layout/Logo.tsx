import React from "react";
import logoImage from "@assets/Full_logo_side_text_without_bg_(4000px)_1766964703537.png";

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({ className, style }: LogoProps) {
  return (
    <div className={`flex items-center ${className || "h-12"}`} style={style}>
      <img 
        src={logoImage} 
        alt="Vayom AI" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
