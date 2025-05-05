const express = require('express')
const cors = require('cors')
const pacienteRoutes = require('./routes/pacientesRoutes')
const historialRoutes = require('./routes/historialRoutes')
const medicoRoutes = require('./routes/medicoRoutes')
const incapacidadRoutes = require('./routes/IncapacidadRoutes')
const autorizacionMedicamentos = require('./routes/autorizacionMedicamentosRoutes')
const autorizacionProcedimientoExamen = require('./routes/autorizacionProcedimientoExamenRoutes')
const auth = require('./routes/authRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/pacientes', pacienteRoutes)
app.use('/api/historial', historialRoutes)
app.use('/api/medicos', medicoRoutes)
app.use('/api/incapacidades', incapacidadRoutes)
app.use('/api/autorizacion-medicamentos', autorizacionMedicamentos)
app.use('/api/autorizacion-procedimiento-examen', autorizacionProcedimientoExamen)
app.use('/api/auth', auth)

module.exports = app