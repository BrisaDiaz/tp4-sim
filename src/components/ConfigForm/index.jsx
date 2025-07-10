// index.jsx
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { plantillaCofig } from '../../services';
import './ConfigForm.css'; // Nuevo archivo de estilos

export default function ConfigForm({ onSubmit, isDisabled }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      simulacion: plantillaCofig.simulacion,
      tasas: {
        ...plantillaCofig.tasas,
      },
    },
  });

  // Watchers para las tasas base
  const atencionEmpresarialTasaAtencion = watch(
    'tasas.atencion_empresarial.tasa_de_atencion'
  );
  const atencionEmpresarialTasaLlegada = watch(
    'tasas.atencion_empresarial.tasa_de_llegada'
  );
  const ventaSellosSobresTasaAtencion = watch(
    'tasas.venta_de_sellos_y_sobres.tasa_de_atencion'
  );
  const ventaSellosSobresTasaLlegada = watch(
    'tasas.venta_de_sellos_y_sobres.tasa_de_llegada'
  );

  // Efectos para actualizar tasas referenciadas
  useEffect(() => {
    setValue(
      'tasas.atencion_empresarial_con_ausencia.tasa_de_atencion',
      atencionEmpresarialTasaAtencion
    );
    setValue(
      'tasas.atencion_empresarial_con_ausencia.tasa_de_llegada',
      atencionEmpresarialTasaLlegada
    );
  }, [
    atencionEmpresarialTasaAtencion,
    atencionEmpresarialTasaLlegada,
    setValue,
  ]);

  useEffect(() => {
    setValue(
      'tasas.atencion_empresarial_con_prioridad.tasa_de_atencion',
      atencionEmpresarialTasaAtencion
    );
    setValue(
      'tasas.atencion_empresarial_con_prioridad.tasa_de_llegada',
      atencionEmpresarialTasaLlegada
    );
  }, [
    atencionEmpresarialTasaAtencion,
    atencionEmpresarialTasaLlegada,
    setValue,
  ]);

  useEffect(() => {
    setValue(
      'tasas.venta_de_sellos_y_sobres_sin_1_empleado.tasa_de_atencion',
      ventaSellosSobresTasaAtencion
    );
    setValue(
      'tasas.venta_de_sellos_y_sobres_sin_1_empleado.tasa_de_llegada',
      ventaSellosSobresTasaLlegada
    );
  }, [ventaSellosSobresTasaAtencion, ventaSellosSobresTasaLlegada, setValue]);

  const handleFormSubmit = (config) => {
    onSubmit(config);
  };

  return (
    <div className='config-form-container'>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='config-form'
      >
        {/* Sección de Configuración de la Simulación */}
        <div className='config-section'>
          <h4 className='section-title'>
            <i className='bi bi-gear me-2'></i>
            Configuración de la simulación
          </h4>
          <hr className='section-divider' />
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label
              htmlFor='cantidadRondas'
              className='form-label'
            >
              Cantidad de filas a simular
            </label>
            <input
              type='number'
              className={`form-input ${
                errors.simulacion?.cantidad_de_filas ? 'input-error' : ''
              }`}
              id='cantidadRondas'
              {...register('simulacion.cantidad_de_filas', {
                required: true,
                min: 1,
                valueAsNumber: true,
              })}
            />
            {errors.simulacion?.cantidad_de_filas && (
              <span className='error-message'>
                Campo requerido y debe ser al menos 1.
              </span>
            )}
          </div>

          <div className='form-group'>
            <label
              htmlFor='cantidadFilas'
              className='form-label'
            >
              Cantidad de filas a mostrar
            </label>
            <input
              type='number'
              className={`form-input ${
                errors.simulacion?.filas_a_mostrar ? 'input-error' : ''
              }`}
              id='cantidadFilas'
              {...register('simulacion.filas_a_mostrar', {
                required: true,
                min: 1,
                valueAsNumber: true,
              })}
            />
            {errors.simulacion?.filas_a_mostrar && (
              <span className='error-message'>
                Campo requerido y debe ser al menos 1.
              </span>
            )}
          </div>

          <div className='form-group'>
            <label
              htmlFor='filaDesde'
              className='form-label'
            >
              Fila desde
            </label>
            <input
              type='number'
              className={`form-input ${
                errors.simulacion?.fila_desde ? 'input-error' : ''
              }`}
              id='filaDesde'
              {...register('simulacion.fila_desde', {
                required: true,
                min: 1,
                valueAsNumber: true,
              })}
            />
            {errors.simulacion?.fila_desde && (
              <span className='error-message'>
                Campo requerido y debe ser al menos 1.
              </span>
            )}
          </div>
        </div>

        {/* Sección de Tasas de Servicio */}
        <h5 className='section-subtitle'>
          Configuración de tasas de servicios (clientes/hora)
        </h5>

        {/* Servicio: Envio de Paquetes */}
        <div className='service-card'>
          <div className='service-header'>
            <i className='bi bi-box-seam me-2'></i>
            Envio de Paquetes
          </div>
          <div className='service-body'>
            <div className='form-group'>
              <label
                htmlFor='epTasaAtencion'
                className='form-label'
              >
                Tasa de atención
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.envio_de_paquetes?.tasa_de_atencion
                    ? 'input-error'
                    : ''
                }`}
                id='epTasaAtencion'
                {...register('tasas.envio_de_paquetes.tasa_de_atencion', {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.envio_de_paquetes?.tasa_de_atencion && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>

            <div className='form-group'>
              <label
                htmlFor='epTasaLlegada'
                className='form-label'
              >
                Tasa de llegada
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.envio_de_paquetes?.tasa_de_llegada
                    ? 'input-error'
                    : ''
                }`}
                id='epTasaLlegada'
                {...register('tasas.envio_de_paquetes.tasa_de_llegada', {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.envio_de_paquetes?.tasa_de_llegada && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Reclamaciones y Devoluciones */}
        <div className='service-card'>
          <div className='service-header'>
            <i className='bi bi-arrow-left-right me-2'></i>
            Reclamaciones y Devoluciones
          </div>
          <div className='service-body'>
            <div className='form-group'>
              <label
                htmlFor='rydTasaAtencion'
                className='form-label'
              >
                Tasa de atención
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_atencion
                    ? 'input-error'
                    : ''
                }`}
                id='rydTasaAtencion'
                {...register(
                  'tasas.reclamaciones_y_devoluciones.tasa_de_atencion',
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_atencion && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>

            <div className='form-group'>
              <label
                htmlFor='rydTasaLlegada'
                className='form-label'
              >
                Tasa de llegada
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_llegada
                    ? 'input-error'
                    : ''
                }`}
                id='rydTasaLlegada'
                {...register(
                  'tasas.reclamaciones_y_devoluciones.tasa_de_llegada',
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.reclamaciones_y_devoluciones?.tasa_de_llegada && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Venta de Sellos y Sobres */}
        <div className='service-card'>
          <div className='service-header'>
            <i className='bi bi-envelope me-2'></i>
            Venta de Sellos y Sobres
          </div>
          <div className='service-body'>
            <div className='form-group'>
              <label
                htmlFor='vssTasaAtencion'
                className='form-label'
              >
                Tasa de atención
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_atencion
                    ? 'input-error'
                    : ''
                }`}
                id='vssTasaAtencion'
                {...register(
                  'tasas.venta_de_sellos_y_sobres.tasa_de_atencion',
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_atencion && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>

            <div className='form-group'>
              <label
                htmlFor='vssTasaLlegada'
                className='form-label'
              >
                Tasa de llegada
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_llegada
                    ? 'input-error'
                    : ''
                }`}
                id='vssTasaLlegada'
                {...register('tasas.venta_de_sellos_y_sobres.tasa_de_llegada', {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.venta_de_sellos_y_sobres?.tasa_de_llegada && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Atencion Empresarial */}
        <div className='service-card'>
          <div className='service-header'>
            <i className='bi bi-building me-2'></i>
            Atencion Empresarial
          </div>
          <div className='service-body'>
            <div className='form-group'>
              <label
                htmlFor='aeTasaAtencion'
                className='form-label'
              >
                Tasa de atención
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.atencion_empresarial?.tasa_de_atencion
                    ? 'input-error'
                    : ''
                }`}
                id='aeTasaAtencion'
                {...register('tasas.atencion_empresarial.tasa_de_atencion', {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.atencion_empresarial?.tasa_de_atencion && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>

            <div className='form-group'>
              <label
                htmlFor='aeTasaLlegada'
                className='form-label'
              >
                Tasa de llegada
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.atencion_empresarial?.tasa_de_llegada
                    ? 'input-error'
                    : ''
                }`}
                id='aeTasaLlegada'
                {...register('tasas.atencion_empresarial.tasa_de_llegada', {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.atencion_empresarial?.tasa_de_llegada && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Postales y Envios Especiales */}
        <div className='service-card'>
          <div className='service-header'>
            <i className='bi bi-postcard me-2'></i>
            Postales y Envios Especiales
          </div>
          <div className='service-body'>
            <div className='form-group'>
              <label
                htmlFor='pyeeTasaAtencion'
                className='form-label'
              >
                Tasa de atención
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.postales_y_envios_especiales?.tasa_de_atencion
                    ? 'input-error'
                    : ''
                }`}
                id='pyeeTasaAtencion'
                {...register(
                  'tasas.postales_y_envios_especiales.tasa_de_atencion',
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.postales_y_envios_especiales?.tasa_de_atencion && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>

            <div className='form-group'>
              <label
                htmlFor='pyeeTasaLlegada'
                className='form-label'
              >
                Tasa de llegada
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.postales_y_envios_especiales?.tasa_de_llegada
                    ? 'input-error'
                    : ''
                }`}
                id='pyeeTasaLlegada'
                {...register(
                  'tasas.postales_y_envios_especiales.tasa_de_llegada',
                  { required: true, min: 0 }
                )}
              />
              {errors.tasas?.postales_y_envios_especiales?.tasa_de_llegada && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Servicio: Post Envio de Paquetes */}
        <div className='service-card'>
          <div className='service-header'>
            <i className='bi bi-box-arrow-up me-2'></i>
            Post Envio de Paquetes
          </div>
          <div className='service-body'>
            <div className='form-group'>
              <label
                htmlFor='pepCantidadServidores'
                className='form-label'
              >
                Cantidad de Servidores
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.post_envio_de_paquetes?.cantidad_de_servidores
                    ? 'input-error'
                    : ''
                }`}
                id='pepCantidadServidores'
                {...register(
                  'tasas.post_envio_de_paquetes.cantidad_de_servidores',
                  { required: true, min: 1 }
                )}
              />
              {errors.tasas?.post_envio_de_paquetes?.cantidad_de_servidores && (
                <span className='error-message'>
                  Campo requerido y debe ser al menos 1.
                </span>
              )}
            </div>

            <div className='form-group'>
              <label
                htmlFor='pepTasaAtencion'
                className='form-label'
              >
                Tasa de atención
              </label>
              <input
                type='number'
                className={`form-input ${
                  errors.tasas?.post_envio_de_paquetes?.tasa_de_atencion
                    ? 'input-error'
                    : ''
                }`}
                id='pepTasaAtencion'
                {...register('tasas.post_envio_de_paquetes.tasa_de_atencion', {
                  required: true,
                  min: 0,
                })}
              />
              {errors.tasas?.post_envio_de_paquetes?.tasa_de_atencion && (
                <span className='error-message'>
                  Campo requerido y no negativo.
                </span>
              )}
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='submit-button'
          disabled={isDisabled}
        >
          <i className='bi bi-play-circle me-2'></i>
          {isDisabled ? 'Procesando...' : 'Comenzar Simulación'}
        </button>
      </form>
    </div>
  );
}
