// Minimal SW para modo standalone sin romper funcionalidad
const CACHE = 'superhumor-shell-v1';
const APP_SHELL = [
  './',
  './index_v4_secure_edit_search_multi_PWA.html',
  './manifest.webmanifest',
  './env.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Estrategia: network-first en mismo origen; no interfiere con Supabase ni subidas.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      try {
        const net = await fetch(event.request);
        const cache = await caches.open(CACHE);
        cache.put(event.request, net.clone());
        return net;
      } catch (err) {
        const cached = await caches.match(event.request);
        return cached || Response.error();
      }
    })());
  }
});
