# Feestivities Hampers & Gifts

A responsive four-page brand website with a dedicated Christmas & New Year hamper selector. Its visual direction is an editorial gift atelier with restrained liquid-glass surfaces, warm paper tones and a deep berry accent; the holiday collection uses a quiet pine-and-brass seasonal palette.

## Pages

- `index.html` — brand introduction, filterable gift edit, seasonal feature, occasion discovery and WhatsApp enquiry links.
- `services.html` — hampers, gifts, flower bouquets, souvenirs and the supplied occasion categories.
- `christmas.html` — seven selectable prices from ₦30,000 through ₦550,000, tier-specific source photos, item lists, image enlargement and prefilled WhatsApp enquiries.
- `contact.html` — supplied contact details, social links and a validated enquiry form that opens a prefilled WhatsApp message.

## Seasonal tier artwork

The ₦275,000, ₦360,000 and ₦550,000 price panels are now separate full-height images cropped from the newly supplied source photo. Choosing one of those prices updates the large image, item list and WhatsApp message together. The page labels the 360k phrase “Pack of 2 or Three Chunks” and one 550k garlic-item line as unclear in the source, rather than guessing. The original image is kept at `assets/holiday/source/hamper-price-list-reference.png`. All website photos come from the uploaded site ZIP or the supplied seasonal references; no stock or generated photography is used.

## GitHub Pages

The repository is public. The static site is prepared for `https://feestivittieshampersgifts.github.io/com/`, but GitHub Pages has **not** been enabled yet, so that URL is not confirmed live. The repository owner must enable Pages from the `main` branch and `/` folder in repository Settings → Pages, then enforce HTTPS. Photos from the uploaded website ZIP are bundled under `assets/images/`; seasonal art is under `assets/holiday/`. HTML and scripts use relative asset paths that work under the `/com/` project path. `.nojekyll`, `robots.txt`, and `sitemap.xml` are included.

## Search, tracking, security and backup

Page-specific titles/descriptions, canonical links, supplied-photo Open Graph/Twitter previews, a sitemap and crawler policy are present. Google Search Console and Bing Webmaster ownership verification/sitemap submissions remain pending the live site and owner account verification. The Webdev-managed analytics setting does not track GitHub Pages, and no GA4 Measurement ID has been added. See [SEO-AND-SITE-OPS.md](SEO-AND-SITE-OPS.md), [SECURITY.md](SECURITY.md), and [SPEED-TEST.md](SPEED-TEST.md). The current source archive is [backups/feestivities-site-backup-2026-11-15.zip](backups/feestivities-site-backup-2026-11-15.zip); because the repository is public, the archive is public too. It is a source snapshot, not an automated/offsite backup service.

## Run locally

```sh
python3 -m http.server 3000
```

Open `http://localhost:3000`.
