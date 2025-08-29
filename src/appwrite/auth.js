import conf from "../conf/conf.js"
import { Client, ID, Account } from "appwrite";

export class AuthService{
    client = new Client()
    account ;

    constructor (){
        this.client
        .setEndpoint (conf.appwriteUrl)
     .setProject(conf.appwriteProjectId)
     console.log("✅ Appwrite Project:", conf.appwriteProjectId)

        
          this.account =  new Account(this.client)      
        }




 async  createAccount ({email,password,name}){
    try {
        const userAccount = await this.account.create
        (ID.unique(),
        email,
        password,
        name);

        if (userAccount) {
            //call anothr method
      return  this.login({email,password})
      }else{
         return userAccount;
        }
        
    } catch (error) {
        throw error;
    }
      }

 async login ({email,password}){
    try {
      
return await this.account.createEmailPasswordSession(email, password);
     
    } catch (error) {
        console.log("error accur in auth.js - login" , error);
        
        throw error
    }
}



 async getCurrentUser(){
        try {
 console.log("👉 Project ID in client:", this.client.config.project);
    console.log("👉 Endpoint in client:", this.client.config.endpoint);
; 

return await this.account.get()

        } catch (error) {
            if (error.code===401) {
                return null;
            }
               console.error("❌ getCurrentUser error:", error);
            throw error;
        }
        
    }
    
async logout(){
        try {

    await this.account.deleteSessions();
        } catch (error) {
            console.log("logout error",error);
            
           
        }
    }
}

    const authService = new AuthService()
    export default authService // s is biger in that if error accur we change the s 
     // any issue if it accur we chawnge thr name of the into small s 