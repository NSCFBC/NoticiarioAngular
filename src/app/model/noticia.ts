import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export class Noticia {
  // dataNoticia: Date = new Date();
  usuario: Usuario = new Usuario();
  categoria: Categoria = new Categoria();
  titulo: string = "";
  subtitulo: string = "";
  dataNoticia: string = "";
  caminhoImagem: string = "";
}
