const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  name: 'codeceptjs-test-automation-framework',
  tests: './src/test/**/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://petstore.swagger.io/v2',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},
  },
  include: {
    I: './steps_file',
    petClient: './src/client/pet_client',
  },
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          // verbose: true,
          steps: true,
        },
      },
      'mochawesome': {
        stdout:  '-',
        options: {
          reportDir: './output',
          reportFilename: 'report',
        },
      },
      'mocha-junit-reporter': {
        stdout: '-',
        options: {
          mochaFile: './output/report.[hash].xml',
          attachments: true,
        },
      },
    },
  },
}
