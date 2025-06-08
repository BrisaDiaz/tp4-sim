import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { plantillaCofig } from "../../services";

export default function ConfigForm({ onSubmit }) {
  // Configuración de React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      simulacion: plantillaCofig.simulacion,
      // Inicializa solo las tasas que tendrán inputs directos
      tasas: {
        envio_de_paquetes: plantillaCofig.tasas.envio_de_paquetes,
        reclamaciones_y_devoluciones:
          plantillaCofig.tasas.reclamaciones_y_devoluciones,
        venta_de_sellos_y_sobres: plantillaCofig.tasas.venta_de_sellos_y_sobres,
        atencion_empresarial: plantillaCofig.tasas.atencion_empresarial,
        postales_y_envios_especiales:
          plantillaCofig.tasas.postales_y_envios_especiales,
        post_envio_de_paquetes: plantillaCofig.tasas.post_envio_de_paquetes,
      },
    },
  });

  // Watch para los cambios en las tasas base
  const atencionEmpresarialTasaAtencion = watch(
    "tasas.atencion_empresarial.tasa_de_atencion"
  );
  const atencionEmpresarialTasaLlegada = watch(
    "tasas.atencion_empresarial.tasa_de_llegada"
  );
  const ventaSellosSobresTasaAtencion = watch(
    "tasas.venta_de_sellos_y_sobres.tasa_de_atencion"
  );
  const ventaSellosSobresTasaLlegada = watch(
    "tasas.venta_de_sellos_y_sobres.tasa_de_llegada"
  );

  // useEffect para actualizar las tasas referenciadas cuando cambian las bases
  useEffect(() => {
    setValue(
      "tasas.atencion_empresarial_con_ausencia.tasa_de_atencion",
      atencionEmpresarialTasaAtencion
    );
    setValue(
      "tasas.atencion_empresarial_con_ausencia.tasa_de_llegada",
      atencionEmpresarialTasaLlegada
    );
  }, [
    atencionEmpresarialTasaAtencion,
    atencionEmpresarialTasaLlegada,
    setValue,
  ]);

  useEffect(() => {
    setValue(
      "tasas.atencion_empresarial_con_prioridad.tasa_de_atencion",
      atencionEmpresarialTasaAtencion
    );
    setValue(
      "tasas.atencion_empresarial_con_prioridad.tasa_de_llegada",
      atencionEmpresarialTasaLlegada
    );
  }, [
    atencionEmpresarialTasaAtencion,
    atencionEmpresarialTasaLlegada,
    setValue,
  ]);

  useEffect(() => {
    setValue(
      "tasas.venta_de_sellos_y_sobres_sin_1_empleado.tasa_de_atencion",
      ventaSellosSobresTasaAtencion
    );
    setValue(
      "tasas.venta_de_sellos_y_sobres_sin_1_empleado.tasa_de_llegada",
      ventaSellosSobresTasaLlegada
    );
  }, [ventaSellosSobresTasaAtencion, ventaSellosSobresTasaLlegada, setValue]);

  // Manejador del submit del formulario
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Sección de Configuración de la Simulación */}
        <h4 className="mb-3">Configuración de la Simulación</h4>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <label htmlFor="cantidadRondas" className="form-label">
              Cantidad de Filas
            </label>
            <input
              type="number"
              className={`form-control ${
                errors.simulacion?.cantidad_de_filas ? "is-invalid" : ""
              }`}
              id="cantidadRondas"
              {...register("simulacion.filas_a_mostrar", {
                required: true,
                min: 1,
              })}
            />
            {errors.simulacion?.cantidad_de_filas && (
              <div className="invalid-feedback">
                Campo requerido y debe ser al menos 1.
              </div>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="cantidadFilas" className="form-label">
              Cantidad de Filas a Mostrar
            </label>
            <input
              type="number"
              className={`form-control ${
                errors.simulacion?.filas_a_mostrar ? "is-invalid" : ""
              }`}
              id="cantidadFilas"
              {...register("simulacion.filas_a_mostrar", {
                required: true,
                min: 1,
              })}
            />
            {errors.simulacion?.filas_a_mostrar && (
              <div className="invalid-feedback">
                Campo requerido y debe ser al menos 1.
              </div>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="filaDesde" className="form-label">
              Fila Desde
            </label>
            <input
              type="number"
              className={`form-control ${
                errors.simulacion?.fila_desde ? "is-invalid" : ""
              }`}
              id="filaDesde"
              {...register("simulacion.fila_desde", { required: true, min: 1 })}
            />
            {errors.simulacion?.fila_desde && (
              <div className="invalid-feedback">
                Campo requerido y debe ser al menos 1.
              </div>
            )}
          </div>
        </div>

        {/* Sección de Tasas de Servicio */}
        <h5 className="mb-3">
          Configuración de Tasas de Servicios (clientes/hora)
        </h5>

        {/* Servicio: Envio de Paquetes */}
        <div className="card mb-3">
          <div className="card-header bg-primary text-white">
            Envio de Paquetes
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <label htmlFor="epTasaAtencion" className="form-label">
                Tasa de Atención
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.envio_de_paquetes?.tasa_de_atencion
                    ? "is-invalid"
                    : ""
                }`}
                id="epTasaAtencion"
                {...register("tasas.envio_de_paquetes.tasa_de_atencion", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.envio_de_paquetes?.tasa_de_atencion && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="epTasaLlegada" className="form-label">
                Tasa de Llegada
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.envio_de_paquetes?.tasa_de_llegada
                    ? "is-invalid"
                    : ""
                }`}
                id="epTasaLlegada"
                {...register("tasas.envio_de_paquetes.tasa_de_llegada", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.envio_de_paquetes?.tasa_de_llegada && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Reclamaciones y Devoluciones */}
        <div className="card mb-3">
          <div className="card-header bg-secondary text-white">
            Reclamaciones y Devoluciones
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <label htmlFor="rydTasaAtencion" className="form-label">
                Tasa de Atención
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_atencion
                    ? "is-invalid"
                    : ""
                }`}
                id="rydTasaAtencion"
                {...register(
                  "tasas.reclamaciones_y_devoluciones.tasa_de_atencion",
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_atencion && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="rydTasaLlegada" className="form-label">
                Tasa de Llegada
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_llegada
                    ? "is-invalid"
                    : ""
                }`}
                id="rydTasaLlegada"
                {...register(
                  "tasas.reclamaciones_y_devoluciones.tasa_de_llegada",
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_llegada && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Venta de Sellos y Sobres */}
        <div className="card mb-3">
          <div className="card-header bg-success text-white">
            Venta de Sellos y Sobres
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <label htmlFor="vssTasaAtencion" className="form-label">
                Tasa de Atención
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_atencion
                    ? "is-invalid"
                    : ""
                }`}
                id="vssTasaAtencion"
                {...register(
                  "tasas.venta_de_sellos_y_sobres.tasa_de_atencion",
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_atencion && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="vssTasaLlegada" className="form-label">
                Tasa de Llegada
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_llegada
                    ? "is-invalid"
                    : ""
                }`}
                id="vssTasaLlegada"
                {...register("tasas.venta_de_sellos_y_sobres.tasa_de_llegada", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_llegada && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Atencion Empresarial */}
        <div className="card mb-3">
          <div className="card-header bg-warning text-dark">
            Atencion Empresarial
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <label htmlFor="aeTasaAtencion" className="form-label">
                Tasa de Atención
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.atencion_empresarial?.tasa_de_atencion
                    ? "is-invalid"
                    : ""
                }`}
                id="aeTasaAtencion"
                {...register("tasas.atencion_empresarial.tasa_de_atencion", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.atencion_empresarial?.tasa_de_atencion && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="aeTasaLlegada" className="form-label">
                Tasa de Llegada
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.atencion_empresarial?.tasa_de_llegada
                    ? "is-invalid"
                    : ""
                }`}
                id="aeTasaLlegada"
                {...register("tasas.atencion_empresarial.tasa_de_llegada", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.atencion_empresarial?.tasa_de_llegada && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Postales y Envios Especiales */}
        <div className="card mb-3">
          <div className="card-header bg-info text-white">
            Postales y Envios Especiales
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <label htmlFor="pyeeTasaAtencion" className="form-label">
                Tasa de Atención
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.postales_y_envios_especiales?.tasa_de_atencion
                    ? "is-invalid"
                    : ""
                }`}
                id="pyeeTasaAtencion"
                {...register(
                  "tasas.postales_y_envios_especiales.tasa_de_atencion",
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.postales_y_envios_especiales?.tasa_de_atencion && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="pyeeTasaLlegada" className="form-label">
                Tasa de Llegada
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.postales_y_envios_especiales?.tasa_de_llegada
                    ? "is-invalid"
                    : ""
                }`}
                id="pyeeTasaLlegada"
                {...register(
                  "tasas.postales_y_envios_especiales.tasa_de_llegada",
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.postales_y_envios_especiales?.tasa_de_llegada && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Post Envio de Paquetes (Este tiene su propia configuración de servidores) */}
        <div className="card mb-3">
          <div className="card-header bg-dark text-white">
            Post Envio de Paquetes
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <label htmlFor="pepCantidadServidores" className="form-label">
                Cantidad de Servidores
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.post_envio_de_paquetes?.cantidad_de_servidores
                    ? "is-invalid"
                    : ""
                }`}
                id="pepCantidadServidores"
                {...register(
                  "tasas.post_envio_de_paquetes.cantidad_de_servidores",
                  { required: true, min: 1 }
                )}
              />
              {errors.tasas?.post_envio_de_paquetes?.cantidad_de_servidores && (
                <div className="invalid-feedback">
                  Campo requerido y debe ser al menos 1.
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="pepTasaAtencion" className="form-label">
                Tasa de Atención
              </label>
              <input
                type="number"
                className={`form-control ${
                  errors.tasas?.post_envio_de_paquetes?.tasa_de_atencion
                    ? "is-invalid"
                    : ""
                }`}
                id="pepTasaAtencion"
                {...register("tasas.post_envio_de_paquetes.tasa_de_atencion", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.post_envio_de_paquetes?.tasa_de_atencion && (
                <div className="invalid-feedback">
                  Campo requerido y no negativo.
                </div>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Comenzar Simulación
        </button>
      </form>
    </div>
  );
}
