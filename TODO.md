# TODO

## Christmas & New Year hamper page
- [x] Add a page specially dedicated to Christmas & New Year hampers and gifts, where clients can get details of the items shown in the supplied images.
- [x] List the legible items for each price option and provide a dropdown and selectable price cards that update the matching item list and WhatsApp enquiry.
- [x] Arrange all seven prices shown in the images in ascending order: ₦30,000, ₦50,000, ₦100,000, ₦250,000, ₦275,000, ₦360,000 and ₦550,000.
- [x] Use the supplied seasonal artwork as a full-flyer overview; each selectable price tier has its own matching image.
- [x] Use the newly supplied photo to accurately separate the ₦275,000, ₦360,000 and ₦550,000 hampers into their own complete image panels, preserving each tier's price and full item list without overlapping neighboring panels or cutting off content.
- [x] Show each newly separated panel on its matching selectable price option and item list, so customers can see which items belong to each of the three prices.
- [ ] Confirm the source's unusual 360k phrase “Pack of 2 or Three Chunks” and the remaining 550k garlic-item wording with the business; the page marks these as unclear instead of guessing.

## GitHub Pages, SEO and tracking
- [x] Make the repository public, as explicitly approved by the owner.
- [x] Prepare all four static pages for GitHub Pages under the `/com/` repository path, using bundled supplied ZIP photos and relative asset paths.
- [x] Add page-specific titles/descriptions, canonical/social URLs, `robots.txt` and `sitemap.xml` for `https://feestivittieshampersgifts.github.io/com/`.
- [ ] Enable GitHub Pages from branch `main`, root folder `/`, enforce HTTPS and confirm the live pages, images and sitemap. The expected URL returned GitHub Pages 404 on the last check; repository Settings access is still required.
- [ ] Verify ownership in Google Search Console and submit the sitemap after the public site is live; this requires the owner's verification token/file or authenticated account session.
- [ ] Verify ownership in Bing Webmaster Tools and submit the sitemap after the public site is live; this requires the owner's verification token/file or authenticated account session.
- [ ] Connect GA4 tracking only after the business supplies/authorizes its Measurement ID. Webdev-managed analytics does not track GitHub Pages.
- [ ] Review and optimize the existing Google Business Profile in an authenticated owner session; inspect actual business data first and do not invent address, service area or hours.
- [x] Run a five-request local Preview speed preflight for pages, scripts, stylesheets, sitemap and the three new tier photos. This is not public production performance.
- [ ] Run public production speed and mobile/desktop field performance checks after the GitHub Pages site is live.

## Security and backup
- [x] Keep the static site free of checkout, payment capture, passwords and server-side enquiry storage; enquiries open WhatsApp.
- [x] Add a same-origin CSP meta policy, strict-origin referrer policy and `noopener noreferrer` on off-site new-tab links; the four-page Preview render succeeded.
- [ ] Verify production CSP and HTTPS after GitHub Pages is enabled; custom host response headers are not asserted.
- [x] Refresh and integrity-check `backups/feestivities-site-backup-2026-11-15.zip` with the newly supplied source photo and three crops. The ZIP and all manifest hashes passed. Do not include API keys, verification secrets or customer records.
