# GitHub Topic Explorer

## Dev Notes
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React Testing Library and Jest were used to test the main 2 components and their GraphQL usage.
- CSS modules were used for more flexibility with the styles of each component
- The components were kept as modular as possible for any future maintenance.
- A Skeleton component was created to have some feedback when the content is being loaded for better UX.
A demo can be found on [https://iedc-aspiration-test.netlify.app](https://iedc-aspiration-test.netlify.app)

## How to run app & test

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
You need a Github API Key. After obtaining one it should be added to the root of the project inside a .env file as **REACT_APP_GITHUB_ACCESS_KEY**

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\

## Future Improvements

- More comprehensive tests could be added to test the process of clicking multiple related topics.
- And end-to-end test could be used to test the real integration with the real Github API.
- LESS could be added to make the structure of the styles files more similar to the DOM and therefore easier to maintain.
- React Router could be added to manage separate sections for more features.
- If a Router is added then the code could be refactored so it's organized by pages, where each page has its own components and only the ones shared by multiple pages would be in the components folder.
- Redux or the Context API could be added if more GraphQL API calls are needed in order to have a standardized global state.
