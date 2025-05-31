const { OLLAMA_URL } = require('../../config/ollamaConfig')

const generarRespuesta = async (mensaje, model) => {
  const response = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      prompt: `Eres un médico profesional. Responde en español de manera clara, técnica y concisa:\n\n${mensaje}`,
      stream: false,
      temperature: 0.2,
      max_tokens: 100,
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error en DeepSeek: ${error}`)
  }

  return await response.json()
}

module.exports = {
  generarRespuesta
}