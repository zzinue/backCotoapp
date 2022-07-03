const express = require("express");
const administrador = require('../usecases/administradores');
const { authHandler } = require("../middlewares/authHandlers");
const {
    adminHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
    try {

        const { id } = req.params;
        const administradores = await administrador.getById(id);
        res.json({
            success: true,
            payload: administradores
        });
    } catch (error) {
        next(error);

    }
})
router.post("/:nombre", async (req, res, next) => {
    try {

        const { nombre } = req.params;
        const administradores = await administrador.getByName(nombre.toUpperCase());
        res.json({
            success: true,
            payload: administradores
        });
    } catch (error) {
        next(error);

    }
})
router.get("/", async (req, res, next) => {
    try {

        const administradores = await administrador.get();
        res.json({
            success: true,
            payload: administradores
        });
    } catch (error) {
        next(error);
    }

})
router.post("/", async (req, res, next) => {
    try {

        let { nombre, email, nombreCoto, password, logo } = req.body;
        const adminCreated = await administrador.create({
            nombre, email, nombreCoto, password, logo
        });
        res.json({
            success: true,
            message: 'Administrador creado',
            payload: adminCreated
        });
    } catch (error) {
        next(error);

    }
})
router.put("/:id", async (req, res, next) => {
    try {

        const { id } = req.params;
        let { nombre, email, nombreCoto, password, logo } = req.body;
        const adminUpdated = await administrador.update(id, {
            nombre, email, nombreCoto, password, logo
        });
        res.json({
            success: true,
            message: 'Administrador actualizado',
            payload: adminUpdated
        });
    } catch (error) {
        next(error);

    }
})
router.patch("/:id", async (req, res, next) => {
    try {

        const { id } = req.params;
        const adminUpdated = await administrador.update(id, {
            ...req.body
        });
        res.json({
            success: true,
            message: `Administrador ${id} actualizado`,
            payload: adminUpdated
        });
    } catch (error) {
        next(error);

    }
})
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const adminDeleted = await administrador.delete(id);
        res.json({
            success: true,
            message: `Administrador ${id} eliminado`,
            payload: adminDeleted
        });
    } catch (error) {
        next(error);
    }
})
module.exports = router;