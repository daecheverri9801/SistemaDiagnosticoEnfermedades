const express = require('express')
const router = express.Router()
const controller = require('../controllers/historialController')

/**
 * @swagger
 * /historial/{id}:
 *   get:
 *     summary: Obtener historial por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Historial encontrado
 *       404:
 *         description: Historial no encontrado
 */
router.get('/:id', controller.obtenerHistorial)

/**
 * @swagger
 * /historial/{idPaciente}/{idHistorial}:
 *   get:
 *     summary: Obtener historial por ID de paciente e ID de historial
 *     parameters:
 *       - in: path
 *         name: idPaciente
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: idHistorial
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Historial encontrado
 *       404:
 *         description: Historial no encontrado
 */
router.get('/:idPaciente/:idHistorial', controller.obtenerHistorialId)

/**
 * @swagger
 * /historial:
 *   post:
 *     summary: Crear historial
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idPaciente:
 *                 type: string
 *               detalles:
 *                 type: string
 *     responses:
 *       201:
 *         description: Historial creado
 */
router.post('/', controller.crearHistorial)

/**
 * @swagger
 * /historial/{idConsulta}:
 *   put:
 *     summary: Actualizar historial
 *     parameters:
 *       - in: path
 *         name: idConsulta
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               detalles:
 *                 type: string
 *     responses:
 *       200:
 *         description: Historial actualizado
 */
router.put('/:idConsulta', controller.actualizarHistorial)

/**
 * @swagger
 * /historial/{idConsulta}:
 *   delete:
 *     summary: Eliminar historial
 *     parameters:
 *       - in: path
 *         name: idConsulta
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Historial eliminado
 */
router.delete('/:idConsulta', controller.eliminarConsulta)

module.exports = router