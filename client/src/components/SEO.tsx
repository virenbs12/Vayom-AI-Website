import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://vayomai.com/og-image.png",
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
    }

    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    if (ogImage) {
      updateMetaTag("twitter:image", ogImage, true);
    }

    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    return () => {
      document.title = "Vayom AI | Revenue Intelligence Platform";
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
}
