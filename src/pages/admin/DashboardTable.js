import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import Actions from './Actions';

const DashboardTable = ({ url, title, columns, deletedOrUpdated }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: { "Content-type": "application/json" },
        })
            .then((r) => r.json())
            .then((r) => {
                setData(r);
            });
    }, [url, deletedOrUpdated]);

    return (
        <div className='card p-3' style={{ height: 450, width: 975 }}>
            <h4>{title}</h4>
            <DataGrid
                columns={columns}
                rows={data.map((item) => {
                    return {
                        id: item.id,
                        col1: item.id,
                        col2: item.type,
                        col3: item.abbreviation,
                        col4: item.name,
                        col5: item.totalSubjets,
                    }
                })}
            />
        </div>
    );
}

export default DashboardTable;
