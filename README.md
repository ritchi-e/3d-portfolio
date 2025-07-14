# 🚀 Richard David - 3D Interactive Portfolio

Welcome to my personal portfolio website! This is a modern, interactive portfolio built with cutting-edge web technologies to showcase my skills, projects, and experience in an engaging way.

### 🌐 Live Website: [richierich.tech](https://richierich.tech)

## ✨ Features

### 🎹 **Interactive 3D Keyboard**
- Custom-built interactive keyboard using **Spline 3D**
- Each key represents a skill with hover animations
- Dynamic text display showing skill descriptions
- Responsive design for both desktop and mobile

### 🎨 **Modern Design & Animations**
- **GSAP** and **Framer Motion** for smooth animations
- Dark theme with cosmic particle effects
- Smooth scroll interactions and reveal animations
- Custom cursor effects and micro-interactions

### 📱 **Fully Responsive**
- Optimized for all devices (desktop, tablet, mobile)
- Touch-friendly interactions on mobile devices
- Adaptive layout that works on any screen size

### 🎯 **Interactive Sections**
- **Hero Section**: Animated introduction with 3D elements
- **Skills Section**: Interactive keyboard with skill descriptions
- **Projects Section**: Showcase of my work with detailed modals
- **Contact Section**: Working contact form with email integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Spline for interactive 3D elements
- **Animations**: GSAP, Framer Motion
- **UI Components**: Shadcn/ui, Aceternity UI
- **Email**: Resend for contact form functionality
- **Deployment**: GitHub Pages with custom domain

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ritchi-e/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   # Create .env.local file
   touch .env.local
   
   # Add your Resend API key for contact form
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This portfolio is deployed on **GitHub Pages** with a custom domain:

- **Domain**: richierich.tech
- **Repository**: https://github.com/ritchi-e/3d-portfolio
- **Deployment**: Automatic via GitHub Actions

## 📁 Project Structure

```
3d-portfolio/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── sections/        # Page sections (hero, skills, etc.)
│   │   ├── ui/             # Reusable UI components
│   │   └── animated-background.tsx  # 3D Spline integration
│   ├── data/               # Static data and configurations
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── .github/workflows/      # GitHub Actions for deployment
```

## 🎨 Customization

### Adding New Skills
Edit `src/data/constants.ts` to add new skills to the interactive keyboard.

### Updating Projects
Modify `src/data/projects.tsx` to add or update your projects.

### Changing Colors/Themes
Update the Tailwind configuration in `tailwind.config.ts`.

## 📧 Contact

- **Email**: [Your email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [@ritchi-e](https://github.com/ritchi-e)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you find this portfolio inspiring, feel free to star the repository!
