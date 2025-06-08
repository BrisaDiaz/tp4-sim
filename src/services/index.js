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
      clientes_atendidos: 0,
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
      servidor_1: "libre",
      tiempos_de_ocupacion_acumulados: "libre",
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

export const plantillaCabeceras = [
  { name: "Simulacion", colspan: 1, rowspan: 3 },
  { name: "Evento", colspan: 1, rowspan: 3 },
  { name: "Reloj", colspan: 1, rowspan: 3 },
  {
    name: "Envio de Paquetes",
    colspan: 18, // 3 (llegada) + 4 (cola) + 4 (servidores) + 3 (fin atencion) + 4 (estadisticos) = 18
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 4,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Esperas Mayores a 15m", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 4,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
          { name: "Servidor 3", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 4,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
          {
            name: "Probabilidad de Espera Mayor a 15m",
            colspan: 1,
            rowspan: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Reclamaciones y Devoluciones",
    colspan: 14, // 3 (llegada) + 3 (cola) + 3 (servidores) + 3 (fin atencion) + 2 (estadisticos) = 14 (cambiado de 15, ya que estadisticos tiene 3 y no 2)
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Venta de Sellos y Sobres",
    colspan: 16, // 3 (llegada) + 3 (cola) + 4 (servidores) + 3 (fin atencion) + 3 (estadisticos) = 16
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 4,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
          { name: "Servidor 3", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Atencion Empresarial",
    colspan: 15, // 3 (llegada) + 3 (cola) + 3 (servidores) + 3 (fin atencion) + 3 (estadisticos) = 15
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Postales y Envios Especiales",
    colspan: 14, // 3 (llegada) + 3 (cola) + 2 (servidores) + 3 (fin atencion) + 3 (estadisticos) = 14
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Atencion Empresarial con Ausencia",
    colspan: 13, // 3 (llegada) + 3 (cola) + 2 (servidores) + 3 (fin atencion) + 2 (estadisticos) = 13
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Servidor Periodico", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Venta de Sellos y Sobres sin 1 Empleado",
    colspan: 13, // 3 (llegada) + 2 (cola) + 3 (servidores) + 3 (fin atencion) + 2 (estadisticos) = 13
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Atencion Empresarial con Prioridad",
    colspan: 19, // 3 (llegada) + 2 (prioridad) + 3 (cola sin prioridad) + 3 (cola con prioridad) + 2 (servidores) + 3 (fin atencion) + 3 (estadisticos) = 19
    rowspan: 1,
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo entre Llegada", colspan: 1, rowspan: 1 },
          { name: "Hora de Llegada", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Prioridad",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tipo de Prioridad", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola sin Prioridad",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola con Prioridad",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Servidor 2", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera CSP", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera CCP", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
  {
    name: "Post Envio de Paquetes",
    colspan: 13, // 2 (solicitud) + 3 (cola) + 2 (servidores) + 3 (fin atencion) + 3 (estadisticos) = 13
    rowspan: 1,
    subheaders: [
      {
        name: "Solicitud ",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Solicita", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes en Cola", colspan: 1, rowspan: 1 },
          { name: "Longitud Maxima", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Espera Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Servidores",
        colspan: 2,
        rowspan: 1,
        subheaders: [
          { name: "Servidor 1", colspan: 1, rowspan: 1 },
          { name: "Tiempos de Ocupacion Acumulados", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1 },
          { name: "Tiempo de Atencion", colspan: 1, rowspan: 1 },
          { name: "Hora de Fin de Atencion", colspan: 1, rowspan: 1 },
        ],
      },
      {
        name: "estadisticos",
        colspan: 3,
        rowspan: 1,
        subheaders: [
          { name: "Clientes Atendidos", colspan: 1, rowspan: 1 },
          { name: "Porcentaje de Ocupacion", colspan: 1, rowspan: 1 },
          { name: "Tiempo Promedio de Espera", colspan: 1, rowspan: 1 },
        ],
      },
    ],
  },
];

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
        tasasBase.venta_de_sellos_y_sobres.cantidad_de_servidores,
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
  // editar plantillaFila para incluir la cantidad de servidores
  plantillaFila["post_envio_de_paquetes"].servidores = {
    tiempos_de_ocupacion_acumulados: 0,
  };
  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    plantillaFila["post_envio_de_paquetes"].servidores[`servidor_${i}`] =
      "libre";
  }

  // editar plantillaCabeceras para incluir la cantidad de servidores e incrementar el colspan
  plantillaCabeceras[11].subheaders[2].subheaders = [];
  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    plantillaCabeceras[11].subheaders[2].subheaders.push({
      name: `Servidor ${i}`,
      colspan: 1,
      rowspan: 1,
    });

    // incrementar el colspan
    plantillaCabeceras[11].colspan += 1;
    plantillaCabeceras[11].subheaders[2].colspan += 1;
  }
  plantillaCabeceras[11].subheaders[2].subheaders.push({
    name: "Tiempos de Ocupacion Acumulados",
    colspan: 1,
    rowspan: 1,
  });
};

const generadorExponencial = (lambda) => {
  const rnd = Math.random();
  const value = -Math.log(1 - rnd) / lambda;
  return { value, rnd };
};

export const gestorSimulacion = (config) => {
  // Ajustar la plantilla de servidores según la configuración
  ajustarServidores(config);

  let eventos = [];
  const filas = [];
  const clientes_atendidos = {
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
    atencion_empresarial_con_prioridad: [],
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

  for (let i = 0; i < config.simulacion.cantidad_de_filas; i++) {
    const esIncio = i === 0;

    if (esIncio) {
      // Inicializar la simulación con el primer evento de llegada de cliente
      const fila = inicializarSimulacion(config, eventos, clientes_registrados);
      filas.push(fila);

      /// generar el evento de ausencia
      registrarEventoAusencia(0, eventos);
    } else {
      const evento = encontrarProxEvento(eventos);
      if (!evento) throw new Error("No se han encontrado eventos");

      const filaPrevia = filas[filas.length - 1];

      const fila = { ...plantillaFila };
      fila.simulacion = i;
      fila.evento = evento.nombre;
      fila.reloj = evento.hora;

      /// hacer un merge con los valores de la fila previa
      mergeFilas(fila, filaPrevia, evento);

      if (evento.tipo === "llegada_de_cliente") {
        if (evento.servicio === "atencion_empresarial_con_prioridad") {
          procesarLlegadaConPrioridad(
            clientes_registrados,
            evento,
            eventos,
            fila,
            filaPrevia,
            config,
            colas,
            tiempos_de_ocupacion_acumulados
          );
        } else {
          procesarLlegadaGenerica(
            clientes_registrados,
            evento,
            eventos,
            fila,
            filaPrevia,
            config,
            colas,
            tiempos_de_ocupacion_acumulados
          );
        }
      } else if (evento?.tipo === "fin_de_atencion") {
        /// incrementar los clientes atendidos
        clientes_atendidos[evento.servicio] += 1;

        fila[evento.servicio].clientes_atendidos =
          clientes_atendidos[evento.servicio];

        /// comprovar si hay clientes en la cola
        if (colas[evento.servicio].length !== 0) {
          return;
        } else {
          /// liberar el servidor
          fila[evento.servicio].servidores[evento.servidor] = "libre";

          /// verificar si se deben calcular los tiempos de ocupacion
          if ("porcentaje_de_ocupacion" in fila[evento.servicio].estadisticos) {
            /// actualizar los tiempos de ocupación acumulados
            const tiempoAcum = tiempos_de_ocupacion_acumulados[evento.servicio];
            fila[evento.servicio].servidores.tiempos_de_ocupacion_acumulados =
              tiempoAcum;

            /// actualizar el tiempo de ocupación promedio
            const cantServidores =
              config.tasas[evento.servicio].cantidad_de_servidores;

            const porcDeOcupacion =
              (tiempoAcum / (cantServidores * fila.reloj)) * 100;

            fila[evento.servicio].estadisticos.porcentaje_de_ocupacion =
              porcDeOcupacion;
          }
        }
      } else if (evento.tipo === "asuncia_servidor") {
        break;
      } else if (evento.tipo === "regreso_servidor") {
        break;
      }

      filas.push(fila);
    }
  }
  return {
    cabeceras: plantillaCabeceras,
    filas: [],
  };
};

const procesarLlegadaGenerica = (
  clientes_registrados,
  evento,
  eventos,
  fila,
  filaPrevia,
  config,
  colas,
  tiempos_de_ocupacion_acumulados
) => {
  /// incremetrar los clientes registrados
  clientes_registrados[evento.servicio] += 1;

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
    id_cliente: clientes_registrados[evento.servicio] + 1,
    servicio: evento.servicio,
    tipo: "llegada_de_cliente",
    hora: fila.reloj + llegada.value,
  });

  /// verificar si hay servidores libres
  const serividoresLibres = encontrarServidoresLibres(
    evento.servicio,
    filaPrevia
  );

  /// agregar a la cola
  if (serividoresLibres.length === 0) {
    colas[evento.servicio].push({
      cliente_id: evento.cliente_id,
      hora_de_ingreso: evento.hora,
    });

    /// actualizamos la longitud de la cola
    const longitudPrev = filaPrevia[evento.servicio].cola.clientes_en_cola;
    const longitudMax = filaPrevia[evento.servicio].cola.longitud_maxima;
    fila[evento.servicio].cola.clientes_en_cola = longitudPrev + 1;

    /// actualiza la longitud máxima registrada
    if (longitudPrev + 1 > longitudMax) {
      fila[evento.servicio].cola.longitudMax = longitudPrev + 1;
    }
  } else {
    /// ocupar un servidor
    const servidor = serividoresLibres[0];
    fila[evento.servicio].servidores[servidor] = "ocupado";

    /// generar el fin de atencion
    const finAtencionEnvio = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_llegada
    );
    fila[evento.servicio].llegada_de_cliente.rnd = finAtencionEnvio.rnd;
    fila[evento.servicio].llegada_de_cliente.tiempo_entre_llegada =
      finAtencionEnvio.value;
    fila[evento.servicio].llegada_de_cliente.hora_de_llegada =
      fila.reloj + finAtencionEnvio.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        evento.id_cliente
      }`,
      id_cliente: evento.id_cliente,
      servicio: "envio_de_paquetes",
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencionEnvio.value,
      servidor, /// para saber que servidor se debe liberar
    });

    /// acumular los tiempos de ocupacion
    tiempos_de_ocupacion_acumulados[evento.servicio] += finAtencionEnvio.value;
  }
};

/// similar al generico pero se calcula la prioridad y se gestionan los dos timpos de cola
const procesarLlegadaConPrioridad = (
  clientes_registrados,
  evento,
  eventos,
  fila,
  filaPrevia,
  config,
  colas,
  tiempos_de_ocupacion_acumulados
) => {
  /// incremetrar los clientes registrados
  clientes_registrados[evento.servicio] += 1;

  /// genero la prioridad del cliente
  const rndPrioridad = Math.random();
  const prioridad = rndPrioridad < 0.2 ? "alta" : "normal";
  const cola = rndPrioridad < 0.2 ? "cola_con_prioridad" : "cola_sin_prioridad";

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
    id_cliente: clientes_registrados[evento.servicio] + 1,
    servicio: evento.servicio,
    tipo: "llegada_de_cliente",
    hora: fila.reloj + llegada.value,
  });

  /// verificar si hay servidores libres
  const serividoresLibres = encontrarServidoresLibres(
    evento.servicio,
    filaPrevia
  );

  /// agregar a la cola
  if (serividoresLibres.length === 0) {
    colas[evento.servicio].push({
      cliente_id: evento.cliente_id,
      hora_de_ingreso: evento.hora,
    });

    /// actualizamos la longitud de la cola
    const longitudPrev = filaPrevia[evento.servicio][cola].clientes_en_cola;
    const longitudMax = filaPrevia[evento.servicio][cola].longitud_maxima;

    fila[evento.servicio][cola].clientes_en_cola = longitudPrev + 1;

    /// actualiza la longitud máxima registrada
    if (longitudPrev + 1 > longitudMax) {
      fila[evento.servicio][cola].longitudMax = longitudPrev + 1;
    }
  } else {
    /// ocupar un servidor
    const servidor = serividoresLibres[0];
    fila[evento.servicio].servidores[servidor] = "ocupado";

    /// generar el fin de atencion
    const finAtencionEnvio = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_llegada
    );
    fila[evento.servicio].llegada_de_cliente.rnd = finAtencionEnvio.rnd;
    fila[evento.servicio].llegada_de_cliente.tiempo_entre_llegada =
      finAtencionEnvio.value;
    fila[evento.servicio].llegada_de_cliente.hora_de_llegada =
      fila.reloj + finAtencionEnvio.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        evento.id_cliente
      }_${prioridad === "alta" ? "CP" : "SP"}`,
      id_cliente: evento.id_cliente,
      servicio: "envio_de_paquetes",
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencionEnvio.value,
      servidor, /// para saber que servidor se debe liberar
    });

    /// acumular los tiempos de ocupacion
    tiempos_de_ocupacion_acumulados[evento.servicio] += finAtencionEnvio.value;
  }
};

const registrarEventoAusencia = (reloj, eventos) => {
  eventos.push({
    nombre: `asuncia_servidor_${abreviaciones["atencion_empresarial_con_ausencia"]}`,
    servicio: "atencion_empresarial_con_ausencia",
    tipo: "asuncia_servidor",
    hora: reloj + 1, /// hora actual + 1 hora
  });
};
const registrarEventoRegreso = (reloj, eventos) => {
  eventos.push({
    nombre: `regreso_servidor_${abreviaciones["atencion_empresarial_con_ausencia"]}`,
    servicio: "atencion_empresarial_con_ausencia",
    tipo: "regreso_servidor",
    hora: reloj + 20 / 60, /// hora actual + 20 min
  });
};

const mergeFilas = (fila, filaPrevia, evento) => {
  fila[evento.servicio].servidores = filaPrevia[evento.servicio].servidores;
  fila[evento.servicio].estadisticos = filaPrevia[evento.servicio].estadisticos;

  if (evento.servicio === "") {
    /// matener los valores de tiempo de tiempos de espera acumulado
    ["cola_con_prioridad", "cola_sin_prioridad"].forEach(
      (cola) =>
        (fila[evento.servicio][cola] = filaPrevia[evento.servicio][cola])
    );
  } else {
    fila[evento.servicio].cola = filaPrevia[evento.servicio].cola;
  }
};

const servicios = [
  "envio_de_paquetes",
  "reclamaciones_y_devoluciones",
  "venta_de_sellos_y_sobres",
  "atencion_empresarial",
  "postales_y_envios_especiales",
  "atencion_empresarial_con_ausencia",
  "venta_de_sellos_y_sobres_sin_1_empleado",
  "atencion_empresarial_con_prioridad",
  "post_envio_de_paquetes",
];

const inicializarSimulacion = (config, eventos, clientes_registrados) => {
  const fila = { ...plantillaFila };
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
        id_cliente: clientes_registrados[servicio] + 1,
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

const encontrarProxEvento = (eventos) => {
  // Ordenar los eventos por hora (menos a mayor)
  const eventosOrdenarEventos = eventos.sort((a, b) => a.hora - b.hora);
  return eventosOrdenarEventos.length > 0
    ? eventosOrdenarEventos[0] // Retorna el primer evento (el de menor hora)
    : null; // Si no hay eventos, retorna null
};

const encontrarServidoresLibres = (nombreServicio, filaPrevia) => {
  const servidoresLibres = [];

  Object.entries(filaPrevia[nombreServicio].servidores).forEach(
    ([clave, valor]) => {
      /// valida que sea la columna servidor_n y no el acumulador de los tiempos de ocupación
      if (clave.includes("servidor") && valor === "libre")
        servidoresLibres.push(clave);
    }
  );

  return servidoresLibres;
};
