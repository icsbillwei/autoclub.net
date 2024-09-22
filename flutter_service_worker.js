'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7790a01f7cfd741d5725e67c87d5eb5c",
"assets/AssetManifest.bin.json": "de5711f5b7f8f86e1671ac6c5c6086cb",
"assets/AssetManifest.json": "dd48477ffbed1c1e06b35d08f216b699",
"assets/assets/images/autosandauctions-icon.svg": "159b172f239d6e716613af8416996d10",
"assets/assets/images/autosandauctions-long.svg": "be0e9310b10b4400e0a4ae57b9ea35b0",
"assets/assets/images/Corone-logo.svg": "ce4834fdacae2cf61b56fd5c8060010b",
"assets/assets/images/Corone.svg": "eae77d876e57dce32cc39bde70a4128e",
"assets/assets/images/downtown.svg": "f1ea7bf14432966f0edba53a74c67a77",
"assets/assets/images/game-bg.png": "ade6980f8af9c0a622509ef449d9762a",
"assets/assets/images/garage-bg.png": "acdde11e8778d65fff36ac6c5b6744e4",
"assets/assets/images/home.svg": "db49b92400d103834af0bd9828549e1a",
"assets/assets/images/hotel.svg": "76a5e081a6631f595ed79a33cf584878",
"assets/assets/images/mp.png": "39f8dfe7da216ab6e3910a298613ddd3",
"assets/assets/images/mt-long.svg": "80ad728ed63ae9eb62a12d48f14f662a",
"assets/assets/images/mt.png": "e709131f63e2cbc57fb6ec49756c16c5",
"assets/assets/images/no_cars.jpg": "1b824a877a73bdac5d6e7d9aac4b9f52",
"assets/assets/images/showroom.svg": "e6a12fdc13e58cf02bdac3de5e789161",
"assets/assets/images/tuning.svg": "c1270847f6273832c11419693cf93e61",
"assets/assets/images/wharf.svg": "a07fede0d4608ebdedc83536ffb81c8c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "78c118a7be8940b98a797bfb858743dd",
"assets/images/at-auto/at-auto-bg.png": "1b3f2607779978293be8c4c3d1e49994",
"assets/images/at-auto/at-auto-shop.png": "6f0a6b0929611154e9d5fa1d74c5c661",
"assets/images/at-auto/at-auto-white.png": "2026008dffe453cdfb10b2d80d83dabd",
"assets/images/at-auto/service-entry.png": "4aa5879e4927cab3fe9759754656e27a",
"assets/images/at-auto/upgrades-entry.png": "210c05a65ab98c2438dac0d85b0299b1",
"assets/images/autosandauctions-icon.svg": "159b172f239d6e716613af8416996d10",
"assets/images/autosandauctions-long.svg": "be0e9310b10b4400e0a4ae57b9ea35b0",
"assets/images/company-logos/courier.png": "b8b640574f1f01db03c1ce8c0740b345",
"assets/images/company-logos/hotel.png": "fac4c1c1afe89a5f549d1296277575d2",
"assets/images/company-logos/private-taxi.png": "4750d45259b101ae3f551ffe0392ba10",
"assets/images/company-logos/youber.png": "7b53472e2a8d4408e986c110099da762",
"assets/images/Corone-logo.svg": "ce4834fdacae2cf61b56fd5c8060010b",
"assets/images/Corone.svg": "eae77d876e57dce32cc39bde70a4128e",
"assets/images/downtown.svg": "f1ea7bf14432966f0edba53a74c67a77",
"assets/images/flags/ca.svg": "4f67be07db374b31b5fea5902e540895",
"assets/images/flags/cn.svg": "919d001e1dc5c6bec7b89b99e7c99204",
"assets/images/flags/de.svg": "3b979153dc5aba7cd1d27634fd64a097",
"assets/images/flags/ee.svg": "0c07b4c1ce4791a450a59182a8aff72a",
"assets/images/flags/fi.svg": "5b3833a61c8740336765c46c89c2a6f6",
"assets/images/flags/fr.svg": "770376a19bf07e9e33726baabac4647c",
"assets/images/flags/gb.svg": "5c231c8fb3adf7a11c96381b875231b7",
"assets/images/flags/id.svg": "b966e5565c7ca5538622eafdcc091c45",
"assets/images/flags/it.svg": "5dd499d625a2415aef316563427b867a",
"assets/images/flags/jp.svg": "b246edf04ee2ba6fa967722cdab72860",
"assets/images/flags/my.svg": "c93df666419c2279257b7a63ae9fe890",
"assets/images/flags/pl.svg": "8dae965602d8036252672fc2f07977eb",
"assets/images/flags/us.svg": "7dbba93c48658227ab3cee51c82933b9",
"assets/images/flags/za.svg": "aacb67f74183e59e459718e84e25083f",
"assets/images/game-bg.png": "ade6980f8af9c0a622509ef449d9762a",
"assets/images/garage-bg.png": "acdde11e8778d65fff36ac6c5b6744e4",
"assets/images/home.svg": "db49b92400d103834af0bd9828549e1a",
"assets/images/hotel.svg": "76a5e081a6631f595ed79a33cf584878",
"assets/images/icons/bodywork.svg": "28b65174db315005e8e63a94562eb593",
"assets/images/icons/current-location.png": "6cbcb42db78689cfc4f5b770f12cef53",
"assets/images/icons/drivetrain.svg": "22b50214f22c26afdbf73cb8678cca5a",
"assets/images/icons/engine.svg": "9f37f659862ff608b7d5091b6f9afee8",
"assets/images/icons/interior.svg": "d7311b9a415d760fc63b9dbae6594128",
"assets/images/icons/suspension.svg": "2a08208b7ebe5e194794cfb778bc81dd",
"assets/images/icons/wheelsandtires.svg": "aaee483f95f698d68d264527db7f14be",
"assets/images/locations/job-downtown.png": "4c22ba0ce4eab2aefaef8fc2225a28f6",
"assets/images/locations/job-hotel.png": "3b614751232b15d248e45dd00e315585",
"assets/images/locations/job-showroom.png": "f6afad5dcdcad9b89e30bee6ab54d679",
"assets/images/locations/job-wharf.png": "60f6d126de9f8fb1cc92826c0032b9ed",
"assets/images/mp.png": "39f8dfe7da216ab6e3910a298613ddd3",
"assets/images/mt-long.svg": "80ad728ed63ae9eb62a12d48f14f662a",
"assets/images/mt.png": "e709131f63e2cbc57fb6ec49756c16c5",
"assets/images/no_cars.jpg": "1b824a877a73bdac5d6e7d9aac4b9f52",
"assets/images/showroom.svg": "e6a12fdc13e58cf02bdac3de5e789161",
"assets/images/tuning.svg": "c1270847f6273832c11419693cf93e61",
"assets/images/weather/sunnyicon.svg": "c29ed3dd5cf767105dc57319188b9a15",
"assets/images/wharf.svg": "a07fede0d4608ebdedc83536ffb81c8c",
"assets/NOTICES": "ad9c67c8dab05987d532656171fb3f96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "65e6dc1c1b236857049558787e109148",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ffb5bba218026530c23de92633262f53",
"/": "ffb5bba218026530c23de92633262f53",
"main.dart.js": "09305576d5d31c6f4264b62c464dccf9",
"manifest.json": "5c0fcc3c9d82cdb50bd0c91a3014bcda",
"version.json": "7cfe29a0438fcaff0ddfa7501fcc723e"};
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
