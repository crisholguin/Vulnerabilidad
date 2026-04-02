var indicadores_ref = [
  {
    "cod_grupo": "101",
    "grupo_nom": "Acceso a servicios de educación y salud",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Menor cobertura de servicios (más de 5 cuadras)", "desc": "Reside a más de cinco cuadras de los servicios de salud y educación." },
      "0": { "label": "Mayor cobertura de servicios (5 cuadras o menos)", "desc": "Reside a menos de cinco cuadras de los servicios de salud y educación."}
    }
  },
  {
    "cod_grupo": "102",
    "grupo_nom": "Cercania a vías de acceso (ruta, avenida, cruce de calles)",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Lejos de las vías de acceso (más de 5 cuadras)", "desc": "Reside a más de cinco cuadras de las vías de acceso." },
      "0": { "label": "Cerca de las vías de acceso (5 cuadras o menos)", "desc": "Reside a cinco cuadras o menos de las vías de acceso." }
    }
  },
  {
    "cod_grupo": "103",
    "grupo_nom": "Exposición a factores de riesgo ambiental",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Zonas con alto riesgo ambiental", "desc": "Está expuesto a factores de riesgo ambiental." },
      "0": { "label": "Zonas con bajo riesgo ambiental", "desc": "No está expuesto a factores de riesgo ambiental." }
    }
  },
  {
    "cod_grupo": "104",
    "grupo_nom": "Indicador NBI Hacinamiento",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Con Hacinamiento", "desc": "Reside en un hogar con más de tres personas por cuarto." },
      "0": { "label": "Sin Hacinamiento", "desc": "Reside en un hogar con tres personas o menos por cuarto." }
    }
  },
  {
    "cod_grupo": "105",
    "grupo_nom": "Servicios e infraestructura pública eficiente",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Servicios públicos ineficientes", "desc": "Los servicios públicos no están funcionando de manera eficiente." },
      "0": { "label": "Servicios públicos eficientes", "desc": "Los servicios públicos están funcionando de manera eficiente." }
    }
  },
  {
    "cod_grupo": "106",
    "grupo_nom": "Tipo de trabajo",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Informal-precario", "desc": "Cuenta con un trabajo informal o precario." },
      "0": { "label": "Trabajo formal-estable", "desc": "Cuenta con un trabajo formal y estable." }
    }
  },
  {
    "cod_grupo": "201",
    "grupo_nom": "Calidad de los materiales (resistencia, durabilidad y aislamiento)",
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
    "tipo": "Agrupacion",
    "variables": {
      "0": { "label": "Sin vulnerabilidad laboral" , "desc": "Trabajadores en condiciones de formalidad, estabilidad y plenitud de derechos."},
      "3": { "label": "Precariedad" , "desc": "Empleos con bajos salarios o condiciones de trabajo riesgosas."},
      "1": { "label": "Informalidad" , "desc": "Trabajadores sin registro legal ni aportes previsionales."},
      "2": { "label": "Inestabilidad", "desc": "Empleos temporales, por día o con alta rotación." },
      "4": { "label": "Informalidad y precariedad" , "desc": "Combinación de falta de registro y condiciones laborales deficientes."},
      "5": { "label": "Informalidad, precariedad e inestabilidad", "desc": "Concurrencia de informalidad, precariedad e inestabilidad laboral." }
    }
  },
  {
    "cod_grupo": "204",
    "grupo_nom": "Condiciones de vulnerabilidad/pobreza-indicadores",
    "tipo": "Agrupacion",
    "variables": {
      "1": { "label": "Inseguridad alimentaria", "desc": "Hogares con dificultad para acceder a alimentos suficientes." },
      "2": { "label": "Línea de Pobreza", "desc": "Hogares sin ingresos suficientes para cubrir la canasta básica total." },
      "3": { "label": "NBI", "desc": "Hogares con al menos una necesidad básica insatisfecha." },
      "4": { "label": "Inseguridad alimentaria y Línea de Pobreza", "desc":"Concurrencia de inseguridad alimentaria y pobreza por ingresos."},
      "5": { "label": "Línea de Pobreza y NBI", "desc":"Pobreza por ingresos combinada con deficiencias estructurales (NBI)." },
      "6": { "label": "Inseguridad alimentaria y NBI", "desc":"Inseguridad alimentaria sumada a pobreza estructural (NBI)." },
      "7": { "label": "Inseguridad alimentaria, Línea de Pobreza y NBI", "desc":"Vulnerabilidad total: Hogares que entrentan las tres condiciones de vulnerabilidad." }
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