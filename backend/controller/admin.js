const admin =require('../models/admin.js')
module.exports={
    getAllAdmin:(req,res)=>{
        const mycallback=function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        }
        admin.getAll(mycallback)
    }
}