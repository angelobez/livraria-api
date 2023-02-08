import express from "express";
import livroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", livroController.createLivro);
router.put("/", livroController.updateLivro);
router.delete("/:id", livroController.deleteLivro);
router.get("/", livroController.getLivros);
router.get("/:id", livroController.getLivro);
router.post("/info", livroController.createLivroInfo);
router.put("/info", livroController.updateLivroInfo);

export default router;
