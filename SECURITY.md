# Security

## Scope and data handling

This is a static public brochure and product site. It does not collect passwords, payment-card details, or store customer enquiry data. The enquiry form creates a WhatsApp message and navigates to WhatsApp; do not include sensitive personal or payment information in enquiries.

## Implemented safeguards

The site uses a same-origin Content Security Policy, a strict-origin referrer policy, and `noopener noreferrer` for links opened in new tabs. The pages load their scripts, styles and images from repository-local paths. There is no backend, account system, or checkout. Keep credentials, verification tokens, private customer data, and other secrets out of the repository and its backup archive.

GitHub Pages must be configured to enforce HTTPS. After launch, verify the public pages are served over HTTPS and review the deployed policy. Static GitHub Pages files cannot set arbitrary HTTP response headers; this document does not claim custom server headers.

## Reporting

Please do not report a suspected vulnerability in a public issue. Use GitHub's private vulnerability reporting for this repository if it is available, or contact the business through the contact channel published on the website.
