# Coryso™ Studio Landing Page

> code with purpose, build with passion.

Official landing page for Coryso™ Studio — an independent development studio crafting digital products with soul.

🔗 **Live Site:** [coryso.com](https://coryso.com)

---

## Tech Stack

- Pure static HTML/CSS/JavaScript
- No frameworks, no build process
- JSON-driven product loading
- Dark mode support (auto-detect)

---

## Project Structure

```
coryso-landing/
├── index.html                  # Homepage
├── pages/
│   └── privacy-policy.html     # Privacy policy page
├── assets/
│   ├── css/main.css            # Styles
│   ├── js/main.js              # Scripts
│   ├── data/products.json      # Product list
│   ├── img/                    # Product icons
│   └── og.png                  # Social media share image
├── favicon.ico                 # Favicons (multiple formats)
├── favicon.svg
├── favicon-*.png
├── apple-touch-icon.png
├── robots.txt                  # Search engine instructions
├── sitemap.xml                 # Site structure for SEO
└── _redirects                  # URL rewrites (Cloudflare Pages)
```

---

## Development

```bash
# Serve locally
python3 -m http.server 8000

# Visit http://localhost:8000
```

---

## Adding Products

Edit `assets/data/products.json`:

```json
{
  "products": [
    {
      "name": "Product Name",
      "description": "Brief description",
      "link": "https://example.com",
      "icon": "🎯",
      "icon_img": "assets/img/icon.png"
    }
  ]
}
```

---

## SEO Features

- ✅ Optimized meta descriptions
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card support
- ✅ Structured data (Schema.org)
- ✅ Canonical URLs
- ✅ Sitemap & robots.txt
- ✅ Multi-format favicons

---

## Deployment

Deployed on **Cloudflare Pages** with automatic Git deploys.

Also compatible with:
- Vercel
- Netlify
- GitHub Pages

---

## License

Copyright © 2024-2025, Coryso™ Studio. All rights reserved.
