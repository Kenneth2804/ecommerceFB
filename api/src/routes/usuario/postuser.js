const {Router} = require("express");
const {User} = require('../../db.js');
const bcrypt = require('bcrypt');

const router = Router();

router.post("/", async(req,res) =>{
    let {email,name,picture,password} = req.body;
    const salRounds = 10;
    
    if(!email){
        return res.status(400).json("No hay email");
    }

    try {
        const whereisuser  = await User.findOne({
            where: {
                email: email
            }
        })

        if(whereisuser){
            if(!whereisuser.available){
                return res.status(400).send("usuario no disponible");
            }
            return res.status(400).send("Usuario ya exisite")
        }
        
        const hashedPassword = await bcrypt.hash(password, salRounds);
        const newuser = await User.create({
            email,
            name,
            picture,
            password: hashedPassword,
        })

        return res.status(201).send(newuser);

    } catch (error) {
        return res.status(500).json(error.message)
    }


})

module.exports = router;