//To provide actual automation scripts 
import { test } from '@playwright/test';
import { General } from '../lib/General';

test('@Smoke_TC001_login_logout', async ({ page }) => {
     const obj = new General(page);
     await obj.openApplication();
     await obj.login();
     await obj.logout();
console.log("execution completed")
});
