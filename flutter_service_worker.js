'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4e153dd0acbafb9bffb71d20ca872b10",
"version.json": "f7564b0eb1adbde67f0ab43dc61f2aae",
"index.html": "bde4404eb78549b9ac9cd34b583a1302",
"/": "bde4404eb78549b9ac9cd34b583a1302",
"main.dart.js": "76f6534ed066e6ae49b8a9ee9e96d41c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c9676342de8aee57476e3b196e7f822a",
"word.js": "14f96945120be058214042b4df6d13bd",
"assets/images/marzooqi-signature.png": "c4cdcafc1c98074f12c4c7a27ae1cd58",
"assets/images/khalifa-signature.png": "a72f137ef93636f783189b7e2f59fed8",
"assets/images/omar-signature.png": "7c04ede238beeb2f06b9f92766fafbe9",
"assets/images/khatam.png": "7c8995cef842fe7362ac20d0723e0304",
"assets/images/abu-salim-signature.png": "01a4872ae98570686d7063423b8c21ec",
"assets/images/saeed-signature.png": "84a3c382642ca27aea12fa530240a0e2",
"assets/images/amal-mamari-signature.png": "40494a4b503fca89934988526998ca6b",
"assets/images/nada-signature.png": "581bc7e4136bf129c920c7307e314eca",
"assets/images/Page-Background.jpg": "6164288ed7849e70ee972b81d9c6c7da",
"assets/images/identical-stamp-enhanced-removebg.png": "5db1346d1c04a67ad61dc6c6a488c892",
"assets/images/naji-raisi-signature.png": "49e0b647dda7c7be0f296ef500d56a46",
"assets/images/asma-signature.png": "ec4ceae1e9d5d3337ae0aab86bc62d72",
"assets/images/salim-signature.png": "67c60e5e8869d098f750015b738f4404",
"assets/images/khadija-signature.png": "95c7a44b128dfe8a6c72402fe9199362",
"assets/images/al-sadi-signature.png": "519ce3fdaf6b802d4b54d9d385f143bc",
"assets/images/order-stamp-enhanced-removebg.png": "f6f0edbb823d5036dcd786b0d32a0436",
"assets/images/logo.png": "88a0de8b21c07dc89c49cb536b57ecba",
"assets/images/order-stamp.png": "e003ebe55590696c0feb2f67f34fb7f1",
"assets/images/abdullah-signature.png": "f4283e05de144d75f60b8eb85bacc065",
"assets/images/naji-signature.png": "5a351796564de69f3562b34677824e96",
"assets/images/Khatam-SVG.svg": "31aad9fc4fc9f928e4227c3657b97877",
"assets/images/shama-signature.png": "88dd1bd89f2dce7cbc16952ba64d63ee",
"assets/images/essam-signature.png": "d1120d9a29df0ccd659046b620fbd911",
"assets/images/azan-signature.png": "336f7da7613199aa1f85e523d8a0c760",
"assets/images/nawaf-signature.png": "8a0f53c1c9642c8e4328efa4cc594190",
"assets/images/amal-signature.png": "e6ea0f149241f066bbd2a1047ffbc15c",
"assets/images/waleed-signature.png": "7e1dd3c23d97dbb2732841545dc6819f",
"assets/images/alghaithi-signature.png": "498d6e7a1dac2a42eb98708b3c548273",
"assets/AssetManifest.json": "ef5e858b7ab1ebe460280355a2519c03",
"assets/NOTICES": "a21e12a1b1643432ad4e168f0bc712b0",
"assets/FontManifest.json": "99d7c895d79656b1c0d6ad8eed312cda",
"assets/AssetManifest.bin.json": "2bef251fe1f83cdf310cd65e076b4021",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "da62a40347db27f2423c0071e2600b85",
"assets/fonts/Amiri-Bold.ttf": "4579323186687979ed908712b75f8fde",
"assets/fonts/Cairo-Regular.ttf": "94c4feb516a9bd22a5ee417f6e099c93",
"assets/fonts/Amiri-Regular.ttf": "a0eaf4f9024ba05c091e59d5eaccccee",
"assets/fonts/Cairo-Bold.ttf": "19a30f18e32cf8dbb9d0cfcee9e2c01e",
"assets/fonts/MaterialIcons-Regular.otf": "b533b013a3f8eb346a4c29402b383c71",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
