const { DEFAULT_MODEL } = require('../config/ollamaConfig')
const { generarRespuesta } = require('../services/deepseek/deepseekService')

const handleChat = async (req, res) => {
  const { message, model = DEFAULT_MODEL } = req.body

  if (!message) {
    return res.status(400).json({ error: 'El mensaje es requerido' })
  }

  try {
    const respuesta = await generarRespuesta(message, model)
    res.status(200).json(respuesta)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al generar respuesta con DeepSeek' })
  }
}

module.exports = {
  handleChat
}
