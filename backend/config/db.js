import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rathod66:vamshi12345@cluster0.sr83b.mongodb.net/food-del').then(()=>console.log("DB connected"));
}