const server = require('./src/app.js');
const { conn, Products } = require('./src/db.js');
const express = require('express');
const {products} = require("./src/bulk/products.js")
const app = express();

const bulkCharge = async () =>{
  try {
      
    let allproducts = await Products.findAll();
    console.log("Productos existentes: ", allproducts.length);
    if(allproducts.length === 0){
      console.log("Cargando productos");
      await Products.bulkCreate(products);
      console.log("Productos cargados")
    }

  } catch (error) {
    
    console.error("Error al cargar los productos", error)

  }
}

conn.sync({ force: false }).then(async () => {
  await bulkCharge();
  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); 
  });
});