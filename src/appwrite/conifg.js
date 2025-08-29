import conf from "../conf/conf.js"
import { Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databases ;
    bucket 

    constructor(){
this.client
           //.setEndpoint ("https://nyc.cloud.appwrite.io/v1")
           .setEndpoint(conf.appwriteUrl)
             .setProject(conf.appwriteProjectId)
   this.databases =  new Databases(this.client)
     this.bucket = new Storage(this.client)
     // this.account =  new Account(this.client) //TODO:

            }

async createPost ({title,slug,content,featuredImage,status,userId}){
                try {
                    return await this.databases.createDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                           slug,
                           {
                            title,
                            content,
                            featuredImage,
                            status,
                            userId,

                           }
                    )
                } catch (error) {
                    throw error;
                }
       
            }
async updatePost (slug,{title, content,featuredImage,status}){
try {
    return await this.databases.updatePost(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
    {
       title,
      content,
      featuredImage,
      status,
    }
        
    )
} catch (error) {
    throw error;
}
}


async deletePost (slug){
    try {
     await this.databases.deleteDocument(
             conf.appwriteDatabaseId,
         conf.appwriteCollectionId,
             slug
                           
        )
        return true

    } catch (error) {
     return false
    }
}

async getPost(){
         try {
             return await this.databases.getDocument(
                 conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 slug,

             ) 
             
         } catch (error) {
            return false
         }

         
    
}

async getPosts (queries =[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
               conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 queries,


        )
    } catch (error) {
        console.log("Appwrite service get error" , error);
        return false;

    };
}




async uplodeFile(file){
    try {

        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file 
        )
        
    } catch (error) {
      console.log("appwrite service :: uplodeFile:: error" , error)
        return false
    }
}

async deleteFile (fileId){
    try {
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
            
        )
        return true

    } catch (error) {
             console.log("appwrite service :: uplodeFile:: error" , error)
      
        return false
    }
}

// response is so fast so we didnt add async as per need 
 getFilePreview (fileId){
 return this.bucket.getFilePreview(
    conf.appwriteBucketId,
    fileId,

 )
   }


}


const service = new Service
export default service