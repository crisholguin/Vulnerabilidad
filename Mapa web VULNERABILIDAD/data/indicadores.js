var indicadores_ref = [
  {
    "cod_grupo": "101",
    "grupo_nom": "Acceso a servicios de educación y salud",
    "desc_grupo": "Mide la proximidad de los hogares a los dispositivos  de salud y educación, identificando áreas con déficit de cobertura institucional.",
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
    "desc_grupo": "Identifica el nivel de exposición a elementos externos nocivos en el entorno (polvo, gases,aguas contaminadas,etc).",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Zonas con alto riesgo ambiental", "desc": "Está expuesto a factores de riesgo ambiental." },
      "0": { "label": "Zonas con bajo riesgo ambiental", "desc": "No está expuesto a factores de riesgo ambiental." }
    }
  },
  {
    "cod_grupo": "105",
    "grupo_nom": "Servicios e infraestructura pública eficiente",
    "desc_grupo": "Refleja la presencia y el funcionamiento de los servicios básicos de alumbrado, recolección, agua y luz.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Servicios públicos insuficientes/ineficientes", "desc": "Cuando no cuentan o sufren interrupciones en los suministros de los servicios." },
      "0": { "label": "Servicios públicos suficientes/eficientes", "desc": " Cuentan con el conjunto de los servicios y no sufren interrupciones." }
    }
  },
  {
    "cod_grupo": "104",
    "grupo_nom": "Indicador NBI Hacinamiento",
    "desc_grupo": "Indicador de Necesidades Básicas Insatisfechas que indica el cociente entre la cantidad de habitaciones y miembros del hogar.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Con Hacinamiento Crítico", "desc": "Hogares con 3 o más personas por cuarto." },
      "0": { "label": "Sin Hacinamiento Crítico", "desc": "Hogares con menos de 3 personas por cuarto." }
    }
  },
  {
    "cod_grupo": "201",
    "grupo_nom": "Calidad de los materiales",
    "desc_grupo": "Permite clasificar la calidad constructiva de las viviendas según sus materiales predominantes (pisos y techos).",
    "tipo": "Categorizado",
    "variables": {
      "1": { "label": "Calidad 1", "desc": "La vivienda presenta materiales resistentes y sólidos tanto en el piso como en techo; presenta cielorraso." },
      "2": { "label": "Calidad 2", "desc": "La vivienda presenta materiales resistentes y sólidos tanto en el piso como en el techo; pero techos sin cielorraso o bien materiales de menor calidad en pisos." },
      "3": { "label": "Calidad 3", "desc": "La vivienda presenta materiales poco resistentes y sólidos en techo y en pisos." },
      "4": { "label": "Calidad 4", "desc": "La vivienda presenta materiales de baja calidad en pisos y techos." },      
      "9": { "label": "Sin datos", "desc": "No se dispone de información sobre la calidad de los materiales de la vivienda." }
    }
  },
  {
    "cod_grupo": "202",
    "grupo_nom": "Calidad de los servicios sanitarios",
    "desc_grupo": "Califica el acceso a los servicios de agua potable y saneamiento.",
    "tipo": "Categorizado",
    "variables": {
      "3": { "label": "Insatisfactoria", "desc": "La vivienda cuenta con baño exclusivo o compartido sin agua ni saneamiento/letrina." },
      "2": { "label": "Básica", "desc": "La vivienda cuenta con baño uso exclusivo o compartido, con o sin conexión a la red de agua potable con sistema de saneamiento privado (pozo/cámara septica)." },
      "1": { "label": "Suficiente", "desc": "La vivienda cuenta con baño de uso exclusivo con conexión a la red de agua y de saneamiento o sistema privado (pozo/cámara séptica)." },
      "9": { "label": "Sin datos", "desc": "No se dispone de información sobre la calidad de los servicios sanitarios." }
    }
  },
  {
    "cod_grupo": "106",
    "grupo_nom": "Tipo de trabajo",
    "desc_grupo": "Clasifica el tipo de empleo según las condiciones de vulnerabilidad laboral.",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Con condiciones de vulnerabilidad laboral", "desc": "Cuenta con un empleo informal, precarizado e inestable." },
      "0": { "label": "Sin condiciones de vulnerabilidad", "desc": "Cuenta con un trabajo formal y estable." }
    }
  },
  {
    "cod_grupo": "203",
    "grupo_nom": "Condiciones de vulnerabilidad laboral",
    "desc_grupo": "Releva las condiciones de empleabilidad y trabajo combinando en una unica medida: precariedad, informalidad e inestabilidad.",
    "tipo": "Agrupacion",
    "variables": {
      "0": { "label": "Sin vulnerabilidad laboral" , "desc": "Trabajadores en condiciones de formalidad, estabilidad y plenitud de derechos.", "incluye_clases": [0]},
      "3": { "label": "Precariedad" , "desc": "Empleos con bajos salarios o condiciones de trabajo riesgosas.", "incluye_clases": [2]},
      "1": { "label": "Informalidad" , "desc": "Trabajadores sin registro legal ni aportes previsionales.", "incluye_clases": [1]},
      "2": { "label": "Inestabilidad", "desc": "Empleos temporales, por día o con alta rotación.", "incluye_clases": [3]},
      "4": { "label": "Informalidad y precariedad" , "desc": "Combinación de falta de registro y condiciones laborales deficientes.", "incluye_clases": [1, 2]},
      "5": { "label": "Vulnerabilidad crítica", "desc": "Concurrencia de informalidad, precariedad e inestabilidad laboral.", "incluye_clases": [1, 2, 3]}
    }
  },
  // {
  //   "cod_grupo": "302",
  //   "grupo_nom": "Tasa de dependencia infantil",
  //   "desc_grupo": "Indica la relación entre la cantidad de niños y las personas ocupadas del hogar.",
  //   "tipo": "Tasa",
  //   "variables": {
  //     "0": { "label": "0,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "1": { "label": "14,29", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "2": { "label": "16,67", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "3": { "label": "20,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "4": { "label": "25,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "5": { "label": "33,33", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "6": { "label": "40,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "7": { "label": "42,86", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "8": { "label": "50,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "9": { "label": "60,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "10": { "label": "66,67", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "11": { "label": "71,43", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "12": { "label": "80,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "13": {"label": "100,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "14": {"label": "150,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "15": {"label": "200,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "16": {"label": "300,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "17": {"label": "400,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
  //     "18": {"label": "500,00", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." }
  //   }
  // },
  {
    "cod_grupo": "302",
    "grupo_nom": "Tasa de dependencia infantil",
    "desc_grupo": "Indica la relación entre la cantidad de niños y las personas ocupadas del hogar.",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Ningún niño/a por ocupado/a", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "1": { "label": "Menos de 1 niño/a por ocupado/a", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "2": { "label": "1 niño/a por ocupado/a", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
      "3": { "label": "Más de 1 niño/a por ocupado/a", "desc": "Cantidad de niños menores de 15 años por cada 100 personas en edad laboral." },
    }
  },
  // {
  //   "cod_grupo": "301",
  //   "grupo_nom": "Tasa de dependencia adultos mayores",
  //   "desc_grupo": "Indica la relación entre la cantidad de adultos mayores y las personas ocupadas del hogar.",
  //   "tipo": "Tasa",
  //   "variables": {
  //     "0": { "label": "0,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "1": { "label": "14,29", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "2": { "label": "25,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "3": { "label": "33,33", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "4": { "label": "50,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "5": { "label": "66,67", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "6": { "label": "100,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." },
  //     "7": { "label": "200,00", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral." }
  //   }
  // },
  {
    "cod_grupo": "301",
    "grupo_nom": "Tasa de dependencia adultos mayores",
    "desc_grupo": "Indica la relación entre la cantidad de adultos mayores y las personas ocupadas del hogar.",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Ningún adulto mayor por ocupado/a", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral."},
      "1": { "label": "Menos de 1 adulto mayor por ocupado/a", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral."},
      "2": { "label": "1 adulto mayor por ocupado/a", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral."},
      "3": { "label": "Más de 1 adulto mayor por ocupado/a", "desc": "Cantidad de adultos mayores de 64 años por cada 100 personas en edad laboral."}
    }
  },
  // {
  //   "cod_grupo": "204",
  //   "grupo_nom": "Indicadores conjuntos de vulnerabilidad/pobreza",
  //   "desc_grupo": "Enfoque multidimensional en el que se integran tres dimensiones de privación: 1) pobreza estructural a través de NBI; 2) pobreza por ingresos, Línea de pobreza (LP), y 3) privación alimentaria o inseguridad alimentaria (IA).",
  //   "tipo": "Agrupacion",
  //   "variables": {
  //     "1": { "label": "Inseguridad alimentaria (IA)", "desc": "Hogares con dificultad para acceder a alimentos suficientes.", "incluye_clases": [1]},
  //     "2": { "label": "Línea de Pobreza (LP)", "desc": "Hogares sin ingresos suficientes para cubrir la canasta básica total.", "incluye_clases": [2] },
  //     "3": { "label": "Necesidades Básicas Insatisfechas (NBI)", "desc": "Hogares con al menos una necesidad básica insatisfecha.", "incluye_clases": [3] },
  //     "4": { "label": "IA y LP", "desc":"Concurrencia de inseguridad alimentaria y pobreza por ingresos.", "incluye_clases": [1, 2] },
  //     "5": { "label": "LP y NBI", "desc":"Pobreza por ingresos combinada con deficiencias estructurales (NBI).", "incluye_clases": [2, 3] },
  //     "6": { "label": "IA y NBI", "desc":"Inseguridad alimentaria sumada a pobreza estructural (NBI).", "incluye_clases": [1, 3] },
  //     "7": { "label": "IA, LP y NBI", "desc":"Vulnerabilidad total: Hogares que entrentan las tres condiciones de vulnerabilidad.", "incluye_clases": [1, 2, 3] }
  //   }
  // },
  {
    "cod_grupo": "204",
    "grupo_nom": "Indicadores conjuntos de vulnerabilidad/pobreza",
    "desc_grupo": "Enfoque multidimensional en el que se integran tres dimensiones de privación: 1) pobreza estructural a través de NBI; 2) pobreza por ingresos, Línea de pobreza (LP), y 3) privación alimentaria o inseguridad alimentaria (IA).",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Sin vulnerabilidad", "desc": "Sin condiciones de vulnerabilidad ni pobreza."},
      "1": { "label": "Pobreza estructural", "desc": "Hogares con al menos una necesidad básica insatisfecha (NBI)."},
      "2": { "label": "Pobreza por ingreso", "desc": "Hogares sin ingresos suficientes para cubrir la canasta básica total (Línea de pobreza)."},
      "3": { "label": "Inseguridad alimentaria", "desc": "Privación alimentaria coyuntural (Inseguridad alimentaria)."},
      "4": { "label": "Pobreza crítica", "desc":"Hogares con pobreza por ingresos combinada con deficiencias estructurales (NBI), con o sin inseguridad alimentaria."},
    }
  },
  {
    "cod_grupo": "206",
    "grupo_nom": "Indice de Riesgo Infantil",
    "desc_grupo": "Medida resumen que expresa las condiciones de vulnerabilidad a la que están expuestos los niños y niñas. El índice tiene una rango de 0-5 donde 5 dan cuenta de la presencia del conjunto de carencias en el hogar: hacinamiento, calidad de materiales insuficientes, servicios sanitarios insatisfactorios, niños/as sin cobertura médica, asistencia escolar y presencia de adultos sin educación formal",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Sin Riesgo", "desc": "No presenta factores de riesgo infantil." },
      "1": { "label": "Bajo", "desc": "Exposición a 1 o 2 carencias." },
      "2": { "label": "Moderado", "desc": "Exposición a 3 o 4 carencias." },
      "3": { "label": "Alto", "desc": "Exposición al conjunto de carencias." }
    }
  }
]