const User = require('../model/userModel')

const create = async(req,res)=>{
    try{
    const userData = new User(req.body)
    if(!userData){
        return res.status(404).send({message:'User data not found'})
    }
    await userData.save()
    res.status(200).json({msg:'User created sucessfully'})
}
catch(error){
    res.status(500).json({msg:error.message})
}
}
const getAll = async(req,res)=>{
    try{
        const userData = await User.find()
        if(!userData){
            return res.status(404).send({message:'User data not found'}) 
        }
        res.status(200).json(userData)
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}
const getOne = async(req,res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).send({message:'User not exist'})
        }
        res.status(200).json(userExist)
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}
const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).send({message:'User not exist'})
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg: 'User updated successfully'})
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}
const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).send({message:'User not exist'})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({msg: 'User deleted successfully'})
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}

module.exports = {
    create:create,
    getAll:getAll,
    getOne:getOne,
    update:update,
    deleteUser:deleteUser
}