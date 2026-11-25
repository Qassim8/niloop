# Image slots

Places in the site reserved for real photos and screenshots. Save a file here named after the slot
(`<id>.webp`, `.jpg` or `.png`), then rebuild (or restart `npm run dev`). The placeholder is replaced
automatically. While developing, each empty slot shows a labelled placeholder; on the live site the
labels are hidden (set `NEXT_PUBLIC_IMAGE_HINTS=true` to show them on a preview deployment).

| File name | Where | Size | What to upload |
| --- | --- | --- | --- |
| `hero-bg` | Home hero background (optional) | 1920×1080 | City / office photo in dark blue tones; shown faintly behind the logo pattern |
| `about-team` | About page, main image | 1200×1500 (4:5) | Real photo of the Niloop team at work |
| `about-gallery-1` … `about-gallery-3` | About page gallery (appears once at least one exists) | 1200×900 (4:3) | Behind-the-scenes shots: workspace, client workshops, handovers |
| `erp-dashboard` | ERP service page | 1600×1000 (16:10) | Real screenshot of the Matajri dashboard (reports / inventory) |
| `service-web` | Web development page | 1200×900 | A real site on laptop + phone (mockup) |
| `service-graphic` | Graphic design page | 1200×900 | A real brand identity from your portfolio |
| `service-marketing` | Digital marketing page | 1200×900 | Social media designs or a campaign results board |
| `person-bareq`, `person-sanaa`, `person-badr`, `person-zadi`, `person-abda`, `person-eatc` | Testimonials | 400×400 | Photo of the person giving the testimonial (with permission); replaces the logo |

Other pictures to supply (they live outside this folder):

| File | Where | Size |
| --- | --- | --- |
| `public/images/projects/matajri.webp`, `matajri-1.webp`, `matajri-2.webp` | Matajri project page / cards | 1600×900 |
| `public/images/projects/alzamil-clean*.webp` | Al Zamil Clean project | 1600×900 |
| `public/images/projects/sudatech*.webp` | Sudatech project | 1600×900 |
| `public/og-image.png` | Link preview on WhatsApp / social | 1200×630 |

Use WebP at quality ~85 and keep each file under ~300 KB.
