package service.impl;

import service.Vendedor;

public class Afiliado extends Vendedor {

    private final String nome;
    private Categoria categoria;
    private Integer pontos;

    public Afiliado(String nome) {
        this.nome = nome;
    }

    @Override
    protected void calcularPontos() {
        if (this.pontos == null){
            this.pontos = 0;
            this.categoria = Categoria.NOVATO;
        }
        else if (this.pontos >= 20 && this.pontos <= 30)
            this.categoria = Categoria.APRENDIZ;
        else if(this.pontos >= 31 && this.pontos <= 40)
            this.categoria = Categoria.BOM;
        else if (this.pontos > 40)
            this.categoria = Categoria.MESTRE;
    }

    @Override
    public void vender() {
        this.pontos += 15;
    }

    @Override
    protected void getNome() {
        System.out.println("Nome: " + this.nome);
    }

    @Override
    protected void getCategoria() {
        System.out.println("Categoria: " + this.categoria + "\n");
    }

    @Override
    protected void getPontos() {
        System.out.println("Pontos: " + this.pontos);
    }
}