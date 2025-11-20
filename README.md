# Amarre 🚢

Professional mooring and nautical services website for Spain.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Overview

Amarre is a modern, fully responsive static website designed for a nautical services company in Spain. The site features a clean, professional design optimized for all devices - mobile phones, tablets, and desktop computers.

## ✨ Features

- ✅ **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- ✅ **Mobile Navigation**: Hamburger menu for mobile devices with smooth animations
- ✅ **Professional Logo**: Custom Amarre branding integrated throughout
- ✅ **Projects Gallery**: Interactive project showcase with clickable cards
- ✅ **Project Details**: Dedicated pages for each project with full information
- ✅ **Semantic HTML5**: Clean, modern code structure
- ✅ **Modern CSS3**: Utilizes CSS Grid, Flexbox, and CSS custom properties
- ✅ **Accessible**: ARIA labels and keyboard navigation support
- ✅ **Multi-page**: Home, Services, Projects, About Us, and Contact pages
- ✅ **Zero Dependencies**: No frameworks or external libraries required
- ✅ **Professional Dev Tools**: ESLint, Prettier, Stylelint configured
- ✅ **Live Reload**: Development server with hot reload

## 📁 Project Structure

```
Amarre/
├── index.html              # Homepage
├── services.html           # Services page
├── projects.html           # Projects gallery page
├── project-detail.html     # Individual project details page
├── about.html              # About Us page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet (responsive)
├── js/
│   ├── script.js           # JavaScript for mobile navigation
│   └── project-detail.js   # Project details functionality
├── images/
│   └── logo.png            # Amarre logo
├── .vscode/                # VS Code settings and extensions
├── package.json            # Node.js dependencies and scripts
├── .prettierrc             # Code formatting configuration
├── .eslintrc.json          # JavaScript linting rules
├── .stylelintrc.json       # CSS linting rules
├── .gitignore              # Git ignore rules
├── CONTRIBUTING.md         # Contribution guidelines
├── QUICK-START.md          # Quick reference guide
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Proxly-Studios/Amarre.git
   cd Amarre
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   This will open the website at `http://localhost:8080` with live reload enabled.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start live development server with hot reload |
| `npm start` | Alternative command to start the development server |
| `npm run format` | Auto-format all HTML, CSS, JS, JSON, and MD files |
| `npm run format:check` | Check if files are formatted correctly |
| `npm run lint:css` | Lint CSS files with Stylelint |
| `npm run lint:js` | Lint JavaScript files with ESLint |
| `npm run validate` | Run all formatting and linting checks |

## 🎨 Customization

### Colors

The site uses CSS custom properties for easy theming. Edit `css/styles.css`:

```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #004080;    /* Dark brand color */
    --accent-color: #00aaff;       /* Accent/highlight color */
    --text-color: #333333;         /* Main text color */
    --light-bg: #f5f5f5;           /* Light background */
    --white: #ffffff;              /* White */
    --medium-blue: #3385d6;        /* Alternative highlights */
    --darker-blue: #003d80;        /* Hover states */
    --light-gray: #e0e0e0;         /* Borders and dividers */
    --medium-gray: #666666;        /* Secondary text */
    --light-orange: #ffd27f;       /* Special highlights */
    --sea-green: #2e8b57;          /* Accent color alternative */
}
```

#### Full Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#0066cc` | Main brand color, buttons, links |
| Dark Blue | `#004080` | Secondary brand color, dark text |
| Bright Cyan | `#00aaff` | Accents and highlights |
| Primary Text | `#333333` | Main text color |
| Light Background | `#f5f5f5` | Section backgrounds |
| White | `#ffffff` | Navigation bar, cards |
| Medium Blue | `#3385d6` | Alternative highlights |
| Darker Blue | `#003d80` | Hover states |
| Light Gray | `#e0e0e0` | Borders and dividers |
| Medium Gray | `#666666` | Secondary text |
| Light Orange | `#ffd27f` | Special highlights |
| Sea Green | `#2e8b57` | Accent color alternative |

### Content

- **Company Information**: Edit `about.html`
- **Services**: Edit `services.html`
- **Projects**: Add/edit projects in `projects.html` and update project data in `js/project-detail.js`
- **Contact Details**: Edit `contact.html`
- **Homepage**: Edit `index.html`

### Adding Project Images

1. Add project images to the `images/` folder
2. Name them appropriately (e.g., `project1.jpg`, `project2.jpg`)
3. Update the image src in `projects.html`:
   ```html
   <img src="images/project1.jpg" alt="Project 1">
   ```
4. Update project data in `js/project-detail.js` to add more projects

### Adding Images

1. Create an `images/` folder in the root directory
2. Add your images to the folder
3. Reference them in HTML: `<img src="images/your-image.jpg" alt="Description">`

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px  
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select main branch as source
4. Your site will be available at `https://your-username.github.io/Amarre`

### Option 2: Netlify (Free)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free)

```bash
npm install -g vercel
vercel
```

### Option 4: Simple HTTP Server

#### Using Python 3:
```bash
python -m http.server 8000
```

#### Using Node.js:
```bash
npx http-server -p 8000
```

Then open your browser at `http://localhost:8000`

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features
- **Live Server**: Development server with live reload
- **Prettier**: Code formatting
- **ESLint**: JavaScript linting
- **Stylelint**: CSS linting

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Quick Contribution Steps

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

ISC License - See [package.json](package.json) for details.

Copyright © 2024 Amarre. All rights reserved.

## 👥 Author

**Proxly Studios**

## 📞 Support

- 📧 Email: info@amarre.es
- 📝 Issues: [GitHub Issues](https://github.com/Proxly-Studios/Amarre/issues)
- 📖 Documentation: See [QUICK-START.md](QUICK-START.md) for quick reference

## 🎯 Quick Links

- [Setup Guide](SETUP-COMPLETE.md) - Complete setup instructions
- [Quick Start](QUICK-START.md) - Quick reference for common tasks
- [Contributing](CONTRIBUTING.md) - Development guidelines
- [Favicon Guide](favicon-guide.html) - How to add a favicon

---

**Built with ❤️ by Proxly Studios**
