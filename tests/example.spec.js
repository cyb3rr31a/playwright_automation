// @ts-check
import { test, expect, request } from '@playwright/test';

test.beforeEach(async({ page}) => {
})

test('basic test', async({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});

test('interact with inputs', async({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce'); //#password, #user-name are css selectors
    await page.click('#login-button'); // Clicks the login button
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Checks if we were redirected to the inventory page
});

test('debugging demo', async({ page }) => {
    await page.goto('https://example.com');
    // await page.pause(); // Opens an inspector
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('GET API example', async() => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.title).toBeDefined();
});