import React, { useState, useEffect } from "react";
import "./VectorEstado.css"; // Importa el archivo CSS para los estilos personalizados

export default function VectorEstado({ cabeceras, filas }) {
  // Colores visualmente estéticos para diferenciar los servicios de primer nivel
  const serviceColors = ["#f2f2f2", "#ffff"];

  // Estado para controlar la visibilidad de cada servicio
  // Por defecto, todos los servicios estarán visibles
  const [visibleServices, setVisibleServices] = useState({});

  // Inicializa el estado de visibilidad de los servicios cuando el componente se monta
  // o cuando las cabeceras cambian.
  useEffect(() => {
    const initialVisibleServices = {};
    cabeceras.forEach((header) => {
      // Identifica las cabeceras que representan servicios (tienen 'key' y no son las columnas fijas)
      if (
        header.key &&
        !["Simulacion", "Evento", "Reloj"].includes(header.name)
      ) {
        initialVisibleServices[header.key] = true;
      }
    });
    setVisibleServices(initialVisibleServices);
  }, [cabeceras]); // Dependencia del efecto en 'cabeceras'

  // Manejador para el cambio de los checkboxes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setVisibleServices((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Función auxiliar para renderizar las cabeceras
  // Se le pasa el array de cabeceras ya filtrado
  const renderHeaders = (
    headers,
    level = 0,
    serviceCounter = { value: -1 }
  ) => {
    return headers.map((header, index) => {
      let headerClasses = `header-level-${level} text-center align-middle`;
      let headerStyle = {};

      // Aplica colores solo a los servicios de primer nivel
      if (
        level === 0 &&
        header.key && // Asegúrate de que tenga una 'key' para ser un servicio dinámico
        !["Simulacion", "Evento", "Reloj"].includes(header.name) // Excluye las columnas fijas
      ) {
        serviceCounter.value++;
        headerStyle.backgroundColor =
          serviceColors[serviceCounter.value % serviceColors.length];
      }

      return (
        <th
          key={`${level}-${index}-${header.key || header.name}`} // Mejorar key para evitar duplicados
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
                  {/* Pasa las subcabeceras sin filtro adicional aquí */}
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
  // Ahora recibe las cabeceras ya filtradas para asegurar la coherencia con el renderizado
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

  // Función para truncar a 4 decimales o mostrar "-" si es null/undefined
  const formatValueForDisplay = (value) => {
    if (value === null || value === undefined) {
      return "-";
    }

    if (typeof value === "number" && !Number.isInteger(value)) {
      return parseFloat(value.toFixed(4));
    }

    return value;
  };

  // Filtra las cabeceras de primer nivel basándose en el estado `visibleServices`
  const filteredCabeceras = cabeceras.filter((header) => {
    // Las columnas "Simulacion", "Evento" y "Reloj" siempre se muestran
    if (["Simulacion", "Evento", "Reloj"].includes(header.name)) {
      return true;
    }
    // Las columnas de servicio se muestran si su checkbox está marcado
    return visibleServices[header.key];
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Vector de Estados</h2>

      {/* Controles para seleccionar servicios */}
      <div className="mb-3 p-3 border rounded bg-light">
        <h5 className="mb-2">Seleccionar Servicios a Mostrar:</h5>
        {cabeceras.map((header) => {
          // Solo renderiza checkboxes para las cabeceras que son servicios dinámicos
          if (
            header.key &&
            !["Simulacion", "Evento", "Reloj"].includes(header.name)
          ) {
            return (
              <div className="form-check form-check-inline" key={header.key}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`checkbox-${header.key}`}
                  name={header.key}
                  checked={visibleServices[header.key] || false} // Asegura que no sea undefined
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
          return null; // No renderizar checkbox para columnas fijas
        })}
      </div>

      <div className="table-responsive-wrapper">
        <table className="table table-bordered table-striped compact-table">
          <thead className="sticky-header">
            <tr>
              {/* Renderiza las cabeceras filtradas */}
              {renderHeaders(filteredCabeceras, 0, { value: -1 })}
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, rowIndex) => (
              <tr key={rowIndex}>
                {/* Obtiene y mapea los valores de la fila basándose en las cabeceras filtradas */}
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
