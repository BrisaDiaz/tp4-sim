import React from "react";
import "./VectorEstado.css"; // Importa el archivo CSS para los estilos personalizados

export default function VectorEstado({ cabeceras, filas }) {
  // Colores visualmente estéticos para diferenciar los servicios de primer nivel
  const serviceColors = ["#f2f2f2", "#ffff"];

  // Función auxiliar para renderizar las cabeceras (sin cambios, ya es dinámica)
  const renderHeaders = (
    headers,
    level = 0,
    serviceCounter = { value: -1 }
  ) => {
    return headers.map((header, index) => {
      let headerClasses = `header-level-${level} text-center align-middle`;
      let headerStyle = {};

      if (
        level === 0 &&
        header.name !== "Simulacion" &&
        header.name !== "Evento" &&
        header.name !== "Reloj"
      ) {
        serviceCounter.value++;
        headerStyle.backgroundColor =
          serviceColors[serviceCounter.value % serviceColors.length];
      }

      return (
        <th
          key={`${level}-${index}`}
          colSpan={header.colspan}
          rowSpan={header.rowspan}
          className={headerClasses}
          style={headerStyle}
        >
          {header.name}
          {(header.subheaders || header.headers) && (
            <table className="nested-header-table">
              <thead>
                <tr>
                  {renderHeaders(
                    header.subheaders || header.headers,
                    level + 1,
                    serviceCounter
                  )}
                </tr>
              </thead>
            </table>
          )}
        </th>
      );
    });
  };

  // Función auxiliar para obtener los valores de la fila de forma ordenada y plana
  const getFlattenedRowValues = (rowData, headersDefinition) => {
    let values = [];
    headersDefinition.forEach((header) => {
      if (header.subheaders || header.headers) {
        const nestedData = rowData[header.key] || {};
        values = values.concat(
          getFlattenedRowValues(nestedData, header.subheaders || header.headers)
        );
      } else {
        // Asegúrate de que header.key exista antes de acceder a rowData[header.key]
        values.push(rowData[header.key]);
      }
    });
    return values;
  };

  // MODIFICACIÓN: Función para truncar a 4 decimales o mostrar "-" si es null/undefined
  const formatValueForDisplay = (value) => {
    // Si el valor es null o undefined, retorna un guion
    if (value === null || value === undefined) {
      return "-";
    }

    // Si es un número decimal, lo formatea a 4 decimales
    if (typeof value === "number" && !Number.isInteger(value)) {
      // parseFloat() para eliminar ceros finales si toFixed los agrega
      // (ej. 1.2000 se convierte en 1.2)
      return parseFloat(value.toFixed(4));
    }

    // Para cualquier otro tipo de valor (string, entero, etc.), lo retorna tal cual
    return value;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Vector de Estados</h2>

      <div className="table-responsive-wrapper">
        <table className="table table-bordered table-striped compact-table">
          <thead className="sticky-header">
            <tr>{renderHeaders(cabeceras, 0, { value: -1 })}</tr>
          </thead>
          <tbody>
            {filas.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {/* Llama a formatValueForDisplay para cada valor */}
                {getFlattenedRowValues(fila, cabeceras).map(
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
