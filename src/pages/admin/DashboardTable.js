import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "react-bootstrap";
import AddCareerModal from "./AddCareerModal";

const DashboardTable = ({ url, title, columns, deletedOrUpdated, addFunctionality, setDeletedOrUpdated }) => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [addCareerForm, setAddCareerForm] = useState({
        name: '',
        abbreviation: '',
        type: 0,
        totalSubjets: null,
    });

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
        <>
            {addFunctionality && <AddCareerModal setDeletedOrUpdated={setDeletedOrUpdated} deletedOrUpdated={deletedOrUpdated} setShowModal={setShowModal} visible={showModal} form={addCareerForm} setForm={setAddCareerForm} />}
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
                {addFunctionality && (
                    <Button
                        onClick={() => {
                            setShowModal(true);
                            setAddCareerForm({
                                name: '',
                                abbreviation: '',
                                type: 0,
                                totalSubjets: null,
                            });
                        }}
                    >
                        Agregar Carrera
                    </Button>
                )}
            </div>
        </>
    );
}

export default DashboardTable;
