const express = require("express");

router = express.Router();

router.get("/",(req,res)=>{

res.json({route:"list clientes"});

});

router.get("/:i",(req,res)=>{
    const {i} = req.params;
    res.json({
        
        route:"findOne",
        id:i
});
    
    });

    router.post("/",(req,res)=>{
        const body = req.body;
        res.json({body});
        
        });


        router.patch("/:i",(req,res)=>{
            const {i} = req.params;
            const body = req.body;
            res.json({
                message:"id:"+i+" a sido actualizado",
            data: body
            });
            
            });



            router.delete("/:i",(req,res)=>{
                const {i} = req.params;
                
                res.json({
                    message:"id:"+i+" a sido eliminado",
                data: i
                });
                
                });

module.exports = router;