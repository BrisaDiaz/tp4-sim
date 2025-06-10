import React, { useState, useEffect } from "react";
import "./VectorEstado.css";

export default function VectorEstado({ cabeceras, filas }) {
  const serviceColors = ["#f2f2f2", "#ffff"];
  const [visibleServices, setVisibleServices] = useState({});

  useEffect(() => {
    const initialVisibleServices = {};
    cabeceras.forEach((header) => {
      if (
        header.key &&
        !["simulacion", "evento", "reloj"].includes(header.key)
      ) {
        initialVisibleServices[header.key] = true;
      }
    });
    setVisibleServices(initialVisibleServices);
  }, [cabeceras]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setVisibleServices((prev) => ({
      ...prev,
      [name]: checked,
    }));
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
      serviceCounter = { value: -1 }
    ) => {
      headers.forEach((header) => {
        let headerStyle = {};

        if (
          level === 0 &&
          header.key &&
          !["simulacion", "evento", "reloj"].includes(header.key)
        ) {
          serviceCounter.value++;
          headerStyle.backgroundColor =
            serviceColors[serviceCounter.value % serviceColors.length];
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
          processHeaders(nestedHeaders, level + 1, serviceCounter);
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
      return "-";
    }
    if (typeof value === "number" && !Number.isInteger(value)) {
      return parseFloat(value.toFixed(4));
    }
    return value;
  };

  const filteredCabeceras = cabeceras.filter((header) => {
    if (["simulacion", "evento", "reloj"].includes(header.key)) {
      return true;
    }
    return visibleServices[header.key];
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Vector de Estados</h2>

      <div className="mb-3 p-3 border rounded bg-light">
        <h5 className="mb-2">Seleccionar Servicios a Mostrar:</h5>
        {cabeceras.map((header) => {
          if (
            header.key &&
            !["simulacion", "evento", "reloj"].includes(header.key)
          ) {
            return (
              <div className="form-check form-check-inline" key={header.key}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`checkbox-${header.key}`}
                  name={header.key}
                  checked={visibleServices[header.key] || false}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label"
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

      <div className="table-responsive-wrapper">
        <table className="table table-bordered table-striped compact-table">
          <thead className="sticky-header">
            {renderHeaderRows(filteredCabeceras)}
          </thead>
          <tbody>
            {filas.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {getFlattenedRowValues(fila, filteredCabeceras).map(
                  (value, colIndex) => (
                    <td key={colIndex} className="text-center align-middle">
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
  );
}
