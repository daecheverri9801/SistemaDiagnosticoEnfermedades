const { DEFAULT_MODEL } = require('../config/ollamaConfig')
const { generarRespuesta } = require('../services/deepseek/deepseekService')

const handleChat = async (req, res) => {
  const { sintomas, nombre_paciente, edad, sexo, Act_Fisica, peso, estado_civil, ocupacion, model = DEFAULT_MODEL } = req.body

  if (!sintomas) {
    return res.status(400).json({ error: 'El mensaje es requerido' })
  }

  try {
    const respuesta = await generarRespuesta(sintomas, nombre_paciente, edad, sexo, Act_Fisica, peso, estado_civil, ocupacion, model)
    res.status(200).json(respuesta)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al generar respuesta con DeepSeek' })
  }
}

module.exports = {
  handleChat
}
