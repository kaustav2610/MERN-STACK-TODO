//main file is server (not app)

import { app } from "./app.js";
import { db } from "./data/database.js";

//connect with database
db()


app.listen(process.env.PORT,()=>{
    console.log(`server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})