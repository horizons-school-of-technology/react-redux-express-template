const mongoose = require('mongoose');
var {Schema}=mongoose;

var courseSchema=new Schema({
  course_number: String,
  description:String,
  course_name:String,
  department:String,
  ratings:[{type: Schema.Types.ObjectId,ref:'rating'}],
  professors:[String],
},{collection:'courses'}
);

module.exports = mongoose.model('course',courseSchema);
