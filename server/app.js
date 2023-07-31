import  express  from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"


export const app=express()

config({
    path:"./data/config.env",
})


//middleware
app.use(express.json()) //accept json file from frontend(if not present from postman )
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true , //cookie,header will not show in frontend


}))
//using routes
app.use("/api/v1/users",userRouter); //we have to use user route to write this 
app.use("/api/v1/task",taskRouter); //we have to use user route to write this 




app.get("/",(req,res)=>{
    res.send("Nice working")
})





//middleware for error handling
app.use(errorMiddleware)





