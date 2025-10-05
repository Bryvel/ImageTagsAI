const express = require('express');
const api = express.Router();
//Multer middleware para manejar el parse del file en el form-data
const multer = require('multer');
// Storage en memoria de file
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Incorporacion de Variables de Entorno, credenciales para Imagga
const API_KEY=process.env.API_KEY
const API_SECRET=process.env.API_SECRET
const auth= btoa(`${API_KEY}:${API_SECRET}`)


/**
 * @param {express.Request & {body : formData }} req
 * @param {express.Response & {tags : [array] }} res
 */

api.post('/analyze', upload.single('image'), async (req, res) => {
 
  //Conversion del buffer del archivo en memoria de multer a una variable de tipo blob
  const file= req.file.buffer
  var arrayBufferView = new Uint8Array(file);
  var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } )
  
  //formData con el formato requerido por el api de imagga
  const formData=new FormData()
  formData.append("image",blob)

  //Consumo del API de Taggeo de imagga con la data previamente generada
  try {
    const response = await fetch("https://api.imagga.com/v2/tags?language=es", {
      method: "POST",
      headers: {
        'Authorization': `Basic ${auth}`,
      
      },
      body:formData
    })

    //Formateo de la respuesta generada exitosamente desde imagga
    const data = await response.json();
    res.send(data.result)

  } catch (error) {
    // Validacion de errores por parte de Imagga
    res.send(error.status)
  }
})
module.exports = api;