import React from "react";
import { Container, Card, Table } from "react-bootstrap";

// Función de utilidad para formatear horas a hh:mm:ss
const formatHoursToHHMMSS = (hours) => {
  if (typeof hours !== "number" || isNaN(hours) || hours < 0) {
    return "-"; // Retorna "-" para valores no numéricos, NaN o negativos
  }

  // Redondear al segundo más cercano antes de la conversión
  const totalSeconds = Math.round(hours * 3600);

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const pad = (num) => num.toString().padStart(2, "0");

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

const ResultadosSimulacion = ({ resultados }) => {
  if (!resultados) {
    return <Container>No hay resultados de simulación para mostrar.</Container>;
  }

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Resultados de la Simulación</h2>

      {/* Punto 1 */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          1. Tiempo de Espera Promedio y Porcentaje de Porcentaje De Ocupación
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se calcula el tiempo promedio que
            los clientes esperan en cada cola y el porcentaje de tiempo que los
            empleados están ocupados, para evaluar la eficiencia del servicio.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Servicio</th>
                <th>Tiempo De Espera Promedio (hh:mm:ss)</th>
                {/* Etiqueta de la columna actualizada */}
                <th>Porcentaje De Ocupación (%)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(resultados.punto_1).map(([serviceName, data]) => (
                <tr key={serviceName}>
                  <td>
                    {serviceName
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </td>
                  <td>{formatHoursToHHMMSS(data.tiempo_promedio_de_espera)}</td>
                  {/* Usa la función de formato */}
                  <td>{data.porcentaje_de_ocupacion.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Punto 2 */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          2. Impacto de la Ausencia del Empleado
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se evalúa cómo afecta al servicio la
            ausencia periódica de un empleado, comparando los tiempos de espera
            con y sin ausencias.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Métrica</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiempo Promedio (Sin Ausencia)</td>
                <td>
                  {formatHoursToHHMMSS(
                    resultados.punto_2
                      .tiempo_promedio_de_espera_con_sin_asusencia
                  )}
                </td>
                {/* Usa la función de formato */}
              </tr>
              <tr>
                <td>Tiempo Promedio (Con Ausencia)</td>
                <td>
                  {formatHoursToHHMMSS(
                    resultados.punto_2
                      .tiempo_promedio_de_espera_con_con_asusencia
                  )}
                </td>
                {/* Usa la función de formato */}
              </tr>
              <tr>
                <td>Incremento</td>
                <td>{resultados.punto_2.incremento.toFixed(2)}%</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Punto 3 (Sin cambios, ya que no son tiempos) */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          3. Porcentaje De Ocupación con un Empleado Menos
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se analiza cómo varía la Porcentaje
            De Ocupación de los empleados si se reduce el personal en el
            servicio de venta de sellos y sobres.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Servicio</th>
                <th>Porcentaje De Ocupación (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Venta de Sellos y Sobres</td>
                <td>{resultados.punto_3.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Punto 4 (Sin cambios, ya que no son tiempos) */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          4. Máximo Clientes en Cola
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se registra la máxima cantidad de
            clientes simultáneos en cada cola para dimensionar el espacio físico
            necesario.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Cola</th>
                <th>Máximo Clientes</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(resultados.punto_4).map(([queueName, value]) =>
                typeof value === "object" ? (
                  Object.entries(value).map(([subQueueName, subValue]) => (
                    <tr key={`${queueName}-${subQueueName}`}>
                      <td>
                        {queueName.replace(/_/g, " ")} -
                        {subQueueName.replace(/_/g, " ")}
                      </td>
                      <td>{subValue}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={queueName}>
                    <td>{queueName.replace(/_/g, " ")}</td>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Punto 5 */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          5. Impacto de Cola de Prioridad
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se implementa una cola prioritaria
            para evaluar cómo afecta a los tiempos de espera de clientes
            prioritarios vs. regulares.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Tipo Cliente</th>
                <th>Tiempo De Espera Promedio (hh:mm:ss)</th>
                {/* Etiqueta de la columna actualizada */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Con Prioridad</td>
                <td>
                  {formatHoursToHHMMSS(
                    resultados.punto_5.tiempo_promedio_de_espera_ccp
                  )}
                </td>
                {/* Usa la función de formato */}
              </tr>
              <tr>
                <td>Sin Prioridad</td>
                <td>
                  {formatHoursToHHMMSS(
                    resultados.punto_5.tiempo_promedio_de_espera_csp
                  )}
                </td>
                {/* Usa la función de formato */}
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Punto 6 (Sin cambios en el valor, es una probabilidad) */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          6. Probabilidad Espera {">"} 15 min
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se calcula la probabilidad de que
            los clientes de envíos esperen más de 15 minutos, identificando
            posibles cuellos de botella.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Probabilidad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Espera {">"} 15 min</td>
                <td>{(resultados.punto_6 * 100).toFixed(2)}%</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Punto 7 */}
      <Card className="mb-4 shadow-sm">
        <Card.Header as="h3" className="bg-primary text-white">
          7. Nuevo Servicio Derivado
        </Card.Header>
        <Card.Body>
          <p className="mb-3">
            <strong>Justificación:</strong> Se evalúa la viabilidad de
            implementar un nuevo servicio derivado de envíos de paquetes,
            analizando su Porcentaje De Ocupación y tiempos de espera.
          </p>
          <Table striped bordered hover size="sm">
            <thead className="table-dark">
              <tr>
                <th>Métrica</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Porcentaje De Ocupación</td>
                <td>
                  {resultados.punto_7.porcentaje_de_ocupacion.toFixed(2)}%
                </td>
              </tr>
              <tr>
                <td>Tiempo De Espera Promedio</td>
                <td>
                  {formatHoursToHHMMSS(
                    resultados.punto_7.tiempo_promedio_de_espera
                  )}
                </td>
                {/* Usa la función de formato */}
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ResultadosSimulacion;
