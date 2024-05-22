# E2E testing for Swagger Pets

## Features

- **Easy to Use:** Simple syntax and clear structure make writing and maintaining tests straightforward.
- **Powerful Assertions:** Use built-in assertions or integrate with popular assertion libraries.
- **Modular Design:** Easily extend and customize the framework with reusable modules and helpers.
- **Parallel Execution:** Run tests in parallel to speed up the testing process.
- **Reports and Logs:** Generate detailed reports and logs for better analysis and debugging.

## Project Structure

```plaintext
codeceptjs-test-automation-framework/
├── client/                    # Clients for api service
├── data/
│   ├── positive/              # Data for positive tests
│   └── negative/              # Data for negative tests
├── test/
│   ├── positive/              # Test scripts for positive functionality
│   └── negative/              # Test scripts for negative functionality
├── output/                    # Test reports and screenshots
├── .gitignore                 # Files and directories to ignore in the repository
├── codecept.conf.ts           # Main configuration file for CodeceptJS
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## Installation

### Steps to install project:

1. Cloning the repository
```shell
git clone https://github.com/i-am-v-alexander-v/codeceptjs-test-automation-framework
```

2. Move to directory
```shell
cd codeceptjs-test-automation-framework
```

3. Installing required dependencies
```shell
npm install
```

# Command Line

## Running all tests

```shell
npx codeceptjs run --reporter mocha-multi
```

## Running by tag

```shell
npx codeceptjs run --reporter mocha-multi --grep '@positive'
```

## Running by text in scenario title

```shell
npx codeceptjs run --reporter mocha-multi -g 'invalid'
```
