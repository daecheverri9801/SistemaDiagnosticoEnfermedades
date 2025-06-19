const express = require('express')
const router = express.Router()
const controller = require('../controllers/autorizacionProcedimientoExamenController')
const { default: swagger } = require('../../swagger/swagger')

/**
 * @swagger
 * components:
 *   schemas:
 *     AutorizacionProcedimientoExamen:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         idConsulta:
 *           type: string
 *         procedimiento:
 *           type: string
 *         examen:
 *           type: string
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *       required:
 *         - idConsulta
 *         - procedimiento
 *         - examen
 */
router.get('/:id', controller.obtenerAutorizacionProcedimientoExamen)

/**
 * @swagger
 * /autorizacion-procedimiento-examen:
 *   post:
 *     summary: Crear autorización de procedimiento o examen
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AutorizacionProcedimientoExamen'
 *     responses:
 *       201:
 *         description: Autorización creada
 */
router.post('/', controller.crearAutorizacionProcedimientoExamen)

/**
 * @swagger
 * /autorizacion-procedimiento-examen/{idConsulta}:
 *   put:
 *     summary: Actualizar autorización de procedimiento o examen
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
 *             $ref: '#/components/schemas/AutorizacionProcedimientoExamen'
 *     responses:
 *       200:
 *         description: Autorización actualizada
 */
router.put('/:idConsulta', controller.actualizarAutorizacionProcedimientoExamen)

/**
 * @swagger
 * /autorizacion-procedimiento-examen/{idAutorizacion}:
 *   delete:
 *     summary: Eliminar autorización de procedimiento o examen
 *     parameters:
 *       - in: path
 *         name: idAutorizacion
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Autorización eliminada
 *     */
router.delete('/:idAutorizacion', controller.eliminarAutorizacionProcedimientoExamenes)

/**
 * @swagger
 * /autorizacion-procedimiento-examen/pdf/{idAutorizacion}:
 *   post:
 *     summary: Generar PDF de autorización de procedimiento o examen
 *     parameters:
 *       - in: path
 *         name: idAutorizacion
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PDF generado exitosamente
 */
router.post('/pdf/:idAutorizacion', controller.generarPdf);

module.exports = router