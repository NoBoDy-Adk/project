import { privateDecrypt } from "crypto";
import foodmodel from "../models/foodModel.js";
import fs from "fs";


//add food item

const addFood=async(req,res)=>
{
    let image_filename=`${req.file.filename}`

    const food=new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food item added successfully"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error in adding food item"})
    }
}



//all food list
const listFood=async(req,res)=>
{
    try {
        const foods=await foodmodel.find({});
        res.json({success:true,data:foods})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error in fetching food items"})
    }
}

//remove food item
const removeFood=async(req,res)=>{
try{
    const food=await foodmodel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})

    await foodmodel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food item removed successfully"})
}catch(error){
    console.log(error)
    res.json({success:false,message:"Error in removing food item"})
}
}
export {addFood,listFood,removeFood}