# Feestivities Hampers & Gifts

A responsive four-page brand website rebuilt from the supplied structured-site ZIP, with a dedicated Christmas & New Year hamper selector. Its visual direction is an editorial gift atelier with restrained liquid-glass surfaces, real product photography, warm paper tones and a deep berry accent; the holiday collection uses a quiet pine-and-brass seasonal palette.

## Pages

- `index.html` — brand introduction, filterable gift edit, seasonal feature, occasion discovery and WhatsApp enquiry links.
- `services.html` — hampers, gifts, flower bouquets, souvenirs and the supplied occasion categories.
- `christmas.html` — seven selectable prices from ₦30,000 through ₦550,000, original supplied price-card photos, item lists, image enlargement and prefilled WhatsApp enquiries.
- `contact.html` — original contact details, social links and a validated enquiry form that opens a prefilled WhatsApp message.

## Images and business information

All website photos are from the uploaded source ZIP or the seasonal reference image supplied by the user; no stock or generated photography is used. The seasonal source artwork is preserved in `assets/holiday/`, while the published site uses its project-storage image paths. The smallest print on the supplied seasonal flyer is not fully legible, so the holiday page clearly asks customers to confirm those details with the business before ordering. The 275k, 360k and 550k artwork columns are especially small in the supplied original. The site retains the supplied email, WhatsApp number, and Instagram, Facebook and TikTok links. It does not invent delivery promises, locations or addresses. There is no cart, payment form or backend checkout; all enquiries continue through WhatsApp.

## SEO, tracking, security and backup

Page-specific titles/descriptions and supplied-photo Open Graph/Twitter previews are in place. The managed site-analytics setting is enabled for publication; no GA4 Measurement ID is connected. Google Search Console, Bing Webmaster verification and Google Business Profile edits still require a live domain/ownership verification and authenticated owner account as applicable. Details and limits are in [SEO-AND-SITE-OPS.md](SEO-AND-SITE-OPS.md), and local timing results are in [SPEED-TEST.md](SPEED-TEST.md). A verified ZIP source snapshot is available as [backups/feestivities-site-backup-2026-11-14.zip](backups/feestivities-site-backup-2026-11-14.zip).

## Run locally

Serve this folder with any static HTTP server, for example:

```sh
python3 -m http.server 3000
```

Then open `http://localhost:3000`.
