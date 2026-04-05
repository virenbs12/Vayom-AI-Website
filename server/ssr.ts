import fs from "fs";
import path from "path";
import type { Express, Request, Response, NextFunction } from "express";
import type { ViteDevServer } from "vite";

export async function setupSSR(app: Express, vite?: ViteDevServer) {
  const isProd = process.env.NODE_ENV === "production";

  // SSR middleware - catches all routes not handled by other middleware
  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      // Read the index.html template
      let template: string;
      let render: (url: string) => { html: string };

      if (isProd) {
        // In production, read the built template from dist/public
        const templatePath = path.resolve(
          process.cwd(),
          "dist",
          "public",
          "index.html",
        );
        template = fs.readFileSync(templatePath, "utf-8");

        // Import the built server entry
        const serverEntryPath = path.resolve(
          process.cwd(),
          "dist",
          "server",
          "entry-server.js",
        );
        const entryServer = await import(serverEntryPath);
        render = entryServer.render;
      } else {
        // In development, use Vite's dev server
        const clientTemplatePath = path.resolve(
          import.meta.dirname,
          "..",
          "client",
          "index.html",
        );
        template = fs.readFileSync(clientTemplatePath, "utf-8");
        template = await vite!.transformIndexHtml(url, template);

        // Import the server entry through Vite
        const entryServer = await vite!.ssrLoadModule("/src/entry-server.tsx");
        render = entryServer.render;
      }

      // Render the app HTML
      const { html: appHtml } = render(url);

      // Inject the rendered app into the template
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR Error:", e);
      // Send a minimal error response instead of crashing
      res.status(500).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Error</title></head>
          <body>
            <h1>Server Error</h1>
            <pre>${e.message}</pre>
          </body>
        </html>
      `);
    }
  });
}
