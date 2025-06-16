const express = require('express')
const router = express.Router()
const controller = require('../controllers/pacienteController')

/** * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *         telefono:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 */
router.get('/', controller.listarPacientes)

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Obtener paciente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *       404:
 *         description: Paciente no encontrado
 */
router.get('/:id', controller.obtenerPacientePorId)

/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Crear paciente
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente creado
 */
router.post('/', controller.crearPaciente)

/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Actualizar paciente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: Paciente actualizado
 *       404:
 *         description: Paciente no encontrado
 */
router.put('/:id', controller.actualizarPaciente)

/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Eliminar paciente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Paciente eliminado
 */
router.delete('/:id', controller.eliminarPaciente)

module.exports = router