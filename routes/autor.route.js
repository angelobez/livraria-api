import express from "express";
import autorController from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", autorController.createAutor);
router.put("/", autorController.updateAutor);
router.delete("/:id", autorController.deleteAutor);
router.get("/", autorController.getAutores);
router.get("/:id", autorController.getAutor);

export default router;
