# TODO

## Christmas & New Year hamper page
- [x] Add a page specially dedicated to Christmas & New Year hampers and gifts, where clients can get details of the items shown in the supplied images.
- [x] List the legible items for each price option and provide a dropdown and selectable price cards that update the matching item list and WhatsApp enquiry.
- [x] Arrange all seven prices shown in the images in ascending order: ₦30,000, ₦50,000, ₦100,000, ₦250,000, ₦275,000, ₦360,000 and ₦550,000.
- [x] Use the supplied seasonal artwork and preserve the original full flyer as an enlargeable image; selecting a tier shows its image or outlines its panel on the full flyer.
- [ ] For fully crisp source-image text in the very small 275k, 360k and 550k panels, obtain a higher-resolution original; until then the page asks customers to confirm unclear details on WhatsApp.

## GitHub Pages, SEO and tracking
- [x] Make the repository public, as explicitly approved by the owner.
- [x] Prepare all four static pages for GitHub Pages under the `/com/` repository path, using bundled supplied ZIP photos and relative asset paths.
- [x] Add page-specific titles/descriptions, canonical/social URLs, `robots.txt` and `sitemap.xml` for `https://feestivittieshampersgifts.github.io/com/`.
- [ ] Enable GitHub Pages from branch `main`, root folder `/`, enforce HTTPS and confirm the live pages, images and sitemap. This needs repository Settings access; the website code and sitemap are already ready.
- [ ] Verify ownership in Google Search Console and submit the sitemap after the public site is live; this requires the owner's verification token/file or authenticated account session.
- [ ] Verify ownership in Bing Webmaster Tools and submit the sitemap after the public site is live; this requires the owner's verification token/file or authenticated account session.
- [ ] Connect GA4 tracking only after the business supplies/authorizes its Measurement ID. Webdev-managed analytics does not track GitHub Pages.
- [ ] Review and optimize the existing Google Business Profile in an authenticated owner session; inspect actual business data first and do not invent address, service area or hours.
- [x] Run a five-request local Preview speed preflight for pages, scripts, stylesheets, sitemap and representative original photos. This is not public production performance.
- [ ] Run public production speed and mobile/desktop field performance checks after the GitHub Pages site is live.

## Security and backup
- [x] Keep the static site free of checkout, payment capture, passwords and server-side enquiry storage; enquiries open WhatsApp.
- [x] Add a same-origin CSP meta policy, strict-origin referrer policy and `noopener noreferrer` on off-site new-tab links; the four-page Preview render succeeded.
- [ ] Verify production CSP and HTTPS after GitHub Pages is enabled; custom host response headers are not asserted.
- [x] Refresh and integrity-check the repository source ZIP after the Pages asset-path and SEO changes; the public repository and archive are public. Do not include API keys, verification secrets or customer records.
