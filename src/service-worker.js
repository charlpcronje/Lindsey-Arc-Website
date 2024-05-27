// file: src/service-worker.js
// version: 1.0.0

import {
    build,
    files,
    version
} from '$service-worker';

const CACHE_NAME = `cache-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(ASSETS);
    })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)));
    })());
});

self.addEventListener('fetch', (event) => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) {
            return cachedResponse;
        }

        const response = await fetch(event.request);
        cache.put(event.request, response.clone());

        return response;
    })());
});