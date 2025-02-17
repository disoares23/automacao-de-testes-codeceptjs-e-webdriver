require('dotenv').config();

const {
  setHeadlessWhen
} = require('@codeceptjs/configure');

// Ativar modo headless se a variável de ambiente HEADLESS for true
setHeadlessWhen(process.env.HEADLESS);
const server = require('./server/server.js');

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automacao-codeceptjs-web1',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://petstore.octoperf.com/actions/Catalog.action',
      browser: 'chrome',
      waitForTimeout: 5000,
      timeouts: {
        script: 60000,
        pageLoad: 10000
      },
      capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--windows-size=1920,1200']
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    register: "./pages/register.js",
    sign_in: "./pages/sign_in.js",
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: async(I) => {
            I.amOnPage('/actions/Catalog.action');
            I.dontSee('My Account'); 
            I.click('Sign In');
            I.see('username');
            I.fillField('input[name="username"]', 'Lucy');
            I.fillField('input[name="password"]', 'aptonia7');
            I.click('Login');
          },
          // if we see `Admin` on page, we assume we are logged in
          check: async (I) => {
             I.amOnPage('/');
             I.see('My Account');
          }
        }
      }
    }
  }
};