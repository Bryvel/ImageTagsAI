import DataTable from 'react-data-table-component'

export default function ComponentDisplay(props) {
    const { imageUrl, dataTag } = props;
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

    return (
        <div>
            {imageUrl ? <img src={imageUrl} alt="Analisis Imagen"/> : null}
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
        </div>
    )
}
