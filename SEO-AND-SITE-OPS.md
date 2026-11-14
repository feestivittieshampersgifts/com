# Feestivities website: Pages, search, tracking, security and backup

## Hosting and search discoverability

The repository `feestivittieshampersgifts/com` is public. Its static files are prepared for `https://feestivittieshampersgifts.github.io/com/`: page-specific titles/descriptions and canonicals are set, and `robots.txt` plus `sitemap.xml` cover the four pages. The site uses repository-bundled photos and relative asset paths. However, GitHub Pages has **not** been enabled, so the expected public site URL is not confirmed live. An owner must open repository Settings → Pages, select `main` and the root (`/`) folder as the publishing source, save, and enable HTTPS enforcement. Then verify the four page URLs, images, `robots.txt` and `sitemap.xml` return successfully over HTTPS.

Google Search Console and Bing Webmaster Tools are **not verified and the sitemap has not been submitted**. Once Pages is live, complete ownership verification through each service using the owner's account and its supplied HTML/meta/DNS verification method. Add only the exact verification token/file supplied by the service, test it at the live URL, and submit `https://feestivittieshampersgifts.github.io/com/sitemap.xml`. Do not claim indexing or Search Console/Bing integration before confirmation.

The existing Google Business Profile has not been reviewed or edited in an authenticated owner session. Before proposing changes, inspect current profile category, address/service area, phone, URL, hours, description and imagery; get owner confirmation for public edits and do not invent facts.

## Tracking and speed

The Manus/Webdev analytics setting does not carry over to GitHub Pages. No GA4 property/tag or Measurement ID has been connected; actual visitor analytics remains pending the owner's GA4 property/ID and authorization. The image-tier selector supports a GA4 `select_item` event only when a `gtag` tag is installed.

`SPEED-TEST.md` records five-request local loopback measurements for the current Pages-ready files and representative images. These are not public-network, Google PageSpeed Insights or field Core Web Vitals results. Run production performance and mobile/desktop Core Web Vitals checks only after the live URL is reachable.

## Security posture

This is a static brochure/product site with no checkout, payment capture, password handling or server-side enquiry storage; enquiries open a prefilled WhatsApp message. All four pages include a restrictive same-origin CSP meta policy and strict-origin referrer policy, and off-site new-tab links use `noopener noreferrer`. The same-origin policy passed a static Preview render check, but Pages production behavior still needs a live check. GitHub Pages HTTPS enforcement remains to be enabled by the repository owner. Static Pages files cannot set arbitrary response headers; no custom HTTP security headers are claimed. Never commit API keys, verification secrets or customer records.

## Backup

`backups/feestivities-site-backup-2026-11-14.zip` is a point-in-time archive of website source, local image assets, the original uploaded website ZIP, the supplied seasonal reference image and an internal SHA-256 manifest. Its ZIP integrity and manifest are checked during creation. The repository is public, so the archive is public. This is a source snapshot, not an automated/offsite schedule, an external-account backup or a production database backup; the site has no application database.
