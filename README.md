# Mridula React Portfolio

## Setup

Ensure that you have `node` installed and alteast versions `16+` to run this project. Run the command below to check your version.

```bash
node -v
```

To install the dependencies for this app, run:

```bash
npm install
```

## Local Development

### Dev

To bring up the app from a development perspective ie, make edits to code and check the UI without restarting the app each time, run the following command:

```bash
npm run dev
```

This approach renders the .tsx files "LIVE" to create the HTML, CSS, JS files so that you can see it in your browser.

### Build

Before we can deploy this react app, we need to generate a static version of the website ie, just HTML + CSS + JS files. To do this we need to run this command:

```bash
npm run build
```

This should generate a `/dist` or `/build` folder in your root folder. This will have a `index.html` and the related `.css`, `.js` and assets that you've used in your app. This `dist` folder is a static website that will be deployed on the web.

To visualize this static website, we need to serve it locally. Ensure that you've installed `serve` with this command (one time step):

```bash
npm install -g serve
```

Next we bring up the static website with this command:

```bash
serve -s dist
```

Note: If you make changes in the react app you have to rebuild the `dist` folder and serve it unlike `npm run dev` where the changes are reflected immediately. So run this command to combine build and serve:

```bash
npm run build && serve -s dist
```

## Deployment

Install the `gh-pages` package

```bash
npm install gh-pages --save-dev
```

Ensure that in the `package.json` file that these lines are present:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",

```
In the `vite.config.js` file add this line before `plugins: [react()]`:

```bash
base: "/YOUR_REPOSITORY_NAME/",
```

Deploy your static website to github pages as follows:

```bash
npm run deploy
```


## Dependencies

This project uses the following dependencies:

- [Mantine](https://mantine.dev/) - A fully featured React components library
- [Vite](https://vitejs.dev/) - A fast build tool for modern web projects
- [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel) - A flexible and responsive carousel component for React
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for developing responsive and mobile-first websites
- [Template](https://github.com/mantinedev/vite-template) - Mantine + Vite base template

The Mantine + Vite base template comes with the following features:
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## Appendix

### npm scripts

Prefix all these commands with `npm run`. These commands come from the vite-mantine-template which can be found [here](https://github.com/mantinedev/vite-template).

#### Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

#### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

#### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier


