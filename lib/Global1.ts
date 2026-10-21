import{Page} from '@playwright/test'

export class Global{

constructor(public page:Page){

}
    //*********************Test Data ********************* */
public url:string="https://sureshitacademy.in/hrms/login.php";
public username:string="sureshit"
public password:string="sureshit"

//********************************Locators/elements */

public txtUserName ="input[name:'txtUserName']"
public txtPassword ="input[name:'txtPassword']"
public button_login="input[name:'Submit']"
public link_Logout="a[text()='Logout']"

}