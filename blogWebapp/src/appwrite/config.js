import conf from "../conf/conf";
import { Client,ID,Databases, Query} from "appwrite";

class Services{
    client =new Client()
    databases

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases=new Databases(this.client)
    }

    async createDocument({
        title,content,image,slug,userid,status
    }){
      try {
        return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            image,
            userid,
            status
        })
        return true
      } catch (error) {
        console.log("appwrite service :: create document :: ",error);
        return false
      }
    }

    async updateDocument(slug,{title,content,image,status}){
      try {
        await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            image,
            status
        })
        return true
      } catch (error) {
        console.log("appwrite service :: update document ::",error);
        return false
      }
    }

    async deleteDocument(slug){
     try {
        await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)

        return true;
     } catch (error) {
        return false;
     }
    }

    async getDocument(slug){
     try {
        return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
     } catch (error) {
      console.log("appwrite service :: get document :: ",error);
      return false;
     }
    }

    async getAllPosts(){
      try {
        return await this.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          [
            Query.equal("status" ,"active")
          ]
        )
      } catch (error) {
        console.log("appwrite service :: get all post :: ",error);
        return false
      }
    }
}

const services=new Services()

export default services

