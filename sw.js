// // eikhane e sw means hocceh service worker(ja ei file ero name):

// // browser er cache e ekta offline-data name er option thakbe!:
// const CACHE_DATA = "offline-data";

// const STATIC_RESOURCES = ["index.html","app.js","logo.png"]

// // install service worker:
// self.addEventListener("install", async (e) => {

//     console.log("service worker install");

    
//     e.waitUntil(

//         (async () => {
//             const cache = await caches.open(CACHE_DATA);
//             return await cache.addAll(STATIC_RESOURCES);

//         })()
//     );



//     // amra developer tool e giye application er moddeh click kore barbar refresh marle jate auto new service worker install hoye jay tar jonne self.skipWaiting() likha laagse:
//     self.skipWaiting();
// });


// // listen for fetching request:

// self.addEventListener("fetch", async (e) => {
// 	console.log(`SW fetch: ${e.request.url}`);

// 	e.respondWith(
// 		(async () => {
// 			const cache = await caches.open(CACHE_DATA);

// 			try {
// 				const networkResponse = await fetch(e.request);
// 				await cache.put(e.request, networkResponse.clone());
// 				return networkResponse;
// 			} catch (error) {
// 				const cachedResponse = await cache.match(e.request);
// 				return cachedResponse;
// 			}
// 		})()
// 	);
// });

// // Activate the sw(service worker):

// self.addEventListener("activate", async (e) => {

//     console.log("Sw activate");
// })

// // 





const CACHE_DATA = "offline-data";
const STATIC_RESOURCES = ["index.html", "app.js", "logo.png"];

// Install the SW
self.addEventListener("install", async (e) => {
	console.log("SW install");

	e.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE_DATA);
			return await cache.addAll(STATIC_RESOURCES);
		})()
	);

	self.skipWaiting();
});

// Listen for fetching request
self.addEventListener("fetch", async (e) => {
	console.log(`SW fetch: ${e.request.url}`);

	e.respondWith(
		(async () => {
			const cache = await caches.open(CACHE_DATA);

			try {
				const networkResponse = await fetch(e.request);
				await cache.put(e.request, networkResponse.clone());
				return networkResponse;
			} catch (error) {
				const cachedResponse = await cache.match(e.request);
				return cachedResponse;
			}
		})()
	);
});

// Activate the SW
self.addEventListener("activate", async (e) => {
	console.log("SW activate");
}); //