# RSP Education Platform

A modern, responsive educational platform built with React, TypeScript, and Tailwind CSS. The platform provides comprehensive programming tutorials and courses in multiple languages with an intuitive user interface and administrative dashboard.

## 🎯 Project Overview

RSP Education is a full-featured learning management system (LMS) designed to deliver educational content on various programming topics including HTML, CSS, JavaScript, Python, PHP, Java, Azure, and more. The platform includes user authentication, role-based access control (admin/user), and an interactive learning dashboard.

## ✨ Features

- **User Authentication**: Secure login and signup system for users and administrators
- **Role-Based Access Control**: Separate dashboards for admin and regular users
- **Comprehensive Course Library**: Tutorials covering:
  - Web Development (HTML, CSS, JavaScript)
  - Backend Development (Python, PHP, Java)
  - Cloud Services (Azure)
  - Office Applications (MS Word, MS PowerPoint)
  - Computer Fundamentals
- **Interactive Code Viewer**: Syntax-highlighted code examples using highlight.js
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Modern UI Components**: Pre-built component library using shadcn/ui and Radix UI
- **Data Visualization**: Charts and analytics using Recharts
- **State Management**: React Query for efficient server state management
- **Form Handling**: Robust form validation with React Hook Form and Zod

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3**: UI library
- **TypeScript 5.8**: Static typing
- **Vite 5.4**: Fast build tool and dev server
- **React Router DOM 6.30**: Client-side routing

### UI & Styling
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Accessible primitive components
- **Lucide React**: Icon library
- **React Syntax Highlighter**: Code highlighting

### State Management & Data
- **React Query 5.83**: Server state management
- **React Hook Form 7.61**: Efficient form handling
- **Zod 3.25**: TypeScript-first schema validation

### Additional Libraries
- **Sonner**: Toast notifications
- **date-fns 3.6**: Date utilities
- **Recharts 2.15**: Data visualization
- **next-themes**: Theme management
- **class-variance-authority**: Component style variants
- **Embla Carousel**: Carousel functionality

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI component library
│   ├── layout/             # Layout components (Header, Sidebar, etc.)
│   ├── common/             # Reusable components
│   └── home/               # Home page components
├── pages/
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # Admin and user dashboards
│   ├── computer/           # Computer fundamentals tutorials
│   ├── html/               # HTML tutorials
│   ├── css/                # CSS tutorials
│   ├── javascript/         # JavaScript tutorials
│   ├── python/             # Python tutorials
│   ├── java/               # Java tutorials
│   ├── php/                # PHP tutorials
│   ├── mspowerpoint/       # MS PowerPoint tutorials
│   ├── msword/             # MS Word tutorials
│   ├── azure/              # Azure tutorials
│   └── Index.tsx           # Home page
├── contexts/
│   └── AuthContext.tsx     # Authentication context and providers
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── routes/
│   └── AppRoutes.tsx       # Route definitions
├── data/
│   ├── tutorials.json      # Tutorial metadata
│   └── computerLinks.ts    # Computer course links
├── lib/
│   └── utils.ts            # Utility functions
├── style/
│   ├── home.css            # Home page styles
│   ├── auth.css            # Authentication styles
│   ├── pageLayout.css      # Layout styles
│   └── pages.css           # Page-specific styles
└── App.tsx                 # Root component
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Bun or npm package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd rsp-educations

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# Server will run at http://localhost:8080

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm lint
```

### Development Server Configuration
- **Host**: `::`
- **Port**: `8080`

## 🔐 Authentication

### Admin Credentials (Development)
- **Email**: `admin@rspeducations.com`
- **Password**: `RSP@2025`

**Note**: Update these credentials in `src/contexts/AuthContext.tsx` for production environments.

## 📚 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section and featured courses |
| `/auth/login` | User login page |
| `/auth/signup` | User registration page |
| `/auth/admin` | Admin login page |
| `/dashboard/admin` | Admin dashboard (admin only) |
| `/dashboard/user` | User dashboard (authenticated users) |
| `/html` | HTML tutorials |
| `/css` | CSS tutorials |
| `/javascript` | JavaScript tutorials |
| `/python` | Python tutorials |
| `/java` | Java tutorials |
| `/php` | PHP tutorials |
| `/azure` | Azure cloud services tutorials |
| `/computer` | Computer fundamentals |
| `/msword` | MS Word tutorials |
| `/mspowerpoint` | MS PowerPoint tutorials |
| `/about` | About page |
| `/contact` | Contact page |
| `/privacy` | Privacy policy |
| `/service` | Service terms |
| `/copyright` | Copyright information |

## 🎨 UI Components

The project includes a comprehensive library of reusable UI components built on shadcn/ui and Radix UI, including:

- Accordions, Alerts, Badges
- Buttons, Cards, Carousels
- Dialogs, Drawers, Dropdowns
- Forms, Inputs, Modals
- Navigation Menus, Tabs
- Tooltips, Toasts, and more

All components are customizable and follow accessibility best practices.

## 🧪 Code Quality

- **ESLint**: Configured for code linting
- **TypeScript**: Strict type checking enabled
- **React Hook Form**: Efficient form management
- **Zod**: Runtime schema validation

## 📦 Build Output

- Output directory: `dist/`
- Optimized for modern browsers
- Tree-shaking enabled for minimal bundle size
- CSS-in-JS optimization via Tailwind

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Environment Configuration

Configuration files:
- `vite.config.ts`: Vite configuration
- `tailwind.config.ts`: Tailwind CSS customization
- `postcss.config.js`: PostCSS configuration
- `tsconfig.json`: TypeScript compiler options
- `eslint.config.js`: ESLint rules
- `components.json`: shadcn/ui configuration

## 🤝 Contributing

1. Clone the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the RSP Education initiative.

## 🐛 Troubleshooting

**Port already in use**: Change the port in `vite.config.ts`
```typescript
server: {
  port: 5173  // Change to a different port
}
```

**Dependencies issues**:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build issues**: Ensure TypeScript compilation is successful:
```bash
npx tsc --noEmit
```

## 📞 Support

For issues or questions, please refer to the project documentation or contact the development team.

---

**Project Name**: RSP Education  
**Repository**: rspeducations  
**Organization**: rspeducation  
**Current Branch**: main  
**Last Updated**: December 2025
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS