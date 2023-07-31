import mongoose from "mongoose";

export const db=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backend_api"
    })
    .then((c)=>console.log(`Database is connected with ${c.connection.host}`))
    .catch((e)=>console.log(e));
}