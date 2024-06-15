const mongoose = require('mongoose');
const EmpSchema = new mongoose.Schema({
    username:String,
    name:String,
    feedback:[String]
});

const Employeemodel = mongoose.model('employees',EmpSchema);
module.exports = Employeemodel