const mongooes = require('mongoose');
let Schema = mongooes.Schema;


let supplier = new Schema({

    name:{

        type:String,
        //required:true
    },

    email:{

        type:String,
        //required:true
    },

    address:{
        type:String,
        //required:true
    },
    

    mobile:{
        type:String,
        //required:true
    },

    Supply:{
        type:String,
        //required:true
    },
    description:{
        type:String,
        //required:true 
    }


},{

    collection:'supplier'
});

module.exports = mongooes.model('supplier',supplier);