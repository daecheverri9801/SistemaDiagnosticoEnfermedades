const express = require('express')
const router = express.Router()
const controller = require('../controllers/IncapacidadMedicaController')

/**
 * @swagger
 * /incapacidad/{id}:
 *   get:
 *     summary: Obtener incapacidades por paciente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Incapacidades encontradas
 *       404:
 *         description: Incapacidades no encontradas
 */
router.get('/:id', controller.obtenerIncapacidadesPorPaciente)

/**
 * @swagger
 * /incapacidad:
 *   post:
 *     summary: Crear incapacidad médica
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
 *         description: Incapacidad creada
 */
router.post('/', controller.crearIncapacidadMedica)

/**
 * @swagger
 * /incapacidad/{idConsulta}:
 *   put:
 *     summary: Actualizar incapacidad médica
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
 *         description: Incapacidad actualizada
 */
router.put('/:idConsulta', controller.actualizarIncapacidadMedica)

/**
 * @swagger
 * /incapacidad/{idIncapacidad}:
 *   delete:
 *     summary: Eliminar incapacidad médica
 *     parameters:
 *       - in: path
 *         name: idIncapacidad
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Incapacidad eliminada
 */
router.delete('/:idIncapacidad', controller.eliminarIncapacidadMedica)

/**
 * @swagger
 * /incapacidad/enviar-correo/{id}:
 *   post:
 *     summary: Enviar incapacidad médica por correo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Correo enviado
 */
router.post('/enviar-correo/:id', controller.enviarIncapacidadPorCorreo)

/**
 * @swagger
 * /incapacidad/pdf/{idIncapacidad}:
 *   post:
 *     summary: Generar PDF de incapacidad médica
 *     parameters:
 *       - in: path
 *         name: idIncapacidad
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PDF generado exitosamente
 */
router.post('/pdf/:idIncapacidad', controller.generarPdf);

module.exports = router 