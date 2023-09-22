# Running E2E Tests with Puppeteer

The purpose of this application is to demonstrate the basic setup and use of Puppeteer with the create-react-app toolchain. 

## Steps to Run the Tests

### 1. Start the Development Server

First, install all dependencies using ```npm i```. Then you need to start the development server. Open a terminal window, navigate to the project directory, and run:

```bash
npm start
```

This will start the React development server, usually on `http://localhost:3000`.

### 2. Run the Tests

In another terminal window, navigate to the project directory and execute:

```bash
npm run test
```

This will start running all the Puppeteer tests. Make sure the development server is running when you execute this command. Please note that we're using Puppeteer 18.1.0 as later versions do not play well with the react-scripts toolchain. 

Additionally, ```@babel/plugin-proposal-private-property-in-object``` is used to mitigate a warning thrown by the older version of Babel included with react-scripts. 