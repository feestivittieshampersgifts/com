# Speed preflight

On 2026-11-15, each listed resource was requested five times from the local Preview listener on port 3000. The table shows response bytes and median same-machine loopback time. All listed resources returned HTTP 200.

| Resource | Response bytes | Median loopback response time |
|---|---:|---:|
| Home HTML (`/`) | 26,563 | 0.84 ms |
| Services HTML (`/services.html`) | 14,029 | 0.68 ms |
| Christmas HTML (`/christmas.html`) | 21,876 | 0.79 ms |
| Contact HTML (`/contact.html`) | 11,752 | 0.76 ms |
| Shared CSS (`/css/style.css`) | 37,295 | 0.70 ms |
| Seasonal CSS (`/css/christmas.css`) | 16,568 | 0.61 ms |
| Shared JavaScript (`/js/main.js`) | 6,027 | 0.45 ms |
| Seasonal JavaScript (`/js/christmas.js`) | 5,997 | 0.64 ms |
| Robots (`/robots.txt`) | 92 | 0.49 ms |
| Sitemap (`/sitemap.xml`) | 441 | 0.51 ms |
| Separate ₦275k panel (`/assets/holiday/christmas-hamper-275k.jpg`) | 125,712 | 0.56 ms |
| Separate ₦360k panel (`/assets/holiday/christmas-hamper-360k.jpg`) | 132,994 | 0.73 ms |
| Separate ₦550k panel (`/assets/holiday/christmas-hamper-550k.jpg`) | 127,732 | 0.66 ms |
| Three-tier source image (`/assets/holiday/source/hamper-price-list-reference.png`) | 933,225 | 1.10 ms |

These are local HTTP measurements, not public-network timings, a Google PageSpeed Insights result, or field Core Web Vitals. They do not represent real device/network performance, production caching, compression or CDN behavior. GitHub Pages is not enabled yet; repeat public mobile and desktop checks after the site is reachable over HTTPS.
