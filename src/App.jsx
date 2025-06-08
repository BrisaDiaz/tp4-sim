import { useState } from "react";
import VectorEstado from "./components/VectorEstado";
import ConfigForm from "./components/ConfigForm";
import { gestorSimulacion } from "./services";

function App() {
  const [cabeceras, setCabeceras] = useState(null);
  const [filas, setFilas] = useState(null);

  const handleConfigSubmit = (config) => {
    console.log("Configuración enviada:", config);
    const resultados = gestorSimulacion(config);
    setCabeceras(resultados.cabeceras);
    setFilas(resultados.filas);
  };
  return (
    <>
      <div className="App mb-4">
        <h1 className="text-center my-4">Oficina de Correos Mocasa</h1>
        <ConfigForm onSubmit={handleConfigSubmit} />
        {cabeceras && filas ? (
          <VectorEstado cabeceras={cabeceras} filas={filas} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
