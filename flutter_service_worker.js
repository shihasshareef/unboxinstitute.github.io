'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c7cceb94af98b235ae4479b27a0b29f6",
"assets/AssetManifest.json": "2edc8e8f10ecd420babbc120df6d46ce",
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
"assets/assets/images/svg/uai_logo_name_mobile.svg": "5b41e812cb31c833d3c132cb2fe2e81f",
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
"index.html": "8d8355bbc708264735ab1e75ba7c9a51",
"/": "6c55564391b7b841d2eab5e069b36d64",
"main.dart.js": "a5778cf52f64ac61f93032536dd71045",
"manifest.json": "a8a6d6add897724779bfe7fd96b82e12",
"unboxinstitute.github.io/.git/COMMIT_EDITMSG": "8d0386cb84c4afa480503c76b73ec970",
"unboxinstitute.github.io/.git/config": "9480e80721d2dd81df5a079a7120653f",
"unboxinstitute.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"unboxinstitute.github.io/.git/FETCH_HEAD": "229b5ea80d58fc2cd4ce8337ee31ada4",
"unboxinstitute.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"unboxinstitute.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"unboxinstitute.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"unboxinstitute.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"unboxinstitute.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"unboxinstitute.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"unboxinstitute.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"unboxinstitute.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"unboxinstitute.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"unboxinstitute.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"unboxinstitute.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"unboxinstitute.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"unboxinstitute.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"unboxinstitute.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"unboxinstitute.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"unboxinstitute.github.io/.git/index": "003ab80cc3ff8dca295da70728224949",
"unboxinstitute.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"unboxinstitute.github.io/.git/logs/HEAD": "6e939ed63da0878504e2c77c198658ab",
"unboxinstitute.github.io/.git/logs/refs/heads/main": "6e939ed63da0878504e2c77c198658ab",
"unboxinstitute.github.io/.git/logs/refs/remotes/origin/HEAD": "5ea629eaf178f2c2c7d751296e1fb55c",
"unboxinstitute.github.io/.git/logs/refs/remotes/origin/main": "9023cdec50ffae771bc87352c5532e78",
"unboxinstitute.github.io/.git/objects/02/ca5a3d9dd4cb793a6a9487e7501874def8e6de": "32fc7fb913157b66a9f1a6b6ad61cdb2",
"unboxinstitute.github.io/.git/objects/05/0d23fcbdca2f22cd638431e9ac7e9c57c79b92": "baed7fac3b959994f94e1bcc83023186",
"unboxinstitute.github.io/.git/objects/09/ffa85ee9f81ef487371a8672aa87562afaca0e": "ab6b24117bb5857e3e819ec6ea04d59e",
"unboxinstitute.github.io/.git/objects/0a/f13b15d6d371c11a34b7f44d2c2d5b53fc6b99": "437b8ad580e3c48671a353cecb24f44a",
"unboxinstitute.github.io/.git/objects/0c/db39966ef94e169d4b292f86316d96179d2d36": "a4574d1fcdf3eb3e790df03bdf04890e",
"unboxinstitute.github.io/.git/objects/10/0d79701e69d973a44791528008f2b34b3cec70": "612df6af4256c7122f83ab92b1887098",
"unboxinstitute.github.io/.git/objects/15/f3a1d73718bb198cec21a25c775eeda869277c": "b796940a0e46589baedaa5b01b82c111",
"unboxinstitute.github.io/.git/objects/31/def98830eb8a5d012581408549e29b0c1e0212": "8d689bf4898eafbfac8a6b43e32f82d0",
"unboxinstitute.github.io/.git/objects/3d/d26cf87f69a8eb59b4671f06b55917d057b0c3": "5841795561fee35212d527fd42af1a92",
"unboxinstitute.github.io/.git/objects/44/84eec1a7792da3aecdd008f8432b5debdee05f": "907e4902f89f493a33b0a16c47f33db4",
"unboxinstitute.github.io/.git/objects/45/19f6ef87ee8d27f4e37116488ec957f310de21": "db7e91eb9b6a2e2fe9655087a9b940a2",
"unboxinstitute.github.io/.git/objects/4d/ade28344664f49b471839db78e70267d55f6e8": "b0436da3360d9cb774c5936c8d416a6e",
"unboxinstitute.github.io/.git/objects/63/61f9b417f98dab62484ab6ac599febe58f67b7": "57781b757a98e7b2be9d84792b0c75e6",
"unboxinstitute.github.io/.git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
"unboxinstitute.github.io/.git/objects/70/844f801b4b1506e07199233ff979be98263012": "b863dd54911acbce2343678172f77ad1",
"unboxinstitute.github.io/.git/objects/80/37399a4dae6d6ae18ca520287d4249b295deff": "6ea8b783345fd0033829b8a446d78677",
"unboxinstitute.github.io/.git/objects/96/43286ac7396deae3f3fc1cf8aca2892f8976dd": "34218b74d86bcbebfa3c948ab1f75357",
"unboxinstitute.github.io/.git/objects/9b/7a8f50fb23538f72df4b16f526b01d96aa2408": "2a73cdef7740e13357a03735c09f881a",
"unboxinstitute.github.io/.git/objects/9d/de69fc723907c998d56c32e55e8c2b406d6fda": "4e33921e7d769849a2998d60376ca126",
"unboxinstitute.github.io/.git/objects/ab/6ddfb842f3fc79bc454fea93f1a21450fd3f4b": "744a0fe4159cff44da83bb73b181f98c",
"unboxinstitute.github.io/.git/objects/ac/ee10f71864500c33aeea79a9639b024c06e8f9": "b1d17232ba3260b8278b1e9738d3012c",
"unboxinstitute.github.io/.git/objects/b8/497ceb5a26aef3d9e272c738e69282618e5f6b": "2c17ce985056d4b9acf24a43f96f5cae",
"unboxinstitute.github.io/.git/objects/e9/8d0ee5e27a59fd3d6a29d5aa991e27993c356f": "f82486ad6f48c4906353befddb7f71df",
"unboxinstitute.github.io/.git/objects/ed/a9d823d854aba8163cbb6963973fc5cfff0d14": "02d235c718d006cbe6569fe705a35b7e",
"unboxinstitute.github.io/.git/objects/f4/bf19d2ef1f0af8d7fede0b8bf56abe1e815d47": "2fafb1b77fe9eec172ab342c820ba7eb",
"unboxinstitute.github.io/.git/objects/f8/73bea64ca1a28611771a8b50ca31d8d2e63322": "9c49d66b455bd5dbab13333b65b459a0",
"unboxinstitute.github.io/.git/objects/pack/pack-069b540338c9533ba3d8279689c620cda00b4cb0.idx": "3aee3ed45c5ad76b21c88ca44fdf59d2",
"unboxinstitute.github.io/.git/objects/pack/pack-069b540338c9533ba3d8279689c620cda00b4cb0.pack": "1f60e34722dac0789ae14270c9ce8956",
"unboxinstitute.github.io/.git/objects/pack/pack-069b540338c9533ba3d8279689c620cda00b4cb0.rev": "d3010ab45c9cf9132fa6cab871328ecf",
"unboxinstitute.github.io/.git/ORIG_HEAD": "c9cdbf7c88a8d6c6bb22a20c2289bbb2",
"unboxinstitute.github.io/.git/packed-refs": "8421d7586a307156ca133a0fd6e1d8ba",
"unboxinstitute.github.io/.git/refs/heads/main": "77e210700c60971ac692a1a08a0b0dc2",
"unboxinstitute.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"unboxinstitute.github.io/.git/refs/remotes/origin/main": "77e210700c60971ac692a1a08a0b0dc2",
"unboxinstitute.github.io/assets/AssetManifest.bin": "0bb261482e0eb81e0456903180a0c4fd",
"unboxinstitute.github.io/assets/AssetManifest.json": "42c68ec5587e96415fdbdc40fe8ec75a",
"unboxinstitute.github.io/assets/assets/images/png/about_us_text.png": "ccba25fd71d1c422a7f45626aad20ff2",
"unboxinstitute.github.io/assets/assets/images/png/content_text.png": "eb99fe9da75046532097f2b2425dc4b4",
"unboxinstitute.github.io/assets/assets/images/png/features_text.png": "9581bad83055a9e2429e7db8fcf393c9",
"unboxinstitute.github.io/assets/assets/images/png/Impact_text.png": "17d4c3b8bf9f978a6fdb44dcd00b0b3d",
"unboxinstitute.github.io/assets/assets/images/png/laptop_side_view.png": "1fa6651bd7aca0445279b37ad2a454a7",
"unboxinstitute.github.io/assets/assets/images/png/line.png": "d2124ae03938dbc2f6077dd19d2bfa6d",
"unboxinstitute.github.io/assets/assets/images/png/media1.png": "aa57ccd497c6e4dedf1174595d496dc4",
"unboxinstitute.github.io/assets/assets/images/png/media2.png": "a53221fb6761c01a305e5bcc113bb55f",
"unboxinstitute.github.io/assets/assets/images/png/media3.png": "57ebfc4c37a59cd62053926a7c6f02af",
"unboxinstitute.github.io/assets/assets/images/png/nbo_text.png": "0f6bbcff875a81a909673abba00c602e",
"unboxinstitute.github.io/assets/assets/images/svg/calender_icon.svg": "babaa5c7077cc9836d244a8c8a940343",
"unboxinstitute.github.io/assets/assets/images/svg/circle.svg": "e85b015eae8e253adbf3b32a164be217",
"unboxinstitute.github.io/assets/assets/images/svg/crown_icon.svg": "241607a27716e9ca311ac678aeae4144",
"unboxinstitute.github.io/assets/assets/images/svg/dashboard_correct_icon.svg": "e6913e54d9e39487dc40c5ce89e4ee19",
"unboxinstitute.github.io/assets/assets/images/svg/dashboard_icon_0.svg": "be7fc60c7bc8b93f25169808b99a1c52",
"unboxinstitute.github.io/assets/assets/images/svg/dashboard_icon_1.svg": "72dd1a4c9b0d1e135a793ec776598906",
"unboxinstitute.github.io/assets/assets/images/svg/dashboard_icon_2.svg": "911cd72020fd816bdc3693bdff87cf9a",
"unboxinstitute.github.io/assets/assets/images/svg/explore_courses.svg": "81998090b88df6c95c66ec0f72256ef5",
"unboxinstitute.github.io/assets/assets/images/svg/eye.svg": "d7331bf4f7d6262e1d9239295da8f2a9",
"unboxinstitute.github.io/assets/assets/images/svg/format_icon.svg": "0ed765370934c28b2c4b3a470dc276ad",
"unboxinstitute.github.io/assets/assets/images/svg/instagram.svg": "bb65207c37f1ed15f5669d3cd3ad3633",
"unboxinstitute.github.io/assets/assets/images/svg/linkedin.svg": "02818e9f8434472ac42f155a847f790f",
"unboxinstitute.github.io/assets/assets/images/svg/network_icon.svg": "bad199ac500303daec75cc3e792ed02c",
"unboxinstitute.github.io/assets/assets/images/svg/people.svg": "3f85196b9eb20dc9e48adb431e62e92b",
"unboxinstitute.github.io/assets/assets/images/svg/telegram.svg": "ed85896e8b330d7734ab7a9203b78212",
"unboxinstitute.github.io/assets/assets/images/svg/uai_logo.svg": "d7c4f50f5dae0cb6beeda736e12e5e66",
"unboxinstitute.github.io/assets/assets/images/svg/uai_logo2.svg": "5cef2b2f15b2e7c269cd81bb4fa4d3b1",
"unboxinstitute.github.io/assets/assets/images/svg/uai_logo_name.svg": "12b7b30230be309c6ba7193f18b42b72",
"unboxinstitute.github.io/assets/assets/images/svg/whatsapp.svg": "47c860a7ab86aa1aa1017ba17f50879f",
"unboxinstitute.github.io/assets/assets/videos/unbox.mp4": "7dacf02e6d6bd680720a04326af7221c",
"unboxinstitute.github.io/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"unboxinstitute.github.io/assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"unboxinstitute.github.io/assets/NOTICES": "87047cecd52cc5167247a59b566ad531",
"unboxinstitute.github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"unboxinstitute.github.io/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"unboxinstitute.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"unboxinstitute.github.io/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"unboxinstitute.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"unboxinstitute.github.io/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"unboxinstitute.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"unboxinstitute.github.io/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"unboxinstitute.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"unboxinstitute.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"unboxinstitute.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"unboxinstitute.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"unboxinstitute.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"unboxinstitute.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"unboxinstitute.github.io/index.html": "6c55564391b7b841d2eab5e069b36d64",
"unboxinstitute.github.io/main.dart.js": "745bdac6ed07a073107e4e3fffea95a1",
"unboxinstitute.github.io/manifest.json": "a8a6d6add897724779bfe7fd96b82e12",
"unboxinstitute.github.io/version.json": "5db97b0b03d8daf2a90dc8e7a9e16023",
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
