
const CACHE_NAME = "gtm-hub-cache-v3";

const OFFLINE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "../src/app.js",
  "../src/data/sampleData.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).catch(() => caches.match("./index.html"));
    })
  );
});
