import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  console.log("App mounted");

  return (
    <div>
      <h1>Untref React Router Tuto</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Facturas</Link> | {" "}
        <Link to="/expenses">Gastos</Link>
      </nav >
      <Outlet />
    </div>

  );
}

export default App;
