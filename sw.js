self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('kopi-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/kopi.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
