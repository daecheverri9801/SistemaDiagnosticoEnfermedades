const express = require('express')
const router = express.Router()
const controller = require('../controllers/autorizacionMedicamentosController')
const { default: swagger } = require('../../swagger/swagger')

/**
 * @swagger
 * components:
 *   schemas:
 *     AutorizacionMedicamento:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         idConsulta:
 *           type: string
 *         medicamento:
 *           type: string
 *         dosis:
 *           type: string
 *         frecuencia:
 *           type: string
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *       required:
 *         - idConsulta
 *         - medicamento
 */
router.get('/:id', controller.obtenerAutorizacionMedicamento)

/**
 * @swagger
 * /autorizacion:
 *   post:
 *     summary: Crear autorización de medicamento
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AutorizacionMedicamento'
 *     responses:
 *       201:
 *         description: Autorización creada
 */
router.post('/', controller.crearAutorizacion)

/**
 * @swagger
 * /autorizacion/{idConsulta}:
 *   put:
 *     summary: Actualizar historial de autorización de medicamento
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
 *             $ref: '#/components/schemas/AutorizacionMedicamento'
 *     responses:
 *       200:
 *         description: Autorización actualizada
 */
router.put('/:idConsulta', controller.actualizarHistorial)


/**
 * @swagger
 * /autorizacion/{idAutorizacion}:
 *   delete:
 *     summary: Eliminar autorización de medicamento
 *     parameters:
 *       - in: path
 *         name: idAutorizacion
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Autorización eliminada
 */
router.delete('/:idAutorizacion', controller.eliminarAutorizacionMedica)

/**
 * @swagger
 * /autorizacion/pdf/{idAutorizacion}:
 *   post:
 *     summary: Generar PDF de autorización de medicamento
 *     parameters:
 *       - in: path
 *         name: idAutorizacion
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PDF generado
 */
router.post('/pdf/:idAutorizacion', controller.generarPdf);

module.exports = router