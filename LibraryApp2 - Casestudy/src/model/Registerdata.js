//Access Mongoose package
const mongoose = require("mongoose");

//connect to db
//mongodb+srv://userone:userone@cluster0.xlkno.mongodb.net/LibraryApp?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://userone:userone@cluster0.xlkno.mongodb.net/LibraryApp?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection to register db successfull`);
}).catch((e)=>{
    console.log(`no connection to register db`);
})

//schema def
const Schema = mongoose.Schema;
const RegisterSchema = new Schema({
    Name : {
        type:String,
        required:true
    } ,
    email : {
        type:String,
        required:true,
        unique: true
    } ,
    pass : {
        type:String,
        required:true,
        
    } ,
    conpass:{
        type:String,
        required:true
    } ,
    number: {
        type:Number,
        required:true,
        unique:true
    }
});


//create model
var Registerdata = mongoose.model('regdata',RegisterSchema);

module.exports = Registerdata;