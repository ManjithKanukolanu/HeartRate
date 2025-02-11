const express = require('express')
const router = express.Router()
const User = require('./../models/user')
router.post('/register',async (req,res)=>{
      try{
      const {email,password} = req.body
      if (!email || !password)
      {
        return res.status(400).json({ message: 'Email and password are required' })
      }
      const existingUser = await User.findOne({email})
      if (existingUser)
      {
        return res.status(400).json({ message: 'User already exists'})
      }
      const user = new User({email,password})
      await user.save()
      res.status(201).json({message: 'User registered successfully'})
      }
      catch(err)
      {
        res.status(500).json({ message: "Error registering user", error: err.message })
      }
})
router.post('/login',async (req,res)=>{
      try{
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(user)
        {
            if(user.password === password)
            {
               return res.status(200).json({message: 'User login successful'})
            }
            else
            {
               return res.status(401).json({message: 'Incorrect password'})
            }
        }
        return res.status(400).json({message: 'User not found'})
      }
      catch(err)
      {
        res.status(500).json({ message: "Error logging in", error: err.message })
      }
})
module.exports = router