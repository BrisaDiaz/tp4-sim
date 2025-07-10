import { useState } from 'react';
import VectorEstado from './components/VectorEstado';
import ConfigForm from './components/ConfigForm';
import ResultadosSimulacion from './components/ResultadosSimulacion';
import { gestorSimulacion } from './services';
import { Spinner, Alert, Container } from 'react-bootstrap'; // Importa Spinner y Alert

function App() {
  const [resultados, setResultados] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para el indicador de carga
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const handleConfigSubmit = (data) => {
    setIsLoading(true); // Activa el indicador de carga
    setResultados(null); // Limpia resultados previos
    setError(null); // Limpia errores previos

    try {
      const resultadosSimulacion = gestorSimulacion(data);
      setResultados(resultadosSimulacion);
    } catch (err) {
      console.error('Error durante la simulación:', err);
      setError(
        'Ocurrió un error al procesar la simulación. Por favor, intente de nuevo.'
      );
    } finally {
      setIsLoading(false); // Desactiva el indicador de carga, sin importar si hubo error o éxito
    }
  };

  return (
    <Container className='App mb-5'>
      <div className='text-center my-5'>
        <div className='card border-0 shadow-sm p-4'>
          <div className='card-body'>
            <span className='badge bg-primary fs-6 mb-3'>
              Sistema de simulación
            </span>
            <h1 className='display-4 fw-bold text-dark mb-3'>
              Líneas de espera
            </h1>
            <h4 className='text-muted mb-0'>📮 Oficina de Correos Mocasa</h4>
          </div>
        </div>
      </div>
      <ConfigForm
        onSubmit={handleConfigSubmit}
        isDisabled={isLoading}
      />
      {/* Deshabilita el formulario mientras carga */}
      {/* Indicador de carga */}
      {isLoading && (
        <div
          className='d-flex justify-content-center align-items-center my-5'
          style={{ minHeight: '150px' }}
        >
          <Spinner
            animation='border'
            role='status'
            className='me-3'
          >
            <span className='visually-hidden'>Procesando datos...</span>
          </Spinner>
          <h3>Procesando simulación, por favor espere...</h3>
        </div>
      )}
      {/* Mensaje de error */}
      {error && (
        <Alert
          variant='danger'
          className='my-4'
        >
          {error}
        </Alert>
      )}
      {/* Mostrar resultados si no está cargando y hay resultados */}
      {!isLoading && resultados ? (
        <>
          <VectorEstado
            cabeceras={resultados.cabeceras}
            filas={resultados.filas}
          />
          {resultados.rtas && (
            <ResultadosSimulacion resultados={resultados.rtas} />
          )}
          {/* Asegúrate que 'rtas' exista */}
        </>
      ) : (
        // Puedes poner un mensaje inicial si no hay resultados ni carga
        !isLoading &&
        !error && (
          <p className='text-center my-4'>
            Ingrese los parámetros de la simulación y presione "Comenzar
            Simulación".
          </p>
        )
      )}
    </Container>
  );
}

export default App;
