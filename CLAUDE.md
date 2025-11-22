# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for Coryso Studio, built with pure HTML/CSS/JavaScript (no frameworks or build process). The site showcases studio products and is deployed on Cloudflare Pages.

## Development Commands

```bash
# Serve locally for development
python3 -m http.server 8000

# Visit the local site
http://localhost:8000
```

## Architecture

### Core Structure
- **Static Site**: Pure HTML/CSS/JavaScript with no build tools or frameworks
- **Product Management**: Products are loaded dynamically from `assets/data/products.json`
- **Dark Mode**: Automatic detection using `prefers-color-scheme` CSS media query
- **SEO Optimization**: Includes meta tags, structured data, sitemap, and multi-format favicons

### Key Files
- `index.html` - Main homepage with product grid
- `assets/js/main.js` - Handles product loading from JSON and email obfuscation
- `assets/css/main.css` - Styles with CSS custom properties for theming
- `assets/data/products.json` - Product catalog (name, description, link, icons)

### Data Flow
1. `main.js` fetches `products.json` on DOMContentLoaded
2. Products are dynamically rendered into `.products-grid`
3. Each product card supports both emoji icons and custom image icons
4. Email address is obfuscated in JavaScript to prevent scraping

### Product Management
To add/update products, edit `assets/data/products.json`:
- `name`: Product name (long names >20 chars get special styling)
- `description`: Brief description
- `link`: External product URL
- `icon`: Emoji fallback icon
- `icon_img`: Path to custom icon image (optional)

### Deployment
- **Primary**: Cloudflare Pages with automatic Git deploys
- **Compatible**: Vercel, Netlify, GitHub Pages
- URL rewrites handled via `_redirects` file for Cloudflare Pages

## Content Management

- Products: Edit `assets/data/products.json`
- Styles: Modify CSS custom properties in `assets/css/main.css` for theming
- SEO: Meta tags and structured data are in `index.html`
- Favicons: Multiple formats in root directory for cross-platform support