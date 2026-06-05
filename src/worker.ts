/**
 * Cloudflare Worker entry point.
 * Serves static assets and falls back to index.html for SPA routing
 * so that /admin, /admin/dashboard, etc. load the React app correctly.
 */

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Always serve real static assets (JS, CSS, images, fonts, etc.) directly
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    // For any path that doesn't match a real file, serve index.html
    // so React Router can handle /admin, /admin/dashboard, etc.
    const indexRequest = new Request(new URL('/', url).toString(), request);
    return env.ASSETS.fetch(indexRequest);
  },
};
