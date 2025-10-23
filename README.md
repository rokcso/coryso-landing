# Coryso™ Studio Landing Page

> code with purpose, build with passion.

Official landing page for Coryso™ Studio.

## Tech Stack

- Pure static HTML/CSS/JavaScript
- No frameworks, no build process
- JSON-driven product loading
- Dark mode support (auto-detect)

## Project Structure

```
coryso-landing/
├── index.html                  # Homepage
├── _redirects                  # URL rewrites for Cloudflare Pages
├── favicon.svg
├── pages/
│   └── privacy-policy.html
└── assets/
    ├── css/main.css
    ├── js/main.js
    ├── data/products.json
    └── img/
```

## Development

```bash
# Serve locally
python3 -m http.server 8000

# Visit http://localhost:8000
```

## Adding Products

Edit `assets/data/products.json`:

```json
{
  "products": [
    {
      "name": "Product Name",
      "description": "Description",
      "link": "https://example.com",
      "icon": "🎯"
    }
  ]
}
```

## Deployment

Deployed on **Cloudflare Pages** with Git auto-deploy.

The `_redirects` file maps `/privacy-policy` to `/pages/privacy-policy`.

Also compatible with Vercel, Netlify, and GitHub Pages.
