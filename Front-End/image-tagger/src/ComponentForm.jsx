import { useState } from 'react';
import ComponentDisplay from './ComponentDisplay';
import './App.css';
// Componentes de Material UI
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';





export default function ComponentForm() {
    //State de la data
    const [image, setImage] = useState(null)
    const [dataTag, setDataTag] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
   //State para cargar el loader y el componente de display
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
        setContentDisplay(false)
    }

    //Funcion para el consumo dl api de analisis de imagenes por IA
    async function HandleUpload(e) {
        setContentDisplay(false)
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
            <div>
            <h4>Sube una imagen por favor</h4>
            <form id="imageUploadForm" enctype="multipart/form-data">
                <OutlinedInput type="file" id="imageInput" accept="image/*" name="image" onChange={HandleImage}></OutlinedInput>
            </form>
            {!loaderDisplay ? <Button variant="contained" onClick={HandleUpload}>Analizar</Button> : null}
            {loaderDisplay ? <Box><CircularProgress /></Box> : null}
            </div>

            {contentDisplay ? <ComponentDisplay dataTag={dataTag} imageUrl={imageUrl} /> : null}
        </div>
    )
}

