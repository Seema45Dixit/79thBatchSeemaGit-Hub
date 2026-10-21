import{test} from '@playwright/test';
import{General1} from '../lib/General1';


test("Verify HRMS login_logout",async({page})=>{

const obj1=new General1(page);
obj1.openApplication();
obj1.login();
obj1.Logout();
});



