import StudemtModel from "../models/Student.js";

class StudentController{

    static createDoc=async(req,res)=>{
       try{

        const {name,age,fees} = req.body

        const doc = new StudemtModel({

            name:name,
            age:age,
            fees:fees

        })

        const result = await doc.save();
        res.status(201).send(result)



       }catch(error){

        console.log(error)
       }
    }


    static getAllDoc=async(req,res)=>{
       try{

        const result = await StudemtModel.find()
        res.send(result)

       }catch(error){
        console.log(error);
       }
    }


    static getSingleDocById=async(req,res)=>{

        try{

            const result = await StudemtModel.findById(req.params.id) 
            res.send(result)

        }catch(error){
            console.log(error)
        }
      
    }

    static updateDocById=async(req,res)=>{
        
        try{

            const result=await StudemtModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(result)

        }catch(error){
            console.log(error)
        }

    }

    static deleteDocById=async(req,res)=>{

        try{

            const result = await StudemtModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)

        }catch(error){
            console.log(error)
        }
       
    }

}


export default StudentController;