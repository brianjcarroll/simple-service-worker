(function () {

  // force https
  if ((!location.port || location.port == "80") && location.protocol != 'https:') {
    location.protocol = 'https:';
  }

  // Register the service worker.
  if ('serviceWorker' in navigator) {
    test = navigator.serviceWorker.register('/js/sw.js', {
      scope: '/*'
    });
  }

}());