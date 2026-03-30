var indicadores_ref = [
  {
    "cod_grupo": "101",
    "grupo_nom": "Acceso a servicios de educación y salud",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Residen a más de 5 cuadras de los servicios educativos y de salud" },
      "0": { "label": "Reside a menos de 5 cuadras de algún servicio educativo y/o de salud" }
    }
  },
  {
    "cod_grupo": "102",
    "grupo_nom": "Cercania a vías de acceso (ruta, avenida, cruce de calles)",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Residen a más de 5 cuadras" },
      "0": { "label": "Reside a 5 cuadras o menos" }
    }
  },
  {
    "cod_grupo": "103",
    "grupo_nom": "Exposición a factores de riesgo ambiental",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Está expuesto a factores de riesgo ambiental" },
      "0": { "label": "No está expuesto a factores de riesgo ambiental" }
    }
  },
  {
    "cod_grupo": "104",
    "grupo_nom": "Indicador NBI Hacinamiento",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Con Hacinamiento" },
      "0": { "label": "Sin Hacinamiento" }
    }
  },
  {
    "cod_grupo": "105",
    "grupo_nom": "Servicios e infraestructura pública eficiente",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Servicios e infraestructura pública ineficientes" },
      "0": { "label": "Servicios e infraestructura pública eficientes" }
    }
  },
  {
    "cod_grupo": "106",
    "grupo_nom": "Tipo de trabajo",
    "tipo": "Binario",
    "variables": {
      "1": { "label": "Informal-precario" },
      "0": { "label": "Trabajo formal-estable" }
    }
  },
  {
    "cod_grupo": "201",
    "grupo_nom": "Calidad de los materiales (resistencia, durabilidad y aislamiento)",
    "tipo": "Categorizado",
    "variables": {
      "4": { "label": "Calidad 4" },
      "3": { "label": "Calidad 3" },
      "2": { "label": "Calidad 2" },
      "1": { "label": "Calidad 1" },
      "9": { "label": "Sin datos" }
    }
  },
  {
    "cod_grupo": "202",
    "grupo_nom": "Calidad de los servicios sanitarios",
    "tipo": "Categorizado",
    "variables": {
      "3": { "label": "Insatisfactoria" },
      "2": { "label": "Básica" },
      "1": { "label": "Satisfactoria" },
      "9": { "label": "Sin datos" }
    }
  },
  {
    "cod_grupo": "203",
    "grupo_nom": "Condiciones de vulnerabilidad laboral",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Sin vulnerabilidad laboral" },
      "3": { "label": "Precariedad" },
      "1": { "label": "Informalidad" },
      "2": { "label": "Inestabilidad" },
      "4": { "label": "Informalidad y precariedad" },
      "5": { "label": "Informalidad, precariedad e inestabilidad" }
    }
  },
  {
    "cod_grupo": "204",
    "grupo_nom": "Condiciones de vulnerabilidad/pobreza-indicadores",
    "tipo": "Categorizado",
    "variables": {
      "1": { "label": "Inseguridad alimentaria" },
      "2": { "label": "Línea de Pobreza" },
      "3": { "label": "NBI" },
      "4": { "label": "Inseguridad alimentaria y Línea de Pobreza" },
      "5": { "label": "Línea de Pobreza y NBI" },
      "6": { "label": "Inseguridad alimentaria y NBI" },
      "7": { "label": "Inseguridad alimentaria, Línea de Pobreza y NBI" }
    }
  },
  {
    "cod_grupo": "205",
    "grupo_nom": "Indice de Riesgo Infantil",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "0" },
      "1": { "label": "1" },
      "2": { "label": "2" },
      "3": { "label": "3" },
      "4": { "label": "4" },
      "5": { "label": "5" },
      "6": { "label": "6" }
    }
  },
  {
    "cod_grupo": "206",
    "grupo_nom": "Indice de Riesgo Infantil (categorizado)",
    "tipo": "Categorizado",
    "variables": {
      "0": { "label": "Sin Riesgo" },
      "1": { "label": "Bajo" },
      "2": { "label": "Moderado" },
      "3": { "label": "Alto" }
    }
  },
  {
    "cod_grupo": "301",
    "grupo_nom": "Tasa de dependencia adultos mayores",
    "tipo": "Tasa",
    "variables": {
      "0": { "label": "0,00" },
      "1": { "label": "14,29" },
      "2": { "label": "25,00" },
      "3": { "label": "33,33" },
      "4": { "label": "50,00" },
      "5": { "label": "66,67" },
      "6": { "label": "100,00" },
      "7": { "label": "200,00" }
    }
  },
  {
    "cod_grupo": "302",
    "grupo_nom": "Tasa de dependencia infantil",
    "tipo": "Tasa",
    "variables": {
      "0": { "label": "0,00" },
      "1": { "label": "14,29" },
      "2": { "label": "16,67" },
      "3": { "label": "20,00" },
      "4": { "label": "25,00" },
      "5": { "label": "33,33" },
      "6": { "label": "40,00" },
      "7": { "label": "42,86" },
      "8": { "label": "50,00" },
      "9": { "label": "60,00" },
      "10": { "label": "66,67" },
      "11": { "label": "71,43" },
      "12": { "label": "80,00" },
      "13": { "label": "100,00" },
      "14": { "label": "150,00" },
      "15": { "label": "200,00" },
      "16": { "label": "300,00" },
      "17": { "label": "400,00" },
      "18": { "label": "500,00" }
    }
  }
]