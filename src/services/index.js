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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
      servidor_3: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
      hora_de_fin_de_atencion_servidor_2: null,
      hora_de_fin_de_atencion_servidor_3: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
      hora_de_fin_de_atencion_servidor_2: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
      servidor_3: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
      hora_de_fin_de_atencion_servidor_2: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
      hora_de_fin_de_atencion_servidor_2: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
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
      servidor_periodico: {
        estado: "libre",
        inicio_ocupacion: null,
        tiempo_remanente: null,
      },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_periodico: null,
      hora_de_fin_de_atencion_servidor_2: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
      hora_de_fin_de_atencion_servidor_2: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      servidor_2: { estado: "libre", inicio_ocupacion: null },
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
      hora_de_fin_de_atencion_servidor_2: null,
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
      servidor_1: { estado: "libre", inicio_ocupacion: null },
      tiempos_de_ocupacion_acumulados: 0,
    },
    fin_de_atencion: {
      rnd: null,
      tiempo_de_atencion: null,
      hora_de_fin_de_atencion_servidor_1: null,
    },
    estadisticos: {
      clientes_atendidos: 0,
      porcentaje_de_ocupacion: 0,
      tiempo_promedio_de_espera: 0,
    },
  },
};

export const plantillaCabeceras = [
  { name: "Simulacion", colspan: 1, rowspan: 3, key: "simulacion" },
  { name: "Evento", colspan: 1, rowspan: 4, key: "evento" },
  { name: "Reloj", colspan: 1, rowspan: 3, key: "reloj" },
  {
    name: "Envio de Paquetes",
    colspan: 23, // Corrected: 3 (Llegada) + 4 (Cola) + 7 (Servidores) + 5 (Fin de Atencion) + 4 (Estadisticos) = 23
    rowspan: 1,
    key: "envio_de_paquetes",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        colspan: 4,
        rowspan: 1,
        key: "cola",
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
          {
            name: "Esperas Mayores a 15m",
            colspan: 1,
            rowspan: 1,
            key: "esperas_mayores_a_15m",
          },
        ],
      },
      {
        name: "Servidores",
        colspan: 7, // 2 (Servidor 1) + 2 (Servidor 2) + 2 (Servidor 3) + 1 (Tiempos de Ocupacion Acumulados) = 7
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              {
                name: "Estado",
                colspan: 1,
                rowspan: 1,
                key: "estado",
              },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 2,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              {
                name: "Estado",
                colspan: 1,
                rowspan: 1,
                key: "estado",
              },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 3",
            colspan: 2,
            rowspan: 1,
            key: "servidor_3",
            subheaders: [
              {
                name: "Estado",
                colspan: 1,
                rowspan: 1,
                key: "estado",
              },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 5, // Corrected: 1 (RND) + 1 (Tiempo de Atencion) + 3 (Servidores) = 5
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
          {
            name: "Fin de Atencion Servidor 3",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_3",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 4,
        rowspan: 1,
        key: "estadisticos",
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
          {
            name: "Probabilidad de Espera Mayor a 15m",
            colspan: 1,
            rowspan: 1,
            key: "probabilidad_de_espera_mayor_a_15m",
          },
        ],
      },
    ],
  },
  {
    name: "Reclamaciones y Devoluciones",
    colspan: 18, // Corrected: 3 (Llegada) + 3 (Cola) + 5 (Servidores) + 4 (Fin de Atencion) + 3 (Estadisticos) = 18
    rowspan: 1,
    key: "reclamaciones_y_devoluciones",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "cola",
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
        colspan: 5, // 2 (Servidor 1) + 2 (Servidor 2) + 1 (Tiempos de Ocupacion Acumulados) = 5
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 2,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 4, // Corrected: 1 (RND) + 1 (Tiempo de Atencion) + 2 (Servidores) = 4
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 21, // Corrected: 3 (Llegada) + 3 (Cola) + 7 (Servidores) + 5 (Fin de Atencion) + 3 (Estadisticos) = 21
    rowspan: 1,
    key: "venta_de_sellos_y_sobres",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "cola",
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
        colspan: 7, // 2 (Servidor 1) + 2 (Servidor 2) + 2 (Servidor 3) + 1 (Tiempos de Ocupacion Acumulados) = 7
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 2,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 3",
            colspan: 2,
            rowspan: 1,
            key: "servidor_3",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 5, // Corrected: 1 (RND) + 1 (Tiempo de Atencion) + 3 (Servidores) = 5
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
          {
            name: "Fin de Atencion Servidor 3",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_3",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 18, // Corrected: 3 (Llegada) + 3 (Cola) + 5 (Servidores) + 4 (Fin de Atencion) + 3 (Estadisticos) = 18
    rowspan: 1,
    key: "atencion_empresarial",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "cola",
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
        colspan: 5, // 2 (Servidor 1) + 2 (Servidor 2) + 1 (Tiempos de Ocupacion Acumulados) = 5
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 2,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 4, // Corrected: 1 (RND) + 1 (Tiempo de Atencion) + 2 (Servidores) = 4
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 15, // Corrected: 3 (Llegada) + 3 (Cola) + 3 (Servidores) + 3 (Fin de Atencion) + 3 (Estadisticos) = 15
    rowspan: 1,
    key: "postales_y_envios_especiales",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "cola",
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
        colspan: 3, // 2 (Servidor 1) + 1 (Tiempos de Ocupacion Acumulados) = 3
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 3, // 1 (RND) + 1 (Tiempo de Atencion) + 1 (Servidor) = 3
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 15, // Corrected: 3 (Llegada) + 3 (Cola) + 3 (Servidores) + 4 (Fin de Atencion) + 2 (Estadisticos) = 15
    rowspan: 1,
    key: "atencion_empresarial_con_ausencia",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "cola",
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
        colspan: 3, // 2 (Servidor Periodico: Estado, Tiempo Remanente) + 1 (Servidor 2: Estado) = 3
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor Periodico",
            colspan: 2,
            rowspan: 1,
            key: "servidor_periodico",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Tiempo Remanente de Atención",
                colspan: 1,
                rowspan: 1,
                key: "tiempo_remanente",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
            ],
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 4, // Corrected: 1 (RND) + 1 (Tiempo de Atencion) + 2 (Servidores) = 4
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor Periodico",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_periodico",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 2,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 16, // Corrected: 3 (Llegada) + 2 (Cola) + 5 (Servidores) + 4 (Fin de Atencion) + 2 (Estadisticos) = 16
    rowspan: 1,
    key: "venta_de_sellos_y_sobres_sin_1_empleado",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "cola",
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
        colspan: 5, // 2 (Servidor 1) + 2 (Servidor 2) + 1 (Tiempos de Ocupacion Acumulados) = 5
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 2,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 4, // Corrected: 1 (RND) + 1 (Tiempo de Atencion) + 2 (Servidores) = 4
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 2,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 23, // Corrected: 3 (Llegada) + 2 (Prioridad) + 3 (Cola Sin Prioridad) + 3 (Cola Con Prioridad) + 4 (Servidores) + 4 (Fin de Atencion) + 4 (Estadisticos) = 23
    rowspan: 1,
    key: "atencion_empresarial_con_prioridad",
    subheaders: [
      {
        name: "Llegada de Cliente",
        colspan: 3,
        rowspan: 1,
        key: "llegada_de_cliente",
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
        key: "prioridad",
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
        name: "Cola Sin Prioridad",
        colspan: 3,
        rowspan: 1,
        key: "cola_sin_prioridad",
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
        name: "Cola Con Prioridad",
        colspan: 3,
        rowspan: 1,
        key: "cola_con_prioridad",
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
        colspan: 4, // 2 (Servidor 1) + 2 (Servidor 2) = 4
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
          {
            name: "Servidor 2",
            colspan: 2,
            rowspan: 1,
            key: "servidor_2",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
        ],
      },
      {
        name: "Fin de Atencion",
        colspan: 4, // 1 (RND) + 1 (Tiempo de Atencion) + 2 (Servidores) = 4
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
          {
            name: "Fin de Atencion Servidor 2",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_2",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 4,
        rowspan: 1,
        key: "estadisticos",
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
    colspan: 15, // Corrected: 2 (Solicitud del Servicio) + 3 (Cola) + 3 (Servidores) + 3 (Fin de Atencion) + 3 (Estadisticos) = 14
    rowspan: 1,
    key: "post_envio_de_paquetes",
    subheaders: [
      {
        name: "Solicitud del Servicio",
        colspan: 2,
        rowspan: 1,
        key: "solicitud_del_servicio",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Solicita",
            colspan: 1,
            rowspan: 1,
            key: "solicita",
          },
        ],
      },
      {
        name: "Cola",
        colspan: 3,
        rowspan: 1,
        key: "cola",
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
        colspan: 3, // 2 (Servidor 1) + 1 (Tiempos de Ocupacion Acumulados) = 3
        rowspan: 1,
        key: "servidores",
        subheaders: [
          {
            name: "Servidor 1",
            colspan: 2,
            rowspan: 1,
            key: "servidor_1",
            subheaders: [
              { name: "Estado", colspan: 1, rowspan: 1, key: "estado" },
              {
                name: "Inicio de Ocupación",
                colspan: 1,
                rowspan: 1,
                key: "inicio_ocupacion",
              },
            ],
          },
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
        colspan: 3, // 1 (RND) + 1 (Tiempo de Atencion) + 1 (Servidor) = 3
        rowspan: 1,
        key: "fin_de_atencion",
        subheaders: [
          { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
          {
            name: "Tiempo de Atencion",
            colspan: 1,
            rowspan: 1,
            key: "tiempo_de_atencion",
          },
          {
            name: "Fin de Atencion Servidor 1",
            colspan: 1,
            rowspan: 1,
            key: "hora_de_fin_de_atencion_servidor_1",
          },
        ],
      },
      {
        name: "Estadisticos",
        colspan: 3,
        rowspan: 1,
        key: "estadisticos",
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

const setNullsFila = (fila, horaActual) => {
  servicios.forEach((servicio) => {
    // Resetear llegada_de_cliente
    if (fila[servicio]?.llegada_de_cliente) {
      fila[servicio].llegada_de_cliente.rnd = null;
      fila[servicio].llegada_de_cliente.tiempo_entre_llegada = null;
      // Mantiene la hora de la proxima llegada si aún no ha ocurrido
      if (fila[servicio].llegada_de_cliente.hora_de_llegada <= horaActual) {
        fila[servicio].llegada_de_cliente.hora_de_llegada = null;
      }
    }

    // Resetear fin_de_atencion
    if (fila[servicio]?.fin_de_atencion) {
      fila[servicio].fin_de_atencion.rnd = null;
      fila[servicio].fin_de_atencion.tiempo_de_atencion = null;
      // Mantiene la hora del proximo fin de atención si aún no ha ocurrido
      for (const key in fila[servicio].fin_de_atencion) {
        if (key.startsWith("hora_de_fin_de_atencion_servidor_")) {
          if (fila[servicio].fin_de_atencion[key] <= horaActual) {
            fila[servicio].fin_de_atencion[key] = null;
          }
        }
      }
    }
  });

  // Resetear prioridad
  if (fila.atencion_empresarial_con_prioridad?.prioridad) {
    fila.atencion_empresarial_con_prioridad.prioridad.rnd = null;
    fila.atencion_empresarial_con_prioridad.prioridad.tipo_prioridad = null;
  }

  // Resetear solicitud de servicio
  if (fila.post_envio_de_paquetes?.solicitud_del_servicio) {
    fila.post_envio_de_paquetes.solicitud_del_servicio.rnd = null;
    fila.post_envio_de_paquetes.solicitud_del_servicio.solicita = null;
  }

  return fila;
};

const ajustarServidores = (config) => {
  const cant_servidores_envio_de_paquetes =
    config.tasas["post_envio_de_paquetes"].cantidad_de_servidores || 1;

  // Inicializar correctamente el objeto servidores
  plantillaFila["post_envio_de_paquetes"].servidores = {
    tiempos_de_ocupacion_acumulados: 0,
  };

  // Inicializar correctamente el objeto fin_de_atencion
  plantillaFila["post_envio_de_paquetes"].fin_de_atencion = {
    rnd: null,
    tiempo_de_atencion: null,
  };

  // Agregar servidores dinámicamente y sus respectivos fines de atención
  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    plantillaFila["post_envio_de_paquetes"].servidores[`servidor_${i}`] = {
      estado: "libre",
      inicio_ocupacion: null,
    };
    plantillaFila["post_envio_de_paquetes"].fin_de_atencion[
      `hora_de_fin_de_atencion_servidor_${i}`
    ] = null;
  }

  // Actualizar cabeceras
  const postEnvioDePaquetesHeader = plantillaCabeceras.find(
    (header) => header.key === "post_envio_de_paquetes"
  );

  const servidoresSubheader = postEnvioDePaquetesHeader.subheaders.find(
    (sub) => sub.key === "servidores"
  );

  const finDeAtencionSubheader = postEnvioDePaquetesHeader.subheaders.find(
    (sub) => sub.key === "fin_de_atencion"
  );

  // Limpiar y reconstruir subheaders para servidores
  servidoresSubheader.subheaders = [];
  let servidoresColspan = 0;

  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    servidoresSubheader.subheaders.push({
      name: `Servidor ${i}`,
      colspan: 2,
      rowspan: 1,
      key: `servidor_${i}`,
      subheaders: [
        {
          name: "Estado",
          colspan: 1,
          rowspan: 1,
          key: "estado",
        },
        {
          name: "Inicio de Ocupación",
          colspan: 1,
          rowspan: 1,
          key: "inicio_ocupacion",
        },
      ],
    });
    servidoresColspan += 2;
  }
  servidoresSubheader.subheaders.push({
    name: "Tiempos de Ocupacion Acumulados",
    colspan: 1,
    rowspan: 1,
    key: "tiempos_de_ocupacion_acumulados",
  });
  servidoresColspan += 1;
  servidoresSubheader.colspan = servidoresColspan;

  // Limpiar y reconstruir subheaders para fin_de_atencion
  finDeAtencionSubheader.subheaders = [
    { name: "RND", colspan: 1, rowspan: 1, key: "rnd" },
    {
      name: "Tiempo de Atencion",
      colspan: 1,
      rowspan: 1,
      key: "tiempo_de_atencion",
    },
  ];
  let finDeAtencionColspan = 2; // for RND and Tiempo de Atencion

  for (let i = 1; i <= cant_servidores_envio_de_paquetes; i++) {
    finDeAtencionSubheader.subheaders.push({
      name: `Hora de Fin de Atencion Servidor ${i}`,
      colspan: 1,
      rowspan: 1,
      key: `hora_de_fin_de_atencion_servidor_${i}`,
    });
    finDeAtencionColspan += 1;
  }
  finDeAtencionSubheader.colspan = finDeAtencionColspan;

  // Actualizar el colspan del encabezado principal de "post_envio_de_paquetes"
  const llegadaDeClienteColspan = 3;
  const colaColspan = 4;
  const estadisticosColspan = 4;

  postEnvioDePaquetesHeader.colspan =
    llegadaDeClienteColspan +
    colaColspan +
    servidoresColspan +
    finDeAtencionColspan +
    estadisticosColspan;
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
  filaPrevia
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

    /// registrar proxima llegada
    eventos.push({
      nombre: `llegada_cliente_${abreviaciones[evento.servicio]}_${
        clientes_registrados[evento.servicio]
      }`,
      cliente_id: clientes_registrados[evento.servicio],
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
      hora_de_ingreso: fila.reloj,
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
    fila[evento.servicio].servidores[servidor].estado = "ocupado";
    fila[evento.servicio].servidores[servidor].inicio_ocupacion = fila.reloj;

    /// generar el fin de atencion
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );

    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion[
      `hora_de_fin_de_atencion_${servidor}`
    ] = fila.reloj + finAtencion.value;

    /// registrar fin de atención del cliente que llegó actualmente
    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        evento.cliente_id
      }`,
      cliente_id: evento.cliente_id,
      servicio: evento.servicio,
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      tiempo_de_atencion: finAtencion.value,
      servidor, /// para saber que servidor se debe liberar
    });

    /// determinar si el servidor venía de estar libre
    const estabaLibre =
      filaPrevia[evento.servicio].servidores[servidor].estado === "libre";

    /// actualizo el inicio de ocupación con la hora en que se ocupa nuevamente
    if (estabaLibre) {
      fila[evento.servicio].servidores[servidor].inicio_ocupacion = fila.reloj;
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
  clientes_registrados[evento.servicio] += 1;

  // Generar próxima llegada
  const llegada = generadorExponencial(
    config.tasas[evento.servicio].tasa_de_llegada
  );
  fila[evento.servicio].llegada_de_cliente.rnd = llegada.rnd;
  fila[evento.servicio].llegada_de_cliente.tiempo_entre_llegada = llegada.value;
  fila[evento.servicio].llegada_de_cliente.hora_de_llegada =
    fila.reloj + llegada.value;

  // Generar prioridad del cliente
  const rndPrioridad = Math.random();
  const prioridad = rndPrioridad < 0.2 ? "alta" : "normal";

  // Actualizar valores de prioridad
  fila[evento.servicio].prioridad.rnd = rndPrioridad;
  fila[evento.servicio].prioridad.tipo_prioridad = prioridad;

  // Registrar próxima llegada
  eventos.push({
    nombre: `llegada_cliente_${abreviaciones[evento.servicio]}_${
      clientes_registrados[evento.servicio]
    }_${prioridad === "alta" ? "cp" : "sp"}`,
    cliente_id: clientes_registrados[evento.servicio],
    servicio: evento.servicio,
    tipo: "llegada_de_cliente",
    hora: fila.reloj + llegada.value,
    prioridad,
  });

  const cola =
    evento.prioridad === "alta" ? "cola_con_prioridad" : "cola_sin_prioridad";

  // Verificar servidores libres
  const servidoresLibres = encontrarServidoresLibres(evento.servicio, fila);

  if (servidoresLibres.length === 0) {
    // Agregar a la cola correspondiente
    colas[evento.servicio][cola].push({
      cliente_id: evento.cliente_id,
      hora_de_ingreso: fila.reloj,
    });

    // Actualizar longitud de la cola
    fila[evento.servicio][cola].clientes_en_cola += 1;

    // Actualizar longitud máxima
    if (
      fila[evento.servicio][cola].clientes_en_cola >
      fila[evento.servicio][cola].longitud_maxima
    ) {
      fila[evento.servicio][cola].longitud_maxima =
        fila[evento.servicio][cola].clientes_en_cola;
    }
  } else {
    // Ocupar servidor
    const servidor = servidoresLibres[0];
    fila[evento.servicio].servidores[servidor].estado = "ocupado";

    // Generar fin de atención
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );

    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion[
      `hora_de_fin_de_atencion_${servidor}`
    ] = fila.reloj + finAtencion.value;

    // Registrar fin de atención
    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        evento.cliente_id
      }_${evento.prioridad === "alta" ? "cp" : "sp"}`,
      cliente_id: evento.cliente_id,
      servicio: "atencion_empresarial_con_prioridad",
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      tiempo_de_atencion: finAtencion.value,
      servidor,
      cola,
      espera_en_cola: 0,
    });

    // Actualizar contadores según el tipo de cola
    if (cola === "cola_con_prioridad") {
      fila[evento.servicio].estadisticos.clientes_atendidos_cp += 1;
    } else {
      fila[evento.servicio].estadisticos.clientes_atendidos_sp += 1;
    }

    // Calcular promedios
    const clientesAtendidos =
      cola === "cola_con_prioridad"
        ? fila[evento.servicio].estadisticos.clientes_atendidos_cp
        : fila[evento.servicio].estadisticos.clientes_atendidos_sp;

    if (clientesAtendidos > 0) {
      const tiempoEsperaAcum =
        fila[evento.servicio][cola].tiempos_de_espera_acumulados;
      const promDeEspera = tiempoEsperaAcum / clientesAtendidos;

      if (cola === "cola_con_prioridad") {
        fila[evento.servicio].estadisticos.tiempo_promedio_de_espera_ccp =
          promDeEspera;
      } else {
        fila[evento.servicio].estadisticos.tiempo_promedio_de_espera_csp =
          promDeEspera;
      }
    }
  }
};

const procesarFinAtencionGenerica = (
  fila,
  evento,
  colas,
  config,
  eventos,
  filaPrevia
) => {
  fila[evento.servicio].estadisticos.clientes_atendidos += 1;

  let clienteMasAntiguoEnCola = null;

  clienteMasAntiguoEnCola =
    colas[evento.servicio].length !== 0
      ? encontrarClienteMasAntiguo(colas[evento.servicio], fila.reloj)
      : null;

  /// el tiempo que estubo en cola el proximo cliente a atender
  let tiempoEspera = 0;

  /// comprovar si hay clientes en la cola (si debe ausentarse el servidor se omite)
  if (clienteMasAntiguoEnCola) {
    /// el servidor se mantiene ocupado
    fila[evento.servicio].servidores[evento.servidor].estado = "ocupado";

    /// actualizo la logitud de la cola
    fila[evento.servicio].cola.clientes_en_cola -= 1;

    /// calculo el tiempo de permanencia en cola
    tiempoEspera = evento.hora - clienteMasAntiguoEnCola.hora_de_ingreso;

    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );
    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion[
      `hora_de_fin_de_atencion_${evento.servidor}`
    ] = fila.reloj + finAtencion.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        clienteMasAntiguoEnCola.cliente_id
      }`,
      cliente_id: clienteMasAntiguoEnCola.cliente_id,
      servicio: evento.servicio,
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      tiempo_de_atencion: finAtencion.value,
      servidor: evento.servidor, /// para saber que servidor se debe liberar (es el mismo servidor del evento fin de atención, permanece ocupado)
    });
  } else {
    /// liberar el servidor
    fila[evento.servicio].servidores[evento.servidor].estado = "libre";
    fila[evento.servicio].servidores[evento.servidor].inicio_ocupacion = null;

    /// verificar si se debe calcular el porcentaje de ocupacion (se recalcula únicamente cuando el servidor se libera)
    if ("porcentaje_de_ocupacion" in fila[evento.servicio].estadisticos) {
      /// actualizar los tiempos de ocupación acumulados
      let tiempoAcum =
        filaPrevia[evento.servicio].servidores.tiempos_de_ocupacion_acumulados;

      let tiempoServidor =
        fila.reloj -
        filaPrevia[evento.servicio].servidores[evento.servidor]
          .inicio_ocupacion;

      tiempoAcum += tiempoServidor;

      fila[evento.servicio].servidores.tiempos_de_ocupacion_acumulados =
        tiempoAcum;

      // Calcular porcentaje de ocupación
      const tiempoTotal = fila.reloj > 0 ? fila.reloj : 1;
      const cantServidores =
        config.tasas[evento.servicio].cantidad_de_servidores;
      const porcDeOcupacion =
        (fila[evento.servicio].servidores.tiempos_de_ocupacion_acumulados /
          (cantServidores * tiempoTotal)) *
        100;
      fila[evento.servicio].estadisticos.porcentaje_de_ocupacion =
        porcDeOcupacion;
    }
  }
  /// verificar si se debe calcular los tiempos promedios de espera
  if ("tiempo_promedio_de_espera" in fila[evento.servicio].estadisticos) {
    /// actualizo los tiempos acumulados en cola
    fila[evento.servicio].cola.tiempos_de_espera_acumulados += tiempoEspera;

    const tiempoEsperaAcum =
      fila[evento.servicio].cola.tiempos_de_espera_acumulados;
    const clientesAtendidos =
      fila[evento.servicio].estadisticos.clientes_atendidos;

    // Evitar división por cero
    const promDeEspera =
      clientesAtendidos > 0 ? tiempoEsperaAcum / clientesAtendidos : 0;

    fila[evento.servicio].estadisticos.tiempo_promedio_de_espera = promDeEspera;
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

    if (fila[evento.servicio].estadisticos.clientes_atendidos > 0) {
      const prob =
        fila[evento.servicio].cola.esperas_mayores_a_15m /
        fila[evento.servicio].estadisticos.clientes_atendidos;
      fila[evento.servicio].estadisticos.probabilidad_de_espera_mayor_a_15m =
        prob;
    } else {
      fila[evento.servicio].estadisticos.probabilidad_de_espera_mayor_a_15m = 0;
    }
  }
};

const procesarFinAtencionConPrioridad = (
  fila,
  evento,
  colas,
  config,
  eventos
) => {
  // Determinar qué cola tiene clientes (priorizando la cola con prioridad)
  let colaActual = "cola_con_prioridad";
  if (colas[evento.servicio][colaActual].length === 0) {
    colaActual = "cola_sin_prioridad";
  }

  const clienteMasAntiguoEnCola =
    colas[evento.servicio][colaActual].length > 0
      ? encontrarClienteMasAntiguo(
          colas[evento.servicio][colaActual],
          fila.reloj
        )
      : null;

  if (clienteMasAntiguoEnCola) {
    // Actualizar longitud de la cola (asegurándose de no ir a negativo)
    fila[evento.servicio][colaActual].clientes_en_cola = Math.max(
      0,
      fila[evento.servicio][colaActual].clientes_en_cola - 1
    );

    // Actualizar contadores según el tipo de cola
    if (colaActual === "cola_con_prioridad") {
      fila[evento.servicio].estadisticos.clientes_atendidos_cp += 1;
    } else {
      fila[evento.servicio].estadisticos.clientes_atendidos_sp += 1;
    }

    // Calcular tiempo de espera
    const tiempoEspera = evento.hora - clienteMasAntiguoEnCola.hora_de_ingreso;

    // Actualizar tiempos acumulados
    fila[evento.servicio][colaActual].tiempos_de_espera_acumulados +=
      tiempoEspera;

    // Calcular promedios
    const clientesAtendidos =
      colaActual === "cola_con_prioridad"
        ? fila[evento.servicio].estadisticos.clientes_atendidos_cp
        : fila[evento.servicio].estadisticos.clientes_atendidos_sp;

    if (clientesAtendidos > 0) {
      const tiempoEsperaAcum =
        fila[evento.servicio][colaActual].tiempos_de_espera_acumulados;
      const promDeEspera = tiempoEsperaAcum / clientesAtendidos;

      if (colaActual === "cola_con_prioridad") {
        fila[evento.servicio].estadisticos.tiempo_promedio_de_espera_ccp =
          promDeEspera;
      } else {
        fila[evento.servicio].estadisticos.tiempo_promedio_de_espera_csp =
          promDeEspera;
      }
    }

    // Generar nuevo fin de atención
    const finAtencion = generadorExponencial(
      config.tasas[evento.servicio].tasa_de_atencion
    );

    fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
    fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
      finAtencion.value;
    fila[evento.servicio].fin_de_atencion[
      `hora_de_fin_de_atencion_${evento.servidor}`
    ] = fila.reloj + finAtencion.value;

    eventos.push({
      nombre: `fin_atencion_${abreviaciones[evento.servicio]}_${
        clienteMasAntiguoEnCola.cliente_id
      }_${colaActual === "cola_con_prioridad" ? "cp" : "sp"}`,
      cliente_id: clienteMasAntiguoEnCola.cliente_id,
      servicio: "atencion_empresarial_con_prioridad",
      tipo: "fin_de_atencion",
      hora: fila.reloj + finAtencion.value,
      tiempo_de_atencion: finAtencion.value,
      servidor: evento.servidor,
      cola: colaActual,
      espera_en_cola: tiempoEspera,
    });
  } else {
    // Liberar el servidor si no hay clientes en ninguna cola
    fila[evento.servicio].servidores[evento.servidor].estado = "libre";
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
    hora: reloj + 12 / 60, /// hora actual + 12 min
  });
};

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
      clientes_registrados[servicio] += 1;
      const abreviacion = abreviaciones[servicio] || servicio; // Usa abreviación o el nombre completo si no existe

      /// se determina su prioridad al generar la llegada
      if (servicio === "atencion_empresarial_con_prioridad") {
        // Generar prioridad del cliente
        const rndPrioridad = Math.random();
        const prioridad = rndPrioridad < 0.2 ? "alta" : "normal";

        // Actualizar valores de prioridad
        fila[servicio].prioridad.rnd = rndPrioridad;
        fila[servicio].prioridad.tipo_prioridad = prioridad;

        // Registrar próxima llegada
        eventos.push({
          nombre: `llegada_cliente_${abreviacion}_${
            clientes_registrados[servicio]
          }_${prioridad === "alta" ? "cp" : "sp"}`,
          cliente_id: clientes_registrados[servicio],
          servicio,
          tipo: "llegada_de_cliente",
          hora: fila.reloj + llegada.value,
          prioridad,
        });
      } else {
        eventos.push({
          nombre: `llegada_cliente_${abreviacion}_${clientes_registrados[servicio]}`,
          cliente_id: clientes_registrados[servicio],
          servicio: servicio,
          tipo: "llegada_de_cliente",
          hora: llegada.value,
        });
      }
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
  suspendido = false,
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
    const cumpleSuspendido = suspendido
      ? eventoActual?.suspendido === true
      : eventoActual?.suspendido === undefined ||
        eventoActual?.suspendido === false;
    const cumpleServidor =
      servidor === null || eventoActual?.servidor === servidor;

    if (cumpleServicio && cumpleServidor && cumpleSuspendido) {
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

const encontrarClienteMasAntiguo = (cola, reloj) => {
  cola.sort((a, b) => a.hora_de_ingreso - b.hora_de_ingreso);

  if (cola.length > 0) {
    const clienteMasAntiguo = cola.find(
      (cliente) => cliente.hora_de_ingreso <= reloj
    );

    cola.splice(0, 1);

    return clienteMasAntiguo;
  } else {
    return null;
  }
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

  let filaPrevia = null;
  let ultimaFila = null;
  let filaInicio = config.simulacion.fila_desde - 1;
  let filaFin =
    config.simulacion.fila_desde + config.simulacion.filas_a_mostrar - 1;

  for (let i = 0; i < config.simulacion.cantidad_de_filas; i++) {
    const esIncio = i === 0;
    const esFin = i === config.simulacion.cantidad_de_filas - 1;

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
      fila = setNullsFila(fila, evento.hora);

      fila.simulacion = i;
      fila.evento = evento.nombre;
      fila.reloj = evento.hora;

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
            filaPrevia
          );
        }
      } else if (evento?.tipo === "fin_de_atencion") {
        if (evento.servicio === "atencion_empresarial_con_prioridad") {
          procesarFinAtencionConPrioridad(fila, evento, colas, config, eventos);
        } else {
          procesarFinAtencionGenerica(
            fila,
            evento,
            colas,
            config,
            eventos,
            filaPrevia
          );

          if (evento.servicio === "envio_de_paquetes") {
            const rndSolicitud = Math.random();
            const solicita = rndSolicitud < 0.5 ? "SI" : "NO";

            /// actualizar los datos de solicitud de servicio post envio de paquetes
            fila.post_envio_de_paquetes.solicitud_del_servicio.rnd =
              rndSolicitud;
            fila.post_envio_de_paquetes.solicitud_del_servicio.solicita =
              solicita;

            if (solicita === "SI") {
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
                filaPrevia
              );
            }
          }
        }
      } else if (evento.tipo === "ausencia_servidor") {
        // Verificar estado actual del servidor
        const estadoServidor =
          fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico
            .estado;

        if (estadoServidor === "ocupado") {
          // Si está ocupado, programar ausencia cuando termine la atención actual
          const eventoFinAtencion = encontrarProxEvento(
            eventos,
            "atencion_empresarial_con_ausencia",
            "servidor_periodico"
          ); /// retorna y remueve el evento

          /// modifico el evento para detectar si se encuentra suspendido
          if (eventoFinAtencion) {
            const eventoModificado = {
              ...eventoFinAtencion,
              suspendido: true,
            };
            eventos.push(eventoModificado);
          }
          // registro el tiempo remanente de atención
          const tiempoRemanente = eventoFinAtencion.hora - fila.reloj;
          fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico.tiempo_remanente =
            tiempoRemanente;
        }
        // Marcarlo como ausente inmediatamente
        fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico.estado =
          "ausente";
        // Programar regreso después de 12 minutos
        registrarEventoRegreso(evento.hora, eventos);
      } else if (evento.tipo === "regreso_servidor") {
        // Restaurar servidor a estado libre por defecto
        fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico.estado =
          "libre";

        // Programar próxima ausencia en 1 hora
        registrarEventoAusencia(evento.hora, eventos);
        // Borro el tiempo remanente de atención
        fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico.tiempo_remanente =
          null;

        // Buscar si hay un evento suspendido para reprogramar
        const eventoSuspendido = encontrarProxEvento(
          eventos,
          "atencion_empresarial_con_ausencia",
          "servidor_periodico",
          true
        );

        let proximoCliente = null;

        /// si hay un evento suspendido, lo reprogramo
        if (eventoSuspendido) {
          // Reprogramar el evento suspendido con la hora actual
          eventoSuspendido.hora =
            fila.reloj +
            fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico
              .tiempo_remanente;

          eventoSuspendido.suspendido = false; // Marcar como no suspendido

          proximoCliente = eventoSuspendido;
        } else if (colas.atencion_empresarial_con_ausencia.length > 0) {
          const clienteMasAntiguoEnCola = encontrarClienteMasAntiguo(
            colas[evento.servicio],
            fila.reloj
          );

          /// pasa al etado ocupado en el cado de haber clientes en la cola
          fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico.estado =
            "ocupado";
          const tiempoEspera =
            evento.hora - clienteMasAntiguoEnCola.hora_de_ingreso;

          /// acutalizo los valores de la cola en la fila
          fila.atencion_empresarial_con_ausencia.cola.tiempos_de_espera_acumulados +=
            tiempoEspera;
          fila.atencion_empresarial_con_ausencia.cola.clientes_en_cola -= 1;

          proximoCliente = clienteMasAntiguoEnCola;
        }
        if (proximoCliente) {
          fila.atencion_empresarial_con_ausencia.estadisticos.clientes_atendidos += 1;
          fila.atencion_empresarial_con_ausencia.servidores.servidor_periodico.estado =
            "ocupado";

          /// genero el fin de atencion
          const finAtencion = generadorExponencial(
            config.tasas.atencion_empresarial_con_ausencia.tasa_de_atencion
          );

          /// actualizo los valores de fin de atención en la fila
          fila[evento.servicio].fin_de_atencion.rnd = finAtencion.rnd;
          fila[evento.servicio].fin_de_atencion.tiempo_de_atencion =
            finAtencion.value;
          fila[evento.servicio].fin_de_atencion[
            `hora_de_fin_de_atencion_servidor_periodico`
          ] = fila.reloj + finAtencion.value;

          /// registro el evento fin de atención
          eventos.push({
            nombre: `fin_atencion_${abreviaciones.atencion_empresarial_con_ausencia}_${proximoCliente.cliente_id}`,
            cliente_id: proximoCliente.cliente_id,
            servicio: "atencion_empresarial_con_ausencia",
            tipo: "fin_de_atencion",
            hora: evento.hora + finAtencion.value,
            tiempo_de_atencion: finAtencion.value,
            servidor: "servidor_periodico",
          });
        }
      }

      if (esFin) {
        /// hacer un barrido final, iterar sobre los servidores de todos los servicio, si estan ocupados, setear su tiempo de ocupacion acumulado y calcular su porcentaje de ocupacion
        // En el bloque esFin
        servicios.forEach((servicio) => {
          if ("tiempos_de_ocupacion_acumulados" in fila[servicio].servidores) {
            let tiempoAcum =
              filaPrevia[servicio].servidores.tiempos_de_ocupacion_acumulados;

            // Sumar tiempo de servidores que aún están ocupados
            Object.entries(filaPrevia[servicio].servidores).forEach(
              ([clave, valor]) => {
                if (clave.includes("servidor") && valor.estado === "ocupado") {
                  tiempoAcum += fila.reloj - valor.inicio_ocupacion;
                }
              }
            );

            fila[servicio].servidores.tiempos_de_ocupacion_acumulados =
              tiempoAcum;

            const tiempoTotal = fila.reloj > 0 ? fila.reloj : 1;
            const cantServidores =
              config.tasas[servicio].cantidad_de_servidores;
            const porcDeOcupacion =
              (tiempoAcum / (cantServidores * tiempoTotal)) * 100;
            fila[servicio].estadisticos.porcentaje_de_ocupacion =
              porcDeOcupacion;
          }
        });

        ultimaFila = fila;
      }

      filaPrevia = fila;

      /// Agregar fila al vector de estados solo si esta entre el rango a mostrar
      /// si la fila es la última, siempre se agrega
      if ((i >= filaInicio && i <= filaFin) || esFin) {
        filas.push(fila);
      }
    }
  }

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
        ((ultimaFila.atencion_empresarial_con_ausencia.estadisticos
          .tiempo_promedio_de_espera -
          ultimaFila.atencion_empresarial.estadisticos
            .tiempo_promedio_de_espera) /
          ultimaFila.atencion_empresarial.estadisticos
            .tiempo_promedio_de_espera) *
        100,
    },
    punto_3: {
      venta_de_sellos_y_sobres_sin_1_empleado:
        ultimaFila.venta_de_sellos_y_sobres_sin_1_empleado.estadisticos
          .porcentaje_de_ocupacion,
      venta_de_sellos_y_sobres:
        ultimaFila.venta_de_sellos_y_sobres.estadisticos
          .porcentaje_de_ocupacion,
      incremento:
        ((ultimaFila.venta_de_sellos_y_sobres_sin_1_empleado.estadisticos
          .porcentaje_de_ocupacion -
          ultimaFila.venta_de_sellos_y_sobres.estadisticos
            .porcentaje_de_ocupacion) /
          ultimaFila.venta_de_sellos_y_sobres.estadisticos
            .porcentaje_de_ocupacion) *
        100,
    },
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
    filas,
    rtas,
  };
};

const encontrarServidoresLibres = (nombreServicio, fila) => {
  const servidoresLibres = [];

  Object.entries(fila[nombreServicio].servidores).forEach(([clave, valor]) => {
    /// valida que sea la columna servidor_n y no el acumulador de los tiempos de ocupación
    if (clave.includes("servidor") && valor.estado === "libre")
      servidoresLibres.push(clave);
  });

  return servidoresLibres;
};
