//Access Mongoose package
const mongoose = require("mongoose");

//connect to db
mongoose.connect('mongodb+srv://userone:userone@cluster0.xlkno.mongodb.net/LibraryApp?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection to authordb successfull`);
}).catch((e)=>{
    console.log(`no connection to book db`);
})

//schema def
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name: String,
    life: String,
    genre: String,
    about:String,
    img: String
});


//create model
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;