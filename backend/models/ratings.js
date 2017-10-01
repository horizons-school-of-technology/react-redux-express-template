const mongoose = require('mongoose');
var {Schema}=mongoose;

var ratingSchema=new Schema({
  class_id:{type:Schema.Types.ObjectId, required:true},
  prof_id:{type:Schema.Types.ObjectId,required:true},
  rating_count: Number,
  ratings[{difficulty:Number, overall: Number, workload:Number,comment:String}]
})

 module.exports =  mongoose.model('rating',ratingSchema);
