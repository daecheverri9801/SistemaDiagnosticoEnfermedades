const db = require('../config/db')

const crearPaciente = async (paciente) => {
    const { usuario, contraseña, nombre, cedula, correo_electronico, idauth } = paciente;
    const resultado = await db.query(
        `INSERT INTO Paciente (usuario, contraseña, nombre, cedula, correo_electronico, idauth)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [usuario, contraseña, nombre, cedula, correo_electronico, idauth]
    )
    return resultado.rows[0]
}

const obtenerTodosLosPacientes = async () => {
    const resultado = await db.query('SELECT * FROM Paciente ORDER BY id_paciente ASC')
    return resultado.rows
}

const obtenerPacientePorId = async (id) => {
    const resultado = await db.query('SELECT * FROM Paciente WHERE id_paciente = $1', [id])
    return resultado.rows[0]
}

const actualizarPaciente = async (id, datos) => {
    const { usuario, contraseña, nombre, cedula, correo_electronico } = datos
    const res = await db.query(
        `UPDATE Paciente SET usuario=$1, contraseña=$2, nombre=$3, cedula=$4, correo_electronico=$5
       WHERE id_paciente=$6 RETURNING *`,
        [usuario, contraseña, nombre, cedula, correo_electronico, id]
    )
    return res.rows[0]
}

const eliminar = async (id) => {
    await db.query('DELETE FROM Paciente WHERE id_paciente = $1', [id])
}

module.exports = {
    obtenerTodosLosPacientes,
    obtenerPacientePorId,
    crearPaciente,
    actualizarPaciente,
    eliminar
}