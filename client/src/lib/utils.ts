import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scrolls to the contact/demo section on the home page.
 * If already on home page, scrolls smoothly. Otherwise redirects to home with hash.
 */
export function scrollToDemo() {
  if (window.location.pathname === '/') {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      element.focus({ preventScroll: true });
    }
  } else {
    window.location.href = '/#contact';
  }
}
