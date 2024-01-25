import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-4 border border-3">
        <h1 className="text-center">Bienvenido</h1>
        <h5 className="text-center">Ingresa tus tareas</h5>
        <FormularioTarea></FormularioTarea>
      </Container>
    </>
  );
}

export default App;
