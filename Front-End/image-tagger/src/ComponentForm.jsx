import React from 'react';
import { useState } from 'react';
import ComponentDisplay from './ComponentDisplay';
import './App.css';



export default function ComponentForm() {
    const [image, setImage] = useState(null)
    const [dataTag, setDataTag] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [contentDisplay, setContentDisplay] = useState(null)
    const [loaderDisplay, setloaderDisplay] = useState(null)

    //Funcion para capturar la imagen subida por el usuario al form
    async function HandleImage(e) {
        setImage(e.target.files[0])
        //Proceso de obtener la imagen en memoria y convertirla en URL
        const reader = new FileReader();
        reader.onload = e => {
            setImageUrl(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    //Funcion para el consumo dl api de analisis de imagenes por IA
    async function HandleUpload(e) {
        setloaderDisplay(true)
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', image);
        const response = await fetch("http://localhost:80/api/analyze", {
            method: "POST",
            body: formData
        })
        const result = await response.json();
        setDataTag(result)
        setloaderDisplay(false)
        setContentDisplay(true)
    }


    return (

        <div>
            <h1>Analisis de Contenido de Imagenes por IA</h1>
            <h1>Sube una imagen por favor</h1>
            <form id="imageUploadForm" enctype="multipart/form-data">
                <input type="file" id="imageInput" accept="image/*" name="image" onChange={HandleImage}></input>
                <button onClick={HandleUpload}>Analizar</button>
            </form>
            {loaderDisplay?<div class="loader"></div>:null}
            {contentDisplay?<ComponentDisplay dataTag={dataTag} imageUrl={imageUrl} />:null}            

        </div>

    )
}

