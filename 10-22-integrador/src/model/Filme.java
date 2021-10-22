package model;

public class Filme {
    private final String nome;
    private final String pais;
    private final String linkDeReproducao;

    public Filme(String nome, String pais, String linkDeReproducao) {
        this.nome = nome;
        this.pais = pais;
        this.linkDeReproducao = linkDeReproducao;
    }

    public String getNome() {
        return nome;
    }

    public String getPais() {
        return pais;
    }

    public String getLinkDeReproducao() {
        return linkDeReproducao;
    }
}
