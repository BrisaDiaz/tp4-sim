import React from "react";
import "./VectorEstado.css"; // Importa el archivo CSS para los estilos personalizados

export default function VectorEstado({ cabeceras, filas }) {
  // Colores visualmente estéticos para diferenciar los servicios de primer nivel
  const serviceColors = ["#f1fafa", "#dcf1f0"];

  // Función auxiliar para renderizar las cabeceras
  const renderHeaders = (
    headers,
    level = 0,
    serviceCounter = { value: -1 }
  ) => {
    return headers.map((header, index) => {
      // Clases para el nivel de la cabecera y alineación
      let headerClasses = `header-level-${level} text-center align-middle`;
      let headerStyle = {};

      // Asigna colores a las cabeceras de servicio de primer nivel
      if (
        level === 0 &&
        header.name !== "Simulacion" &&
        header.name !== "Evento" &&
        header.name !== "Reloj"
      ) {
        serviceCounter.value++; // Incrementa el contador para el próximo servicio
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
            // Renderiza subcabeceras o cabeceras anidadas en una tabla anidada
            // Pasa el serviceCounter.value a un objeto para que se mantenga la referencia
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

  // Función auxiliar para obtener todos los valores de una fila de forma plana
  const getRowValues = (rowObject) => {
    let values = [];
    for (const key in rowObject) {
      if (typeof rowObject[key] === "object" && rowObject[key] !== null) {
        values = values.concat(getRowValues(rowObject[key]));
      } else {
        values.push(rowObject[key]);
      }
    }
    return values;
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Vector de Estados</h4>
      <div className="table-responsive-wrapper">
        {/* Contenedor para el scroll y la cabecera pegajosa */}
        <table className="table table-bordered table-striped compact-table">
          <thead className="sticky-header">
            {/* Cabecera pegajosa */}
            <tr>{renderHeaders(cabeceras, 0, { value: -1 })}</tr>
            {/* Pasa el serviceCounter inicializado como un objeto */}
          </thead>
          <tbody>
            {filas.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {getRowValues(fila).map((value, colIndex) => (
                  <td key={colIndex} className="text-center align-middle">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
