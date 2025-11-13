const { test, expect } = require('@playwright/test');

test('main use.ai is opened and has a title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Use/i);
  const heroHeading = page.getByRole('heading', { name: /Multi-Model/i });
  await expect(heroHeading).toBeVisible();
});

test('Sign In button is working', async ({ page }) => {
  await page.goto('/');
  const signIn = page.getByRole('link', { name: /Sign in/i });
  await expect(signIn).toBeVisible();
  await signIn.click();
  await expect(page).toHaveURL(/login|signin|auth/i);
});

test('menu Features is displayed', async ({ page }) => {
  await page.goto('/');
  const features = page.getByRole('link', { name: /Features/i });
  await expect(features).toBeVisible();
});

test('models block is displayed', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('GPT-4', { exact: true })).toBeVisible();
  await expect(page.getByText('Claude', { exact: true })).toBeVisible();
  await expect(page.getByText('Anthropic', { exact: true })).toBeVisible();
});

test('footer is displayed', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');
  await expect(footer).toBeVisible();
});

test('logo use.ai is clickable', async ({ page }) => {
  await page.goto('/');

  const logo = page.locator('nav a[href="/"]');
  await expect(logo).toBeVisible();

  await logo.click();
  await expect(page).toHaveURL('/');
});

test('button Start Now redirect to chat page', async ({ page }) => {
  await page.goto('/');
  const startNow = page.getByRole('link', { name: /Start Now/i });
  await expect(startNow).toBeVisible();
  await startNow.click();
  await expect(page).toHaveURL(/\/chat/);
});

test('menu Pricing is displayed and scrolls to plans block', async ({ page }) => {
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


test('plans block contains two plans', async ({ page }) => {
  await page.goto('/');

  const monthly = page.getByRole('heading', { name: /Monthly subscription/i });
  const quarterly = page.getByRole('heading', { name: /Quarterly subscription/i });

  await expect(monthly).toBeVisible();
  await expect(quarterly).toBeVisible();
});

test('FAQ contains answers on common questions', async ({ page }) => {
  await page.goto('/');
  const question = page.getByText('Is it free to use?');
  await expect(question).toBeVisible();
});

test('footter has link to Privacy Policy and Terms & Conditions', async ({ page }) => {
  await page.goto('/');

  const privacy = page.getByRole('link', { name: 'Privacy Policy' });
  const terms = page.getByRole('link', { name: 'Terms & Conditions' });

  await expect(privacy).toBeVisible();
  await expect(terms).toBeVisible();
});

test('language butoon is displayed', async ({ page }) => {
  await page.goto('/');
  const langButton = page.getByRole('button', { name: /English Select Language/i });
  await expect(langButton).toBeVisible();
});
