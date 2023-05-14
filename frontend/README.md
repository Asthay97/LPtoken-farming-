### Steps to run
`nodemon start`

### Folder structure
assets/: Contains static assets such as images, fonts, and stylesheets.

components/: Contains reusable UI components organized by their purpose. Common components are placed in the common/ directory, while layout-related components are placed in the layout/ directory.

containers/: Contains container components that represent different pages or sections of the application. Each container may use the components from the components/ directory to compose the UI.

services/: Contains modules responsible for handling external services, such as API integration, authentication, or data manipulation.

hooks/: Contains custom React hooks that encapsulate reusable logic to be shared across components.

utils/: Contains utility functions or helper modules that provide commonly used functionality throughout the application.

context/: Contains React context providers and consumers to manage global state or share data between components.

routes/: Defines the routing configuration of the application using a library like React Router.

redux/: Contains the Redux implementation for state management. It includes directories for actions, reducers, store configuration, and other Redux-related files.

App.js: The entry point component that sets up the top-level structure of the application and handles routing.

index.js: The entry point of the React application that renders the App component and mounts it to the DOM.