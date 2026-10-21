
import {Global} from './Global1'

export class General1 extends Global{
   async openApplication()
    {
await this.page.goto(this.url)
console.log("Application Open")
     }

     async login(){
        await this.page.locator(this.txtUserName).fill(this.username)
        await this.page.locator(this.txtPassword).fill(this.password)
        await this.page.locator(this.button_login).click()
        console.log("login successful")
        console.log("Login Page")
     }

     async Logout(){
        await this.page.locator(this.link_Logout).click()
        console.log("Logout successfully")
     }
}

