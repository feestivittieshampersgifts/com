# Speed preflight

On 2026-11-14, each listed path was requested five times over the local Preview listener on port 3000. The table records response bytes and median loopback round-trip time. All four HTML pages, the route manifest and the five CSS/JavaScript assets returned HTTP 200.

| Resource | Response bytes | Median loopback response time |
|---|---:|---:|
| Home HTML (`/`) | 26,345 | 0.92 ms |
| Services HTML (`/services.html`) | 13,656 | 0.51 ms |
| Christmas HTML (`/christmas.html`) | 21,089 | 0.46 ms |
| Contact HTML (`/contact.html`) | 11,351 | 0.51 ms |
| Route manifest (`/manus-routes.json`) | 327 | 0.43 ms |
| Shared CSS (`/css/style.css`) | 37,295 | 0.43 ms |
| Seasonal CSS (`/css/christmas.css`) | 17,006 | 0.55 ms |
| Shared JavaScript (`/js/main.js`) | 6,027 | 0.49 ms |
| Seasonal JavaScript (`/js/christmas.js`) | 6,548 | 0.60 ms |

These are local same-machine response times, not a public PageSpeed Insights result or field Core Web Vitals measurement. The holiday page's main artwork loads from managed project storage; its image delivery and real network/device conditions are not represented here. Run production speed and mobile/desktop Core Web Vitals checks against the canonical public domain after launch.
