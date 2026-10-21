//To provide all re-usable methods / functions related to whole application
import {Global} from './Global';

export class General extends Global {
    //user-defined methods

async openApplication() {
await this.page.goto(this.url);
console.log("Application opened");
}
async login() {
await this.page.locator(this.textbox_loginname).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login successful");
console.log("Login Completed");
}
async logout() {
await this.page.locator(this.link_logout).click();
console.log("Logout completed");
}
      
}