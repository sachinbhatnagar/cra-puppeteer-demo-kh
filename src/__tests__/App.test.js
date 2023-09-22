import puppeteer from 'puppeteer';

describe('App Component', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Replace with your app's local URL
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should render the overall App with the correct header and signup-form container', async () => {
    const appHeader = await page.$('.App-header');
    const signUpForm = await page.$('.signup-form');

    const headerText = await page.$eval('.App-header', (el) => el.innerText);
    expect(headerText).toBe('upGrad KnowledgeHut - Account Signup');

    expect(signUpForm).toBeTruthy();

    expect(appHeader).toBeTruthy();
  });
});
