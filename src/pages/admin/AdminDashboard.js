import { useState } from 'react';
import "./AdminDashboard.css";
import { Row, Col, Button } from 'react-bootstrap';
import DashboardTable from "./DashboardTable";

const AdminDashboard = () => {
  const [deletedOrUpdated, setDeletedOrUpdated] = useState(false);
  const [selectedSettings, setSelectedSettings] = useState([
    { id: 'carreras', isSelected: true },
    { id: 'alumnos', isSelected: false },
    { id: 'empresas', isSelected: false },
  ]);
  const handleSidebarButton = (e) => {
    switch (e.target.id) {
      case "carreras":
        setSelectedSettings([
          { id: e.target.id, isSelected: true },
          { id: "alumnos", isSelected: false },
          { id: "empresas", isSelected: false },
        ]);
        break;
      case "alumnos":
        setSelectedSettings([
          { id: "carreras", isSelected: false },
          { id: e.target.id, isSelected: true },
          { id: "empresas", isSelected: false },
        ]);
        break;
      case "empresas":
        setSelectedSettings([
          { id: "carreras", isSelected: false },
          { id: "alumnos", isSelected: false },
          { id: e.target.id, isSelected: true },
        ]);
        break;
      default:
        break;
    }
  }

  const handleDeleteRow = (rowValues) => {
    fetch(`https://localhost:7172/api/Careers/${rowValues.id}`, {
        method: 'DELETE',
        headers: { "Content-type": "application/json" },
      })
        .then((r) => {
          if (r.ok) {
            setDeletedOrUpdated(!deletedOrUpdated);
          }
        })
        .catch((e) => {
          console.log(e);
        });
  };

  const handleUpdateRow = (rowValues) => {
    const { id } = rowValues;
    const { col2, col3, col4, col5 } = rowValues.row;
    const updatedCareer = {
      name: col4,
      type: col2,
      abbreviation: col3,
      totalSubjets: col5,
    };
    fetch(`https://localhost:7172/api/Careers?careerId=${id}`, {
        method: 'PUT',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updatedCareer),
      })
        .then((r) => {
          if (r.ok) {
            setDeletedOrUpdated(!deletedOrUpdated);
          }
        })
        .catch((e) => {
          console.log(e);
        });
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="d-flex justify-content-center align-items-center title">
          <h4 className="m-0">Admin Dashboard</h4>
        </div>
        <ul className="p-0 list-style-none">
          <li>
            <button style={{ backgroundColor: selectedSettings.find(b => b.id === "carreras").isSelected ? '#719FED' : '#212529' }} onClick={handleSidebarButton} id="carreras" className="w-100 border-0 rounded-0 sidebar-button">Carreras</button>
          </li>
          <li>
            <button style={{ backgroundColor: selectedSettings.find(b => b.id === "alumnos").isSelected ? '#719FED' : '#212529' }} onClick={handleSidebarButton} id="alumnos" className="w-100 border-0 rounded-0 sidebar-button">Alumnos</button>
          </li>
          <li>
            <button style={{ backgroundColor: selectedSettings.find(b => b.id === "empresas").isSelected ? '#719FED' : '#212529' }} onClick={handleSidebarButton} id="empresas" className="w-100 border-0 rounded-0 sidebar-button">Empresas</button>
          </li>
        </ul>
      </aside>
      <main className="content">
        <Row>
          {selectedSettings.find((x) => x.id === "carreras").isSelected && (
            <Col>
              <DashboardTable url='https://localhost:7172/api/Careers' deletedOrUpdated={deletedOrUpdated} title="Carreras" columns={[
                { field: 'col1', headerName: 'Id', width: 40 },
                { field: 'col2', headerName: 'Tipo', width: 125, editable: true },
                { field: 'col3', headerName: 'Abreviación', width: 125, editable: true },
                { field: 'col4', headerName: 'Nombre', width: 350, editable: true },
                { field: 'col5', headerName: 'Cant. Materias', width: 125, editable: true },
                {
                  field: 'col6', headerName: 'Acciones', width: 150, renderCell: (rowValues) => {
                    return (
                      <>
                        <Button
                          variant="success"
                          color="success"
                          style={{ margin: '0 5px 0 0'}}
                          onClick={() => handleUpdateRow(rowValues)}
                        >
                          Guardar
                        </Button>
                        <Button
                          variant="danger"
                          color="danger"
                          style={{ margin: '0 0 0 5px'}}
                          onClick={() => handleDeleteRow(rowValues)}
                        >
                          X
                        </Button>
                      </>
                    )
                  }
                },
              ]} />
            </Col>
          )}
        </Row>
      </main>
    </div>
  )
}

export default AdminDashboard;