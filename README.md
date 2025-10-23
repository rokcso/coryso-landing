# Coryso Studio Landing Page

> code with purpose, build with passion

Official landing page for Coryso Studio - an independent development studio dedicated to crafting digital products with soul.

## 🚀 Tech Stack

- **Pure Static Site** - No framework dependencies
- **HTML5 + CSS3 + Vanilla JavaScript**
- **JSON-driven** - Dynamic product loading
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Automatic system preference detection

## 📁 Project Structure

```
coryso-landing/
├── index.html              # Main landing page
├── favicon.svg             # Site favicon
├── assets/
│   ├── css/
│   │   └── main.css       # Stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   ├── data/
│   │   └── products.json  # Product data
│   └── img/               # Images and icons
├── pages/                 # Additional pages
├── .gitignore
└── README.md
```

## 🎨 Design Philosophy

- **Minimal & Clean** - Focus on content
- **Retro-inspired** - Monospace fonts and dashed borders
- **Developer-friendly** - Terminal aesthetic
- **Accessible** - High contrast and readable typography

## 🛠️ Development

No build process required. Simply open `index.html` in a browser or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

## 📝 Adding Products

Edit `assets/data/products.json`:

```json
{
  "products": [
    {
      "name": "Product Name",
      "description": "Product description",
      "link": "https://example.com",
      "icon": "🎯",
      "icon_img": "assets/img/icon.png"
    }
  ]
}
```

## 🚢 Deployment

This site is designed to be deployed on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

Copyright © 2024-2025, Coryso Studio. All rights reserved.

## 🔗 Links

- Website: https://coryso.com
- Blog: https://rokcso.com
