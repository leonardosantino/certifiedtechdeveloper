package service.impl;

import service.Vendedor;

import java.util.ArrayList;
import java.util.List;

public class Funcionario extends Vendedor {

    private final String nome;
    private Categoria categoria;
    private Integer pontos;
    private final Integer anosTrabalhados;
    private List<Afiliado> afiliadoList;

    public Funcionario(String nome, Integer anosTrabalhados) {
        this.nome = nome;
        this.anosTrabalhados = anosTrabalhados;
        this.pontos = anosTrabalhados * 5;
    }

    @Override
    protected void calcularPontos() {
        if (this.pontos >= 20 && this.pontos <= 30)
            this.categoria = Categoria.APRENDIZ;
        else if(this.pontos >= 31 && this.pontos <= 40)
            this.categoria = Categoria.BOM;
        else if (this.pontos > 41)
            this.categoria = Categoria.MESTRE;
        else
            this.categoria = Categoria.NOVATO;
    }

    @Override
    public void vender() {
        this.pontos += 10;
    }

    public void obterAfiliado(Afiliado afiliado){

        if (afiliadoList == null) {
            this.afiliadoList = new ArrayList<>();
        }
        this.afiliadoList.add(afiliado);
        this.pontos += 5;
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
