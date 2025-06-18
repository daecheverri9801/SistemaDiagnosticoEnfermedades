const { OLLAMA_URL } = require('../../config/ollamaConfig')
const DeepSeekClient = require('./client')

const generarRespuesta = async (sintomas, nombre_paciente, edad, sexo, Act_Fisica, peso, estado_civil, ocupacion, model) => {

  const prompt = `
    Eres un médico general con más de 20 años de experiencia en clínicas y hospitales de primer y segundo nivel de complejidad. 
    Has atendido miles de pacientes y tienes criterio clínico sólido basado en evidencia (OMS, CDC, MinSalud Colombia).

    Con base en los síntomas siguientes y datos del paciente que recibirás como entrada, realiza un análisis clínico breve y devuelve 
    exclusivamente un objeto JSON con el siguiente esquema:

    {
      "paciente": {          
        "nombre": "string",
        "edad": number,             
        "sexo": "Masculino|Femenino|Otro",
        "fecha_consulta": "YYYY-MM-DD"
      },
      "hallazgos": {
        "sintomas_principales": ["string"],
        "signos_de_alerta": ["string"],   
        "factores_riesgo": ["string"]   
      },
      "diagnostico_presuntivo": {
        "cie10": "string",         
        "nombre": "string",         
        "justificacion": "string"    
      },
      "plan_manejo": {
        "laboratorios_recomendados": ["string"],
        "imagenes_recomendadas": ["string"],
        "tratamiento_inicial": ["string"],  
        "derivacion": "string|null"    
      },
      "nivel_de_urgencia": "Emergente|Urgente|Prioritario|Programable"
    }

    Ahora genera un JSON igual para el siguiente paciente: 
    
    Sintomas = ${sintomas}
    datos del paciente :
      ${nombre_paciente},
      ${edad},
      ${sexo},
      ${Act_Fisica},
      ${peso},
      ${estado_civil},
      ${ocupacion}
    Responde solo con el JSON.

    Instrucciones adicionales

    No inventes datos: usa únicamente la información de entrada.

    Si la información es insuficiente, indica "diagnostico_presuntivo": null y sugiere estudios en plan_manejo.

    Sé conciso: evita redundancias y mantén cada lista en máx. 5 ítems.

    No incluyas advertencias legales, tampoco quiero que incluyas saludos, solo responde con el JSON.
    `

  return await DeepSeekClient.generarRespuesta(prompt)
}

module.exports = {
  generarRespuesta
}