import conf from "../conf/conf";
import { Client, Account ,ID} from "appwrite";

class AuthServices {
    client=new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
     try {
        const userAccount=this.account.create(ID.unique,email,password,name);
        if(userAccount){
            this.login;
        }
        else{
            return userAccount
        }
        
     } catch (error) {
        throw error
     }
    }

    async login({email,password}){
     try {
        return await this.account.createEmailPasswordSession(email,password)
     } catch (error) {
        console.log("appwrite error :: login error ::",error)
     }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite error :: logout error ::",error)
        }
    }

    async getCurrentUser(){
        try {
            const user=await this.account.get()
            if(user){
                return user
            }
            else{
                return false;
            }
        } catch (error) {
            throw error
        }

        return null
    }
}

const authServices=new AuthServices()

export default authServices

