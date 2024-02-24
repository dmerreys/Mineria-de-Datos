import express from 'express';
import Students from '../models/Students.js'; // Importa el modelo de estudiantes

const router = express.Router();

// Controlador para consultar todos los estudiantes
router.get('/estudiantes', async (req, res) => {
    try {
        const estudiantes = await Students.find();
        return res.json(estudiantes);       

    } catch (error) {
        console.error('Error al obtener estudiantes:', error);
        res.status(500).json({ message: 'Error al obtener estudiantes' });
    }
});

// Controlador para obtener un estudiante por su ID
router.get('/estudiantes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const estudiante = await Students.findById(id);
        if (!estudiante) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json(estudiante);
    } catch (error) {
        console.error('Error al obtener estudiante:', error);
        res.status(500).json({ message: 'Error al obtener estudiante' });
    }
});

// Controlador para crear un nuevo estudiante
router.post('/estudiantes', async (req, res) => {
    try {
        const nuevoEstudiante = await Students.create(req.body);
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        console.error('Error al crear estudiante:', error);
        res.status(500).json({ message: 'Error al crear estudiante' });
    }
});

router.post('/varios-estudiantes', async (req, res) => {
    try {
        // Obtener el arreglo de estudiantes desde el cuerpo de la solicitud
        const nuevosEstudiantes = req.body;
        // Insertar los nuevos estudiantes en la base de datos sin borrar los existentes
        await Students.insertMany(nuevosEstudiantes);

        res.status(201).json({ message: 'Estudiantes agregados a MongoDB correctamente.' });
    } catch (error) {
        console.error('Error al agregar estudiantes a MongoDB:', error);
        res.status(500).json({ message: 'Error al agregar estudiantes a MongoDB' });
    }
  });

// Controlador para actualizar un estudiante
router.put('/estudiantes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const estudianteActualizado = await Students.findByIdAndUpdate(id, req.body, { new: true });
        if (!estudianteActualizado) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json(estudianteActualizado);
    } catch (error) {
        console.error('Error al actualizar estudiante:', error);
        res.status(500).json({ message: 'Error al actualizar estudiante' });
    }
});

// Controlador para eliminar un estudiante
router.delete('/estudiantes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const estudianteEliminado = await Students.findByIdAndDelete(id);
        if (!estudianteEliminado) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json({ message: 'Estudiante eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar estudiante:', error);
        res.status(500).json({ message: 'Error al eliminar estudiante' });
    }
});

export default router;
