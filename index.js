require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const app = require('./src/app')
const swaggerJSDoc = require('./swagger/swagger.js')

const PORT = process.env.PORT || 3000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require(swaggerJSDoc)))

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})