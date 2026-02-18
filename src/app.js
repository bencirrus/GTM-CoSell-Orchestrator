navigator.serviceWorker
  .register("./service-worker.js")
  .catch((err) => console.error("SW registration failed", err));
