import { useState } from 'react';
import "./AdminDashboard.css";
import { Row, Col } from 'react-bootstrap';
import DashboardTable from "./DashboardTable";

const AdminDashboard = () => {
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
              <DashboardTable url='https://localhost:7172/api/Careers' title="Carreras" />
            </Col>
          )}
        </Row>
      </main>
    </div>
  )
}

export default AdminDashboard;