# rn-msw-example

This repository is meant to show the interactions between msw, msw2.0 and storybook.

In the `main` branch there is a basic expo project where I use msw for tests and development. There are no warnings or errors.

In the `with-storybook` branch I have added storybook to the main branch and here we get an error when trying to run msw in development.

In the `msw-2.0` branch I updated msw from 1.3.2 to 2.0. In this branch we get a warning when trying to run msw in development, but it doesn't return from the handlers.

In the `msw-2.0-with-storybook` branch I added storybook to the `msw-2.0` branch. Here, the warning form the `msw-2.0` branch is now an error and still doesn't return from the handlers.

## How to run

- Install dependencies with `npm install`
- To run tests: `npm run test`
- To run app in development: `npm start`
- To run storybook: `npm run storybook`

### Notes:

- If you see MSW Warnings in console - update the handlers in `mocks/handlers.js` with an IP address to match the IP of the expo app (which msw will tell you in the warnings).
