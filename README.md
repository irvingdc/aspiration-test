# GitHub Topic Explorer

## Dev Notes
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React Testing Library and Jest were used to test the main 2 components and their GraphQL usage.
- CSS modules were used for more flexibility with the styles of each component
- The components were kept as modular as possible for any future maintenance.

## How to run app & test

A demo can be found on [https://iedc-aspiration-test.netlify.app](https://iedc-aspiration-test.netlify.app)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Future Improvements

- More comprehensive tests could be added to test the process of clicking multiple related topics.
- And end-to-end test could be used to test the real integration with the real Github API.
- LESS could be added to make the structure of the styles files more similar to the DOM and therefore easier to maintain.
- React Router could be added to manage separate sections for more features.
- The code could be refactored by routes where each page has its own components under the same folder if using routing instead of all of them under the components folder, only the ones shared by multiple pages would be there.
- Redux or the Context API could be added if more GraphQL API calls are added in order to have a standardized global.