# MCube Sweets

A modern React-based website for MCube Sweets showcasing traditional Indian sweets, bakes, and savouries.

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling framework
- **Framer Motion** - Animations
- **React Router DOM** - Client-side routing
- **Lucide React & React Icons** - Icon libraries
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mcube-sweets
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   ├── Hero.jsx   # Hero section
│   ├── Navbar.jsx # Navigation
│   └── ...
├── assets/        # Static assets
├── App.jsx        # Main app component
└── main.jsx       # Entry point

public/
├── images/        # Product images
└── favicon.png    # Site favicon
```
