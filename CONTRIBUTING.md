# Contributing to Amarre

Thank you for your interest in contributing to Amarre! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```powershell
   git clone https://github.com/YOUR-USERNAME/Amarre.git
   cd Amarre
   ```
3. **Install dependencies**:
   ```powershell
   npm install
   ```

## 🔧 Development Workflow

1. **Create a new branch** for your feature or bugfix:
   ```powershell
   git checkout -b feature/your-feature-name
   ```

2. **Start the development server**:
   ```powershell
   npm run dev
   ```

3. **Make your changes** following our coding standards

4. **Test your changes** thoroughly in different browsers and devices

5. **Format your code**:
   ```powershell
   npm run format
   ```

6. **Run validation checks**:
   ```powershell
   npm run validate
   ```

7. **Commit your changes** with descriptive messages:
   ```powershell
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

8. **Push to your fork**:
   ```powershell
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request** from your fork to the main repository

## 📝 Coding Standards

### HTML
- Use semantic HTML5 elements
- Include appropriate ARIA labels for accessibility
- Maintain consistent indentation (2 spaces)
- Add descriptive alt text for images

### CSS
- Follow BEM naming convention for classes when appropriate
- Use CSS custom properties (variables) for colors and repeated values
- Keep selectors specific but not overly complex
- Group related properties together
- Add comments for complex sections

### JavaScript
- Use ES6+ syntax
- Use single quotes for strings
- Add semicolons at the end of statements
- Use meaningful variable and function names
- Comment complex logic
- Avoid global variables

## 🎨 Design Guidelines

- **Colors**: Use the defined CSS variables in `:root`
- **Spacing**: Follow the existing spacing patterns
- **Typography**: Use the system font stack
- **Responsive**: Test on mobile (< 768px), tablet (768px-1024px), and desktop (> 1024px)

## 🐛 Reporting Bugs

When reporting bugs, please include:
- Browser and version
- Device and screen size
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable

## 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Check if the enhancement has already been suggested
- Provide a clear description of the feature
- Explain why it would be useful
- Include mockups or examples if possible

## 📋 Pull Request Checklist

Before submitting a pull request, ensure:
- [ ] Code follows the project's coding standards
- [ ] All files are properly formatted (`npm run format`)
- [ ] Validation passes (`npm run validate`)
- [ ] Changes work on mobile, tablet, and desktop
- [ ] Changes work in Chrome, Firefox, Safari, and Edge
- [ ] No console errors or warnings
- [ ] Commit messages are clear and descriptive
- [ ] Pull request description explains the changes

## 🌐 Internationalization

Currently, the site is in Spanish. If adding new content:
- Use proper Spanish grammar and spelling
- Maintain the formal "usted" tone used throughout the site
- Consider adding English translations in the future

## 📄 License

By contributing to Amarre, you agree that your contributions will be licensed under the same license as the project (ISC).

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## ❓ Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Contact the maintainers

Thank you for contributing to Amarre! 🚢
