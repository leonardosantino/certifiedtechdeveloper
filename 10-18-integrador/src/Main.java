import service.impl.Afiliado;
import service.impl.Funcionario;

public class Main {
    public static void main(String[] args) {

        // Funcionario Elliot
                Funcionario funElliot = new Funcionario("Elliot",3);
        funElliot.mostrarCategoria();
        // ---- Exibir no console ---- Elliot 3 anos 15 pontos Novato

        // add 2x afiliados +10 pontos
        Afiliado aflRichard = new Afiliado("Richard");
        Afiliado aflTommy = new Afiliado("Tommy");
        funElliot.obterAfiliado(aflRichard);
        funElliot.obterAfiliado(aflTommy);
        // vender +10 pontos Aprendiz
        funElliot.vender();

        funElliot.mostrarCategoria();
        // ---- Exibir no console ---- Elliot 35 pontos Bom

        // Afiliado Richard
        aflRichard.mostrarCategoria();
        // ---- Exibir no console ---- Richard 0 pontos Novato

        // vender +15 pontos
        aflRichard.vender();
        // vender +15 pontos
        aflRichard.vender();
        // vender +15 pontos
        aflRichard.vender();

        aflRichard.mostrarCategoria();
        // ---- Exibir no console ---- Richard 45 pontos Mestre

        // Afiliado Tommy
        aflTommy.mostrarCategoria();
        // ---- Exibir no console ---- Tommy 0 pontos novato

        // vender +15 pontos
        aflTommy.vender();
        // vender +15 pontos
        aflTommy.vender();

        aflTommy.mostrarCategoria();
        // ---- Exibir no console ---- Tommy 30 pontos Aprendiz
    }
}
