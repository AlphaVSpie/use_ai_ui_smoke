// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.js/,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'https://use.ai/ru',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});