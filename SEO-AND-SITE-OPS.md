# Feestivities website: search, tracking, security and backup notes

## Completed in this project

The static website includes a dedicated Christmas & New Year page with seven selectable hamper price tiers, item lists, supplied artwork, an enlargeable image viewer and WhatsApp enquiries. Titles and descriptions are set page by page; supplied-photo Open Graph and Twitter preview imagery is set without guessing a public site address. The site's `manus-routes.json` declares the four pages. Canonical and absolute `og:url` tags are intentionally absent until the real public origin is configured.

The managed project configuration has its site-analytics switch enabled. This setting is stored for the website; collection is available after publication. The seasonal selector also emits a GA4 `select_item` event only when a `gtag` property/tag is installed. No GA4 Measurement ID or authenticated Google Analytics property was supplied, so no GA4-specific traffic reporting is claimed.

## Google and Bing account setup still required

This project currently has no configured public production origin and is not published. Google Search Console and Bing Webmaster Tools ownership verification, sitemap submission, and live-index checks therefore remain pending. Once the owner supplies the real domain and configures its DNS/HTML verification, use the published `/sitemap.xml` and `/robots.txt` paths and verify their actual public responses before submission. Do not use the Preview origin as a canonical URL or ownership record.

The account email `FeestivittiesHampersgifts01@gmail.com` and profile name `Feestivities Hampers & Gifts` were supplied, but no authenticated Google Business Profile session or existing profile details were available. No public listing fields have been changed. To optimize it, first inspect the owner's current category, address/service area, phone, URL, hours, description and images in the authenticated account; confirm proposed public-facing edits before saving. Do not invent an address or opening hours.

## Speed-test scope

`SPEED-TEST.md` records a local Preview loopback preflight for the primary page and seasonal assets. The measurements do not represent public-network latency, real image-delivery timing, Google PageSpeed Insights scores or field Core Web Vitals. Measure mobile and desktop against the actual production domain after publication.

## Security posture

This is a static site: there is no checkout, payment capture, login/password handling or server-side enquiry storage. The contact form opens a prefilled WhatsApp message. The pages use a strict-origin referrer policy, off-site links opened in new tabs use `rel="noopener noreferrer"`, and the site does not load a third-party JavaScript library. The managed host supplies HSTS on published responses under its hosting contract. This project does not claim a custom Content Security Policy or custom response-header configuration; add and verify further headers only against the real published host so the platform's Preview and analytics injection are not inadvertently blocked.

## Backup

A point-in-time archive is stored at `backups/feestivities-site-backup-2026-11-14.zip`. It contains the current website source and notes, local seasonal/social-preview assets, the original uploaded website ZIP and the supplied seasonal reference image. The archive includes an internal SHA-256 manifest and passed ZIP integrity checking. It is a source snapshot, not an automated/offsite schedule, a copy of external account data, or a production database backup. The canonical Git repository also retains saved project history.
