import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DashboardTable = ({ url, title }) => {
    const [data, setData] = useState([]);

    const columns = [
        { field: 'col1', headerName: 'Id', width: 40 },
        { field: 'col2', headerName: 'Tipo', width: 125, editable: true },
        { field: 'col3', headerName: 'Abreviación', width: 125, editable: true },
        { field: 'col4', headerName: 'Nombre', width: 350, editable: true },
        { field: 'col5', headerName: 'Cant. Materias', width: 125, editable: true },
    ];

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: { "Content-type": "application/json" },
        })
            .then((r) => r.json())
            .then((r) => {
                setData(r);
            });
    }, [url]);

    return (
        <div className='card p-3' style={{ height: 450, width: 850 }}>
            <h4>{title}</h4>
            <DataGrid
                columns={columns}
                rows={data.map((item) => {
                    return { id: item.id, col1: item.id, col2: item.type, col3: item.abbreviation, col4: item.name, col5: item.totalSubjets }
                })}
            />
        </div>
    );
}

export default DashboardTable;
