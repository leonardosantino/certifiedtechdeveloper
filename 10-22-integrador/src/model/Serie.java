package model;

public class Serie {
    private final String nome;
    private final String linkDeReproducao;

    public Serie(String nome, String linkDeReproducao) {
        this.nome = nome;
        this.linkDeReproducao = linkDeReproducao;
    }

    public String getNome() {
        return nome;
    }

    public String getLinkDeReproducao() {
        return linkDeReproducao;
    }
}
