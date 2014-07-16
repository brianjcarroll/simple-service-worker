// caching.js
this.version = 1;

this.addEventListener("install", function(e) {
  // Create a cache of resources. Begins the process of fetching them.
  var shellResources = new Cache(
    "/",
    "/css/base.css",
    "/js/site.js"
  );

  // The coast is only clear when all the resources are ready.
  e.waitUntil(shellResources.ready());

  // Add Cache to the global so it can be used later during onfetch
  caches.set("shell-v1", shellResources);
});

this.addEventListener("fetch", function(e) {
  // No "onfetch" events are dispatched to the ServiceWorker until it
  // successfully installs.

  // All operations on caches are async, including matching URLs, so we use
  // Promises heavily. e.respondWith() even takes Promises to enable this:
  e.respondWith(caches.match(e.request));
});