//Access Mongoose package
const mongoose = require("mongoose");

//connect to db
mongoose.connect('mongodb+srv://userone:userone@cluster0.xlkno.mongodb.net/LibraryApp?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection to bookdb successfull`);
}).catch((e)=>{
    console.log(`no connection to book db`);
})

//schema def
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    publisher:String,
    about:String,
    img: String
});


//create model
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;