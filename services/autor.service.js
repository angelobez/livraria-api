import autorRepository from "../repositories/autor.repository.js";
import livroRepository from "../repositories/livro.repository.js";

async function createAutor(autor) {
  return await autorRepository.insertAutor(autor);
}

async function updateAutor(autor) {
  return await autorRepository.updateAutor(autor);
}

async function deleteAutor(id) {
  const livros = await livroRepository.getLivrosByAutorId(id);
  if (livros.length > 0) {
    throw new Error(
      "Não é possível excluir o autor pois ele tem livros cadastrados."
    );
  }
  return await autorRepository.deleteAutor(id);
}

async function getAutores() {
  return await autorRepository.getAutores();
}

async function getAutor(id) {
  return await autorRepository.getAutor(id);
}

export default {
  createAutor,
  updateAutor,
  deleteAutor,
  getAutores,
  getAutor,
};
