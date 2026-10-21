import{Page} from '@playwright/test'

export class Global {
      constructor(public page: Page) {

      }
    //*********************Test Data ********************* */
    public url      : string = "https://sureshitacademy.in/hrms/login.php";
    public username : string = "sureshit";
    public password : string = "sureshit";

    //*********************Objects / Elements ********************* */
    public textbox_loginname : string = "//input[@name='txtUserName']";
    public textbox_password  : string = "//input[@name='txtPassword']";
    public button_login      : string = "//input[@name='Submit']";
    public link_logout       : string = "//a[text()='Logout']";
}