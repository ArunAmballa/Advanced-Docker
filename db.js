const mongoose=require("mongoose")

const DATABASE_URL = 'mongodb://mongoede:27017/myDatabase';

// Connect to MongoDB
mongoose.connect(DATABASE_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const UserSchema=mongoose.Schema({
    name:{type:String,required:true}
})

module.exports=mongoose.model("User",UserSchema);
