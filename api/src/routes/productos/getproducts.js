const {Router} = require("express");
const {Products} = require('../../db.js')

const router = Router();

router.get("/", async(req,res) =>{
    try {
        const products = await Products.findAll();
        res.json(products)
    } catch (error) {
        console.error("error al obtener prodcutos", error);
        res.status(500).json({error:'hubo un error al obtener datos'})
    }
})

module.exports = router