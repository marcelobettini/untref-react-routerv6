import { useNavigate } from "react-router";
import '../App.css';
export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Epa!</h1>
      <p>Lo sentimos, ocurrió un error inesperado.</p>

      <img src="/jungle-404.gif" alt="page not found" />
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}