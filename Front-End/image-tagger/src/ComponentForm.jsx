import React from 'react';
import { useState, useEffect } from 'react';


export default function ComponentForm() {
    const [image, setImage] = useState('')
    const [data, setData] = useState(null)

//Funcion para capturar la imagen subida por el usuario al form
    async function HandleImage(e) {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

//Funcion para el consumo dl api de analisis de imagenes por IA
    async function HandleUpload(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', image);
        const response = await fetch("http://localhost:80/api/analyze", {
            method: "POST",
            body: formData
        })
        const result = await response.json();
        setData(result)
    }

    return (
        
        <div>
         <h1>Test</h1>
            <form id="imageUploadForm" enctype="multipart/form-data">
                <input type="file" id="imageInput" accept="image/*" name="image" onChange={HandleImage}></input>
                <button onClick={HandleUpload}>Upload Image</button>
            </form>
            <h1>{data?.tags[0].tag.es}</h1>
        </div>

    )
}

