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
            <strong>Consigna:</strong> ¿Cuál es el tiempo de espera promedio y
            porcentaje de ocupación para cada tipo de servicio?
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
            <strong>Consigna:</strong>Si uno de los empleados de Atención
            Empresarial cada hora debe ausentarse 12 minutos, ¿cómo cambiarían
            los tiempos de espera?
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
                <td>Incremento en los tiempos de espera</td>
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
            <strong>Consigna:</strong> ¿Cuál sería el porcentaje de ocupación en
            la venta de sellos y sobres si uno de los empleados se dedica
            temporalmente a reclamaciones y devoluciones?
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
                <td>Venta de Sellos y Sobres Sin 1 Empleado</td>
                <td>
                  {resultados.punto_3.venta_de_sellos_y_sobres_sin_1_empleado.toFixed(
                    2
                  )}
                </td>
              </tr>
              <tr>
                <td>Venta de Sellos y Sobres</td>
                <td>
                  {resultados.punto_3.venta_de_sellos_y_sobres.toFixed(2)}
                </td>
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
            <strong>Consigna:</strong>Determinar el máximo número de clientes
            que hubo en cada cola durante la simulación.
          </p>
          <p className="mb-3">
            <strong>Justificación:</strong> Conocer el tamaño máximo de las
            colas es crucial para dimensionar el espacio físico, planificar la
            capacidad del sistema y aplicar estrategias para picos de demanda.
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
                    <tr
                      key={`${queueName} - ${subQueueName}`}
                      className="text-capitalize"
                    >
                      <td>
                        {queueName.replace(/_/g, " ")} {" - "}
                        {subQueueName.replace(/_/g, " ")}
                      </td>
                      <td>{subValue}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={queueName} className="text-capitalize">
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
            <strong>Consigna:</strong>Proponer e implementar una cola de
            prioridad en el área de 'Atención Empresarial', asumiendo que el 20%
            de los clientes son clasificados con alta prioridad al llegar al
            sistema, y determinar el impacto de esta priorización en el tiempo
            de espera promedio de los clientes de alta prioridad y el tiempo de
            espera promedio de los clientes de baja prioridad.
          </p>
          <p className="mb-3">
            <strong>Justificación:</strong>Simular este escenario permite
            cuantificar el efecto de la priorización en los tiempos de espera y
            predecir si la mejora en el servicio para clientes de alta prioridad
            afecta negativamente a los de baja prioridad.
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
            <strong>Consigna:</strong>Calcular la probabilidad de que un cliente
            espere más de 15 minutos en el servicio 'Envíos de Paquetes'.
          </p>
          <p className="mb-3">
            <strong>Justificación:</strong> El servicio de 'Envíos de Paquetes'
            concentra el mayor flujo de clientes y es crítico para la operativa
            diaria; determinar la probabilidad de espera superior a 15 minutos
            permite enfocar la optimización de recursos y mejorar la experiencia
            del usuario donde el impacto es mayor.
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
            <strong>Consigna:</strong>Se debe agregar un servicio más a la
            oficina de correos, donde el 50% de los clientes que llegan a
            despachar Paquetes o Postales, deben pasar sí o sí por ese nuevo
            servicio. Calcular estadísticas sobre la cola y el porcentaje de
            ocupación del nuevo servicio.
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
