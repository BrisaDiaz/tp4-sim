import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import "./ResultadosSimulacion.css"; // Import the new CSS file

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
    return (
      <div className="resultados-simulacion">
        <Container>
          <div className="empty-state">
            <i className="bi bi-inbox" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}></i>
            <h3>No hay resultados de simulación para mostrar.</h3>
            <p>Ejecute una simulación para ver los resultados aquí.</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="resultados-simulacion">
      <Container>
        <div className="header-section">
          <h2>
            <i className="bi bi-bar-chart-line me-2"></i>
            Resultados de la simulación
          </h2>
          <p className="text-white mb-0">
        Tiempo total simulado: {formatHoursToHHMMSS(resultados.tiempo_simulacion)}
    </p>
        </div>

        {/* Punto 1 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-graph-up me-2"></i>
            1. Tiempo de espera promedio y Porcentaje de ocupación
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> ¿Cuál es el Tiempo de espera promedio y
              Porcentaje de ocupación para cada tipo de servicio?
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Tiempo de espera promedio</th>
                    <th>Porcentaje de ocupación</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(resultados.punto_1).map(([serviceName, data]) => (
                    <tr key={serviceName}>
                      <td className="service-name">
                        {serviceName
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </td>
                      <td className="time-value">{formatHoursToHHMMSS(data.tiempo_promedio_de_espera)}</td>
                      <td className="percentage">{data.porcentaje_de_ocupacion.toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Punto 2 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-person-x me-2"></i>
            2. Impacto de la ausencia del empleado
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> Si uno de los empleados de Atención
              Empresarial cada hora debe ausentarse 12 minutos, ¿cómo cambiarían
              los tiempos de espera?
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="metric-value">Tiempo promedio (Sin ausencia)</td>
                    <td className="time-value">
                      {formatHoursToHHMMSS(
                        resultados.punto_2.tiempo_promedio_de_espera_con_sin_asusencia
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="metric-value">Tiempo promedio (Con ausencia)</td>
                    <td className="time-value">
                      {formatHoursToHHMMSS(
                        resultados.punto_2.tiempo_promedio_de_espera_con_con_asusencia
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="metric-value">Incremento en los tiempos de espera</td>
                    <td className="percentage">{resultados.punto_2.incremento.toFixed(2)}%</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Punto 3 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-people me-2"></i>
            3. Porcentaje de ocupación con un empleado menos
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> ¿Cuál sería el Porcentaje de ocupación en
              la venta de sellos y sobres si uno de los empleados se dedica
              temporalmente a reclamaciones y devoluciones?
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Porcentaje de ocupación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="service-name">Venta de Sellos y Sobres Sin 1 Empleado</td>
                    <td className="percentage">
                      {resultados.punto_3.venta_de_sellos_y_sobres_sin_1_empleado.toFixed(2)}%
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Venta de Sellos y Sobres</td>
                    <td className="percentage">
                      {resultados.punto_3.venta_de_sellos_y_sobres.toFixed(2)}%
                    </td>
                  </tr>
                  <tr>
                    <td className="metric-value">Incremento en el porcentaje de ocupación</td>
                    <td className="percentage">{resultados.punto_3.incremento.toFixed(2)}%</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Punto 4 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-queue me-2"></i>
            4. Máxima cantidad de clientes en cola
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> Determinar el máximo número de clientes
              que hubo en cada cola durante la simulación.
            </p>
            <p>
              <strong>Justificación:</strong> Conocer el tamaño máximo de las
              colas es crucial para dimensionar el espacio físico, planificar la
              capacidad del sistema y aplicar estrategias para picos de demanda.
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Cola</th>
                    <th>Máximo de clientes</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(resultados.punto_4).map(([queueName, value]) =>
                    typeof value === "object" ? (
                      Object.entries(value).map(([subQueueName, subValue]) => (
                        <tr key={`${queueName} - ${subQueueName}`}>
                          <td className="service-name">
                            {queueName.replace(/_/g, " ")} {" - "}
                            {subQueueName.replace(/_/g, " ")}
                          </td>
                          <td className="metric-value">{subValue}</td>
                        </tr>
                      ))
                    ) : (
                      <tr key={queueName}>
                        <td className="service-name">{queueName.replace(/_/g, " ")}</td>
                        <td className="metric-value">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Punto 5 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-star me-2"></i>
            5. Impacto de cola de prioridad
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> Proponer e implementar una cola de
              prioridad en el área de 'Atención Empresarial', asumiendo que el 20%
              de los clientes son clasificados con alta prioridad al llegar al
              sistema, y determinar el impacto de esta priorización en el tiempo
              de espera promedio de los clientes de alta prioridad y el tiempo de
              espera promedio de los clientes de baja prioridad.
            </p>
            <p>
              <strong>Justificación:</strong> Simular este escenario permite
              cuantificar el efecto de la priorización en los tiempos de espera y
              predecir si la mejora en el servicio para clientes de alta prioridad
              afecta negativamente a los de baja prioridad.
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Tipo Cliente</th>
                    <th>Tiempo de espera promedio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="service-name">Con Prioridad</td>
                    <td className="time-value">
                      {formatHoursToHHMMSS(resultados.punto_5.tiempo_promedio_de_espera_ccp)}
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Sin Prioridad</td>
                    <td className="time-value">
                      {formatHoursToHHMMSS(resultados.punto_5.tiempo_promedio_de_espera_csp)}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Punto 6 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-clock me-2"></i>
            6. Probabilidad espera {">"} 15 min
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> Calcular la probabilidad de que un cliente
              espere más de 15 minutos en el servicio 'Envíos de Paquetes'.
            </p>
            <p>
              <strong>Justificación:</strong> El servicio de 'Envíos de Paquetes'
              concentra el mayor flujo de clientes y es crítico para la operativa
              diaria; determinar la probabilidad de espera superior a 15 minutos
              permite enfocar la optimización de recursos y mejorar la experiencia
              del usuario donde el impacto es mayor.
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Probabilidad</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="metric-value">Espera {">"} 15 min</td>
                    <td className="percentage">{(resultados.punto_6 * 100).toFixed(2)}%</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Punto 7 */}
        <Card className="shadow-sm">
          <Card.Header as="h3" className="d-flex align-items-center">
            <i className="bi bi-plus-circle me-2"></i>
            7. Nuevo servicio derivado
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Consigna:</strong> Se debe agregar un servicio más a la
              oficina de correos, donde el 50% de los clientes que llegan a
              despachar Paquetes o Postales, deben pasar sí o sí por ese nuevo
              servicio. Calcular estadísticas sobre la cola y el porcentaje de
              ocupación del nuevo servicio.
            </p>
            <div className="table-responsive">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="metric-value">Porcentaje de ocupación</td>
                    <td className="percentage">
                      {resultados.punto_7.porcentaje_de_ocupacion.toFixed(2)}%
                    </td>
                  </tr>
                  <tr>
                    <td className="metric-value">Tiempo de espera promedio</td>
                    <td className="time-value">
                      {formatHoursToHHMMSS(resultados.punto_7.tiempo_promedio_de_espera)}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ResultadosSimulacion;