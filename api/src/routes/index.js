const {Router} = require ("express");

const postuser = require("../routes/usuario/postuser.js");
const getproducts = require('../routes/productos/getproducts.js')

const router = Router();

router.use("/postusuario", postuser)
router.use('/getproducts', getproducts)


module.exports = router;