# Akif Portfolio Site

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and responsive design with dark mode support
- **Interactive Modals**: Project and achievement details with tech stack tags
- **Animations**: Smooth scroll and AOS animations
- **Performance**: Optimized with Next.js 15 and Turbopack
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- Next.js 15.5.3
- React 19
- TypeScript
- Tailwind CSS v4
- AOS (Animate On Scroll)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/akif-portfolio.git

# Navigate to the project directory
cd akif-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🌐 GitHub Pages Deployment

This site is configured for deployment on GitHub Pages.

### Setup Instructions:

1. **Update Repository Settings**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Configure Base Path** (if needed):
   - If your repository name is not `yourusername.github.io`, update `next.config.js`:
   ```javascript
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name',
   ```

3. **Deploy**:
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/your-repo-name`

## 📁 Project Structure

```
akif_portfoliosite/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   └── contexts/
│       └── ThemeContext.tsx
├── public/
│   └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml
└── next.config.js
```

## 🎨 Customization

### Dark Mode
The site includes a dark mode toggle in the navigation. Theme preference is saved to localStorage.

### Content Updates
- Update personal information in component files
- Replace images in `/public/images/`
- Modify project and achievement data in respective components

## 📄 License

This project is open source and available under the MIT License.