
export class AppBaseServidor{
  public static get baseServidor(): string { return "http://localhost:8080/" };
  public static get nomeApplicacao(): string { return this.baseServidor + "CrudMvc/" };
  public static get login(): string { return this.nomeApplicacao + "login" };

  public static get usuario(): string { return this.nomeApplicacao + "usuario/" };
  public static get noticia(): string { return this.nomeApplicacao + "noticias/" };


  // public static get insertUser(): string { return this.usuario + "inserirUser" };
  // public static get buscarUsers(): string { return this.usuario + "listarTodos" };
  // public static get buscarUser(): string { return this.usuario + "buscarPeloId/" };
  // public static get deleteUser(): string { return this.usuario + "delete/" };

  public static get deleteNoticia(): string { return this.noticia + "delete/" };
  public static get listarNoticias(): string { return this.noticia + "listar" };
  public static get insertNoticia(): string { return this.noticia + "inserir" };
  public static get buscarTopNoticias(): string { return this.noticia + "buscaEconomia" };
  public static get buscarBottomNotica(): string { return this.noticia + "buscarBottom" };
  public static get buscarTopDezNoticias(): string { return this.noticia + "buscarDezUltimas" };
  public static get topDownNoticia(): string { return this.noticia + "topDownNoticia" };
  public static get toptipoNoticia(): string { return this.noticia + "listarTipoDeNoticia/" };

  // public static get baseServidor(): string { return "http://localhost:8080/" };
  // public static get baseServidor(): string { return "http://localhost:8080/" };

}
