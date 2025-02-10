'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "81824c318c06bad1cc748a2066a299da",
"version.json": "405c14d00889f8b7b7fd16c0874c85f1",
"pdf.worker.min.js": "773a230f56117440b9da7f7857670cd1",
"index.html": "258bef30729abddb6b1a73fea105e998",
"/": "258bef30729abddb6b1a73fea105e998",
"pdf.js": "f5a277ea292a9fc65c699e3911fda3fc",
"main.dart.js": "223647e23e6d598831ccb4cf6ed78e13",
"pdf.worker.js": "8fc217974499db7bb25c2da03e6974d4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "808bbf7e3bb27e6162c87924601b623b",
".git/config": "7a6dbaa62566a630503da4f713d311eb",
".git/objects/61/a5420a15f33a34d5296f6f82c17df7b38ad856": "459511e5e02638e0169280be430021ae",
".git/objects/59/7ef6c495edf60d354291b65a1aceb003f1891a": "0d8d970720d8c623d049d6e02a3fb7a3",
".git/objects/57/116c11bf10f300816bc8cb89d4c123da817512": "7fa042bda480dcbc2983377f2336b2f3",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/7cc2407b1a52146fca2670f3385c4e3f6afd6d": "855d26c460fb78748e3e03f21156f833",
".git/objects/3d/340ec211829e9a1c0506f80dce11665f22cae3": "e2524e15d004fb9a828b6895dcf28e28",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/c2e2be11e9b0788a8ff991c3904ba120279f73": "9077364f0a5914647e4d188aa061b899",
".git/objects/f3/e0f407e96999c58ea53334d740036a2c04f115": "4bb0ddba4084a3bbe6a81ef280ed3b8a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/0e9fc54faf81eeec673b65d68af023ea37b40f": "e0636b8f4bf04d1d5ed054f0c6806cc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3bb2609370c83bd5dca3c51b4acb125c5125cb": "25c291db603b59294d060cc4bba25134",
".git/objects/e4/4f1242379d2a6289a7e1621e3f446e6587cee5": "5a580769435a6bb11baa4327eb1e2e10",
".git/objects/18/b3f4404996cbd107e04bdf1d2992c673662d75": "e351c99dc9032dd8b8b2d4e01fef5da4",
".git/objects/42/6e86c3dde188b8074e948ba37f3a505b1eb427": "63846e6cee97edb4677fcc39ab15a784",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/d119b889ec9a4a1c802fbe96c153dd800360a9": "fc12fdfcdcef1e9abd18dca8f4409117",
".git/objects/19/768dcff4ab923326996b2a874be5801df3680e": "fdfbb3a20c899701b0e71fa691a2a0ca",
".git/objects/4d/b550837e3c59f405d05372de12e486c214248e": "0deb7dbbd97acfd936d200d983fd7de5",
".git/objects/72/c4053c530f37c7d35d76456f940a306d8b7ddb": "362525b05446ab83c0ece57440aa4dde",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/9fc9abb4ae2525cde70bc5c1f6962cc90a2ba9": "bba5edbc75eb6290c1993872c9f59b33",
".git/objects/00/74b6bec6f23337e5e0d5872fbb6fa33d3438a9": "9c92a74d233de50576c132c51fb588b5",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/52/5e06e9c37fe6465747bd57cf51949a27cf2142": "9a21cfec627c6bf131edc6fffa928751",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/9d83b75b2da3d6e9c3550d788d4e75098634e1": "24822a0fba6576cededbabcfe10b1c69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/18e09da1f5eadc5595fd8b2c42a26041f733e3": "bf6c1d5e8f8c008b73ac6dce7924f8d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/ae43558921f376f8f37701b70eeef2ab3cea62": "6fce8e8119e5aaad309ae242cd3de178",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/184451588643aaee4b0a896ebf55b0e8122262": "1f7a96db1a84326585497dc7737089a5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/3ab305a5d554af7fe67086f053014636663b8f": "06d3af01916363b7026845d9ac9bd2e5",
".git/objects/fa/5ffbf25611af4a08a2cd7d462087154fb90c6f": "b409ae1cd31f8659df113de695bd4341",
".git/objects/c5/49dd1db603f41d449f4e6fab35fbfe9979fadc": "09a43f43d4950370d49728fd3d020fde",
".git/objects/ce/334012c3d00a5d3cbfd2802568e3257ab91945": "bdc5f407fd1a47258c0bb2e32b62025b",
".git/objects/41/b5b0f21d59898f37a0e18f74f55d926ac4a600": "0489242b4181b5cc77f2498508a0a92c",
".git/objects/48/e29c2cb878900aafd77480fb1e6d2bfab9c007": "e53705122cb1704a237beb021990ddb0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/8229c25908c9dcaadec25b9fb00b2f5e3b7e34": "98c0d599f0934bc01bee445a483d8dd4",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/5cf2f0c1883432386ab41e48d79e7d07880fce": "426cdfc4a109f8395a648f0f038e4cd7",
".git/objects/76/0a3f9b499f973e0efaabf58b1b377890ec4041": "44bbe0cb5c568cef2d100c4d46be709e",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/13/4ef770a1018d656a4f122e09ac2bcb76e39a84": "ee99b4a54f0eb21a8191a3a307a83fb7",
".git/objects/7a/f40c0a1cc23ca7f7d3df99c4b71388bb7cd8c4": "b7d45e6189a119085e7f367ba343e532",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e61a4dc844cd6fdcd6dd46a99e4b71d7",
".git/logs/refs/heads/main": "c48942897d019603472503404d274e88",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b0fed3bd22e350e11c814096bdacaf27",
".git/index": "0ed81303f93259f0ed1bf6e6d23fb5df",
".git/COMMIT_EDITMSG": "a4f02b83947db8c07d819fc0e657407e",
"assets/AssetManifest.json": "1c0e5711294adbe9078296fdc8b034b0",
"assets/NOTICES": "80310dd5532f2dbf36f3ef7992bef0a2",
"assets/FontManifest.json": "ba32479b83dc9e87789b8b81a358abb1",
"assets/AssetManifest.bin.json": "45047287b21ced62837edc375065179a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/images/khatam.png": "30b5e4dd4b231e3ae08615ccfa713c09",
"assets/lib/images/hinai-signature.png": "a8d44f294faec7a2f0d764478a3f2c13",
"assets/lib/images/moh-signature.png": "ed39a76c1b5219b497bea20e9c6a690e",
"assets/lib/images/sa-signature.png": "984f41503d2502bd233623c0617228de",
"assets/lib/images/signature.svg": "5828b8fd678254681b4ac3fd216b17ed",
"assets/lib/images/ha-signature.png": "234238404852e366872fe5c1d0f0efe3",
"assets/lib/images/logo.png": "88a0de8b21c07dc89c49cb536b57ecba",
"assets/lib/images/sal-signature.png": "3ecf5fe5ef4bf5879211ac68d58d0d53",
"assets/AssetManifest.bin": "cfff6017ef5a438b770cbdbaa4b34dee",
"assets/fonts/Amiri-Bold.ttf": "4579323186687979ed908712b75f8fde",
"assets/fonts/Cairo-Regular.ttf": "94c4feb516a9bd22a5ee417f6e099c93",
"assets/fonts/Amiri-Regular.ttf": "a0eaf4f9024ba05c091e59d5eaccccee",
"assets/fonts/Cairo-Bold.ttf": "19a30f18e32cf8dbb9d0cfcee9e2c01e",
"assets/fonts/MaterialIcons-Regular.otf": "23388e092a9909eb4f3d007493641864",
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
