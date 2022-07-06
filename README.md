# 🛬 Landing Page

## Description

This landing page is built with Create React App (version 18.2.0) and CSS.

Live preview is hosted [here](https://courageous-shortbread-903955.netlify.app/), powered by Netlify.

Go to [installation](#installation) section to install and [npm-start](#npm-start) to run this project locally.

## How I worked on this project

- I built this project based on the [Figma](https://www.figma.com/file/ZQyqteqZXwbsnqoRFWPALB/Frontend-Dev-Case-(New)?node-id=2%3A6) design given.
- My goal for the time given (16 - 24 hours) is to create the whole website layout and make it responsive.
  - I divided the sections of the website into small components and worked on each component, including the styling.
  - I temporarily used `min-width: 990px` for most media queries to save some time building the whole website layout.

## Why I built the project this way

- I don't use any other hooks in this project because for what I've done so far `useState` is sufficient.
- As the real projects are using SASS/SCSS, I chose using vanilla CSS for this project.

## If I had more time, I would change this

- Refactor the codes, mainly in the Navbar section.
  - Put the logics (state and function) in a parent component and pass them as props to the needed children.
  - I would add conditional rendering for:
    - `className` to hide the contain of main navbar when hamburger menu opens.
    - `className` to make the contain hamburger menu occupies the whole page's width and height when it opens.
  - Put the `NavLinkLocation` in the flow and style it.

- Fix the `key` prop warning.
- Improve accessibility by replacing some `<div>` with semantic HTML of `<section>` and `<article>`, and other necessary semantic HTML.
- Fix the media-queries for all components.
- Fix the stylings of:
  - Navbar.
  - Hamburger menu and links.
  - The `flexbox` part between the `grid` in the `CardsContainer` component.
  - Footer info on desktop view.

## If I had more time to do research, I would do this

- Work on the basic of form to grab entered value and a simple authorization.
- Work on the `Category` component to filter or map mock data and render it to a designated page.
- Add `react-router` for the links.
- Add portal as modal for hamburger menu.
- Add styling to animate hamburger menu icons and some effects for images.

## Installation

```bash
$ git clone https://github.com/adiati98/landing_page_react.git
$ cd landing_page_react
$ npm install
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
