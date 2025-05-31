tabla paciente
CREATE TABLE paciente (
    id_paciente INTEGER PRIMARY KEY DEFAULT nextval('paciente_seq'),
    usuario VARCHAR(50),
    contraseña VARCHAR(100),
    nombre VARCHAR(100),
    cedula VARCHAR(20),
    correo_electroni VARCHAR(100),
    fecha_registro TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    idauth TEXT
);

tabla medico
CREATE TABLE medico (
    id_medico INTEGER PRIMARY KEY DEFAULT nextval('medico_seq'),
    nombre VARCHAR(100),
    especialidad VARCHAR(100),
    registro_medico VARCHAR(50),
    correo_electroni VARCHAR(100),
    idauth TEXT
);

tabla historial_clinico
CREATE TABLE historial_clinico (
    id_historial INTEGER PRIMARY KEY DEFAULT nextval('historial_seq'),
    id_paciente INTEGER REFERENCES paciente(id_paciente),
    fecha_creacion TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

tabla consulta
CREATE TABLE consulta (
    id_consulta INTEGER PRIMARY KEY DEFAULT nextval('consulta_seq'),
    id_historial INTEGER REFERENCES historial_clinico(id_historial),
    id_medico INTEGER REFERENCES medico(id_medico),
    fecha_consulta TIMESTAMP WITHOUT TIME ZONE,
    motivo TEXT,
    observaciones TEXT
);
tabla diagnostico
CREATE TABLE diagnostico (
    id_diagnostico INTEGER PRIMARY KEY DEFAULT nextval('diagnostico_seq'),
    id_consulta INTEGER REFERENCES consulta(id_consulta),
    codigo_icd VARCHAR(20),
    description TEXT,
    tratamiento TEXT
);

tabla autorizacion_examen_procedimiento
CREATE TABLE autorizacion_examen_procedimiento (
    id_autorizacion INTEGER PRIMARY KEY DEFAULT nextval('autorizacion_examen_seq'),
    id_paciente INTEGER REFERENCES paciente(id_paciente),
    id_medico INTEGER REFERENCES medico(id_medico),
    id_consulta INTEGER REFERENCES consulta(id_consulta),
    tipo VARCHAR(100),
    description TEXT,
    fecha_emision TIMESTAMP WITHOUT TIME ZONE,
    fecha_expiracio DATE,
    instrucciones TEXT,
    estado VARCHAR(20) DEFAULT 'ACTIVA'
);

tabla autorizacion_medicamento
CREATE TABLE autorizacion_medicamento (
    id_autorizacion INTEGER PRIMARY KEY DEFAULT nextval('autorizacion_medicamento_seq'),
    id_paciente INTEGER REFERENCES paciente(id_paciente),
    id_medico INTEGER REFERENCES medico(id_medico),
    id_consulta INTEGER REFERENCES consulta(id_consulta),
    medicamento VARCHAR(100),
    dosis TEXT,
    frecuencia TEXT,
    duracion TEXT,
    fecha_emision TIMESTAMP WITHOUT TIME ZONE,
    fecha_expiracio DATE,
    justificacion TEXT,
    estado VARCHAR(20) DEFAULT 'ACTIVA'
);

tabla incapacidad_medica
CREATE TABLE incapacidad_medica (
    id_incapacidad INTEGER PRIMARY KEY DEFAULT nextval('incapacidad_seq'),
    id_paciente INTEGER REFERENCES paciente(id_paciente),
    id_medico INTEGER REFERENCES medico(id_medico),
    id_consulta INTEGER REFERENCES consulta(id_consulta),
    fecha_emision TIMESTAMP WITHOUT TIME ZONE,
    fecha_inicio DATE,
    fecha_fin DATE,
    dias_incapacida INTEGER,
    diagnostico TEXT,
    recomendacion TEXT,
    estado VARCHAR(20) DEFAULT 'ACTIVA'
);

tabla recuperacion_contraseña
CREATE TABLE recuperacion_contraseña (
    id_recuperacion INTEGER PRIMARY KEY DEFAULT nextval('recuperacion_seq'),
    id_paciente INTEGER REFERENCES paciente(id_paciente),
    token VARCHAR(100),
    fecha_creacion TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    fecha_expiracior TIMESTAMP WITHOUT TIME ZONE,
    utilizado BOOLEAN DEFAULT false
);
