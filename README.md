# Recruit Home

A modern, responsive landing page built with React, TypeScript, Vite, and Tailwind CSS.  
The project focuses on smooth UI interactions, animation-rich components, and reusable design patterns.

---

## 🚀 Project Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd recruit-home
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start development server

```bash
npm run dev
```

The app will be available at:

http://localhost:5173

---

### 4. Build for production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

---

### 5. Preview production build

```bash
npm run preview
```

---

### 6. Lint the project

```bash
npm run lint
```

---

## 🧱 Frameworks & Libraries Used

### Core Stack

- React 19 – UI library
- TypeScript – Static typing
- Vite – Build tool

### Styling

- Tailwind CSS 4 – Utility-first CSS
- @tailwindcss/vite – Vite integration

### UI Utilities

- class-variance-authority – Variant handling
- clsx – Conditional classes
- tailwind-merge – Tailwind conflict resolution

### Icons

- react-icons – Icon library

### Linting

- ESLint
- typescript-eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh

---

## 📁 Project Structure

src/
├── components/
├── hooks/
├── assets/
├── styles/
├── pages/
└── lib/

---

## ⚠️ Known Issues / Limitations

### 1. IntersectionObserver-based animations
Scroll animations rely on IntersectionObserver and may behave inconsistently in older browsers.

### 2. Frontend-only project
No backend integration; data is static.

### 3. Animation performance
Heavy animations may affect low-end devices slightly.

### 4. Tailwind v4
Uses newer Tailwind features that may change in future updates.

### 5. Mobile UX
Some animations are simplified on mobile for performance.

---

## 📌 Notes

- Reusable component architecture
- Custom Button system inspired by Shadcn UI
- Designed for scalable SaaS landing pages

