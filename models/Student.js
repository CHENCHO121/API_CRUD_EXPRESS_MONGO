import mongoose from 'mongoose';

//define schema


const studentSchema = new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    age:{type:Number,required:true, min:5,max:65},
    fees:{type:mongoose.Decimal128,required:true, validate:(value)=>value>=5000.50},


});


//model

const StudemtModel = mongoose.model('student',studentSchema);

export default StudemtModel;
