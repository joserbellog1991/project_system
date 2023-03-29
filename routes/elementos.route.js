const express = require("express");
const router = express.Router();
router.get('/',(req,res)=>{

    res.json({
    
        message: "elementos list"
    
    
    });
    
    });
    
    
    router.get('/:i', (req,res)=>{
       const {id} = req.params; 
       res.json({
         message: "id: "+id+" consultado",   
    
       });
    
    
    });
    
    
    router.post('/',(req,res)=>{
    const body = params.body;
    
    res.json({
            message:"datos ingresados",
            data:body
    });
    
    
    });
    
    
    router.patch("/:id",(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    
    if(body){
    
        res.json({
                message:"id "+id+" actualizada con exito",
                data:body
    
        });
    
    }else{ res.statusCode(404).json({message:"no hay datos para actualizar"});}
    
    });
    
    
    router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    
    if(id){
        res.json({
            message:"id "+id+" eliminadacon exito",
          
    
    });  
    }else {res.statusCode(404).json({message:"no hay datos para actualizar"})}
        
    
    });

module.exports = router;