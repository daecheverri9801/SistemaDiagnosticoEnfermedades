const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoControllers');

/** * @swagger
 * components:
 *   schemas:
 *     Medico:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         especialidad:
 *           type: string
 *         telefono:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *       required:
 *         - nombre
 *         - especialidad
 */
router.post('/', medicoController.crearMedico);

/** 
 * @swagger
 * /medicos:
 *   get:
 *     summary: Listar todos los médicos
 *     responses:
 *       200:
 *         description: Lista de médicos
 */
router.get('/', medicoController.listarMedicos);

/**
 * @swagger
 * /medicos/{id}:
 *   get:
 *     summary: Obtener médico por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médico encontrado
 *       404:
 *         description: Médico no encontrado
 */
router.get('/:id', medicoController.obtenerPorId);

/**
 * @swagger
 * /medicos/{id}:
 *   put:
 *     summary: Actualizar médico
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
 *             $ref: '#/components/schemas/Medico'
 *     responses:
 *       200:
 *         description: Médico actualizado
 *       404:
 *         description: Médico no encontrado
 */
router.put('/:id', medicoController.actualizarMedico);

/**
 * @swagger
 * /medicos/{id}:
 *   delete:
 *     summary: Eliminar médico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Médico eliminado
 */
router.delete('/:id', medicoController.eliminarMedico);

module.exports = router;