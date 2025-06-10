# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🥘 Recetario App

Una aplicación web construida con **React + Vite** que permite buscar recetas de cocina usando la API de [TheMealDB](https://www.themealdb.com/), ver sus detalles, y guardar recetas favoritas.

---

## 🚀 Funcionalidades

- 🔍 Búsqueda de recetas por nombre.
- 📋 Vista de detalle con ingredientes, categoría e instrucciones.
- ❤️ Sistema de favoritos (persistente con `localStorage`).
- 🌙 Estilos con Tailwind CSS.
- ⚡ Rápido y moderno gracias a Vite.

---

## 🖼️ Vista previa

![screenshot](./screenshot.png) <!-- Puedes subir una captura de tu app y referenciarla aquí -->

---

## 🧪 Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [TheMealDB API](https://themealdb.com/api.php)

---

## 🛠️ Instalación

```bash
git clone https://github.com/scarab1220/recetario-app.git
cd recetario-app
npm install
npm run dev
