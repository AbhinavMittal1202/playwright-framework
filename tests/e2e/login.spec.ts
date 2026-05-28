import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { users } from "../../test-data/users";

test.describe("Login Page", () => {
  test("should login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await expect(page).toHaveURL(/dashboard/);
  });

  test("should not login using invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
  });
});