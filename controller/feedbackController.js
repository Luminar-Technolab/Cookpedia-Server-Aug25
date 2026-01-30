const feedbacks = require('../model/feedbackModel')

//add  feedbacks
exports.addFeedback = async (req,res)=>{
    console.log("Insidie addFeedback controller");
    const {name,email,message} = req.body
    try{
        const newFeedback = await feedbacks.create({
            name,email,message
        })
        res.status(200).json(newFeedback)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}