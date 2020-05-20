const mongoose = require('mongoose');
const config = require('config');
const dbUrl = config.get('mongoUrl');


let connectDb = async () =>{
    try{
         await mongoose.connect(dbUrl,
            {useNewUrlParser: true,
            useUnifiedTopology: true } );
         console.log("Connected");
    }
   catch(exeption){
     console.log("Error" + exeption);
   }

}


module.exports = connectDb;