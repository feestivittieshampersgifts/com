# Speed preflight

On 2026-11-15, each resource below was requested five times from the local Preview listener on port 3000. All requests returned HTTP 200; the table lists response bytes and median loopback time.

| Resource | Response bytes | Median loopback response time |
|---|---:|---:|
| Home HTML (`/`) | 26,595 | 0.61 ms |
| Services HTML (`/services.html`) | 14,061 | 0.54 ms |
| Christmas HTML (`/christmas.html`) | 21,908 | 0.56 ms |
| Contact HTML (`/contact.html`) | 11,784 | 0.51 ms |
| Shared CSS (`/css/style.css`) | 37,295 | 0.64 ms |
| Seasonal CSS (`/css/christmas.css`) | 16,568 | 0.61 ms |
| Shared JavaScript (`/js/main.js`) | 6,379 | 0.49 ms |
| Seasonal JavaScript (`/js/christmas.js`) | 5,997 | 0.64 ms |
| Robots (`/robots.txt`) | 92 | 0.48 ms |
| Sitemap (`/sitemap.xml`) | 441 | 0.45 ms |
| Separate ₦275k panel (`/assets/holiday/christmas-hamper-275k.jpg`) | 125,712 | 0.67 ms |
| Separate ₦360k panel (`/assets/holiday/christmas-hamper-360k.jpg`) | 132,994 | 0.54 ms |
| Separate ₦550k panel (`/assets/holiday/christmas-hamper-550k.jpg`) | 127,732 | 0.57 ms |
| Three-tier source image (`/assets/holiday/source/hamper-price-list-reference.png`) | 1,098,890 | 1.44 ms |

The shared script updates the footer copyright year from the Africa/Lagos calendar at page load; the annual boundary was checked across 2026→2027 and 2027→2028. Prices and campaign copy are not changed by this behavior.

These are local HTTP measurements, not public-network timings, a Google PageSpeed Insights result, or field Core Web Vitals. They do not represent real device/network performance, production caching, compression or CDN behavior. GitHub Pages is not enabled yet; repeat public mobile and desktop checks after the site is reachable over HTTPS.
