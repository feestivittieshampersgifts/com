# Speed preflight

On 2026-11-14, each listed resource was requested five times from the local Preview listener on port 3000. The table shows response bytes and median same-machine loopback time. All listed resources returned HTTP 200.

| Resource | Response bytes | Median loopback response time |
|---|---:|---:|
| Home HTML (`/`) | 26,563 | 1.02 ms |
| Services HTML (`/services.html`) | 14,029 | 0.80 ms |
| Christmas HTML (`/christmas.html`) | 21,415 | 0.67 ms |
| Contact HTML (`/contact.html`) | 11,752 | 0.68 ms |
| Robots (`/robots.txt`) | 92 | 0.90 ms |
| Sitemap (`/sitemap.xml`) | 441 | 0.63 ms |
| Route manifest (`/manus-routes.json`) | 327 | 0.54 ms |
| Shared CSS (`/css/style.css`) | 37,295 | 0.62 ms |
| Seasonal CSS (`/css/christmas.css`) | 17,006 | 0.67 ms |
| Shared JavaScript (`/js/main.js`) | 6,027 | 0.62 ms |
| Seasonal JavaScript (`/js/christmas.js`) | 6,467 | 0.58 ms |
| Supplied logo (`/assets/images/logo.jpg`) | 78,322 | 0.61 ms |
| Supplied seasonal flyer (`/assets/holiday/christmas-season-flyer.jpg`) | 391,853 | 1.06 ms |
| Supplied 30k tier photo (`/assets/holiday/christmas-hamper-30k.jpg`) | 69,969 | 0.61 ms |

These are local HTTP measurements, not public-network timings, a Google PageSpeed Insights result, or field Core Web Vitals. They do not represent real device/network performance, production caching, compression or CDN behavior. GitHub Pages is not enabled yet; repeat public mobile and desktop checks after the site is reachable over HTTPS.
