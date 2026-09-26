# EDED GROUP: dark redesign

A dark-themed, modern rebuild of [ededcourses.com](https://ededcourses.com) as a static site (plain HTML, CSS and JavaScript, no build step).

All content comes from the live WordPress site: Tutor LMS courses, WooCommerce products, menus, mentors, HSC batch landing pages, student review screenshots and the legal pages.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home: hero, HSC 26/27/28 batch picker, course sections, why EDED, student reviews, mentors |
| `courses.html` | All courses with category filters and search (`?cat=admission\|aca2ad\|revision\|a2z\|other`); older HSC 24/25 batches are in a collapsed section |
| `hsc26-landing.html` | Standalone HSC 26 Compact Admission landing page (light, editorial design). Self-contained and scoped under `.hsc`, so it can be pasted into one Elementor "Custom HTML" widget; offer, coupon, countdown and weekly tracker are set by `data-*` attributes at the top |
| `batch.html?b=26` | HSC batch landing page (26, 27, 28): price, coupon, countdown, demo classes, courses in the batch |
| `shop.html` | Compact Publications: hand-notes and e-books |
| `mentors.html` | Mentor team with booking links |
| `about.html` | About and contact details |
| `legal.html?p=terms\|privacy\|refund` | Legal pages |

## Editing content

Everything lives in `assets/js/data.js`: courses, prices, products, mentors, batch offers and coupons. Change it there and every page updates.

Images load from `ededcourses.com/wp-content/uploads/`. "Enroll", "Buy now" and "My Account" link to the live site, so checkout, payments (bKash, SSLCommerz) and the student dashboard keep working through WordPress.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
