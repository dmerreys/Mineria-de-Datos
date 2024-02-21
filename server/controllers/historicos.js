import express from 'express';
import Institucion from '../models/Institucion.js';

const router = express.Router();

export const gestDashboardStats = async (req, res) => {
    try {
        const abandonoByAnioLectivo = await Institucion.aggregate([
            {
                $group: {
                    _id: "$Anio_lectivo",
                    totalAbandono: { $sum: { $toInt: "$Abandono" } }
                }
            }
        ]);

        return res.status(200).json(abandonoByAnioLectivo);
    } catch (error) {
        console.error("Error al obtener datos de abandono por año lectivo:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export default router;
