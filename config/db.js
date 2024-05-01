const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://bhukanbhavdip3:bhavdip@cluster0.5bpbjox.mongodb.net/?retryWrites=true&w=majority"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl).then(()=>console.log("mongodb connected..!"))
}

module.exports={connectDb}