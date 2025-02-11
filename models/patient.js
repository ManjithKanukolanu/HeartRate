const mongoose = require('mongoose')
const PatientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    disease:{
        type:String,
        required:true
    },
    heartRate:[
        {
            rate:{
                type:Number
            },
            recordedAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
})
const Patient = mongoose.model('Patient',PatientSchema)
module.exports = Patient