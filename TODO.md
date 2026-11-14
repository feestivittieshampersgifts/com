# TODO

## Seasonal Christmas & New Year hamper page
- [x] Add a page specially dedicated to Christmas & New Year hampers and gifts, where clients can get details of the items shown in the supplied images.
- [x] List the legible items for each price option and provide a dropdown and selectable price cards that update the matching item list and WhatsApp enquiry.
- [x] Arrange all seven prices shown in the images in ascending order: ₦30,000, ₦50,000, ₦100,000, ₦250,000, ₦275,000, ₦360,000 and ₦550,000.
- [x] Use the supplied seasonal artwork and preserve the original full flyer as an enlargeable image; selecting a tier shows its image or outlines its panel on the full flyer.
- [ ] The supplied 275k, 360k and 550k price-panel columns are very narrow/low-resolution in the original flyer. For fully crisp source-image text, obtain a higher-resolution original from the business; until then the webpage labels the uncertain small print and asks customers to confirm package details on WhatsApp.

## Search, discovery, tracking and speed
- [ ] Add/verify the live website in Google Search Console. This requires the public production domain and its domain/DNS or HTML verification method.
- [ ] Optimize the already-created Google Business Profile for the account FeestivittiesHampersgifts01@gmail.com and business name “Feestivities Hampers & Gifts.” Public profile edits still require an authenticated account session and review of the existing profile data; no address or opening hours should be invented.
- [x] Enable the managed project's site-analytics setting. It is configured as enabled and will collect on a published site; a GA4 property/measurement ID has not been connected.
- [ ] Verify the live site in Bing Webmaster Tools and submit its sitemap. This requires the public production domain and ownership verification.
- [x] Run a local Preview speed preflight for page and asset response sizes/timing; production PageSpeed Insights and field Core Web Vitals still require the live public URL.
- [x] Rewrite page titles and descriptions for the four pages and add supplied-photo Open Graph/Twitter preview metadata. Absolute canonical/og:url tags are intentionally omitted until the real public origin is known.

## Backup and security
- [x] Create and integrity-check `backups/feestivities-site-backup-2026-11-14.zip`; it includes the current source, seasonal/social assets, original uploaded website ZIP, and supplied reference image.
- [x] Keep the static site on a minimal security posture: no checkout, credential capture, or enquiry backend; no third-party JavaScript library; strict-origin referrer policy; and `noopener noreferrer` on off-site new-tab links. Published HSTS is provided by the managed host.
- [ ] Verify production response security headers and update the backup after a future published-domain launch; no custom CSP or host headers are asserted from Preview.
