package service;

public abstract class Vendedor {

    public void mostrarCategoria(){
        calcularPontos();
        getNome();
        getPontos();
        getCategoria();
    }

    protected abstract void calcularPontos();

    public abstract void vender();

    protected abstract void getNome();

    protected abstract void getCategoria();

    protected abstract void getPontos();

}
