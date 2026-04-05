import { renderToString } from "react-dom/server";
import App from "./App";

export function render(url: string) {
  // Extract just the pathname, removing query parameters for routing
  const pathname = url.split("?")[0];
  const html = renderToString(<App ssrLocation={pathname} />);
  return { html };
}
