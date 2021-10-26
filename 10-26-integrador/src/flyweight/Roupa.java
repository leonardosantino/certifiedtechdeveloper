package flyweight;

public class Roupa {
    private String tamnho;
    private String tipo;
    private boolean eNovo;
    private boolean eImportada;

    public Roupa(String tipo) {
        this.tipo = tipo;
    }

    public String getTamnho() {
        return tamnho;
    }

    public String getTipo() {
        return tipo;
    }

    public boolean iseNovo() {
        return eNovo;
    }

    public boolean iseImportada() {
        return eImportada;
    }
}
