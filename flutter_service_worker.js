'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0bb261482e0eb81e0456903180a0c4fd",
"assets/AssetManifest.json": "42c68ec5587e96415fdbdc40fe8ec75a",
"assets/assets/images/png/about_us_text.png": "ccba25fd71d1c422a7f45626aad20ff2",
"assets/assets/images/png/content_text.png": "eb99fe9da75046532097f2b2425dc4b4",
"assets/assets/images/png/features_text.png": "9581bad83055a9e2429e7db8fcf393c9",
"assets/assets/images/png/Impact_text.png": "17d4c3b8bf9f978a6fdb44dcd00b0b3d",
"assets/assets/images/png/laptop_side_view.png": "1fa6651bd7aca0445279b37ad2a454a7",
"assets/assets/images/png/line.png": "d2124ae03938dbc2f6077dd19d2bfa6d",
"assets/assets/images/png/media1.png": "aa57ccd497c6e4dedf1174595d496dc4",
"assets/assets/images/png/media2.png": "a53221fb6761c01a305e5bcc113bb55f",
"assets/assets/images/png/media3.png": "57ebfc4c37a59cd62053926a7c6f02af",
"assets/assets/images/png/nbo_text.png": "0f6bbcff875a81a909673abba00c602e",
"assets/assets/images/svg/calender_icon.svg": "babaa5c7077cc9836d244a8c8a940343",
"assets/assets/images/svg/circle.svg": "e85b015eae8e253adbf3b32a164be217",
"assets/assets/images/svg/crown_icon.svg": "241607a27716e9ca311ac678aeae4144",
"assets/assets/images/svg/dashboard_correct_icon.svg": "e6913e54d9e39487dc40c5ce89e4ee19",
"assets/assets/images/svg/dashboard_icon_0.svg": "be7fc60c7bc8b93f25169808b99a1c52",
"assets/assets/images/svg/dashboard_icon_1.svg": "72dd1a4c9b0d1e135a793ec776598906",
"assets/assets/images/svg/dashboard_icon_2.svg": "911cd72020fd816bdc3693bdff87cf9a",
"assets/assets/images/svg/explore_courses.svg": "81998090b88df6c95c66ec0f72256ef5",
"assets/assets/images/svg/eye.svg": "d7331bf4f7d6262e1d9239295da8f2a9",
"assets/assets/images/svg/format_icon.svg": "0ed765370934c28b2c4b3a470dc276ad",
"assets/assets/images/svg/instagram.svg": "bb65207c37f1ed15f5669d3cd3ad3633",
"assets/assets/images/svg/linkedin.svg": "02818e9f8434472ac42f155a847f790f",
"assets/assets/images/svg/network_icon.svg": "bad199ac500303daec75cc3e792ed02c",
"assets/assets/images/svg/people.svg": "3f85196b9eb20dc9e48adb431e62e92b",
"assets/assets/images/svg/telegram.svg": "ed85896e8b330d7734ab7a9203b78212",
"assets/assets/images/svg/uai_logo.svg": "d7c4f50f5dae0cb6beeda736e12e5e66",
"assets/assets/images/svg/uai_logo2.svg": "5cef2b2f15b2e7c269cd81bb4fa4d3b1",
"assets/assets/images/svg/uai_logo_name.svg": "12b7b30230be309c6ba7193f18b42b72",
"assets/assets/images/svg/whatsapp.svg": "47c860a7ab86aa1aa1017ba17f50879f",
"assets/assets/videos/unbox.mp4": "7dacf02e6d6bd680720a04326af7221c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "87047cecd52cc5167247a59b566ad531",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5096859873b6d4d9f58b990b7ecbe951",
"/": "5096859873b6d4d9f58b990b7ecbe951",
"main.dart.js": "745bdac6ed07a073107e4e3fffea95a1",
"manifest.json": "a8a6d6add897724779bfe7fd96b82e12",
"version.json": "5db97b0b03d8daf2a90dc8e7a9e16023"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
