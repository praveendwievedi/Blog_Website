import conf from "../conf/conf";
import { Client,ID,Storage} from "appwrite";

class Storage_services{
    client=new Client()
    bucket

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.bucket=new Storage(this.client)
    }

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            console.log("appwrite services :: upload file :: ",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite service :: delete file :: ",error);
            return false;
        }
    }

    getFilePreview(fileId){
      this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    }
}

const storage_services=new Storage_services()

export default storage_services