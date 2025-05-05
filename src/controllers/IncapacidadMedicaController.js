const incapacidadMedica = require('../models/IncapacidadMedicaModel')
const { generarPdfIncapacidad, enviarPdfPorCorreo } = require('../services/IncapacidadServicePdf')
const fs = require('fs');

const generarPdf = async (req, res) => {
    const { idPaciente } = req.params;

    try {
        const incapacidades = await incapacidadMedica.obtenerIncapacidadesPorPaciente(idPaciente)

        if (!incapacidades || incapacidades.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontró incapacidad para este paciente.' })
        }

        const incapacidad = incapacidades[0];

        const pdfPath = await generarPdfIncapacidad({
            nombrePaciente: incapacidad.nombre_paciente || 'Paciente desconocido',
            nombreMedico: incapacidad.nombre_medico || 'Médico desconocido',
            diagnostico: incapacidad.diagnostico,
            fechaInicio: incapacidad.fecha_inicio,
            fechaFin: incapacidad.fecha_fin,
            diasIncapacidad: incapacidad.dias_incapacidad,
            recomendaciones: incapacidad.recomendaciones
        })

        res.download(pdfPath)
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al generar el PDF.' })
    }
}

const enviarIncapacidadPorCorreo = async (req, res) => {
    const { id } = req.params
    const { emailDestino } = req.body

    try {
        const incapacidades = await incapacidadMedica.obtenerIncapacidadesPorPaciente(id)

        if (!incapacidades || incapacidades.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontró la incapacidad.' })
        }

        const incapacidad = incapacidades[0];

        const pdfPath = await generarPdfIncapacidad({
            nombrePaciente: incapacidad.nombre_paciente || 'Paciente desconocido',
            nombreMedico: incapacidad.nombre_medico || 'Médico desconocido',
            diagnostico: incapacidad.diagnostico,
            fechaInicio: incapacidad.fecha_inicio,
            fechaFin: incapacidad.fecha_fin,
            diasIncapacidad: incapacidad.dias_incapacidad,
            recomendaciones: incapacidad.recomendaciones
        })

        await enviarPdfPorCorreo(emailDestino, pdfPath);

        fs.unlinkSync(pdfPath)

        res.json({ mensaje: 'Correo enviado exitosamente con la incapacidad médica adjunta.' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al enviar incapacidad por correo.' })
    }
}


const obtenerIncapacidadesPorPaciente = async (req, res) => {
    const { id } = req.params

    try {
        const incapacidades = await incapacidadMedica.obtenerIncapacidadesPorPaciente(id)

        if (!incapacidades || incapacidades.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron incapacidades para este paciente.' });
        }

        res.json(incapacidades)

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener incapacidades' });
    }
}

const crearIncapacidadMedica = async (req, res) => {
    const { idPaciente, idMedico, idConsulta, fechaInicio, fechaFin, diasIncapacidad, diagnostico, recomendaciones } = req.body

    try {
        const nuevaIncapacidad = await incapacidadMedica.crearIncapacidadMedica(idPaciente, idMedico, idConsulta, fechaInicio, fechaFin, diasIncapacidad, diagnostico, recomendaciones)
        res.status(201).json(nuevaIncapacidad);
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear Incapacidad' })
    }
}

const actualizarIncapacidadMedica = async (req, res) => {
    const idIncapacidad = req.params.id;
    const { estado } = req.body;

    try {
        const incapacidadActualizada = await incapacidadMedica.actualizarIncapacidadMedica(idIncapacidad, estado);
        if (!incapacidadActualizada) {
            return res.status(404).json({ mensaje: 'Incapacidad no encontrada' })
        }
        res.json(incapacidadActualizada)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al actualizar Incapacidad' })
    }
}

const eliminarIncapacidadMedica = async (req, res) => {
    const { idIncapacidad } = req.params

    try {
        await incapacidadMedica.eliminarIncapacidadMedica(idIncapacidad)
        res.json({ mensaje: 'incapacidad eliminada exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al eliminar incapacidad' })
    }
}

module.exports = {
    obtenerIncapacidadesPorPaciente,
    crearIncapacidadMedica,
    actualizarIncapacidadMedica,
    eliminarIncapacidadMedica,
    enviarIncapacidadPorCorreo,
    generarPdf
}
