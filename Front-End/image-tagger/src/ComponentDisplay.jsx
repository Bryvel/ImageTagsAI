import DataTable from 'react-data-table-component'
import Grid from '@mui/material/Grid';

export default function ComponentDisplay(props) {
    // Herencia de datos del componente padre
    const { imageUrl, dataTag } = props;
    // Constantes utilizadas por la libreria react-data-table-component para auto generar una tabla de contenidos
    const columns = [
        {
            name: 'Contenido',
            selector: row => row.tag.es,
        },
        {
            name: 'Certeza (%)',
            selector: row => row.confidence,
        },
    ];
    const data = dataTag?.tags
    //Renderizacion del componente Imagen junto a tabla, mediante un grid para ordenarlos por columnas
    return (
        <div>
            <Grid container spacing={2} sx={{ padding: 4 }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{imageUrl ? <img src={imageUrl} alt="Analisis Imagen" width="500" height="65%" /> : null}</Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <DataTable
                        title="Analisis del Contenido de la imagen"
                        columns={columns}
                        data={data}
                        direction="auto"
                        fixedHeaderScrollHeight="300px"
                        pagination
                        responsive
                        subHeaderWrap
                        striped
                    />
                </Grid>
            </Grid>
        </div>
    )
}
