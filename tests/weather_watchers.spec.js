const { test, expect } = require('@playwright/test')

test('Sign in', async ({ page }) => {
  await page.goto('https://www.stage.bbc.co.uk/')
  await page.locator('text=Sign in').click()

  await page.goto('https://account.bbc.com/signin')
  await page.locator('input[name="username"]').fill(process.env.USERNAME)
  await page.locator('input[name="password"]').fill(process.env.PASSWORD)
  await page.locator('input[name="password"]').press('Enter')
  await expect(page.locator('.e1gviwgp13')).toHaveText('Your account')
})
