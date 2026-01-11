const mongoose = required('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    roll:String,
    department:String,
    email:String,
},{timestamps:true});
module.exports = mongoose.model('studentSchema');