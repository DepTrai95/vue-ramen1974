# Ramen1974

This is a simple ramen restaurant website Rebuild, which is built using Vue 3 with Vite and plain CSS/SCSS. Reason for the rebuild is, the project was a WordPress project before with extremely low performance, it took 3s previously to load the page, the lighthouse-score was also low, especially the performance was at ~50-ish. This rebuild scores a perfect 100 in each relevant category on desktop and almost 100 on mobile.

This project was generated and is powered by [Vite.js](https://vitejs.dev/)

## Prerequisites

To build/run this project locally, nvm, npm and Node v18+ are required.

- If not already installed, install nvm on your machine from [here](https://github.com/nvm-sh/nvm). You can check whether nvm is installed in your terminal with `nvm -v`.
- If it is not already the standard-version - install Node v18 with `nvm install 18`. You can check whether the right Node version is selected with `node -v`. If a different Node version is selected, use `nvm use 18`.
- Navigate to the project folder in your terminal and install project dependencies with `npm install`.

## Running the project locally

Run `npm run dev` for a dev server. Navigate to `http://localhost:5173/`. The app should automatically reload on any changes of the source files thanks to Vites HMR.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Hosting

This project is currently hosted on [Netlify](https://www.netlify.com/), which is ideal to use [Netlify Serverless Functions](https://www.netlify.com/platform/core/functions/) to send E-Mails via Sendgrid.

## 💻 Technologies

### Tech-Stack

- [Vue.js](https://vuejs.org/)

### Dependencies

- [Vue-Datepicker](https://vue3datepicker.com/)
- [Sendgrid/Mail](https://sendgrid.com/en-us)
- [SCSS/SASS](https://sass-lang.com/)
