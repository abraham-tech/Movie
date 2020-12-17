# My Favourite Posters
This is the source code for Dev Mastery's TDD Frontend Development tutorial.
Watch the companion videos on YouTube.

### How to use TDD to build a web app that queries a REST API with Jest and Puppeteer
[![How to use TDD to build a web app that queries a REST API with Jest and Puppeteer](https://img.youtube.com/vi/Hw522TDxMZk/0.jpg)](https://www.youtube.com/watch?v=Hw522TDxMZk)

### Using TDD to refactor a web front that consumes a REST service.
[![Using TDD to refactor a web front that consumes a REST service.](https://img.youtube.com/vi/IOCcqIKJyFk/0.jpg)](https://youtu.be/IOCcqIKJyFk)

## Getting started
To grab the boilerplate code we started with at the beginning of the video just clone the master branch. 
```
git clone https://github.com/dev-mastery/my-fave-posters.git
```
If you're interested in a version of the code that's closer to where we ended up in the first video, clone the `make-it-work` branch.
```
git clone -b make-it-work https://github.com/dev-mastery/my-fave-posters.git
```
If you're interested in a version of the code that's closer to where we ended up in the follow-up video, clone the `make-it-better` branch.
```
git clone -b make-it-better https://github.com/dev-mastery/my-fave-posters.git
```

Once you've cloned the app, jump into the app's root directory and install the dependencies with npm.
```
cd my-fave-posters
npm install
```

You'll need to grab a free API key from the OMDBAPI website at http://www.omdbapi.com/apikey.aspx

Then you'll need to add a `.env` file to the root of our project with the following structure (make sure to replace XXXX with your API key from omdapi.com):
```
REACT_APP_API_URL=https://www.omdbapi.com/
REACT_APP_API_KEY=XXXX
DEV_LOCALHOST=http://localhost:3000
PROD_LOCALHOST=http://localhost:5000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test:ui:watch`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Troubleshooting
If you run into problems with puppeteer check out their troubleshooting guide at: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

### Configuration

#### Create React App Config Docs
https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Jest-Puppeteer Config Docs
https://github.com/smooth-code/jest-puppeteer#configure-puppeteer

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
