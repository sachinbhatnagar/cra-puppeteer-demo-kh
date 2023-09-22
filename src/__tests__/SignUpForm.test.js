import puppeteer from 'puppeteer';

describe('SignUpForm Component', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display all the form fields and the Register button', async () => {
    const fullnameField = await page.$('input[name="fullname"]');
    const emailField = await page.$('input[name="email"]');
    const confirmEmailField = await page.$('input[name="confirmEmail"]');
    const phoneField = await page.$('input[name="phone"]');
    const termsCheckbox = await page.$('input[name="terms"]');
    const registerButton = await page.$('button[type="submit"]');

    expect(fullnameField).toBeTruthy();
    expect(emailField).toBeTruthy();
    expect(confirmEmailField).toBeTruthy();
    expect(phoneField).toBeTruthy();
    expect(termsCheckbox).toBeTruthy();
    expect(registerButton).toBeTruthy();
  });

  it('should replace the form with a thank you message upon submission', async () => {
    await page.type('input[name="fullname"]', 'John Doe');
    await page.type('input[name="email"]', 'john@example.com');
    await page.type('input[name="confirmEmail"]', 'john@example.com');
    await page.type('input[name="phone"]', '1234567890');
    await page.click('input[name="terms"]');

    await Promise.all([page.waitForSelector('p'), page.click('button[type="submit"]')]);

    const thankYouMessage = await page.$eval('p', (el) => el.innerText);
    expect(thankYouMessage).toBe('Thank you for signing up!');
  });
});
