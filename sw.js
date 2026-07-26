const CACHE = 'bloom-shell-v19';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // HTML is network-first so code updates appear on the next visit. Static shell assets stay available offline.
  if (event.request.mode === 'navigate' || event.request.url.endsWith('/index.html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy=response.clone();
          caches.open(CACHE).then((cache)=>cache.put(event.request,copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((saved)=>saved || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then((saved) => saved || fetch(event.request)));
});
