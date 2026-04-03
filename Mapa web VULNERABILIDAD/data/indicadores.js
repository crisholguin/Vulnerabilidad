var indicadores_ref = [
  {
    "cod_grupo": "101",
    "grupo_nom": "Acceso a servicios de educación y salud",
    "desc_grupo": "Mide la proximidad física de los hogares a la infraestructura básica de bienestar, identificando áreas con déficit de cobertura institucional.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Menor cobertura de servicios (más de 5 cuadras)", "desc": "Reside a más de cinco cuadras de los servicios de salud y educación." },
      "0": { "label": "Mayor cobertura de servicios (5 cuadras o menos)", "desc": "Reside a menos de cinco cuadras de los servicios de salud y educación."}
    }
  },
  {
    "cod_grupo": "102",
    "grupo_nom": "Cercania a vías de acceso principales",
    "desc_grupo": "Evalúa la conectividad urbana del hogar respecto a las arterias principales de transporte y movilidad de la localidad.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Lejos de las vías de acceso (más de 5 cuadras)", "desc": "Reside a más de cinco cuadras de las vías de acceso." },
      "0": { "label": "Cerca de las vías de acceso (5 cuadras o menos)", "desc": "Reside a cinco cuadras o menos de las vías de acceso." }
    }
  },
  {
    "cod_grupo": "103",
    "grupo_nom": "Exposición a factores de riesgo ambiental",
    "desc_grupo": "Identifica la presencia de elementos externos nocivos o peligrosos en el entorno inmediato de la vivienda que pueden afectar la salud.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Zonas con alto riesgo ambiental", "desc": "Está expuesto a factores de riesgo ambiental." },
      "0": { "label": "Zonas con bajo riesgo ambiental", "desc": "No está expuesto a factores de riesgo ambiental." }
    }
  },
  {
    "cod_grupo": "104",
    "grupo_nom": "Indicador NBI Hacinamiento",
    "desc_grupo": "Indicador de Necesidades Básicas Insatisfechas que evalúa la relación entre la cantidad de habitantes y el espacio físico disponible en el hogar.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Con Hacinamiento", "desc": "Reside en un hogar con más de tres personas por cuarto." },
      "0": { "label": "Sin Hacinamiento", "desc": "Reside en un hogar con tres personas o menos por cuarto." }
    }
  },
  {
    "cod_grupo": "105",
    "grupo_nom": "Servicios e infraestructura pública eficiente",
    "desc_grupo": "Refleja la calidad y el estado de funcionamiento de los servicios básicos e infraestructura urbana provistos por el Estado.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Servicios públicos ineficientes", "desc": "Los servicios públicos no están funcionando de manera eficiente." },
      "0": { "label": "Servicios públicos eficientes", "desc": "Los servicios públicos están funcionando de manera eficiente." }
    }
  },
  {
    "cod_grupo": "106",
    "grupo_nom": "Tipo de trabajo",
    "desc_grupo": "Clasifica la condición laboral principal de los jefes o miembros del hogar según la estabilidad y el registro legal del empleo.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Informal-precario", "desc": "Cuenta con un trabajo informal o precario." },
      "0": { "label": "Trabajo formal-estable", "desc": "Cuenta con un trabajo formal y estable." }
    }
  },
  {
    "cod_grupo": "201",
    "grupo_nom": "Calidad de los materiales",
    "desc_grupo": "Analiza la idoneidad constructiva de la vivienda, considerando su capacidad de protección frente al clima y su vida útil.",
    "tipo": "Categorizado",
    "variables": {
      "1": { "label": "Calidad 1", "desc": "La vivienda presenta materiales resistentes en todos los componentes e incorpora todos los elementos de aislación y terminación." },
      "2": { "label": "Calidad 2", "desc": "La vivienda presenta materiales resistentes en todos los componentes, pero le faltan elementos de aislación o terminación al menos en uno de sus componentes, aunque no en todos." },
      "3": { "label": "Calidad 3", "desc": "La vivienda presenta materiales resistentes en todos los componentes, pero le faltan elementos de aislación o terminación en todos sus componentes, presenta techos de chapa de metal o fibrocemento u otros sin cielorraso, o paredes de chapa de metal o fibrocemento." },
      "4": { "label": "Calidad 4", "desc": "a vivienda presenta materiales no resistentes al menos en uno de los componentes, pero no en todos" },      
      "9": { "label": "Sin datos", "desc": "No se dispone de información sobre la calidad de los materiales de la vivienda." }
    }
  },
  {
    "cod_grupo": "202",
    "grupo_nom": "Calidad de los servicios sanitarios",
    "desc_grupo": "Evalúa el acceso a condiciones higiénicas básicas, como agua potable y sistemas adecuados de eliminación de excretas.",
    "tipo": "Categorizado",
    "variables": {
      "3": { "label": "Insatisfactoria", "desc": "La vivienda no cuenta con acceso a agua potable, o no tiene acceso a red de cloacas ni a pozo ciego." },
      "2": { "label": "Básica", "desc": "La vivienda cuenta con acceso a agua potable y tiene acceso a red de cloacas o pozo ciego." },
      "1": { "label": "Satisfactoria", "desc": "La vivienda cuenta con acceso a agua potable y tiene acceso a red de cloacas o pozo ciego." },
      "9": { "label": "Sin datos", "desc": "No se dispone de información sobre la calidad de los servicios sanitarios." }
    }
  },
  {
    "cod_grupo": "203",
    "grupo_nom": "Condiciones de vulnerabilidad laboral",
    "desc_grupo": "Analiza la precariedad del empleo combinando factores de informalidad, inestabilidad y falta de derechos laborales.",
    "tipo": "Agrupacion",
    "variables": {
      "0": { "label": "Sin vulnerabilidad laboral" , "desc": "Trabajadores en condiciones de formalidad, estabilidad y plenitud de derechos.", "incluye_clases": [0]},
      "3": { "label": "Precariedad" , "desc": "Empleos con bajos salarios o condiciones de trabajo riesgosas.", "incluye_clases": [2]},
      "1": { "label": "Informalidad" , "desc": "Trabajadores sin registro legal ni aportes previsionales.", "incluye_clases": [1]},
      "2": { "label": "Inestabilidad", "desc": "Empleos temporales, por día o con alta rotación.", "incluye_clases": [3]},
      "4": { "label": "Informalidad y precariedad" , "desc": "Combinación de falta de registro y condiciones laborales deficientes.", "incluye_clases": [1, 2]},
      "5": { "label": "Informalidad, precariedad e inestabilidad", "desc": "Concurrencia de informalidad, precariedad e inestabilidad laboral.", "incluye_clases": [1, 2, 3]}
    }
  },
  {
    "cod_grupo": "204",
    "grupo_nom": "Indicadores conjuntos de vulnerabilidad/pobreza",
    "desc_grupo": "Estudio multidimensional de la pobreza que cruza la falta de ingresos (LP), carencias estructurales (NBI) y déficit alimentario.",
    "tipo": "Agrupacion",
    "variables": {
      "1": { "label": "Inseguridad alimentaria (IA)", "desc": "Hogares con dificultad para acceder a alimentos suficientes.", "incluye_clases": [1]},
      "2": { "label": "Línea de Pobreza (LP)", "desc": "Hogares sin ingresos suficientes para cubrir la canasta básica total.", "incluye_clases": [2] },
      "3": { "label": "Necesidades Básicas Insatisfechas (NBI)", "desc": "Hogares con al menos una necesidad básica insatisfecha.", "incluye_clases": [3] },
      "4": { "label": "IA y LP", "desc":"Concurrencia de inseguridad alimentaria y pobreza por ingresos.", "incluye_clases": [1, 2] },
      "5": { "label": "LP y NBI", "desc":"Pobreza por ingresos combinada con deficiencias estructurales (NBI).", "incluye_clases": [2, 3] },
      "6": { "label": "IA y NBI", "desc":"Inseguridad alimentaria sumada a pobreza estructural (NBI).", "incluye_clases": [1, 3] },
      "7": { "label": "IA, LP y NBI", "desc":"Vulnerabilidad total: Hogares que entrentan las tres condiciones de vulnerabilidad.", "incluye_clases": [1, 2, 3] }
    }
  },
  // {
  //   "cod_grupo": "205",
  //   "grupo_nom": "Indice de Riesgo Infantil",
  //   "tipo": "Categorizado",
  //   "variables": {
  //     "0": { "label": "0" },
  //     "1": { "label": "1" },
  //     "2": { "label": "2" },
  //     "3": { "label": "3" },
  //     "4": { "label": "4" },
  //     "5": { "label": "5" },
  //     "6": { "label": "6" }
  //   }
  // },
  {
    "cod_grupo": "206",
    "grupo_nom": "Indice de Riesgo Infantil (categorizado)",
    "desc_grupo": "Escala que mide la exposición de la infancia a múltiples factores de vulnerabilidad social, económica y habitacional.",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Sin Riesgo", "desc": "No presenta factores de riesgo infantil." },
      "1": { "label": "Bajo", "desc": "Presenta valores de riesgo infantil entre 1 y 2." },
      "2": { "label": "Moderado", "desc": "Presenta valores de riesgo infantil entre 3 y 4." },
      "3": { "label": "Alto", "desc": "Presenta valores de riesgo infantil iguales o superiores a 5." }
    }
  },
  {
    "cod_grupo": "301",
    "grupo_nom": "Tasa de dependencia adultos mayores",
    "desc_grupo": "Indica la carga económica que representan los adultos mayores (dependientes) sobre la población en edad productiva.",
    "tipo": "Tasa",
    "variables": {
      "0": { "label": "0,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "1": { "label": "14,29", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "2": { "label": "25,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "3": { "label": "33,33", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "4": { "label": "50,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "5": { "label": "66,67", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "6": { "label": "100,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
      "7": { "label": "200,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." }
    }
  },
  {
    "cod_grupo": "302",
    "grupo_nom": "Tasa de dependencia infantil",
    "desc_grupo": "Relación numérica que expresa la demanda de cuidado y sustento de la población menor de 15 años respecto a la población activa.",
    "tipo": "Tasa",
    "variables": {
      "0": { "label": "0,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "1": { "label": "14,29", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "2": { "label": "16,67", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "3": { "label": "20,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "4": { "label": "25,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "5": { "label": "33,33", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "6": { "label": "40,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "7": { "label": "42,86", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "8": { "label": "50,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "9": { "label": "60,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "10": { "label": "66,67", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "11": { "label": "71,43", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "12": { "label": "80,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "13": {"label": "100,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "14": {"label": "150,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "15": {"label": "200,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "16": {"label": "300,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "17": {"label": "400,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "18": {"label": "500,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." }
    }
  }
]