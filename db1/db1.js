var mongoose=require('mongoose');
var con;
mongoose.Promise=global.Promise;
var cb=function(err) {
    if(!err){
        console.log("connection opened");
    }
    else{
        console.log("connection failed");
    }
};
mongoose.connect("mongodb://localhost:27017/Diagonstic_database",cb, { useNewUrlParser: true });
con=mongoose.connection;
module.exports={mongoose};
