const plantillaFila = {
  simulacion: null,
  evento: null,
  reloj: null,
  envio_de_paquetes: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      longitud_maxima: 0,
      tiempos_de_espera_acumulados: 0,
      esperas_mayores_a_15m: 0,
    },
    servidores: {
      servidor_1: "libre",
      servidor_2: "libre",
      servidor_3: "libre",
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
      probabilidad_de_espera_mayor_a_15m: 0,
    },
  },
  reclamaciones_y_devoluciones: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_1: "libre",
      servidor_2: "libre",
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
  venta_de_sellos_y_sobres: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_1: "libre",
      servidor_2: "libre",
      servidor_3: "libre",
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
  atencion_empresarial: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_1: "libre",
      servidor_2: "libre",
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
  postales_y_envios_especiales: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_1: "libre",
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
  atencion_empresarial_con_ausencia: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_periodico: "libre",
      servidor_2: "libre",
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
  venta_de_sellos_y_sobres_sin_1_empleado: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    cola: {
      clientes_en_cola: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_1: "libre",
      servidor_2: "libre",
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
    },
  },
  atencion_empresarial_con_prioridad: {
    llegada_de_cliente: {
      rnd: null,
      tiempo_entre_llegada: null,
      hora_de_llegada: null,
    },
    prioridad: {
      rnd: null,
      tipo_prioridad: null,
    },
    cola_sin_prioridad: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    cola_con_prioridad: {
      clientes_en_cola: 0,
      tiempos_de_espera_acumulados: 0,
      longitud_maxima: 0,
    },
    servidores: {
      servidor_1: "libre",
      servidor_2: "libre",
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos_cp: 0,
      clientes_atendidos_sp: 0,
      tiempo_promedio_de_espera_csp: 0,
      tiempo_promedio_de_espera_ccp: 0,
    },
  },
  post_envio_de_paquetes: {
    solicitud_del_servicio: {
      rnd: null,
      solicita: null,
    },
    cola: {
      clientes_en_cola: 0,
      longitud_maxima: 0,
      tiempos_de_espera_acumulados: 0,
    },
    servidores: {
      servidor_1: "libre", // Servidor explícitamente inicializado
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
};
const setNullsFila = (fila) => {
  servicios.forEach((servicio) => {
    if ("llegada_de_cliente" in fila[servicio]) {
      fila[servicio].llegada_de_cliente.rnd = null;
      fila[servicio].llegada_de_cliente.tiempo_entre_llegada = null;
      fila[servicio].llegada_de_cliente.hora_de_llegada = null;
    }
    fila[servicio].fin_de_atencion.rnd = null;
    fila[servicio].fin_de_atencion.tiempo_entre_llegada = null;
    fila[servicio].fin_de_atencion.hora_de_llegada = null;
  });

  fila.atencion_empresarial_con_prioridad.prioridad.rnd = null;
  fila.atencion_empresarial_con_prioridad.prioridad.tipo_prioridad = null;

  fila.post_envio_de_paquetes.solicitud_del_servicio.rnd = null;
  fila.post_envio_de_paquetes.solicitud_del_servicio.solicita = null;
};
export const plantillaCabeceras = [
  { name: "Simulacion", colspan: 1, rowspan: 3, key: "simulacion" }, // <--- AGREGADO 'key'
  { name: "Evento", colspan: 1, rowspan: 3, key: "evento" }, // <--- AGREGADO 'key'
  { name: "Reloj", colspan: 1, rowspan: 3, key: "reloj" }, // <--- AGREGADO 'key'
  {
    name: "Envio de Paquetes",
    colspan: 18,
    rowspan: 1,
    key: "envio_de_paquetes", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" }, // <--- AGREGADO 'key'
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          }, // <--- AGREGADO 'key'
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          }, // <--- AGREGADO 'key'
        ],
      },
      {
        name: "Cola",
        colspan: 4,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          }, // <--- AGREGADO 'key'
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          }, // <--- AGREGADO 'key'
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          }, // <--- AGREGADO 'key'
          {
            name: "Esperas Mayores a 15m",
            colspan: 1,
            rowspan: 1,
            key: "esperas_mayores_a_15m",
          }, // <--- AGREGADO 'key'
        ],
      },
      {
        name: "Servidores",
        colspan: 4,
        rowSpan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowSpan: 1, key: "servidor_1" }, // <--- AGREGADO 'key'
          { name: "Servidor 2", colspan: 1, rowSpan: 1, key: "servidor_2" }, // <--- AGREGADO 'key'
          { name: "Servidor 3", colspan: 1, rowSpan: 1, key: "servidor_3" }, // <--- AGREGADO 'key'
          {
            name: "Tiempos de Ocupacion Acumulados",
            colspan: 1,
            rowSpan: 1,
            key: "tiempos_de_ocupacion_acumulados",
          }, // <--- AGREGADO 'key'
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" }, // <--- AGREGADO 'key'
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          }, // <--- AGREGADO 'key'
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          }, // <--- AGREGADO 'key'
        ],
      },
      {
        name: "Estadisticos",
        colspan: 4,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          }, // <--- AGREGADO 'key'
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          }, // <--- AGREGADO 'key'
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          }, // <--- AGREGADO 'key'
          {
            name: "Probabilidad de Espera Mayor a 15m",
            colspan: 1,
            rowspan: 1,
            key: "probabilidad_de_espera_mayor_a_15m", // <--- AGREGADO 'key'
          },
        ],
      },
    ],
  },
  {
    name: "Reclamaciones y Devoluciones",
    colspan: 15,
    rowspan: 1,
    key: "reclamaciones_y_devoluciones", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 3,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1, key: "servidor_1" },
          { name: "Servidor 2", colspan: 1, rowspan: 1, key: "servidor_2" },
          {
            name: "Tiempos de Ocupacion Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_ocupacion_acumulados",
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          },
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          },
        ],
      },
    ],
  },
  {
    name: "Venta de Sellos y Sobres",
    colspan: 16,
    rowspan: 1,
    key: "venta_de_sellos_y_sobres", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 4,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1, key: "servidor_1" },
          { name: "Servidor 2", colspan: 1, rowspan: 1, key: "servidor_2" },
          { name: "Servidor 3", colspan: 1, rowspan: 1, key: "servidor_3" },
          {
            name: "Tiempos de Ocupacion Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_ocupacion_acumulados",
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          },
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          },
        ],
      },
    ],
  },
  {
    name: "Atencion Empresarial",
    colspan: 15,
    rowspan: 1,
    key: "atencion_empresarial", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 3,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1, key: "servidor_1" },
          { name: "Servidor 2", colspan: 1, rowspan: 1, key: "servidor_2" },
          {
            name: "Tiempos de Ocupacion Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_ocupacion_acumulados",
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          },
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          },
        ],
      },
    ],
  },
  {
    name: "Postales y Envios Especiales",
    colspan: 14,
    rowspan: 1,
    key: "postales_y_envios_especiales", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1, key: "servidor_1" },
          {
            name: "Tiempos de Ocupacion Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_ocupacion_acumulados",
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          },
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          },
        ],
      },
    ],
  },
  {
    name: "Atencion Empresarial con Ausencia",
    colspan: 13,
    rowspan: 1,
    key: "atencion_empresarial_con_ausencia", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Servidor Periodico",
            colspan: 1,
            rowspan: 1,
            key: "servidor_periodico",
          },
          { name: "Servidor 2", colspan: 1, rowspan: 1, key: "servidor_2" },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 2,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          },
        ],
      },
    ],
  },
  {
    name: "Venta de Sellos y Sobres sin 1 Empleado",
    colspan: 13,
    rowspan: 1,
    key: "venta_de_sellos_y_sobres_sin_1_empleado", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 2,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 3,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1, key: "servidor_1" },
          { name: "Servidor 2", colspan: 1, rowspan: 1, key: "servidor_2" },
          {
            name: "Tiempos de Ocupacion Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_ocupacion_acumulados",
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 2,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          },
        ],
      },
    ],
  },
  {
    name: "Atencion Empresarial con Prioridad",
    colspan: 20,
    rowspan: 1,
    key: "atencion_empresarial_con_prioridad", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo entre Llegada",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_entre_llegada",
          },
          {
            name: "Hora de Llegada",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_llegada",
          },
        ],
      },
      {
        name: "Prioridad",
        colspan: 2,
        rowspan: 1,
        key: "prioridad", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tipo de Prioridad",
            colspan: 1,
            rowspan: 1,
            key: "tipo_prioridad",
          },
        ],
      },
      {
        name: "Cola sin Prioridad",
        colspan: 3,
        rowspan: 1,
        key: "cola_sin_prioridad", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Cola con Prioridad",
        colspan: 3,
        rowspan: 1,
        key: "cola_con_prioridad", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1, key: "servidor_1" },
          { name: "Servidor 2", colspan: 1, rowspan: 1, key: "servidor_2" },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 4,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos CP",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos_cp",
          },
          {
            name: "Clientes Atendidos SP",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos_sp",
          },
          {
            name: "Tiempo Promedio de Espera CSP",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera_csp",
          },
          {
            name: "Tiempo Promedio de Espera CCP",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera_ccp",
          },
        ],
      },
    ],
  },
  {
    name: "Post Envio de Paquetes",
    colspan: 13,
    rowspan: 1,
    key: "post_envio_de_paquetes", // <--- AGREGADO 'key'
    subheaders: [
      {
        name: "Solicitud ",
        colspan: 2,
        rowspan: 1,
        key: "solicitud_del_servicio", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          { name: "Solicita", colspan: 1, rowspan: 1, key: "solicita" },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes en Cola",
            colspan: 1,
            rowspan: 1,
            key: "clientes_en_cola",
          },
          {
            name: "Longitud Maxima",
            colspan: 1,
            rowspan: 1,
            key: "longitud_maxima",
          },
          {
            name: "Tiempos de Espera Acumulados",
            colspan: 1,
            rowspan: 1,
            key: "tiempos_de_espera_acumulados",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        key: "servidores", // <--- AGREGADO 'key'
        subheaders: [],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        key: "fin_de_atencion", // <--- AGREGADO 'key'
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Hora de Fin de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos", // <--- AGREGADO 'key'
        subheaders: [
          {
            name: "Clientes Atendidos",
            colspan: 1,
            rowspan: 1,
            key: "clientes_atendidos",
          },
          {
            name: "Porcentaje de Ocupacion",
            colspan: 1,
            rowspan: 1,
            key: "porcentaje_de_ocupacion",
          },
          {
            name: "Tiempo Promedio de Espera",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_promedio_de_espera",
          },
        ],
      },
    ],
  },
];

const abreviaciones = {
  envio_de_paquetes: "EP",
  reclamaciones_y_devoluciones: "RyD",
  venta_de_sellos_y_sobres: "VSyS",
  atencion_empresarial: "AE",
  postales_y_envios_especiales: "PyEE",
  atencion_empresarial_con_ausencia: "AECA",
  venta_de_sellos_y_sobres_sin_1_empleado: "VSySS1E",
  atencion_empresarial_con_prioridad: "AECP",
  post_envio_de_paquetes: "PEP",
};
// tasa = clientes/hora
const tasasBase = {
  envio_de_paquetes: {
    tasa_de_atencion: 10,
    tasa_de_llegada: 25,
    cantidad_de_servidores: 3,
  },
  reclamaciones_y_devoluciones: {
    tasa_de_atencion: 7,
    tasa_de_llegada: 15,
    cantidad_de_servidores: 2,
  },
  venta_de_sellos_y_sobres: {
    tasa_de_atencion: 18,
    tasa_de_llegada: 30,
    cantidad_de_servidores: 3,
  },
  atencion_empresarial: {
    tasa_de_atencion: 5,
    tasa_de_llegada: 10,
    cantidad_de_servidores: 2,
  },
  postales_y_envios_especiales: {
    tasa_de_atencion: 3,
    tasa_de_llegada: 8,
    cantidad_de_servidores: 1,
  },
};

export const plantillaCofig = {
  simulacion: {
    cantidad_de_filas: 10000,
    filas_a_mostrar: 300,
    fila_desde: 1,
  },
  tasas: {
    ...tasasBase,
    atencion_empresarial_con_ausencia: {
      tasa_de_atencion: tasasBase.atencion_empresarial.tasa_de_atencion,
      tasa_de_llegada: tasasBase.atencion_empresarial.tasa_de_llegada,
      cantidad_de_servidores:
        tasasBase.atencion_empresarial.cantidad_de_servidores,
    },
    venta_de_sellos_y_sobres_sin_1_empleado: {
      tasa_de_atencion: tasasBase.venta_de_sellos_y_sobres.tasa_de_atencion,
      tasa_de_llegada: tasasBase.venta_de_sellos_y_sobres.tasa_de_llegada,
      cantidad_de_servidores:
        tasasBase.venta_de_sellos_y_sobres.cantidad_de_servidores - 1,
    },
    atencion_empresarial_con_prioridad: {
      tasa_de_atencion: tasasBase.atencion_empresarial.tasa_de_atencion,
      tasa_de_llegada: tasasBase.atencion_empresarial.tasa_de_llegada,
      cantidad_de_servidores:
        tasasBase.atencion_empresarial.cantidad_de_servidores,
    },
    post_envio_de_paquetes: {
      cantidad_de_servidores: 1,
      tasa_de_atencion: 10,
    },
  },
};

const ajustarServidores = (config) => {
  const cant_servidores_envio_de_paquetes =
    config.tasas["post_envio_de_paquetes"].cantidad_de_servidores || 1;

  // Inicializar correctamente el objeto servidores
  plantillaFila["post_envio_de_paquetes"].servidores = {
    tiempos_de_ocupacion_acumulados: 0,
  };

  // Agregar servidores dinámicamente
  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    plantillaFila["post_envio_de_paquetes"].servidores[`servidor_${i}`] =
      "libre";
  }

  // Actualizar cabeceras
  const postEnvioDePaquetesHeader = plantillaCabeceras.find(
    (header) => header.key === "post_envio_de_paquetes"
  );

  const servidoresSubheader = postEnvioDePaquetesHeader.subheaders.find(
    (sub) => sub.key === "servidores"
  );

  // Limpiar y reconstruir subheaders
  servidoresSubheader.subheaders = [];

  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    servidoresSubheader.subheaders.push({
      name: `Servidor ${i}`,
      colspan: 1,
      rowspan: 1,
      key: `servidor_${i}`,
    });
  }

  servidoresSubheader.subheaders.push({
    name: "Tiempos de Ocupacion Acumulados",
    colspan: 1,
    rowspan: 1,
    key: "tiempos_de_ocupacion_acumulados",
  });

  // Actualizar colspan total
  servidoresSubheader.colspan = cant_servidores_envio_de_paquetes + 1;

  // Recalcular colspan total para la sección
  postEnvioDePaquetesHeader.colspan =
    postEnvioDePaquetesHeader.subheaders.reduce(
      (total, sub) => total + sub.colspan,
      0
    );
};

const generadorExponencial = (lambda) => {
  const rnd = Math.random();
  const value = -Math.log(1 - rnd) / lambda;

  return { value, rnd };
};

const procesarLlegadaGenerica = (
  clientes_registrados,
  evento,
  eventos,
  fila,
  config,
  colas,
  tiempos_de_ocupacion_acumulados
) => {
  /// incremetrar los clientes registrados
  clientes_registrados[evento.servicio] += 1;

  /// generar la proxima llegada (si no es servicio post envio de paquetes)
  if (evento.servicio !== "post_envio_de_paquetes") {
    const llegada = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_llegada
    );
    fila[evento.servicio].llegada_de_cliente.rnd = llegada.rnd;
    fila[evento.servicio].llegada_de_cliente.tiempo_entre_llegada =
      llegada.value;
    fila[evento.servicio].llegada_de_cliente.hora_de_llegada =
      fila.reloj + llegada.value;

    eventos.push({
      nombre: `llegada_cliente_${abreviaciones[evento.servicio]}_${
        clientes_registrados[evento.servicio] + 1
      }`,
      cliente_id: clientes_registrados[evento.servicio] + 1,
      servicio: evento.servicio,
      tipo: "llegada_de_cliente",
      hora: fila.reloj + llegada.value,
    });
  }

  /// verificar si hay servidores libres
  const serividoresLibres = encontrarServidoresLibres(evento.servicio, fila);

  /// agregar a la cola
  if (serividoresLibres.length === 0) {
    colas[evento.servicio].push({
      cliente_id: evento.cliente_id,
      hora_de_ingreso: evento.hora,
    });

    /// actualizamos la longitud de la cola
    const longitudMax = fila[evento.servicio].cola.longitud_maxima;
    fila[evento.servicio].cola.clientes_en_cola += 1;
    const longituActual = fila[evento.servicio].cola.clientes_en_cola;

    /// actualiza la longitud máxima registrada
    if (longituActual > longitudMax) {
      fila[evento.servicio].cola.longitud_maxima = longituActual;
    }
  } else {
    /// ocupar un servidor
    const servidor = serividoresLibres[0];
    fila[evento.servicio].servidores[servidor] = "ocupado";

    /// generar el fin de atencion
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );

    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion.hora_de_fin_de_atencion =
      fila.reloj + finAtencion.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        evento.cliente_id
      }`,
      cliente_id: evento.cliente_id,
      servicio: evento.servicio,
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      servidor, /// para saber que servidor se debe liberar
    });

    /// incrementar los clientes atendidos
    fila[evento.servicio].estadisticos.clientes_atendidos += 1;

    /// acumular los tiempos de ocupacion
    tiempos_de_ocupacion_acumulados[evento.servicio] += finAtencion.value;

    /// verificar si se debe calcular los tiempos promedios de espera (se recalcula por que aumento la cantidad de clientes atendidos)
    if ("tiempo_promedio_de_espera" in fila[evento.servicio].estadisticos) {
      const tiempoEsperaAcum =
        fila[evento.servicio].cola.tiempos_de_espera_acumulados;
      const clientesAtendidos =
        fila[evento.servicio].estadisticos.clientes_atendidos;

      const promDeEspera = tiempoEsperaAcum / clientesAtendidos;

      /// actualizo el promedio de espera en cola
      fila[evento.servicio].estadisticos.tiempo_promedio_de_espera =
        promDeEspera;
    }

    /// verificar si se debe calcular la probabilidad de espera >15min (se recalcula por que aumento la cantidad de clientes atendidos)
    if (
      "probabilidad_de_espera_mayor_a_15m" in fila[evento.servicio].estadisticos
    ) {
      const prob =
        fila[evento.servicio].cola.esperas_mayores_a_15m /
        fila[evento.servicio].estadisticos.clientes_atendidos;

      /// actulizo la probabilidad de esperas mayores a 15 min
      fila[evento.servicio].estadisticos.probabilidad_de_espera_mayor_a_15m =
        prob;
    }
  }
};

/// similar al generico pero se calcula la prioridad y se gestionan los dos timpos de cola
const procesarLlegadaConPrioridad = (
  clientes_registrados,
  evento,
  eventos,
  fila,
  config,
  colas
) => {
  /// incremetrar los clientes registrados
  clientes_registrados[evento.servicio] += 1;

  /// genero la prioridad del cliente
  const rndPrioridad = Math.random();
  const prioridad = rndPrioridad < 0.2 ? "alta" : "normal";
  const cola = rndPrioridad < 0.2 ? "cola_con_prioridad" : "cola_sin_prioridad";

  /// actualizo los valores de prioridad
  fila[evento.servicio].prioridad.rnd = rndPrioridad;
  fila[evento.servicio].prioridad.tipo_prioridad = prioridad;

  /// generar la proxima llegada
  const llegada = generadorExponencial(
    config.tasas[evento.servicio].tasa_de_llegada
  );
  fila[evento.servicio].llegada_de_cliente.rnd = llegada.rnd;
  fila[evento.servicio].llegada_de_cliente.tiempo_entre_llegada = llegada.value;
  fila[evento.servicio].llegada_de_cliente.hora_de_llegada =
    fila.reloj + llegada.value;

  eventos.push({
    nombre: `llegada_cliente_${abreviaciones[evento.servicio]}_${
      clientes_registrados[evento.servicio] + 1
    }`,
    cliente_id: clientes_registrados[evento.servicio] + 1,
    servicio: evento.servicio,
    tipo: "llegada_de_cliente",
    hora: fila.reloj + llegada.value,
  });

  /// verificar si hay servidores libres
  const serividoresLibres = encontrarServidoresLibres(evento.servicio, fila);

  /// agregar a la cola
  if (serividoresLibres.length === 0) {
    colas[evento.servicio][cola].push({
      cliente_id: evento.cliente_id,
      hora_de_ingreso: evento.hora,
    });

    /// actualizamos la longitud de la cola
    fila[evento.servicio][cola].clientes_en_cola += 1;
    const longituActual = fila[evento.servicio][cola].clientes_en_cola;
    if (longituActual > fila[evento.servicio][cola].longitud_maxima) {
      fila[evento.servicio][cola].longitud_maxima = longituActual;
    }
  } else {
    /// ocupar un servidor
    const servidor = serividoresLibres[0];
    fila[evento.servicio].servidores[servidor] = "ocupado";

    /// generar el fin de atencion
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );
    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion.hora_de_fin_de_atencion =
      fila.reloj + finAtencion.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        evento.cliente_id
      }_${prioridad === "alta" ? "cp" : "sp"}`,
      cliente_id: evento.cliente_id,
      servicio: "atencion_empresarial_con_prioridad",
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      servidor, /// para saber que servidor se debe liberar
    });

    /// incrementar los clientes atendidos
    fila[evento.servicio].estadisticos[
      `clientes_atendidos_${prioridad === "alta" ? "cp" : "sp"}`
    ] += 1;

    /// calculo los tiempos promedios de espera (se recalcula por que aumento la cantidad de clientes atendidos)
    const tiempoEsperaAcum =
      fila[evento.servicio][cola].tiempos_de_espera_acumulados;
    const clientesAtendidos =
      fila[evento.servicio].estadisticos[
        `clientes_atendidos_${prioridad === "alta" ? "cp" : "sp"}`
      ];

    const promDeEspera = tiempoEsperaAcum / clientesAtendidos;

    /// actualizo el promedio de espera en cola
    fila[evento.servicio].estadisticos[
      `tiempo_promedio_de_espera_${prioridad === "alta" ? "ccp" : "csp"}`
    ] = promDeEspera;
  }
};

const procesarFinAtencionGenerica = (
  fila,
  evento,
  colas,
  tiempos_de_ocupacion_acumulados,
  config,
  eventos
) => {
  /// comprovar si hay clientes en la cola
  if (colas[evento.servicio].length !== 0) {
    /// el servidor se matiene ocupado
    fila[evento.servicio].servidores[evento.servidor] = "ocupado";

    /// incrementar los clientes atendidos
    fila[evento.servicio].estadisticos.clientes_atendidos += 1;

    const clienteMasAntiguoEnCola = encontrarClienteMasAntiguo(
      colas[evento.servicio]
    );

    /// actualizo la logitud de la cola
    fila[evento.servicio].cola.clientes_en_cola -= 1;

    /// calculo el tiempo de permanencia en cola
    const tiempoEspera = evento.hora - clienteMasAntiguoEnCola.hora_de_ingreso;

    /// verificar si se debe calcular los tiempos promedios de espera
    if ("tiempo_promedio_de_espera" in fila[evento.servicio].estadisticos) {
      /// actualizo los tiempos acumulados en cola
      fila[evento.servicio].cola.tiempos_de_espera_acumulados += tiempoEspera;

      const tiempoEsperaAcum =
        fila[evento.servicio].cola.tiempos_de_espera_acumulados;
      const clientesAtendidos =
        fila[evento.servicio].estadisticos.clientes_atendidos;

      const promDeEspera = tiempoEsperaAcum / clientesAtendidos;

      /// actualizo el promedio de espera en cola
      fila[evento.servicio].estadisticos.tiempo_promedio_de_espera =
        promDeEspera;
    }

    /// verificar si se debe calcular la probabilidad de espera >15min
    if (
      "probabilidad_de_espera_mayor_a_15m" in fila[evento.servicio].estadisticos
    ) {
      /// actualizar la cantidad de esperas > 15 min
      const esperaSup15m = tiempoEspera > 15 / 60 ? true : false;

      if (esperaSup15m) {
        fila[evento.servicio].cola.esperas_mayores_a_15m += 1;
      }

      const prob =
        fila[evento.servicio].cola.esperas_mayores_a_15m /
        fila[evento.servicio].estadisticos.clientes_atendidos;

      /// actulizo la probabilidad de esperas mayores a 15 min
      fila[evento.servicio].estadisticos.probabilidad_de_espera_mayor_a_15m =
        prob;
    }
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );
    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion.hora_de_fin_de_atencion =
      fila.reloj + finAtencion.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        clienteMasAntiguoEnCola.cliente_id
      }`,
      cliente_id: clienteMasAntiguoEnCola.cliente_id,
      servicio: evento.servicio,
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      servidor: evento.servidor, /// para saber que servidor se debe liberar (es el mismo servidor del evento fin de atención, permanece ocupado)
    });

    /// acumular los tiempos de ocupacion
    tiempos_de_ocupacion_acumulados[evento.servicio] += finAtencion.value;
  } else {
    /// liberar el servidor
    fila[evento.servicio].servidores[evento.servidor] = "libre";

    /// verificar si se debe calcular el porcentaje de ocupacion (se recalcula únicamente cuando el servidor se libera)

    if ("porcentaje_de_ocupacion" in fila[evento.servicio].estadisticos) {
      /// actualizar los tiempos de ocupación acumulados
      const tiempoAcum = tiempos_de_ocupacion_acumulados[evento.servicio];
      fila[evento.servicio].servidores.tiempos_de_ocupacion_acumulados =
        tiempoAcum;

      // nos aseguramos de que el reloj no sea cero para evitar división por cero
      const tiempoTotal = fila.reloj > 0 ? fila.reloj : 1;
      const cantServidores =
        config.tasas[evento.servicio].cantidad_de_servidores;

      const porcDeOcupacion =
        (tiempoAcum / (cantServidores * tiempoTotal)) * 100;

      fila[evento.servicio].estadisticos.porcentaje_de_ocupacion =
        porcDeOcupacion;
    }
  }
};

const procesarFinAtencionConPrioridad = (
  fila,
  evento,
  colas,
  config,
  eventos,
  tiempos_de_ocupacion_acumulados
) => {
  /// comprovar si hay clientes en la colaSW
  const longitudCCP =
    colas["atencion_empresarial_con_prioridad"].cola_con_prioridad.length;
  const longitudCSP =
    colas["atencion_empresarial_con_prioridad"].cola_sin_prioridad.length;

  if (longitudCCP !== 0 || longitudCSP !== 0) {
    let cola = "cola_con_prioridad";

    /// solo se atendera a los clientes de la cola sin pioridad si la cola con prioridad esta vacia
    if (longitudCCP === 0) {
      cola = "cola_sin_prioridad";
    }

    const clienteMasAntiguoEnCola = encontrarClienteMasAntiguo(
      colas[evento.servicio][cola]
    );

    /// actualizo la logitud de la cola
    fila[evento.servicio][cola].clientes_en_cola -= 1;

    /// calculo el tiempo de permanencia en cola
    const tiempoEspera = evento.hora - clienteMasAntiguoEnCola.hora_de_ingreso;

    /// incrementar los clientes atendidos
    fila[evento.servicio].estadisticos[
      `clientes_atendidos_${cola === "cola_con_prioridad" ? "cp" : "sp"}`
    ] += 1;

    /// actualizo los tiempos acumulados en cola
    fila[evento.servicio][cola].tiempos_de_espera_acumulados += tiempoEspera;

    /// calculo los tiempos promedios de espera (se recalcula por que aumento la cantidad de clientes atendidos)
    const tiempoEsperaAcum =
      fila[evento.servicio][cola].tiempos_de_espera_acumulados;
    const clientesAtendidos =
      fila[evento.servicio].estadisticos[
        `clientes_atendidos_${cola === "cola_con_prioridad" ? "cp" : "sp"}`
      ];

    const promDeEspera = tiempoEsperaAcum / clientesAtendidos;

    /// actualizo el promedio de espera en cola
    fila[evento.servicio].estadisticos[
      `tiempo_promedio_de_espera_${
        cola === "cola_con_prioridad" ? "ccp" : "csp"
      }`
    ] = promDeEspera;

    /// generar el fin de atencion
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );
    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion.hora_de_fin_de_atencion =
      fila.reloj + finAtencion.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        clienteMasAntiguoEnCola.cliente_id
      }_${cola === "cola_con_prioridad" ? "cp" : "sp"}`,
      cliente_id: clienteMasAntiguoEnCola.cliente_id,
      servicio: "atencion_empresarial_con_prioridad",
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      servidor: evento.servidor, /// para saber que servidor se debe liberar
    });

    tiempos_de_ocupacion_acumulados[evento.servicio] += finAtencion.value;
  } else {
    /// liberar el servidor
    fila[evento.servicio].servidores[evento.servidor] = "libre";
  }
};
const registrarEventoAusencia = (reloj, eventos) => {
  eventos.push({
    nombre: `ausencia_servidor_${abreviaciones["atencion_empresarial_con_ausencia"]}`,
    servicio: "atencion_empresarial_con_ausencia",
    tipo: "ausencia_servidor",
    servidor: "servidor_periodico",
    hora: reloj + 1, /// hora actual + 1 hora
  });
};
const registrarEventoRegreso = (reloj, eventos) => {
  eventos.push({
    nombre: `regreso_servidor_${abreviaciones["atencion_empresarial_con_ausencia"]}`,
    servicio: "atencion_empresarial_con_ausencia",
    tipo: "regreso_servidor",
    servidor: "servidor_periodico",
    hora: reloj + 20 / 60, /// hora actual + 20 min
  });
};

const serviciosBase = [
  "envio_de_paquetes",
  "reclamaciones_y_devoluciones",
  "venta_de_sellos_y_sobres",
  "atencion_empresarial",
  "postales_y_envios_especiales",
];
const servicios = [
  ...serviciosBase,
  "atencion_empresarial_con_ausencia",
  "venta_de_sellos_y_sobres_sin_1_empleado",
  "atencion_empresarial_con_prioridad",
  "post_envio_de_paquetes",
];

const inicializarSimulacion = (config, eventos, clientes_registrados) => {
  const fila = JSON.parse(JSON.stringify(plantillaFila));
  fila.simulacion = 0;
  fila.evento = "Inicio";
  fila.reloj = 0;

  // Iterar sobre cada servicio para generar su primer evento de llegada
  for (const servicio of servicios) {
    // Verificar si el servicio tiene una tasa de llegada definida
    if (
      servicio !== "post_envio_de_paquetes" &&
      config.tasas[servicio] &&
      config.tasas[servicio].tasa_de_llegada !== undefined
    ) {
      const llegada = generadorExponencial(
        config.tasas[servicio].tasa_de_llegada
      );

      // Asignar los valores a la fila dinámicamente
      if (fila[servicio] && fila[servicio].llegada_de_cliente) {
        fila[servicio].llegada_de_cliente.rnd = llegada.rnd;
        fila[servicio].llegada_de_cliente.tiempo_entre_llegada = llegada.value;
        fila[servicio].llegada_de_cliente.hora_de_llegada = llegada.value;
      } else {
        console.warn(
          `Plantilla de fila no tiene 'llegada_de_cliente' para el servicio: ${servicio}. Saltando.`
        );
      }

      // Añadir el evento a la lista de eventos
      const abreviacion = abreviaciones[servicio] || servicio; // Usa abreviación o el nombre completo si no existe
      eventos.push({
        nombre: `llegada_cliente_${abreviacion}_${
          clientes_registrados[servicio] + 1
        }`,
        cliente_id: clientes_registrados[servicio] + 1,
        servicio: servicio,
        tipo: "llegada_de_cliente",
        hora: llegada.value,
      });
    } else {
      // Opcional: Manejar servicios que no tienen tasa de llegada si es necesario
      console.warn(
        `El servicio '${servicio}' no tiene 'tasa_de_llegada' definida en la configuración. No se generará evento de llegada inicial.`
      );
    }
  }
  return fila;
};

const encontrarProxEvento = (
  eventos,
  servicio = null,
  servidor = null,
  remover = true
) => {
  // 1. Ordenar la lista de eventos por hora para encontrar el más antiguo.
  // Esta ordenación es crucial para la lógica de un simulador de eventos discretos.
  eventos.sort((a, b) => a.hora - b.hora);

  let proximoEvento = null;
  let indiceProximoEvento = -1;

  // 2. Iterar sobre la lista de eventos ordenados para encontrar el evento que cumpla
  // con los criterios de servicio y servidor, y que sea el más antiguo (ya que está ordenado).
  for (let i = 0; i < eventos.length; i++) {
    const eventoActual = eventos[i];

    const cumpleServicio =
      servicio === null || eventoActual.servicio === servicio;
    const cumpleServidor =
      servidor === null || eventoActual?.servidor === servidor;

    if (cumpleServicio && cumpleServidor) {
      proximoEvento = eventoActual;
      indiceProximoEvento = i;
      break; // Encontramos el evento más antiguo que cumple con los criterios, salimos del bucle.
    }
  }

  // 3. Si se encontró un evento, eliminarlo de la lista original de eventos.
  if (proximoEvento !== null && remover) {
    eventos.splice(indiceProximoEvento, 1);
  }

  return proximoEvento;
};

const encontrarClienteMasAntiguo = (cola) => {
  cola.sort((a, b) => a.hora_de_ingreso - b.hora_de_ingreso);

  if (cola.length > 0) {
    const clienteMasAntiguo = cola[0];

    cola.splice(0, 1);

    return clienteMasAntiguo;
  } else {
    return null;
  }
};

const encontrarServidoresLibres = (nombreServicio, fila) => {
  const servidoresLibres = [];

  Object.entries(fila[nombreServicio].servidores).forEach(([clave, valor]) => {
    /// valida que sea la columna servidor_n y no el acumulador de los tiempos de ocupación
    if (clave.includes("servidor") && valor === "libre")
      servidoresLibres.push(clave);
  });

  return servidoresLibres;
};

export const gestorSimulacion = (config) => {
  // Ajustar la plantilla de servidores según la configuración
  ajustarServidores(config);

  let eventos = [];
  const filas = [];

  const clientes_registrados = {
    envio_de_paquetes: 0,
    reclamaciones_y_devoluciones: 0,
    venta_de_sellos_y_sobres: 0,
    atencion_empresarial: 0,
    postales_y_envios_especiales: 0,
    atencion_empresarial_con_ausencia: 0,
    venta_de_sellos_y_sobres_sin_1_empleado: 0,
    atencion_empresarial_con_prioridad: 0,
    post_envio_de_paquetes: 0,
  };
  const colas = {
    envio_de_paquetes: [],
    reclamaciones_y_devoluciones: [],
    venta_de_sellos_y_sobres: [],
    atencion_empresarial: [],
    postales_y_envios_especiales: [],
    atencion_empresarial_con_ausencia: [],
    venta_de_sellos_y_sobres_sin_1_empleado: [],
    atencion_empresarial_con_prioridad: {
      cola_con_prioridad: [],
      cola_sin_prioridad: [],
    },
    post_envio_de_paquetes: [],
  };

  const tiempos_de_ocupacion_acumulados = {
    envio_de_paquetes: 0,
    reclamaciones_y_devoluciones: 0,
    venta_de_sellos_y_sobres: 0,
    atencion_empresarial: 0,
    postales_y_envios_especiales: 0,
    atencion_empresarial_con_ausencia: 0,
    venta_de_sellos_y_sobres_sin_1_empleado: 0,
    atencion_empresarial_con_prioridad: 0,
    post_envio_de_paquetes: 0,
  };

  let filaPrevia = null;

  for (let i = 0; i < config.simulacion.cantidad_de_filas; i++) {
    const esIncio = i === 0;
    const esFIn = i === config.simulacion.cantidad_de_filas - 1;

    if (esIncio) {
      // Inicializar la simulación con el primer evento de llegada de cliente
      const fila = inicializarSimulacion(config, eventos, clientes_registrados);
      filas.push(fila);
      filaPrevia = fila;
      /// generar el evento de ausencia
      registrarEventoAusencia(0, eventos);
    } else {
      const evento = encontrarProxEvento(eventos);
      if (!evento) throw new Error("No se han encontrado eventos");

      let fila = JSON.parse(JSON.stringify(filaPrevia));
      setNullsFila(fila);

      fila.simulacion = i;
      fila.evento = evento.nombre;
      fila.reloj = evento.hora;

      fila.atencion_empresarial_con_prioridad.prioridad =
        plantillaFila.atencion_empresarial_con_prioridad.prioridad;
      fila.post_envio_de_paquetes.solicitud_del_servicio =
        plantillaFila.post_envio_de_paquetes.solicitud_del_servicio;

      if (evento.tipo === "llegada_de_cliente") {
        if (evento.servicio === "atencion_empresarial_con_prioridad") {
          procesarLlegadaConPrioridad(
            clientes_registrados,
            evento,
            eventos,
            fila,
            config,
            colas
          );
        } else {
          procesarLlegadaGenerica(
            clientes_registrados,
            evento,
            eventos,
            fila,
            config,
            colas,
            tiempos_de_ocupacion_acumulados
          );
        }
      } else if (evento?.tipo === "fin_de_atencion") {
        if (evento.servicio === "atencion_empresarial_con_prioridad") {
          procesarFinAtencionConPrioridad(
            fila,
            evento,
            colas,
            config,
            eventos,
            tiempos_de_ocupacion_acumulados
          );
        } else {
          procesarFinAtencionGenerica(
            fila,
            evento,
            colas,
            tiempos_de_ocupacion_acumulados,
            config,
            eventos
          );

          if (evento.servicio === "envio_de_paquetes") {
            const rndSolicitud = Math.random();
            const solicita = rndSolicitud < 0.5 ? "SI" : "NO";

            /// actualizar los datos de solicitud de servicio post envio de paquetes
            fila.post_envio_de_paquetes.solicitud_del_servicio.rnd =
              rndSolicitud;
            fila.post_envio_de_paquetes.solicitud_del_servicio.solicita =
              solicita;

            /// creamos un evento falso para reutilzar la lógica del método procesarLlegadaGenerica
            const falsoEvento = {
              nombre: "falso",
              cliente_id: evento.cliente_id, /// se trata del mismo cliente que sale del servicio de envio de paquetes
              servicio: "post_envio_de_paquetes",
              tipo: "llegada_de_cliente",
              hora: evento.hora,
            };

            procesarLlegadaGenerica(
              clientes_registrados,
              falsoEvento,
              eventos,
              fila,
              config,
              colas,
              tiempos_de_ocupacion_acumulados
            );
          }
        }
      } else if (evento.tipo === "ausencia_servidor") {
        /// verificamos si el servidor esta ocupado
        const estaOcupado =
          fila["atencion_empresarial_con_prioridad"].servidores
            .servidor_periodico === "ocupado";

        if (estaOcupado) {
          const eventoFinAtencion = encontrarProxEvento(
            eventos,
            "atencion_empresarial_con_ausencia",
            "servidor_periodico",
            false
          );
          if (!eventoFinAtencion)
            throw new Error(
              "El servidor se encuentra ocupado, pero no se ha encontrado el evento fin de atención correspondiente"
            );

          registrarEventoAusencia(eventoFinAtencion.hora, eventos);
        } else {
          /// actualizo el estado del servidor
          fila[
            "atencion_empresarial_con_ausencia"
          ].servidores.servidor_periodico = "ausente";

          /// registro el evento regreso de servidor
          registrarEventoRegreso(evento.hora, eventos);
        }
      } else if (evento.tipo === "regreso_servidor") {
        /// actualizo el estado del servidor
        fila[
          "atencion_empresarial_con_ausencia"
        ].servidores.servidor_periodico = "libre";

        procesarFinAtencionGenerica(
          fila,
          evento,
          colas,
          tiempos_de_ocupacion_acumulados,
          config,
          eventos
        );
        /// se va a verificar si hay clientes en la cola
      }

      if (esFIn) {
        /// hacer un barrido final, iterar sobre los servidores de todos los servicio, si estan ocupados, setear su tiempo de ocupacion acumulado y calcular su porcentaje de ocupacion
        servicios.forEach((servicio) => {
          if ("tiempos_de_ocupacion_acumulados" in fila[servicio].servidores) {
            const tiempoAcum = tiempos_de_ocupacion_acumulados[servicio];
            fila[servicio].servidores.tiempos_de_ocupacion_acumulados =
              tiempoAcum;

            // nos aseguramos de que el reloj no sea cero para evitar división por cero
            const tiempoTotal = fila.reloj > 0 ? fila.reloj : 1;
            const cantServidores =
              config.tasas[servicio].cantidad_de_servidores;

            const porcDeOcupacion =
              (tiempoAcum / (cantServidores * tiempoTotal)) * 100;

            fila[servicio].estadisticos.porcentaje_de_ocupacion =
              porcDeOcupacion;
          }
        });
      }

      /// agregar fila al vector de estados
      filas.push(JSON.parse(JSON.stringify(fila)));
      filaPrevia = fila;
    }
  }

  const filasVisibles = filas.slice(
    config.simulacion.fila_desde - 1,
    config.simulacion.fila_desde - 1 + config.simulacion.filas_a_mostrar
  );

  const ultimaFila = filas[filas.length - 1];
  filasVisibles.push(ultimaFila);

  const rtas = {
    punto_1: {
      envio_de_paquetes: {
        porcentaje_de_ocupacion:
          ultimaFila.envio_de_paquetes.estadisticos.porcentaje_de_ocupacion,
        tiempo_promedio_de_espera:
          ultimaFila.envio_de_paquetes.estadisticos.tiempo_promedio_de_espera,
      },
      reclamaciones_y_devoluciones: {
        porcentaje_de_ocupacion:
          ultimaFila.reclamaciones_y_devoluciones.estadisticos
            .porcentaje_de_ocupacion,
        tiempo_promedio_de_espera:
          ultimaFila.reclamaciones_y_devoluciones.estadisticos
            .tiempo_promedio_de_espera,
      },
      venta_de_sellos_y_sobres: {
        porcentaje_de_ocupacion:
          ultimaFila.venta_de_sellos_y_sobres.estadisticos
            .porcentaje_de_ocupacion,
        tiempo_promedio_de_espera:
          ultimaFila.venta_de_sellos_y_sobres.estadisticos
            .tiempo_promedio_de_espera,
      },
      atencion_empresarial: {
        porcentaje_de_ocupacion:
          ultimaFila.atencion_empresarial.estadisticos.porcentaje_de_ocupacion,
        tiempo_promedio_de_espera:
          ultimaFila.atencion_empresarial.estadisticos
            .tiempo_promedio_de_espera,
      },
      postales_y_envios_especiales: {
        porcentaje_de_ocupacion:
          ultimaFila.postales_y_envios_especiales.estadisticos
            .porcentaje_de_ocupacion,
        tiempo_promedio_de_espera:
          ultimaFila.postales_y_envios_especiales.estadisticos
            .tiempo_promedio_de_espera,
      },
    },
    punto_2: {
      tiempo_promedio_de_espera_con_sin_asusencia:
        ultimaFila.atencion_empresarial.estadisticos.tiempo_promedio_de_espera,
      tiempo_promedio_de_espera_con_con_asusencia:
        ultimaFila.atencion_empresarial_con_ausencia.estadisticos
          .tiempo_promedio_de_espera,
      incremento:
        (ultimaFila.atencion_empresarial_con_ausencia.estadisticos
          .tiempo_promedio_de_espera /
          ultimaFila.atencion_empresarial.estadisticos
            .tiempo_promedio_de_espera -
          1) *
        100,
    },
    punto_3:
      ultimaFila.venta_de_sellos_y_sobres_sin_1_empleado.estadisticos
        .porcentaje_de_ocupacion,
    punto_4: {
      envio_de_paquetes: ultimaFila.envio_de_paquetes.cola.longitud_maxima,
      reclamaciones_y_devoluciones:
        ultimaFila.reclamaciones_y_devoluciones.cola.longitud_maxima,
      venta_de_sellos_y_sobres:
        ultimaFila.venta_de_sellos_y_sobres.cola.longitud_maxima,
      atencion_empresarial:
        ultimaFila.atencion_empresarial.cola.longitud_maxima,
      postales_y_envios_especiales:
        ultimaFila.postales_y_envios_especiales.cola.longitud_maxima,
      atencion_empresarial_con_ausencia:
        ultimaFila.atencion_empresarial_con_ausencia.cola.longitud_maxima,
      venta_de_sellos_y_sobres_sin_1_empleado:
        ultimaFila.venta_de_sellos_y_sobres_sin_1_empleado.cola.longitud_maxima,
      atencion_empresarial_con_prioridad: {
        cola_con_prioridad:
          ultimaFila.atencion_empresarial_con_prioridad.cola_con_prioridad
            .longitud_maxima,
        cola_sin_prioridad:
          ultimaFila.atencion_empresarial_con_prioridad.cola_sin_prioridad
            .longitud_maxima,
      },
      post_envio_de_paquetes:
        ultimaFila.post_envio_de_paquetes.cola.longitud_maxima,
    },
    punto_5: {
      tiempo_promedio_de_espera_ccp:
        ultimaFila.atencion_empresarial_con_prioridad.estadisticos
          .tiempo_promedio_de_espera_ccp,
      tiempo_promedio_de_espera_csp:
        ultimaFila.atencion_empresarial_con_prioridad.estadisticos
          .tiempo_promedio_de_espera_csp,
    },
    punto_6:
      ultimaFila.envio_de_paquetes.estadisticos
        .probabilidad_de_espera_mayor_a_15m,
    punto_7: {
      porcentaje_de_ocupacion:
        ultimaFila.post_envio_de_paquetes.estadisticos.porcentaje_de_ocupacion,
      tiempo_promedio_de_espera:
        ultimaFila.post_envio_de_paquetes.estadisticos
          .tiempo_promedio_de_espera,
    },
  };
  return {
    cabeceras: plantillaCabeceras,
    filas: filasVisibles,
    rtas,
  };
};
