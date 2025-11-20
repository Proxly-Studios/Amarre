# File Cleanup Required

## Old Files to Delete

The following Spanish-named files have been replaced with English-named versions and should be deleted from the repository:

- ❌ `servicios.html` → ✅ Replaced by `services.html`
- ❌ `sobre-nosotros.html` → ✅ Replaced by `about.html`
- ❌ `contacto.html` → ✅ Replaced by `contact.html`

## How to Delete

### Option 1: Using VS Code
1. Right-click on each file in the Explorer
2. Select "Delete"
3. Confirm the deletion

### Option 2: Using Source Control
When you commit your changes, you can remove these files from git:
```powershell
git rm servicios.html sobre-nosotros.html contacto.html
git commit -m "Remove old Spanish-named HTML files"
```

## Files Updated

All project files have been updated to reference the new English filenames:

✅ `README.md` - All references updated
✅ `SETUP-COMPLETE.md` - All references updated  
✅ `QUICK-START.md` - All references updated
✅ `favicon-guide.html` - All references updated
✅ `index.html` - Navigation links updated
✅ `services.html` - Navigation links updated
✅ `about.html` - Navigation links updated
✅ `contact.html` - Navigation links updated

## Current File Structure

```
Amarre/
├── index.html              ✅ Homepage
├── services.html           ✅ Services page (English name)
├── about.html              ✅ About Us page (English name)
├── contact.html            ✅ Contact page (English name)
├── servicios.html          ❌ DELETE (old Spanish name)
├── sobre-nosotros.html     ❌ DELETE (old Spanish name)
├── contacto.html           ❌ DELETE (old Spanish name)
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── ...
```

All navigation and internal links now use the English filenames!
