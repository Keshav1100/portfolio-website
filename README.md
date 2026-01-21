"# Keshav Agarwal - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Showcasing projects, skills, and experience in full-stack development and data analytics.

## Live Demo

Visit the portfolio: https://keshav1100.github.io/portfolio-website/

## Features

- Responsive Design: Mobile, tablet, and desktop optimized
- Modern UI: Clean, gradient-based design with smooth animations
- Project Showcase: Filterable project gallery with development and analytics projects
- Interactive Components: Smooth scrolling, hover effects, and transitions
- Circular Profile Image: Modern circular profile with blur fade effect
- Contact Section: Easy contact information with social links
- Resume Download: Direct PDF download of resume
- Performance Optimized: Lazy loading and optimized images

## Tech Stack

- React 18.2.0
- Tailwind CSS 3.3.6
- React Icons 4.11.0
- React Scripts 5.0.1
- PostCSS & Autoprefixer

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section with skills
│   ├── Contact.jsx        # Contact information
│   ├── Footer.jsx         # Footer with links
│   ├── Hero.jsx           # Hero/Landing section
│   ├── Navbar.jsx         # Navigation bar
│   └── Projects.jsx       # Projects gallery
├── css/
│   ├── App.css
│   ├── main.css
│   └── tailwind.css
├── data/
│   └── portfolio.js       # Portfolio data
├── App.js                 # Root component
├── index.js               # Entry point
└── index.css              # Global styles

public/
├── images/                # Project images and profile
├── Resume_.pdf            # Resume file
└── index.html             # HTML template
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Keshav1100/Portfolio
cd Portfolio\ Site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at http://localhost:3000

## Build and Deploy

### Local Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Builds the React app
2. Deploys to GitHub Pages at https://keshav1100.github.io/portfolio-website/

## Configuration

### Update Portfolio Data

Edit `src/data/portfolio.js` to customize:
- Personal information (name, email, location)
- Bio and biography
- Skills (development and analytics)
- Social media links
- Projects (title, description, technologies, links)

### Update Images

Place images in `public/images/` folder:
- Profile image: `Profile.jpeg`
- Project images: `*.png` or `*.jpg`

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:
- Primary: #6060ff
- Accent: #262626
- Light: #f5f5f5

### Typography

Google Fonts (Poppins + Inter) configured in `src/index.css`

## Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm run deploy` - Deploy to GitHub Pages

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)

## Projects Included

- Nike Website Clone (Development)
- JS 30 Days 30 Projects (Development)
- iPhone 15 Pro Landing Page (Development)
- UPI Transactions Analysis Dashboard (Analytics - Power BI)

## Contact

- Email: keshav003ag@gmail.com
- GitHub: https://github.com/Keshav1100
- LinkedIn: https://www.linkedin.com/in/keshav-agarwal-674a211b1/
- Twitter: https://x.com/agarwalkeshav_
- Instagram: https://www.instagram.com/agarwalkeshav/
