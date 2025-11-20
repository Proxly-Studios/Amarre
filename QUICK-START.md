# 🚢 Amarre - Quick Reference Guide

## 🚀 Quick Start (3 Steps)

```powershell
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Start coding! Browser will auto-reload on changes.
```

## 📋 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:8080 |
| `npm start` | Same as npm run dev |
| `npm run format` | Auto-format all HTML, CSS, JS files |
| `npm run validate` | Check code quality (format + lint) |
| `npm run lint:css` | Check CSS for issues |
| `npm run lint:js` | Check JavaScript for issues |

## 📁 File Structure

```
Amarre/
├── index.html                 # 🏠 Homepage
├── servicios.html             # 💼 Services page
├── sobre-nosotros.html        # 👥 About Us page
├── contacto.html              # 📧 Contact page
├── css/
│   └── styles.css            # 🎨 All styles (responsive)
├── js/
│   └── script.js             # ⚡ Mobile navigation
└── package.json              # 📦 Dependencies & scripts
```

## 🎨 Quick Customization

### Change Colors
Edit `css/styles.css` (lines 7-13):
```css
:root {
    --primary-color: #0066cc;      /* Change this */
    --secondary-color: #004080;    /* And this */
    --accent-color: #00aaff;       /* And this */
}
```

### Update Company Name
Find and replace "Amarre" in all HTML files with your company name.

### Change Contact Info
Edit `contacto.html` (lines 82-84) with your actual contact details.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px  
- **Desktop**: 769px - 1024px
- **Large**: > 1024px

## 🔥 Hot Tips

### Auto-Format on Save
Already configured! Just save your files and they'll be formatted automatically.

### View on Mobile
1. Run `npm run dev`
2. Find your local IP (e.g., 192.168.1.100)
3. On your phone, visit `http://192.168.1.100:8080`

### Add Images
1. Create `images/` folder in root
2. Add your images
3. Use in HTML: `<img src="images/photo.jpg" alt="Description">`

### Test All Browsers
- Press `F12` for DevTools
- Click device icon for mobile view
- Test in Chrome, Firefox, Edge

## 🐛 Common Issues & Fixes

### "Port 8080 in use"
```powershell
# Kill the process or change port in package.json to 3000
```

### "Module not found"
```powershell
npm install
```

### Formatting not working
```powershell
# Manually format:
npm run format
```

### CSS not updating
```powershell
# Hard refresh browser:
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

## 🌐 Deploy in 60 Seconds

### Netlify (Easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder
3. Done! ✨

### GitHub Pages
```powershell
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push

# 2. Enable in repo Settings > Pages
```

### Vercel
```powershell
npx vercel
```

## 📚 Key Files Explained

| File | Purpose |
|------|---------|
| `package.json` | Defines dependencies and npm scripts |
| `.gitignore` | Files to ignore in Git |
| `.prettierrc` | Code formatting rules |
| `.eslintrc.json` | JavaScript linting rules |
| `.stylelintrc.json` | CSS linting rules |
| `.vscode/settings.json` | VS Code editor settings |

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Update company info in HTML files
4. ✅ Change colors in `css/styles.css`
5. ✅ Add your logo/images
6. ✅ Test on mobile
7. ✅ Deploy to Netlify/Vercel

## 💡 Pro Tips

- Use `Ctrl + /` to comment/uncomment code
- Use `Alt + Shift + F` to format current file
- Use `Ctrl + P` to quickly open files
- Use `Ctrl + F` to find in current file
- Use `Ctrl + Shift + F` to find in all files

## 🆘 Get Help

- 📖 Read `README.md` for full documentation
- 📝 Read `CONTRIBUTING.md` for coding guidelines
- 🚀 Read `SETUP-COMPLETE.md` for detailed setup info
- 🎨 Open `favicon-guide.html` for favicon instructions

---

**Ready to build something amazing! 🚀**
