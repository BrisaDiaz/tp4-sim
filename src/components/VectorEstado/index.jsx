import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './VectorEstado.css';

export default function VectorEstado({ cabeceras, filas }) {
  const [visibleServices, setVisibleServices] = useState({});
  const [allServicesSelected, setAllServicesSelected] = useState(true);
  const [indeterminateCheckbox, setIndeterminateCheckbox] = useState(false);

  // Get only the service keys from cabeceras, excluding 'simulacion', 'evento', 'reloj'
  const serviceKeys = cabeceras
    .filter(
      (header) =>
        header.key && !['simulacion', 'evento', 'reloj'].includes(header.key)
    )
    .map((header) => header.key);

  useEffect(() => {
    const initialVisibleServices = {};
    serviceKeys.forEach((key) => {
      initialVisibleServices[key] = true;
    });
    setVisibleServices(initialVisibleServices);
  }, [cabeceras]); // Depend on cabeceras to re-initialize when they change

  useEffect(() => {
    const totalServices = serviceKeys.length;
    const selectedServicesCount =
      Object.values(visibleServices).filter(Boolean).length;

    if (totalServices === 0) {
      setAllServicesSelected(true);
      setIndeterminateCheckbox(false);
    } else if (selectedServicesCount === totalServices) {
      setAllServicesSelected(true);
      setIndeterminateCheckbox(false);
    } else if (selectedServicesCount > 0) {
      setAllServicesSelected(false);
      setIndeterminateCheckbox(true);
    } else {
      setAllServicesSelected(false);
      setIndeterminateCheckbox(false);
    }
  }, [visibleServices, serviceKeys]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setVisibleServices((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    const newVisibleServices = {};
    serviceKeys.forEach((key) => {
      newVisibleServices[key] = checked;
    });
    setVisibleServices(newVisibleServices);
    setAllServicesSelected(checked);
    setIndeterminateCheckbox(false);
  };
  // Función para calcular el número total de columnas finales
  const calculateTotalColumns = (headers) => {
    let total = 0;
    headers.forEach((header) => {
      const nestedHeaders = header.subheaders || header.headers;
      if (Array.isArray(nestedHeaders) && nestedHeaders.length > 0) {
        total += calculateTotalColumns(nestedHeaders);
      } else {
        total += 1;
      }
    });
    return total;
  };

  // Función para obtener la profundidad máxima de las cabeceras
  const getMaxDepth = (headers, currentDepth = 0) => {
    let maxDepth = currentDepth;
    headers.forEach((header) => {
      const nestedHeaders = header.subheaders || header.headers;
      if (Array.isArray(nestedHeaders) && nestedHeaders.length > 0) {
        const depth = getMaxDepth(nestedHeaders, currentDepth + 1);
        maxDepth = Math.max(maxDepth, depth);
      }
    });
    return maxDepth;
  };

  // Función para renderizar las cabeceras en múltiples filas
  const renderHeaderRows = (headers) => {
    const maxDepth = getMaxDepth(headers);
    const rows = [];

    for (let level = 0; level <= maxDepth; level++) {
      rows.push([]);
    }

    const processHeaders = (
      headers,
      level = 0,
      serviceCounter = { value: -1 },
      parentCounters = Array(maxDepth + 1).fill(-1)
    ) => {
      headers.forEach((header) => {
        let headerStyle = {};
        const currentLevelCounter = ++parentCounters[level];

        // Alternar colores basado en el nivel y contador
        const isEven = currentLevelCounter % 2 === 0;

        // Asignar colores basados en el nivel
        switch (level) {
          case 0:
            headerStyle.backgroundColor = isEven ? '#e0e0e0' : '#d0d0d0';
            break;
          case 1:
            headerStyle.backgroundColor = isEven ? '#f0f0f0' : '#e8e8e8';
            break;
          case 2:
            headerStyle.backgroundColor = isEven ? '#f8f8f8' : '#f0f0f0';
            break;
          default:
            headerStyle.backgroundColor = isEven ? '#ffffff' : '#f8f8f8';
        }

        const nestedHeaders = header.subheaders || header.headers;
        const hasNested =
          Array.isArray(nestedHeaders) && nestedHeaders.length > 0;

        if (hasNested) {
          // Cabecera con subcabeceras
          const colspan = calculateTotalColumns([header]);
          const rowspan = 1;

          rows[level].push({
            ...header,
            colspan,
            rowspan,
            level,
            style: headerStyle,
          });

          // Procesar subcabeceras
          processHeaders(nestedHeaders, level + 1, serviceCounter, [
            ...parentCounters,
          ]);
        } else {
          // Cabecera final (sin subcabeceras)
          const colspan = 1;
          const rowspan = maxDepth - level + 1;

          rows[level].push({
            ...header,
            colspan,
            rowspan,
            level,
            style: headerStyle,
          });
        }
      });
    };

    processHeaders(headers);

    return rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((header, colIndex) => (
          <th
            key={`${rowIndex}-${colIndex}-${header.key || header.name}`}
            colSpan={header.colspan}
            rowSpan={header.rowspan}
            className={`header-level-${header.level} text-center align-middle`}
            style={header.style}
          >
            {header.name}
          </th>
        ))}
      </tr>
    ));
  };
  const getFlattenedRowValues = (rowData, headersDefinition) => {
    let values = [];
    headersDefinition.forEach((header) => {
      const nestedHeaders = header.subheaders || header.headers;

      if (Array.isArray(nestedHeaders) && nestedHeaders.length > 0) {
        const nestedData = rowData[header.key] || {};
        values = values.concat(
          getFlattenedRowValues(nestedData, nestedHeaders)
        );
      } else if (header.key) {
        values.push(rowData[header.key]);
      }
    });
    return values;
  };

  const formatValueForDisplay = (value) => {
    if (value === null || value === undefined) {
      return '-';
    }
    if (typeof value === 'number' && !Number.isInteger(value)) {
      return parseFloat(value.toFixed(4));
    }
    return value;
  };

  const filteredCabeceras = cabeceras.filter((header) => {
    if (['simulacion', 'evento', 'reloj'].includes(header.key)) {
      return true;
    }
    return visibleServices[header.key];
  });

  return (
    <div className='container mt-4 vector-container'>
      <div className='mb-4'>
        <div>
          <div className='header-section'>
            <h2 className='text-center vector-title'>
              <i className='bi bi-table me-2'></i>
              Vector de estados
            </h2>
          </div>
          <Card className=' services-card'>
            <Card.Body>
              <h5 className='mb-3'>Seleccionar Servicios a Mostrar:</h5>
              <div className='d-flex flex-wrap align-items-center mb-2'>
                <div className='form-check form-check-inline me-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='checkbox-select-all'
                    checked={allServicesSelected}
                    onChange={handleSelectAllChange}
                    ref={(el) => {
                      if (el) {
                        el.indeterminate = indeterminateCheckbox;
                      }
                    }}
                  />
                  <label
                    className='form-check-label fw-bold'
                    htmlFor='checkbox-select-all'
                  >
                    Seleccionar Todos
                  </label>
                </div>

                <div className='d-flex flex-wrap'>
                  {cabeceras.map((header) => {
                    if (
                      header.key &&
                      !['simulacion', 'evento', 'reloj'].includes(header.key)
                    ) {
                      return (
                        <div
                          className='form-check form-check-inline'
                          key={header.key}
                        >
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id={`checkbox-${header.key}`}
                            name={header.key}
                            checked={visibleServices[header.key] || false}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            className='form-check-label'
                            htmlFor={`checkbox-${header.key}`}
                          >
                            {header.name}
                          </label>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </Card.Body>
          </Card>

          <div className='table-responsive-wrapper shadow-sm'>
            <table className='table table-bordered table-striped compact-table'>
              <thead className='sticky-header'>
                {renderHeaderRows(filteredCabeceras)}
              </thead>
              <tbody>
                {filas.map((fila, rowIndex) => (
                  <tr key={rowIndex}>
                    {getFlattenedRowValues(fila, filteredCabeceras).map(
                      (value, colIndex) => (
                        <td
                          key={colIndex}
                          className='text-center align-middle'
                        >
                          {formatValueForDisplay(value)}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
