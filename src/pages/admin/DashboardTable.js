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
                if (title === "Carreras") {
                    setData(r);
                } else if (title === "Alumnos") {
                    setData(r.data.map((alumno) => {
                        return {
                            id: alumno.id,
                            legajo: alumno.legajo,
                            dni: alumno.dni,
                            firstName: alumno.firstName,
                            lastName: alumno.lastName,
                            activeAccount: alumno.activeAccount,
                        }
                    }));
                } else if (title === "Empresas") {
                    setData(r.data.map((company) => {
                        return {
                            id: company.id,
                            cuit: company.cuit,
                            companyName: company.companyName,
                            activeAccount: company.activeAccount,
                        }
                    }));
                }
            });
    }, [url, deletedOrUpdated, title]);

    return (
        <>
            {addFunctionality && <AddCareerModal url={url} setDeletedOrUpdated={setDeletedOrUpdated} deletedOrUpdated={deletedOrUpdated} setShowModal={setShowModal} visible={showModal} form={addCareerForm} setForm={setAddCareerForm} />}
            <div className='card p-3' style={{ height: 450, width: 975 }}>
                <h4>{title}</h4>
                <DataGrid
                    columns={columns}
                    rows={data.length > 0 ? data.map((item) => {
                        if (title === "Carreras") {
                            return {
                                id: item.id,
                                col1: item.id,
                                col2: item.type,
                                col3: item.abbreviation,
                                col4: item.name,
                                col5: item.totalSubjets,
                            }
                        } else if (title === "Alumnos") {
                            return {
                                id: item.id,
                                col1: item.legajo,
                                col2: item.dni,
                                col3: item.firstName,
                                col4: item.lastName,
                                col5: item.activeAccount,
                            }
                        } else if (title === "Empresas") {
                            return {
                                id: item.id,
                                col1: item.cuit,
                                col2: item.companyName,
                                col3: item.activeAccount,
                            }
                        }
                        return false;
                    }) : []}
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
