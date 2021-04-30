const mongoose = require('mongoose')
const BouquetSchema = new mongoose.Schema({

    name : {
        type : String , 
        uinque: true ,
        required : true
    },
    price :{
        type : Number , 
        required : true
    },
    count : {
        sold:Number,
        available:Number
    }, 
    info:{
        type:String,
        required:true
    },
    bouquetSentiment:{
        type:String,
        enum:['I Love You','I Miss You','Congratulations','Get Well Soon','Happy Anniversary','Happy Birthday','I Am Sorry','Thank You','Wedding'],
        required:true
    },
    images:[String]


})


const BouquetModel = mongoose.model('Bouquet',BouquetSchema);
module.exports=BouquetModel;