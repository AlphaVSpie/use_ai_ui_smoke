const { test, expect } = require('@playwright/test');

test('головна use.ai відкривається та має тайтл', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Use/i);
  const heroHeading = page.getByRole('heading', { name: /Multi-Model/i });
  await expect(heroHeading).toBeVisible();
});

test('Sign In кнопка працює', async ({ page }) => {
  await page.goto('/');
  const signIn = page.getByRole('link', { name: /Sign in/i });
  await expect(signIn).toBeVisible();
  await signIn.click();
  await expect(page).toHaveURL(/login|signin|auth/i);
});

test('меню Features відображається', async ({ page }) => {
  await page.goto('/');
  const features = page.getByRole('link', { name: /Features/i });
  await expect(features).toBeVisible();
});

test('блок моделей відображається', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('GPT-4', { exact: true })).toBeVisible();
  await expect(page.getByText('Claude', { exact: true })).toBeVisible();
  await expect(page.getByText('Anthropic', { exact: true })).toBeVisible();
});

test('футер відображається', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');
  await expect(footer).toBeVisible();
});

test('логотип use.ai клікабельний', async ({ page }) => {
  await page.goto('/');

  const logo = page.locator('nav a[href="/"]');
  await expect(logo).toBeVisible();

  await logo.click();
  await expect(page).toHaveURL('/');
});

test('кнопка Start Now веде до сторінки чату', async ({ page }) => {
  await page.goto('/');
  const startNow = page.getByRole('link', { name: /Start Now/i });
  await expect(startNow).toBeVisible();
  await startNow.click();
  await expect(page).toHaveURL(/\/chat/);
});

test('меню Pricing відображається та скролить до блоку тарифів', async ({ page }) => {
  await page.goto('/');

  const pricingLink = page
    .getByRole('navigation')
    .getByRole('link', { name: 'Pricing' });

  const pricingHeading = page.getByRole('heading', {
    name: /Choose the plan that's right for you/i,
  });

  await expect(pricingLink).toBeVisible();

  await pricingLink.click();

  await expect(pricingHeading).toBeInViewport();
});


test('секція тарифів містить два основні плани', async ({ page }) => {
  await page.goto('/');

  const monthly = page.getByRole('heading', { name: /Monthly subscription/i });
  const quarterly = page.getByRole('heading', { name: /Quarterly subscription/i });

  await expect(monthly).toBeVisible();
  await expect(quarterly).toBeVisible();
});

test('FAQ містить питання про безкоштовне користування', async ({ page }) => {
  await page.goto('/');
  const question = page.getByText('Is it free to use?');
  await expect(question).toBeVisible();
});

test('у футері є посилання на Privacy Policy та Terms & Conditions', async ({ page }) => {
  await page.goto('/');

  const privacy = page.getByRole('link', { name: 'Privacy Policy' });
  const terms = page.getByRole('link', { name: 'Terms & Conditions' });

  await expect(privacy).toBeVisible();
  await expect(terms).toBeVisible();
});

test('кнопка вибору мови English відображається', async ({ page }) => {
  await page.goto('/');
  const langButton = page.getByRole('button', { name: /English Select Language/i });
  await expect(langButton).toBeVisible();
});
