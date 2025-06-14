const { OLLAMA_URL } = require('../../config/ollamaConfig')

class DeepSeekClient {
  static instance = null

  constructor() {
    if (DeepSeekClient.instance) {
      return DeepSeekClient.instance
    }

    this.url = `${OLLAMA_URL}/api/generate`
    DeepSeekClient.instance = this
  }

  async generarRespuesta(prompt, model = 'medllama2:latest') {
    const body = {
      model,
      prompt,
      stream: false,
    }

    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Error en DeepSeek: ${error}`)
    }

    return await response.json()
  }
}

module.exports = new DeepSeekClient()
