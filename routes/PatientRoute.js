const express = require('express')
const router = express.Router()
const Patient = require('./../models/patient')
router.post('/create',async(req,res)=>{
    try{
         const {name,disease} = req.body
         const patient = new Patient({name,disease})
         await patient.save()
         res.status(201).json({message:'Patient created successfully'})
    }
    catch(err)
    {
        res.status(500).json({ message: "Error adding patient", error: err.message })
    }
})
router.get('/details',async (req,res)=>
{
    try{
         const id = req.query.id
         const patient = await Patient.findById(id)
         if(!patient)
         {
            return res.status(401).json({message: 'Patient not found'})
         }
         res.status(200).json(patient)
    }
    catch(err)
    {
        res.status(500).json({ message: "Error retrieving patient details", error: err.message })
    }
})
router.post('/heartrate',async (req,res)=>{
    try{
        const { rate } = req.body
        const patient = await Patient.findById(req.query.id)
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" })
        }
        patient.heartRate.push({rate})
        await patient.save()
        res.status(201).json({ message: "Heart rate recorded successfully"})
    }
    catch(err)
    {
        res.status(500).json({ message: "Error recording heart rate", error: err.message })
    }
})
router.get('/details/heartrate',async(req,res)=>
{
    try{
         const id = req.query.id
         const patient = await Patient.findById(id)
         if(!patient)
         {
            return res.status(401).json({message: 'Patient not found'})
         }
         res.status(200).json({heartrates :patient.heartRate})
    }
    catch(err)
    {
        res.status(500).json({ message: "Error retrieving heart rate data", error: error.message })
    }
})
module.exports = router