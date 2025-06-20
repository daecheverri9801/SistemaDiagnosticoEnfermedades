Sistema de Diagnóstico de Enfermedades

Este proyecto es un backend en Node.js + Express que permite gestionar citas médicas, historiales, diagnósticos y más. Incluye también integración con un servicio tipo IA (DeepSeek/Ollama) para generación de reportes.

Características:

API REST para:
 - Pacientes, Médicos

 - Citas médicas (CRUD)

 - Historiales clínicos y Diagnósticos

 - Generación de PDFs (incapacidades médicas)

Integración con Ollama (DeepSeek) para generación de diagnósticos automáticos en JSON

Validación de horarios de citas

Arquitectura modular y sencilla

Requisitos:
Node.js (versión ≥ 18.x)

PostgreSQL (configurado y corriendo)

npm o yarn

Ollama CLI (opcional, si vas a consumir modelos locales)

Git para clonar el repositorio


Instalación paso a paso

Clonar el repositorio:
https://github.com/daecheverri9801/SistemaDiagnosticoEnfermedades
cd SistemaDiagnosticoEnfermedades

Configuración de entorno:
Crea un archivo .env en la raíz del proyecto y define las variables necesarias:
# Configuración de la base de datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=SistemaDiagnosticoEnfermedades
DB_HOST=localhost
DB_PORT=5432

# Configuración del servidor
PORT=3000

# Configuración de Ollama
OLLAMA_URL=http://localhost:11434
DEFAULT_MODEL=llama3.2:latest

Instalar dependencias
Desde la raíz del proyecto ejecuta:
npm install

Ejecutar el servidor:
Inicia el servidor en modo desarrollo:
npm run dev

Configuración de Ollama
Si vas a utilizar Ollama para generar los diagnósticos automáticamente:

Instala Ollama:

https://ollama.com/

Descarga el modelo que quieres usar, por ejemplo:

ollama run llama3.2:latest

Probar la API con Insomnia o Postman

Ejemplo para crear una cita médica:
POST http://localhost:3000/api/cita-medica
Content-Type: application/json

{
  "id_paciente": 36,
  "id_medico": 12,
  "fecha_cita": "2025-06-20T16:00:00",
  "motivo": "Gripa"
}

Endpoints principales
| Endpoint                        | Método | Descripción                 |
| ------------------------------- | ------ | --------------------------- |
| `/api/pacientes`                | GET    | Listar pacientes            |
| `/api/cita-medica`              | GET    | Listar citas médicas        |
| `/api/cita-medica/:id_medico`   | GET    | Obtener citas por médico    |
| `/api/cita-medica/:id_paciente` | GET    | Obtener citas por paciente  |
| `/api/cita-medica`              | POST   | Crear nueva cita médica     |
| `/api/historial`                | GET    | Listar historiales clínicos |



