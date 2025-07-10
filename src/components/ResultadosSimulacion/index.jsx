import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { formatHoursToHHMMSS } from '../../utils/timeFormatter';
import './ResultadosSimulacion.css';

const ResultadosSimulacion = ({ resultados }) => {
  if (!resultados) {
    return (
      <div className='resultados-simulacion'>
        <Container>
          <div className='empty-state'>
            <i
              className='bi bi-inbox'
              style={{
                fontSize: '48px',
                marginBottom: '16px',
                display: 'block',
              }}
            ></i>
            <h3>No hay resultados de simulación para mostrar.</h3>
            <p>Ejecute una simulación para ver los resultados aquí.</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='resultados-simulacion'>
      <Container>
        <div className='header-section'>
          <h2>
            <i className='bi bi-bar-chart-line me-2'></i>
            Resultados de la simulación
          </h2>
          <p className='text-white mb-0'>
            Tiempo total simulado:{' '}
            {formatHoursToHHMMSS(resultados.tiempo_simulacion)}
          </p>
        </div>

        {/* Requerimiento: Análisis de Rendimiento de Servicio */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-graph-up me-2'></i>
            Análisis de rendimiento de servicio
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Comprender la eficiencia operativa
              actual de cada servicio dentro de la oficina.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe calcular y mostrar el
              tiempo de espera promedio y el porcentaje de ocupación para cada
              tipo de servicio. Esta información es crucial para identificar
              cuellos de botella y áreas de mejora.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Tiempo de espera promedio</th>
                    <th>Porcentaje de ocupación</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(resultados.punto_1).map(
                    ([serviceName, data]) => (
                      <tr key={serviceName}>
                        <td className='service-name'>
                          {serviceName
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </td>
                        <td className='time-value'>
                          {formatHoursToHHMMSS(data.tiempo_promedio_de_espera)}
                        </td>
                        <td className='percentage'>
                          {data.porcentaje_de_ocupacion.toFixed(2)}%
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Requerimiento: Evaluación de Impacto por Ausencia de Personal */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-person-x me-2'></i>
            Evaluación de impacto por ausencia de personal
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Cuantificar las consecuencias
              operativas de la ausencia de personal en servicios clave.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe simular el escenario en
              el que un empleado del servicio de 'Atención Empresarial' se
              ausenta 12 minutos cada hora. Se debe reportar el cambio en el
              tiempo de espera promedio para este servicio bajo estas
              condiciones, permitiendo planificar contingencias y ajustes de
              personal.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='metric-value'>
                      Tiempo promedio (Sin ausencia)
                    </td>
                    <td className='time-value'>
                      {formatHoursToHHMMSS(
                        resultados.punto_2
                          .tiempo_promedio_de_espera_con_sin_asusencia
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className='metric-value'>
                      Tiempo promedio (Con ausencia)
                    </td>
                    <td className='time-value'>
                      {formatHoursToHHMMSS(
                        resultados.punto_2
                          .tiempo_promedio_de_espera_con_con_asusencia
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className='metric-value'>
                      Incremento en los tiempos de espera
                    </td>
                    <td className='percentage'>
                      {resultados.punto_2.incremento.toFixed(2)}%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Requerimiento: Optimización de Asignación de Recursos */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-person-x me-2'></i>
            Optimización de asignación de recursos
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Analizar la flexibilidad y el impacto
              de la reasignación de personal entre servicios.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe determinar el porcentaje
              de ocupación en el servicio de 'Venta de Sellos y Sobres' si uno
              de sus empleados es reasignado temporalmente a 'Reclamaciones y
              Devoluciones'. Esto facilita la toma de decisiones sobre la
              distribución del personal para equilibrar la carga de trabajo.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Porcentaje de ocupación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='service-name'>
                      Venta de Sellos y Sobres Sin 1 Empleado
                    </td>
                    <td className='percentage'>
                      {resultados.punto_3.venta_de_sellos_y_sobres_sin_1_empleado.toFixed(
                        2
                      )}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td className='service-name'>Venta de Sellos y Sobres</td>
                    <td className='percentage'>
                      {resultados.punto_3.venta_de_sellos_y_sobres.toFixed(2)}%
                    </td>
                  </tr>
                  <tr>
                    <td className='metric-value'>
                      Incremento en el porcentaje de ocupación
                    </td>
                    <td className='percentage'>
                      {resultados.punto_3.incremento.toFixed(2)}%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Requerimiento: Dimensionamiento de Capacidad de Cola */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-people me-2'></i>
            Dimensionamiento de capacidad de cola
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Planificar la infraestructura física y
              la capacidad del sistema para gestionar la afluencia de clientes.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe identificar el número
              máximo de clientes que estuvieron en cada cola durante la
              simulación. Conocer el tamaño máximo de las colas es fundamental
              para dimensionar el espacio físico, planificar la capacidad del
              sistema y aplicar estrategias para picos de demanda.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Cola</th>
                    <th>Máximo de clientes</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(resultados.punto_4).map(
                    ([queueName, value]) =>
                      typeof value === 'object' ? (
                        Object.entries(value).map(
                          ([subQueueName, subValue]) => (
                            <tr key={`${queueName} - ${subQueueName}`}>
                              <td className='service-name'>
                                {queueName.replace(/_/g, ' ')} {' - '}
                                {subQueueName.replace(/_/g, ' ')}
                              </td>
                              <td className='metric-value'>{subValue}</td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr key={queueName}>
                          <td className='service-name'>
                            {queueName.replace(/_/g, ' ')}
                          </td>
                          <td className='metric-value'>{value}</td>
                        </tr>
                      )
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Requerimiento: Análisis de Implementación de Colas Prioritarias */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-star me-2'></i>
            Análisis de implementación de colas prioritarias
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Evaluar la viabilidad y el impacto de
              introducir un servicio prioritario para segmentos específicos de
              clientes.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe permitir la simulación
              de una cola de prioridad en el área de 'Atención Empresarial',
              asumiendo que el 20% de los clientes son clasificados con alta
              prioridad. Se debe determinar el tiempo de espera promedio para
              los clientes de alta prioridad y para los de baja prioridad.
              Simular este escenario permite cuantificar el efecto de la
              priorización en los tiempos de espera y predecir si la mejora en
              el servicio para clientes de alta prioridad afecta negativamente a
              los de baja prioridad.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Tipo Cliente</th>
                    <th>Tiempo de espera promedio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='service-name'>Con Prioridad</td>
                    <td className='time-value'>
                      {formatHoursToHHMMSS(
                        resultados.punto_5.tiempo_promedio_de_espera_ccp
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className='service-name'>Sin Prioridad</td>
                    <td className='time-value'>
                      {formatHoursToHHMMSS(
                        resultados.punto_5.tiempo_promedio_de_espera_csp
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Requerimiento: Control de Nivel de Servicio para Clientes Críticos */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-clock me-2'></i>
            Control de nivel de servicio para clientes críticos
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Asegurar que los tiempos de espera en
              servicios de alto volumen se mantengan dentro de límites
              aceptables para la satisfacción del cliente.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe calcular la probabilidad
              de que un cliente espere más de 15 minutos en el servicio de
              'Envíos de Paquetes'. Este servicio concentra el mayor flujo de
              clientes y es crítico para la operativa diaria; determinar esta
              probabilidad permite enfocar la optimización de recursos y mejorar
              la experiencia del usuario donde el impacto es mayor.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Probabilidad</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='metric-value'>Espera {'>'} 15 min</td>
                    <td className='percentage'>
                      {(resultados.punto_6 * 100).toFixed(2)}%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* Requerimiento: Evaluación de Nuevo Servicio Derivado */}
        <Card className='shadow-sm'>
          <Card.Header
            as='h3'
            className='d-flex align-items-center'
          >
            <i className='bi bi-plus-circle me-2'></i>
            Evaluación de nuevo servicio derivado
          </Card.Header>
          <Card.Body>
            <p>
              <strong>Propósito:</strong> Analizar la integración y el
              rendimiento de un nuevo servicio que depende de otros flujos de
              clientes.
            </p>
            <p>
              <strong>Detalle:</strong> El sistema debe permitir la integración
              de un nuevo servicio obligatorio por el cual deben pasar el 50% de
              los clientes que llegan para 'Envíos de Paquetes'. Se deben
              calcular las estadísticas sobre la cola y el porcentaje de
              ocupación de este nuevo servicio para evaluar su impacto
              operativo.
            </p>
            <div className='table-responsive'>
              <Table
                hover
                size='sm'
              >
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='metric-value'>Porcentaje de ocupación</td>
                    <td className='percentage'>
                      {resultados.punto_7.porcentaje_de_ocupacion.toFixed(2)}%
                    </td>
                  </tr>
                  <tr>
                    <td className='metric-value'>Tiempo de espera promedio</td>
                    <td className='time-value'>
                      {formatHoursToHHMMSS(
                        resultados.punto_7.tiempo_promedio_de_espera
                      )}
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
